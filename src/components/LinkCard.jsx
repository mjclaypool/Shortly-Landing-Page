import { useState } from "react";

export default function LinkCard({ fullUrl, shortUrl }) {
  const [buttonTxt, setButtonTxt] = useState("Copy");
  const [buttonStyle, setButtonStyle] = useState("default");

  const colorVariants = {
    default: "w-full lg:w-[110px] font-poppins font-bold text-base text-white bg-primary-cyan py-2.5 x-6 rounded-md",
    clicked: "w-full lg:w-[110px] font-poppins font-bold text-base text-white bg-primary-dark-violet py-2.5 rounded-md",
  }

  function handleClick() {
    navigator.clipboard.writeText(shortUrl);
    setButtonTxt("Copied!");
    setButtonStyle("clicked");
  }

  return (
    <div className="flex flex-col text-left lg:text-start lg:flex-row lg:items-center justify-between w-full h-[156px] lg:h-[72px] bg-white rounded-md my-2 lg:px-6 py-4 lg:py-0">
      <p className="font-poppins font-semibold tracking-tight text-base lg:text-xl mx-4 lg:mx-0">{fullUrl}</p>
      <hr className="lg:hidden"/>
      <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6 mx-4 lg:mx-0">
        <p className="font-poppins font-semibold tracking-tight text-base lg:text-xl text-primary-cyan">{shortUrl}</p>
        <button className={`${colorVariants[buttonStyle]}`} type="button" onClick={handleClick}>
          {buttonTxt}
        </button>
      </div>
    </div>
  )
}