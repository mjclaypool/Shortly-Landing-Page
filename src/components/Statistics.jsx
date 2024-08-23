import { useState, useMemo } from "react";

import ShortenLink from "./ShortenLink";
import LinkCard from "./LinkCard";
import StatCard from "./StatCard";

import statImg1 from "../../images/icon-brand-recognition.svg";
import statImg2 from "../../images/icon-detailed-records.svg";
import statImg3 from "../../images/icon-fully-customizable.svg";

export default function Statistics() {
  const [fullUrl, setFullUrl] = useState([])
  const [shortUrl, setShortUrl] = useState([]);

  useMemo(() => {
    if (!fullUrl.length == 0) {
    fetch("https://cleanuri.com/api/v1/shorten", {
      method: "POST",
      body: JSON.stringify({
        url: fullUrl[fullUrl.length-1]
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then((response) => (response.json()))
    .then((json) => setShortUrl([...shortUrl, json.result_url]))
    .catch((error) => console.log(error));
  }}, [fullUrl])

  const stats = [
    {
      id: "1",
      position: "lg:self-start",
      image: statImg1,
      altText: "Brand recognition icon",
      title: "Brand Recognition",
      details: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    },
    {
      id: "2",
      position: "lg:self-center",
      image: statImg2,
      title: "Detailed Records",
      altText: "Detailed Records icon",
      details: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      id: "3",
      position: "lg:self-end",
      image: statImg3,
      title: "Fully Customizable",
      altText: "Fully Customizable icon",
      details: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ]

  function handleShortenIt(value) {
    setFullUrl([...fullUrl, value]);
  }

  return (
    <div className="relative flex flex-col items-center font-poppins bg-slate-100 text-center px-6 lg:px-40 pt-[90px] lg:pt-[124px] mt-32">
      <ShortenLink shortenIt={handleShortenIt} />
      {fullUrl.map((urlCard, index) => (
        <div key={index} className="w-full">
          <LinkCard fullUrl={fullUrl[index]} shortUrl={shortUrl[index]} />
        </div>
      ))}
      <h2 className="font-bold text-neutral-dark-violet text-[28px] lg:text-[34px] mt-20">Advanced Statistics</h2>
      <p className="font-semibold text-neutral-grey-violet text-base lg:text-lg leading-relaxed max-w-[480px] my-5 px-4">Track how your links are performing across the web with our advanced statistics dashboard.</p>
      <div className="relative flex flex-col lg:flex-row lg:text-start justify-center gap-24 lg:gap-8 min-h-[350px] my-20 lg:mb-[124px]">
        {stats.map(card => (
          <div key={card.id} className={`${card.position}`}>
            <StatCard image={card.image} altText={card.altText} title={card.title} details={card.details} />
          </div>
        ))}
        <hr className="absolute z-0 rotate-90 w-[1000px] left-[50%] translate-x-[-50%] lg:rotate-0 lg:top-[144px] lg:w-full border-4 border-primary-cyan" />
      </div>
    </div>
  )
}