import logo from "../../images/logo.svg";

export default function Header() {
  return (
    <header className="px-6 lg:px-40 py-10">
      <nav className="flex justify-between font-poppins font-semibold text-neutral-grey-violet">
        <div className="flex gap-8">
          <img src={logo} alt="Shortly Logo" className="object-contain" />
          <button className="hidden lg:block" type="button">Features</button>
          <button className="hidden lg:block" type="button">Pricing</button>
          <button className="hidden lg:block" type="button">Resources</button>
        </div>
        <div className="flex gap-8">
          <button className="hidden lg:block" type="button">Login</button>
          <button className="hidden lg:block text-white bg-primary-cyan px-6 py-2 rounded-full" type="button">Sign Up</button>
        </div>
      </nav>
    </header>
  )
}