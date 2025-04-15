import PromoBanner from "@/components/proomoBanner";
import FancySearchBar from "@/components/searchBar";
import Image from "next/image";
import { LuLogIn } from "react-icons/lu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { FaCartArrowDown } from "react-icons/fa6";
import CarouselImages from "@/components/carosel";







export default function Home() {
  return (
    <div className="">
      <div className="h-16 sm:h-24">
        <nav>
          <div>
            <PromoBanner />
          </div>
          <div className="flex items-center px-11">
            <div className="flex items-center gap-3 text-2xl font-semibold">
              <Image src={"/Gemini_Generated_Image_9chnmv9chnmv9chn.jpeg"} width={55} height={100} alt="logo image" /> M-Mart
            </div>

            <div className="w-4xl">
              <FancySearchBar />
            </div>

            <div>
              <ul className="flex items-center gap-8">
                <li>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger><LuLogIn size={25} /></TooltipTrigger>
                      <TooltipContent>
                        <p className="text-sm">Login Now</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
                <li>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger><FaCartArrowDown size={25} /></TooltipTrigger>
                      <TooltipContent>
                        <p className="text-sm">Your Cart</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              </ul>
            </div>

          </div>
        </nav>
      </div>


      <div className="w-auto max-h-max px-40">
        <CarouselImages />
      </div>


      <div className="mx-10">
        <p className="text-2xl font-bold my-2 text-[#003366]">Best Products For You</p>
      </div>
    </div>
  )
}