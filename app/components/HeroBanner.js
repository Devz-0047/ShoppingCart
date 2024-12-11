import Image from "next/image";
import { CiHeart } from "react-icons/ci";
function HeroBanner() {
  return (
    <div id="home" className="mx-4 mt-3">
      <div className="flex items-center justify-start gap-6">
        <p className="text-sm font-semibold text-gray-700">Home</p>
        <p className="text-sm text-gray-600">Art de la table</p>
      </div>
      <div className="flex items-center justify-between gap-2 pt-4">
        <Image
          src="/images/hero.png"
          height={80}
          width={80}
          alt="Product"
          className="h-[35rem] w-[42rem]"
        />
        <div className="flex items-center self-start justify-between gap-[20rem] mr-auto">
          <p className="font-serif text-2xl">
            Cheese – appareil à raclette 1/2 roue
          </p>
          <div className="ml-auto">
            <CiHeart className="text-2xl " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
