import React, {useEffect, useState} from "react";
import {ethers} from "ethers";
import axios from "axios";
import {useNavigate} from "react-router-dom";

import {contractABI, contractAddress} from "../utils/constants";

export const TransactionContext = React.createContext();

const {ethereum} = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return transactionsContract;
};

export const TransactionsProvider = ({children}) => {
  const [formData, setformData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });

  // forICOLaunchSection
  const [
    ICOLaunchSectionCryptoInvestmentData,
    setICOLaunchSectionCryptoInvestmentData,
  ] = useState({
    addressTo: "",
    amount: 0,
  });

  const [currentAccount, setCurrentAccount] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  // useStateToTrigerWhenATransactionIsFinallySuccessfullAndTransactionHashIsGenerated
  const [isTransactionSuccessfull, setIsTransactionSuccessfull] =
    useState(false);

  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount")
  );
  const [transactions, setTransactions] = useState([]);

  const handleChange = (e, name) => {
    setformData((prevState) => ({...prevState, [name]: e.target.value}));
  };

  // forICOLaunchSection
  // const handleICOLaunchSectionDataChange = (e, name) => {
  //   setICOLaunchSectionCryptoInvestmentData((prevState) => ({
  //     ...prevState,
  //     [name]: e.target.value,
  //   }));
  // };
  const handleICOLaunchSectionDataChange = (name, value) => {
    console.log("stored", value);
    setICOLaunchSectionCryptoInvestmentData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getAllTransactions = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();

        const availableTransactions =
          await transactionsContract.getAllTransactions();

        const structuredTransactions = availableTransactions.map(
          (transaction) => ({
            addressTo: transaction.receiver,
            addressFrom: transaction.sender,
            timestamp: new Date(
              transaction.timestamp.toNumber() * 1000
            ).toLocaleString(),
            message: transaction.message,
            keyword: transaction.keyword,
            amount: parseInt(transaction.amount._hex) / 10 ** 18,
          })
        );

        // console.log(structuredTransactions);

        setTransactions(structuredTransactions);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   functionToCheckIfWalletIsConnected?
  const checkIfWalletIsConnect = async () => {
    try {
      // ifNoEthereumWalletIsFound?
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({method: "eth_accounts"});

      if (accounts.length) {
        setCurrentAccount(accounts[0]);

        getAllTransactions();
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfTransactionsExists = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();
        const currentTransactionCount =
          await transactionsContract.getTransactionCount();

        window.localStorage.setItem(
          "transactionCount",
          currentTransactionCount
        );
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  //   functionToConnectWallet
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");
      let user = JSON.parse(localStorage.getItem("crypticUser"));
      if (user) {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });

        setCurrentAccount(accounts[0]);
        // post
        axios
          .post("http://localhost:5000/connectWallet", {
            email: user.emailAddress,
            walletAddress: accounts[0],
          })
          .then((res) => {
            console.log(res);
            console.log(accounts);
          })
          .catch((error) => {
            alert(error.message);
          });
      } else {
        alert("first login");
      }

      // window.location.reload();
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  //   functionToSendTransaction
  const sendTransaction = async () => {
    try {
      if (ethereum) {
        // const {addressTo, amount, keyword, message} = formData;
        const {addressTo, amount} = ICOLaunchSectionCryptoInvestmentData;
        const transactionsContract = createEthereumContract();
        const parsedAmount = ethers.utils.parseEther(amount);

        await ethereum.request({
          method: "eth_sendTransaction",
          params: [
            {
              from: currentAccount,
              to: addressTo,
              gas: "0x5208",
              value: parsedAmount._hex,
            },
          ],
        });

        // const transactionHash = await transactionsContract.addToBlockchain(
        //   addressTo,
        //   parsedAmount,
        //   message,
        //   keyword
        // );

        const transactionHash = await transactionsContract.addToBlockchain(
          addressTo,
          parsedAmount,
          "ICOInvestment",
          "ICOInvestment"
        );

        setIsLoading(true);

        // fethcingPromiseGivenBy[transactionHash.wait()]
        const receipt = await transactionHash.wait();

        console.log("receipt", receipt.status);

        // ifTransactionSuccessfullyExecuted
        if (receipt.status == 1) {
          setIsTransactionSuccessfull(true);

          setIsLoading(false);
        }
        // ifTransactionFailed
        else {
          setIsTransactionSuccessfull(false);

          setIsLoading(false);
        }

        console.log(
          "isTransactionSuccessfull inside context",
          setIsTransactionSuccessfull
        );

        // await transactionHash.wait();
        // console.log(setIsTransactionSuccessfull);
        // console.log(`Success - ${transactionHash.hash}`);

        const transactionsCount =
          await transactionsContract.getTransactionCount();

        setTransactionCount(transactionsCount.toNumber());
        // window.location.reload();
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnect();
    checkIfTransactionsExists();
  }, [transactionCount]);

  return (
    <TransactionContext.Provider
      value={{
        transactionCount,
        connectWallet,
        transactions,
        currentAccount,
        isLoading,
        isTransactionSuccessfull,
        sendTransaction,
        handleChange,
        formData,
        ICOLaunchSectionCryptoInvestmentData,
        handleICOLaunchSectionDataChange,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
