import Image from "next/image";
import { HiOutlineSearch } from "react-icons/hi";
function Header() {
  return (
    <nav
      id="header"
      className="flex items-center justify-between pt-2 pl-3 pr-3"
    >
      <div>
        <Image
          src="/images/logo.png"
          alt="logo"
          width={140}
          height={100}
          className=""
        />
      </div>
      <form className="flex items-center justify-center ">
        <input
          placeholder="Rechercher un produit"
          type="text"
          className="h-10 pl-2 pr-72 text-sm rounded-l-sm rounded-r-none outline-none bg-[#f8f9fa] flex-grow  "
        />
        <button
          type="submit"
          className="h-10 rounded-l-none rounded-r-sm bg-[#f1f3f5] px-2"
        >
          <HiOutlineSearch className="text-xl text-[#868e96]" />
        </button>
      </form>
    </nav>
  );
}

export default Header;
