import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { useStateContext } from "../context";
import { money } from "../assets";
import { CustomButton, FormField, Loader } from "../components";
import { checkIfImage } from "../utils";

import axios from "axios";
import Select from "react-select";
const Domain = [
  { value: 1, label: "AI and Machine Learning" },
  { value: 2, label: "Blockchain" },
  { value: 3, label: "Cybersecurity" },
  { value: 4, label: "Devops" },
  { value: 5, label: "Full Stack Development" },
  { value: 6, label: "CLOUD Computing" },
  { value: 7, label: "Data Science" },
];
const Tai = [
  { value: 1, label: "TensorFlow" },
  { value: 2, label: "Python" },
  { value: 3, label: "PyTorch" },
  { value: 4, label: "NumPy" },
  { value: 5, label: "Pandas" },
  { value: 6, label: "Matplotlib" },
  { value: 7, label: "Tableau" },
];
const Tb = [
  { value: 1, label: "Solidity" },
  { value: 2, label: "JavaScript" },
  { value: 3, label: "Python" },
  { value: 4, label: "Ethereum" },
  { value: 5, label: "Hyperledger" },
  { value: 6, label: "Truffle" },
  { value: 7, label: "Ganache" },
  { value: 8, label: "Web3.js" },
  { value: 8, label: "Solana" },
];
const Tful = [
  { value: 1, label: "HTML" },
  { value: 2, label: "JavaScript" },
  { value: 3, label: "React" },
  { value: 4, label: "Angular" },
  { value: 5, label: "Vue.js" },
  { value: 6, label: "Node.js" },
  { value: 7, label: "Express" },
  { value: 8, label: "Django" },
  { value: 9, label: "MySQL" },
  { value: 10, label: "MongoDB" },
  { value: 11, label: "Spring Boot" },
];
const Tcld = [
  { value: 1, label: "Amazon Web Services (AWS)" },
  { value: 2, label: "Microsoft Azure" },
  { value: 3, label: " Google Cloud Platform (GCP)" },
  { value: 4, label: "IBM Cloud" },
  { value: 5, label: "Oracle Cloud" },
  { value: 6, label: "AWS CloudFormation" },
  { value: 7, label: "AWS Lambda" },
  { value: 8, label: "Azure Functions" },
];

