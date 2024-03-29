"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { slideIn } from "@/app/utils/motion";
import { styles } from "@/app/styles";
import { SectionWrapper } from "@/app/hoc";
import Image from "next/image";
import dao from "../public/solananft.png";
// import { addresses } from "@/app/constants/whitelist";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleAddressChange = (event) => {
    setAddress(event.target.value.toLowerCase());
  };

  return (
    <div
      className={`xl:mt-24 md:mt-24 flex md:flex-row lg:flex-row flex-col gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[500px] h-[300px]  w-auto md:w-1/2 justify-center flex items-center mt-8"
      >
        <Image src={dao} className="w-auto h-[80%] lg:w-[90%] " alt="dao" />
      </motion.div>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl "
      >
        {/* <h3 className={styles.sectionHeadText}>Whitelist Checker</h3> */}
        {/* <p className={styles.sectionSubText}></p> */}

        {/* <form
          ref={formRef}
          //onSubmit={(e) => handleSubmit(e)}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Paste address:</span>
            <input
              type="text"
              name="name"
              onChange={handleAddressChange}
              placeholder="Wallet address "
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            Submit
          </button>
        </form> */}

        {/* {address &&
          submitted &&
          (isValid ? (
            <p className="text-green-500">Address is whitelisted!</p>
          ) : (
            <p className="text-red-500">Address is not whitelisted.</p>
          ))} */}
        <div className=" flex flex-col gap-8 items-center justify-center">
          <h2 className="text-xl md:text-2xl">
            We&apos;re glad to let you know we found the fast way to participate
            in the quick revolving blockchain, EFT tokens are your gateway to
            exciting opportunities. Claim your EFT tokens now.
          </h2>
          <p className={styles.sectionSubText}></p>
          <button
            type="submit"
            // onClick={(e) => handleSubmit(e)}
            className="bg-purple-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            Claim Tokens
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
