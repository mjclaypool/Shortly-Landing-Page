export default function StatCard({ image, altText, title, details }) {
  return (
    <div className="relative z-10 font-poppins bg-white h-[270px] xl:w-[354px] rounded-md">
      <h3 className="font-bold text-[22px] pt-[72px] px-6">{title}</h3>
      <p className="text-base xl:text-md max-w-[480px] xl:w-full text-neutral-grey-violet xl:leading-relaxed px-6 py-4">{details}</p>
      <div className="absolute -top-[45px] left-[50%] translate-x-[-50%] xl:left-[24px] xl:translate-x-0 flex items-center justify-center h-[90px] w-[90px] rounded-full bg-primary-dark-violet">
        <img src={image} alt={altText} className="h-[40px] object-contain" />
      </div>
    </div>
  )
}