const Getidea = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  // const { createCampaign } = useStateContext();
  const [selectedOptions, setSelectedOptions] = useState(null);
  const [selectai, setselectai] = useState(null);
  const [selectbl, setselectbl] = useState(null);
  const [selectful, setselectful] = useState(null);
  const [selectcld, setselectcld] = useState(null);
  const [domain, setdomain] = useState("");
  const [stack, setstack] = useState("");
  const [AiDefinition, setAiDefinition] = useState([]);
  const [showbtn, setshowbtn] = useState(false);
  const setHandle = (e) => {
    setSelectedOptions(Array.isArray(e) ? e.map((hotel) => hotel.label) : []);
  };
  const setai = (e) => {
    setselectai(Array.isArray(e) ? e.map((hotel) => hotel.label) : []);
  };
  const setbl = (e) => {
    setselectbl(Array.isArray(e) ? e.map((hotel) => hotel.label) : []);
  };
  const setful = (e) => {
    setselectful(Array.isArray(e) ? e.map((hotel) => hotel.label) : []);
  };
  const setcld = (e) => {
    setselectcld(Array.isArray(e) ? e.map((hotel) => hotel.label) : []);
  };
  // console.log(selectedOptions,selectai,selectbl,selectcld,selectful);
  const handleSubmit = async (e) => {
    setAiDefinition("1.");
    e.preventDefault();
    if (selectedOptions && selectedOptions.length > 0) {
      setdomain(selectedOptions.join(","));
    }
    if (selectai && selectai.length > 0) {
      setstack(
        (prevStack) => prevStack + (prevStack ? ", " : "") + selectai.join(", ")
      );
    }

    if (selectbl && selectbl.length > 0) {
      setstack(
        (prevStack) => prevStack + (prevStack ? ", " : "") + selectbl.join(", ")
      );
    }

    if (selectful && selectful.length > 0) {
      setstack(
        (prevStack) =>
          prevStack + (prevStack ? ", " : "") + selectful.join(", ")
      );
    }

    if (selectcld && selectcld.length > 0) {
      setstack(
        (prevStack) =>
          prevStack + (prevStack ? ", " : "") + selectcld.join(", ")
      );
    }
    setIsLoading(true);
    // const options = {
    //   method: "POST",
    //   url: "https://bingchat-chatgpt-4-api.p.rapidapi.com/ask",
    //   headers: {
    //     "content-type": "application/json",
    //     "X-RapidAPI-Key": process.env.VITE_RAPID_API_KEY,
    //     "X-RapidAPI-Host": "bingchat-chatgpt-4-api.p.rapidapi.com",
    //   },
    //   data: {
    //     question: `Give me detailed description for 5 innovative and new Project ideas in the domain of ${domain} using the tech stack ${stack}`,
    //     bing_u_cookie:
    //       "13TakRc4NWZ53J2MZNgArW3qJyvi04GmMPDJ8HQg1sN7HD6eBaGggEZeO4SW19KzpJJy-MzRm6LQVItPvwePhMQMMFNJps-erp8_RZZ9iR_iD_cSiTNmYJ2jszhwqEGDF6V-BU2_ty7OApMIa60i4HZS6vF_ZUxDWOlZjkC9Yd2fk-JsWyE9FM5ojUeg9qR-sv8lWZfMk-8yF-Gy9jCxa4NF8dKsfITNikYiWLveZI0Y",
    //   },
    // };
    // const options = {
    //   method: 'POST',
    //   url: 'https://openai80.p.rapidapi.com/chat/completions',
    //   headers: {
    //     'content-type': 'application/json',
    //     'X-RapidAPI-Key': process.env.VITE_RAPID_API_KEY,
    //     'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
    //   },
    //   data: {
    //     model: 'gpt-3.5-turbo',
    //     messages: [
    //       {
    //         role: 'user',
    //         content: `Give me detailed description for 5 innovative and new Project ideas in the domain of ${domain} using the tech stack ${stack}`,
    //       }
    //     ]
    //   }
    // };

    const options = {
      method: "POST",
      url: "https://chatgpt-gpt-3-5.p.rapidapi.com/ask",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": process.env.VITE_RAPID_API_KEY,
        "X-RapidAPI-Host": "chatgpt-gpt-3-5.p.rapidapi.com",
      },
      data: {
        query: `Give me detailed description for 5 innovative and new Project ideas in the domain of ${domain} using the tech stack ${stack}`,
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response);
      const text = response.data.response;
      const startIndex = text.indexOf("1.");
      const filteredText = text.substring(startIndex);

      // Remove asterisks and make text between them bold
      const formattedText = filteredText.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");

      // Add line breaks before each point
      const finalText = formattedText.replace(/(<br>)*(\d+\.\s)/g, "$2");

      const res = finalText.replace(/\[\d+\]\[\d+\]/g, "");

      setAiDefinition("");

      let i = 0;
      const intervalId = setInterval(() => {
        setAiDefinition((prevText) => prevText + res.charAt(i));
        i++;
        if (i === text.length) {
          clearInterval(intervalId);
        }
      }, 50);
      setshowbtn(true);
      return response.data;
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(domain);
  console.log(stack);
  console.log(AiDefinition);

  // Give me 5 Project ideas in the domain of {} using the tech stack {}
  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && <Loader data={"Your Ideas are getting Generated ....."} />}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#44beea] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
          Select Your Doamin and Tech
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full mt-[65px] flex flex-col gap-[10px]"
      >
        <div className="mb-64 pl-5 flex">
          <div className="mx-1.5 container flex flex-col space-y-3 py-1">
            <h1 className="text-[24px] pl-7 font-bold font-epilogue pb-5 text-[#808191]">
              Select Domain
            </h1>
            <div className="items-center justify-center">
              <div className="mx-8">
                <Select
                  options={Domain}
                  onChange={setHandle}
                  isMulti
                  isCreatable
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      backgroundColor: "#F3EFF8",
                      borderColor: "#C7DDFA",
                    }),
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className=" mb-64 pl-5 flex  flex-col "> */}
        <div className="grid grid-cols-2 gap-4">
          <div className="container py-1">
            <div className="flex flex-row">
              <h1 className="text-[24px] pl-7 font-bold font-epilogue pb-5 text-[#808191]">
                Select TechStack in AIML
              </h1>
              <p className="text-[#808191] pl-3 font-bold font-epilogue  text-[14px]">
                (optional)
              </p>
            </div>
            <div className="items-center justify-center">
              <div className="rounded-full mx-8">
                <Select
                  options={Tai}
                  onChange={setai}
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      backgroundColor: "#F3EFF8",
                      borderColor: "#C7DDFA",
                    }),
                  }}
                  isMulti
                />
              </div>
            </div>
          </div>
          <div className="container py-1">
            <div className="flex flex-row">
              <h1 className="text-[24px] pl-7 font-bold font-epilogue pb-5 text-[#808191]">
                Select TechStack in Blockchain
              </h1>
              <p className="text-[#808191] pl-3 font-bold font-epilogue  text-[14px]">
                (optional)
              </p>
            </div>
            <div className="items-center justify-center">
              <div className="rounded-full mx-8">
                <Select
                  options={Tb}
                  onChange={setbl}
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      backgroundColor: "#F3EFF8",
                      borderColor: "#C7DDFA",
                    }),
                  }}
                  isMulti
                />
              </div>
            </div>
          </div>
          <div className="container py-1">
            <h1 className="text-[24px] pl-7 font-bold font-epilogue pb-5 text-[#808191]">
              Select TechStack in Full Stack Development
            </h1>
            <div className="items-center justify-center">
              <div className="rounded-full mx-8">
                <Select
                  options={Tful}
                  onChange={setful}
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      backgroundColor: "#F3EFF8",
                      borderColor: "#C7DDFA",
                    }),
                  }}
                  isMulti
                />
              </div>
            </div>
          </div>
          <div className="container py-1">
            <h1 className="text-[24px] pl-7 font-bold font-epilogue pb-5 text-[#808191]">
              Select TechStack in CLOUD Computing
            </h1>
            <div className="items-center justify-center">
              <div className="rounded-full mx-8">
                <Select
                  options={Tcld}
                  onChange={setcld}
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      backgroundColor: "#F3EFF8",
                      borderColor: "#C7DDFA",
                    }),
                  }}
                  isMulti
                />
              </div>
            </div>
          </div>
        </div>
        <div className="items-center justify-center pt-7 pl-7">
          <FormField
            labelName="Click the Button and see the Magic *"
            placeholder="Get Ideas here.."
            isTextArea
            readOnly
            value={AiDefinition}
            handleChange={(e) => handleFormFieldChange("description", e)}
          />
        </div>
        {showbtn && (
          <div className="flex justify-center items-center mt-[40px]">
            <CustomButton
              btnType="submit"
              title="Get More Ideas"
              styles="bg-[#1dc071]"
            />
          </div>
        )}
        {!showbtn && (
          <div className="flex justify-center items-center mt-[40px]">
            <CustomButton
              btnType="submit"
              title="Get New Ideas For me "
              styles="bg-[#1dc071]"
            />
          </div>
        )}
      </form>
    </div>
  );
};

export default Getidea;
