import Image from "next/image";
import { HiOutlineSearch } from "react-icons/hi";
import { MdOutlineLightbulb } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
function Header() {
  return (
    <nav id="header" className="flex flex-col">
      <div className="flex items-center justify-between pt-2 pl-3 pr-3">
        <div className="flex items-center justify-center gap-6">
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
              className="h-10 pl-2 w-[36rem] text-sm rounded-l-sm rounded-r-none outline-none bg-[#f8f9fa] flex-grow  "
            />
            <button
              type="submit"
              className="h-10 rounded-l-none rounded-r-sm bg-[#f1f3f5] px-2"
            >
              <HiOutlineSearch className="text-xl text-[#868e96]" />
            </button>
          </form>
        </div>
        <div className="flex items-center justify-center gap-6">
          <div>
            <button className="flex items-center justify-center">
              <MdOutlineLightbulb />
              <p className="text-sm font-semibold text-gray-500">
                Inspirations
              </p>
            </button>
          </div>
          <div>
            <button className="flex items-center justify-center gap-1">
              <CiHeart />
              <p className="text-sm font-semibold text-gray-500">Mes favoris</p>
              <p className="text-[0.7rem] bg-gray-300 px-[0.24rem] font-semibold rounded-md">
                24
              </p>
            </button>
          </div>
          <div>
            <button className="flex items-center justify-center px-4 py-2 font-semibold text-white rounded-md bg-sky-500">
              <MdOutlineShoppingCart />
              <p className="text-sm">Panier</p>
            </button>
          </div>
          <div>
            <Image
              src="/images/profileImage.jpg"
              alt="profile photo"
              height={40}
              width={40}
              className="rounded-full h-9"
            />
          </div>
          <div className="bg-gray-100 ">
            <select className="px-2 py-1 text-sm text-gray-500 bg-gray-200 border border-gray-400 rounded-full appearance-none">
              <option className="">Fr</option>
              <option>En</option>
              <option>Es</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-3 text-gray-600">
        <button className="py-3 border-b-2 text-sky-600 border-sky-600">
          Art de la table
        </button>
        <button>Mobilier</button>
        <button>Nappage</button>
        <button>Matériel de salle</button>
        <button> Cuisine</button>
        <button>Barbecue</button>
        <button>Tente</button>
        <button>Chauffage</button>
        <button> Podium - Piste de danse</button>
        <button> Son et lumière</button>
        <button> Packs</button>
        <button>Consommables</button>
      </div>
    </nav>
  );
}

export default Header;
