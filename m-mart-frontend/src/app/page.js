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
import { products } from "@/utilis/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"








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
        <p className="text-2xl font-bold my-2   ">Best Products For You</p>
      </div>

      <div className="mx-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
          {products.map((product) => (
            <Card key={product.id} className="rounded-2xl shadow-md">
              <CardHeader>
                <CardTitle className="text-lg text-[#003366] font-semibold">{product.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{product.brand}</p>
              </CardHeader>
              <CardContent>

                 <Image src={product.images}
                 alt={product.name}
                 className="w-full h-48 object-contain rounded-xl mb-3"
                 height={100}
                 width={120} />
                <p className="text-sm text-gray-500 mb-2">{product.description}</p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-bold text-primary">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.discount > 0 && (
                    <span className="text-sm text-green-600">
                      {product.discount}% OFF
                    </span>
                  )}
                </div>
                <Button className="w-full">Add to Cart</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}