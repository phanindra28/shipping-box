import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg?react";

export default function NavBar() {
  return (
    <header
      className={
        "fixed top-0 left-0 w-full font-bold bg-slate-900 p-2 md:p-4 flex justify-between items-center"
      }
    >
      <Link to={"/"}>
        <Logo />
      </Link>
      <nav>
        <Link to={"/"} className={"mr-2 md:mr-10 p-1"}>
          <span className={"text-amber-400 hover:text-amber-300"}>Add Box</span>
        </Link>
        <Link to={"/view-all"} className={"p-1"}>
          <span className={"text-amber-400 hover:text-amber-300"}>
            View All
          </span>
        </Link>
      </nav>
    </header>
  );
}
