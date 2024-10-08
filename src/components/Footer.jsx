import logo from "../../images/logo-light.svg"
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import instagram from "../../images/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row justify-between lg:items-start pb-14 lg:py-[74px] lg:px-40 font-poppins text-base text-neutral-grey-violet bg-neutral-dark-violet">
      <img src={logo.src} alt="Shortly logo" className="h-[32px] object-contain mt-12 mb-10 lg:my-0" />
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 lg:pl-8">
        <div className="flex flex-col items-center lg:items-start gap-2">
          <h3 className="font-semibold text-white mb-3">Features</h3>
          <button type="button" className="lg:text-left hover:text-primary-cyan">Link Shortening</button>
          <button type="button" className="lg:text-left hover:text-primary-cyan">Branded Links</button>
          <button type="button" className="hover:text-primary-cyan">Analytics</button>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-2">
          <h3 className="font-semibold text-white mb-3">Resources</h3>
          <button type="button" className="hover:text-primary-cyan">Blog</button>
          <button type="button" className="hover:text-primary-cyan">Developers</button>
          <button type="button" className="hover:text-primary-cyan">Support</button>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-2">
          <h3 className="font-semibold text-white mb-3">Company</h3>
          <button type="button" className="hover:text-primary-cyan">About</button>
          <button type="button" className="hover:text-primary-cyan">Our Team</button>
          <button type="button" className="hover:text-primary-cyan">Careers</button>
          <button type="button" className="hover:text-primary-cyan">Contact</button>
        </div>
        <div className="flex justify-center items-center gap-6">
          <img src={facebook.src} alt="Facebook logo" className="object-contain cursor-pointer" />
          <img src={twitter.src} alt="Twitter logo" className="object-contain cursor-pointer" />
          <img src={pinterest.src} alt="Pinterest logo" className="object-contain cursor-pointer" />
          <img src={instagram.src} alt="Instagram logo" className="object-contain cursor-pointer" />
        </div>
      </div>
    </footer>
  )
}