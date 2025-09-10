import { Heart, Minus, Plus, Star } from "lucide-react"
import Wrapper from "../layout/components/wrapper"
import { Button } from "../components/ui/button"
import { SectionTitle } from "./landing-page"
import FlashSalesCard from "../components/components/flash-sale-card"

const RelatedItemContent = () => {

        const flashSalesContentData = [
        {
            discountPercent: 40,
            discountPrice: "120",
            image: "/pes.png",
            mumberOfRating: 5,
            name: "HAVIT HV-G92 Gamepad",
            outOfSales: true,
            price: "160",
            ratings: 88   
        },
        {
            discountPercent: 35,
            discountPrice: "960",
            image: "/keyboard.png",
            mumberOfRating: 4,
            name: "AK-900 Wired Keyboard",
            outOfSales: false,
            price: "1160",
            ratings: 76   
        },
        {
            discountPercent: 30,
            discountPrice: "370",
            image: "/monitor1.png",
            mumberOfRating: 4,
            name: "IPS LCD Gaming Monitor",
            outOfSales: true,
            price: "400",
            ratings: 76   
        },
        {
            discountPercent: 30,
            discountPrice: "370",
            image: "/speaker-2.png",
            mumberOfRating: 4,
            name: "RGB liquid CPU Cooler",
            outOfSales: true,
            price: "400",
            ratings: 76   
        },
    ]


    return(
        <div className="mt-10 mb-[60px] flex overflow-auto hide-scrollbar ml-[1%]">
           {
            flashSalesContentData.map(({discountPercent, discountPrice, image, mumberOfRating, name,outOfSales, price,ratings}) =>(
                <FlashSalesCard 
                    key={crypto.randomUUID()}
                    discountPercent={discountPercent}
                    discountPrice={discountPrice}
                    image={image}
                    mumberOfRating={mumberOfRating}
                    name={name}
                    outOfSales={outOfSales}
                    price={price}
                    ratings={ratings}
                    discountPercentShown={true}
                />
            ))
           }
        </div>
    )
}

const ProductDetails = () => {
  return (
    <Wrapper className="mt-20">
        <div className="flex items-center gap-3 mb-20">
            <span>Home</span>
            <span>/</span>
            <span>Gaming</span>
            <span>/</span>
            <span className="font-bold">Havic HV G-92 Gamepad</span>
        </div>
        <div
            className="h-[600px] grid grid-cols-5 gap-[70px] mb-[140px]"
        >
            <div
                className="col-span-3 flex gap-[30px]"
            >
                <div className="w-[170px] flex flex-col gap-4">
                    <div className="border border-[#F5F5F5] shadow rounded-[4px]">
                        <img src="/pes1.png" className="w-[170px] h-[138px]" alt="pes 1" />
                    </div>
                    <div className="border border-[#F5F5F5] shadow rounded-[4px]">
                        <img src="/pes2.png" className="w-[170px] h-[138px]" alt="pes 1" />
                    </div>
                    <div className="border border-[#F5F5F5] shadow rounded-[4px]">
                        <img src="/pes3.png" className="w-[170px] h-[138px]" alt="pes 1" />
                    </div>
                    <div className="border border-[#F5F5F5] shadow rounded-[4px]">
                        <img src="/pes4.png" className="w-[170px] h-[138px]" alt="pes 1" />
                    </div>
                </div>
                <div className="w-[500px] border border-[#F5F5F5] shadow flex justify-center items-center rounded-[4px]">
                    <img src="/pes5.png" alt="pes" />
                </div>
            </div>
            <div
                className="col-span-2 text-[#000000]"
            >
                <h3 className="text-[24px] font-semibold">Havic HV G-92 Gamepad</h3>
                <div className="flex gap-2 my-4">
                    <div className="flex items-center mr-2">
                        <Star size={20} color="#FFAD33" fill="#FFAD33"/>
                        <Star size={20} color="#FFAD33" fill="#FFAD33"/>
                        <Star size={20} color="#FFAD33" fill="#FFAD33"/>
                        <Star size={20} color="#FFAD33" fill="#FFAD33"/>
                        <Star size={20}/>
                    </div>
                    <div className="font-normal text-sm flex items-center gap-4">
                        <span className="">(150 Reviews)</span>
                        <span>|</span>
                        <span className="text-[#00FF66]">In Stock</span>
                    </div>
                </div>
                <h4 className="text-2xl font-normal my-6">$192.00</h4>
                <p className="text-sm font-normal w-[373px]">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                <hr className="my-6"/>
                <div className="flex items-center gap-6">
                    <h5>Colours:</h5>
                    <div className="w-[48px] h-[20px] flex items-center gap-2">
                        <div className="size-5 rounded-full bg-[#A0BCE0]"/>
                        <div className="size-5 rounded-full bg-[#E07575]"/>
                    </div>
                </div>
                <div className="my-6 w-[296px] h-[32px] flex items-center gap-6">
                    <h5 className="text-[20px] font-normal">Size:</h5>
                    <div className="w-[224px] flex items-center gap-4">
                        <div className="size-8 rounded-[4px] border border-[#00000080] flex items-center justify-center">
                            XS
                        </div>
                        <div className="size-8 rounded-[4px] border border-[#00000080] flex items-center justify-center">
                            S
                        </div>
                        <div className="size-8 rounded-[4px] border border-[#00000080] flex items-center justify-center">
                            M
                        </div>
                        <div className="size-8 rounded-[4px] border border-[#00000080] flex items-center justify-center">
                            L
                        </div>
                        <div className="size-8 rounded-[4px] border border-[#00000080] flex items-center justify-center">
                            XL
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-[159px] h-11 flex items-center">
                        <div role="button" className="border h-full w-[40px] border-[#00000080] flex items-center justify-center cursor-pointer">
                            <Minus />
                        </div>
                        <div role="button" className="border h-full w-[80px] border-[#00000080] flex items-center justify-center text-[20px] cursor-pointer font-medium">
                            2
                        </div>
                        <div role="button" className="border cursor-pointer h-full w-[40px] border-[#00000080] flex items-center justify-center bg-[#DB4444]">
                            <Plus className="text-white" />
                        </div>
                    </div>
                    <div className="flex items-center gap-[19px]">
                        <Button className="bg-[#DB4444] hover:bg-[#DB4444] font-medium text-base text-[#FAFAFA] cursor-pointer w-[165px] h-11 rounded-[4px]">
                            Buy Now
                        </Button>
                        <Button className="size-10 bg-white hover:bg-white border border-[#00000080] cursor-pointer">
                            <Heart size={20} className="text-black"/>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        <div className="mb-[140px]">
            <SectionTitle 
                text="Related Item"
            />
            <RelatedItemContent />
        </div>
    </Wrapper>
  )
}

export default ProductDetails