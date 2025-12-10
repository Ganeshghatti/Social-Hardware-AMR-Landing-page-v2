"use client";

import { useState } from "react";
import { submitHandler } from "../../../actions/Contactemail.action";
import toast, { Toaster } from "react-hot-toast";
import { ArrowRight } from "lucide-react";

export default function ContactInput() {
  const [email, setemail] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(formData) {
    setLoading(true);

    const res = await submitHandler(formData);

    if (res?.success) {
      setemail("");
      toast.success("Inquiry email sent successfully");
    } else {
      toast.error("Something went wrong! Try again.");
    }

    setLoading(false);
  }

  return (
    <>
      <form
        action={onSubmit}
        className="mt-12 md:mt-10 flex flex-col sm:flex-row w-full max-w-xs sm:max-w-md md:max-w-2xl gap-2 sm:gap-0"
      >
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="Enter your Email address"
          required
          className="bg-black py-3 sm:py-4 px-4 md:px-10 text-white text-sm md:text-base flex-1 border border-gray-200 sm:border-r-0"
        />

        <button
          type="submit"
          disabled={loading}
          className="text-black flex gap-1 items-center justify-center bg-white py-3 sm:py-2 px-6 md:px-10 text-sm md:text-base font-semibold disabled:opacity-40 cursor-pointer whitespace-nowrap"
        >
          {loading ? "Sending..." : "Send"} <ArrowRight size={16} />
        </button>
      </form>

      <Toaster />
    </>
  );
}
