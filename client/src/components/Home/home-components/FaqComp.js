import React, {useState} from "react";

import FaqChild from "./FaqChild";

const FaqComp = (props) => {
  function handleBackClick() {
    props.scrollTo.current.scrollIntoView({behavior: "smooth"});
  }

  const [data, set_data] = useState([
    {
      "key:": 1,
      ques: "What is IDO registration ?",
      ans: "An Initial DEX Offering (IDO) is a crowdfunding technique that allows cryptocurrency projects to launch their native token or coin through a decentralized exchange (DEX).",
    },

    {
      "key:": 2,
      ques: "Why invest in IDOs ?",
      ans: "Low Cost. Getting involved with a project in its early stages is often the best way to make money in cryptocurrency.",
    },

    {
      "key:": 3,
      ques: "How to Complete Identity Verification?",
      ans: "Verify your Cryptic account with any of the supported documents by following this guide.",
    },

    {
      "key:": 4,
      ques: "Why choose Cryptic for IDO registration ?",
      ans: "We provide smooth transfer of funds via etherium blockchain and have the widest range of IDOs for you to choose from.",
    },

    {
      "key:": 5,
      ques: "Why subscribe to our premium plan?",
      ans: "Know the potential of a future IDO sounds amazing right ? We provide exactly that for you for only $99",
    },

    {
      "key:": 6,
      ques: "Still confused ? Need some help ?",
      ans: "Contact us, our team is ready to help you 24 x 7.",
    },
  ]);

  return (
    <div className="faq_items">
      <div className="faq_comp">
        <h1>FAQ</h1>

        <div className="faq_grid">
          {data.map((item, index) => (
            <div key={index}>
              <FaqChild item={item} />
            </div>
          ))}
        </div>
      </div>

      <div className="faq_bottom">
        <h1>Start Investing Now</h1>

        <div className="row_faq">
          <button className="faqBlueButton" onClick={handleBackClick}>
            Register Now
          </button>

          <button onClick={handleBackClick} className="faqWhiteButton">
            Start Investing
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaqComp;
