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





export default function Home() {
  return (
    <div className="">
      <div className="h-16 sm:h-24">
        <nav>
          <div>
            <PromoBanner />
          </div>
          <div className="flex items-center px-5">
            <div className="flex items-center gap-3 text-2xl font-semibold">
              <Image src={"/Gemini_Generated_Image_9chnmv9chnmv9chn.jpeg"} width={55} height={100} alt="logo image" /> M-Mart
            </div>

            <div className="w-5xl">
              <FancySearchBar />
            </div>

            <div>
              <ul className="flex items-center gap-8">
                <li>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger><LuLogIn size={30} /></TooltipTrigger>
                      <TooltipContent>
                        <p className="text-sm">Login Now</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
                <li>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger><FaCartArrowDown size={30} /></TooltipTrigger>
                      <TooltipContent>
                        <p className="text-sm">Add To Cart</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              </ul>
            </div>

          </div>
        </nav>
      </div>
    </div>
  )
}