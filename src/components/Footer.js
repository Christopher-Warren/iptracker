import React from "react";

const Footer = () => {
  return (
    <div class=" bg-blue-500 md:h-10 w-full md:text-xl">
      <div class=" border-blue-700 border-t mx-auto"></div>
      <div class="text-center text-blue-800">
        Design:
        <a
          href="https://www.chriswarren.tech/"
          className="hover:text-blue-200 active:text-blue-200"
        >
          {" "}
          Christopher Warren{" "}
        </a>
        • Contact:
        <a
          href="mailto:christech@gmail.com"
          class="underline hover:text-blue-200 active:text-blue-200"
        >
          chriswarrentech@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Footer;
