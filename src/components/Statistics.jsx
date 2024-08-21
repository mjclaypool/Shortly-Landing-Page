import StatCard from "./StatCard";

import statImg1 from "../../images/icon-brand-recognition.svg";
import statImg2 from "../../images/icon-detailed-records.svg";
import statImg3 from "../../images/icon-fully-customizable.svg";

export default function Statistics() {
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

  return (
    <div className="flex flex-col items-center font-poppins bg-slate-100 text-center pt-60">
      <h2 className="font-bold text-neutral-dark-violet text-[28px] lg:text-[34px]">Advanced Statistics</h2>
      <p className="font-semibold text-neutral-grey-violet text-base lg:text-lg max-w-[480px] my-5 px-4">Track how your links are performing across the web with our advanced statistics dashboard.</p>
      <div className="flex flex-col lg:flex-row lg:text-start justify-center gap-24 lg:gap-8 min-h-[360px] my-20 lg:my-24">
        {stats.map(card => (
          <div key={card.id} className={`${card.position}`}>
            <StatCard image={card.image} altText={card.altText} title={card.title} details={card.details} />
          </div>
        ))}
      </div>
    </div>
  )
}