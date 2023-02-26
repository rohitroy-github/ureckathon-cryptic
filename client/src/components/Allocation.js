// This shows the allocation of individual idos
import React, {useEffect, useState, useContext} from "react";
import Box from "@mui/material/Box";
import sxprop from "./sxStyle";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {TransactionContext} from "../context/TransactionContext";
import Button from "@mui/material/Button";

const Allocation = ({proj}) => {
  const {currentAccount} = useContext(TransactionContext);
  const [List, setList] = useState([]);
  const getAllocatedProject = async () => {
    let allocationList = await axios.post(
      "http://localhost:5000/getallocation",
      {
        walletAddress: currentAccount,
        token_name: proj.tkn_name,
      }
    );
    console.log(proj.tkn_name);
    console.log(allocationList);
    setList(allocationList.data.investedProj);
  };
  useEffect(() => {
    getAllocatedProject();
  }, []);

  return (
    <Box sx={sxprop.subboxsx} style={{textAlign: "center"}}>
      Your Allocations
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Venture Name</TableCell>
              <TableCell align="center">Date Brought</TableCell>
              <TableCell align="center">Invested</TableCell>
              <TableCell align="center">Token Gain</TableCell>
              <TableCell align="center">Claim Token</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {List.map((value, index) => {
              const claimtokenHandle = () => {
                axios
                  .post("http://localhost:5000/tokenclaim", {
                    investId: value._id,
                    projId: proj.pdt_id,
                  })
                  .then((res) => {
                    console.log(res);
                    value.istokenClaimed = res.data.succes;
                  });
              };
              return (
                <TableRow
                  key={index}
                  sx={{"&:last-child td, &:last-child th": {border: 0}}}
                >
                  <TableCell align="center" component="th" scope="row">
                    {value.ProjectName}
                  </TableCell>
                  <TableCell align="center">
                    {value.DateBrought.toString().slice(0, 19)}
                  </TableCell>
                  <TableCell align="center">
                    {value.invested.toString().slice(0, 10)}
                  </TableCell>
                  <TableCell align="center">
                    {value.tokenGain.toString().slice(0, 10)}
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="outlined"
                      sx={sxprop.buttonsx}
                      disabled={value.istokenClaimed}
                      onClick={claimtokenHandle}
                    >
                      Claim Token{value.istokenClaimed && `Claimed`}
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Allocation;
