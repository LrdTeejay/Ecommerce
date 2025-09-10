import { Button } from "../components/ui/button"
import Wrapper from "../layout/components/wrapper"

import { Eye, ShoppingCartIcon, Star, Trash2 } from "lucide-react"
import { SectionTitle } from "./landing-page"
import { useNavigate } from "react-router-dom"


const WishListCard = ({
    name, image, price, discountPercent, discountPercentShown, discountPrice, outOfSales, isNew = false, 
} : {
    name: string,
    price: string,
    discountPrice: string,
    ratings: number,
    discountPercent: number,
    outOfSales: boolean,
    mumberOfRating: number,
    image: string,
    discountPercentShown: boolean,
    isNew?: boolean,
    // colorCombination?: boolean
}) => {
    const navigate = useNavigate()
    return (
        <div
        className="min-h-[322px] w-[270px] shrink-0 cursor-pointer"
        onClick={()=>{
            navigate('/product')
        }}
    >
       <div className="h-[250px] relative flex items-center border rounded-[4px] justify-center bg-[#F5F5F5] mb-4">
            <img 
                src={image} 
                alt={name + 'image'} 
                height={129}
                width={178}
            />
            {
                discountPercentShown && <div className="text-[12px] font-normal text-[#FAFAFA] absolute left-3 top-3 w-[55px] h-[26px] bg-[#DB4444] flex items-center justify-center">
                -{discountPercent}%
            </div>
            }
            {
                isNew && <div className="text-[12px] font-normal text-[#FAFAFA] absolute left-3 top-3 w-[51px] h-[26px] bg-[#00FF66] flex items-center justify-center">
                NEW
            </div>
            }
             {
                !outOfSales && <div className="h-[41px] w-full text-[#FFFFFF] bg-[#000000] text-base font-medium absolute bottom-0 left-0 flex items-center justify-center">
                    <ShoppingCartIcon className="mr-2" />
                Add To Cart
            </div> 
            }
            <div className="absolute top-3 right-3 flex flex-col gap-2 ">
                <Button className="size-[34px] rounded-full bg-[#FFFFFF] cursor-pointer hover:bg-transparent">
                    <Trash2 size={24} className="text-black"/>
                </Button>
            </div>
           
       </div>
       <div>
        <h4 className="text-base font-medium text-[#000000] mb-2">{name}</h4>
        <h5 className="text-base font-medium mb-2"><span className="text-[#DB4444]">${discountPrice}</span>{" "}{" "}<span className="text-[#000000] line-through">${price}</span></h5>
       </div>
    </div>
    )
}

const WishListContent = () => {
    const wishListData = [
        {
            discountPercent: 35,
            discountPrice: "960",
            image: "/gucci-bag.png",
            mumberOfRating: 4,
            name: "The duffle bag",
            outOfSales: true,
            price: "360",
            ratings: 65   
        },
        {
            discountPercent: 30,
            discountPrice: "370",
            image: "/speaker-2.png",
            mumberOfRating: 4,
            name: "RGB liquid CPU Cooler",
            outOfSales: true,
            price: "160",
            ratings: 65   
        },
        {
            discountPercent: 35,
            discountPrice: "660",
            image: "/pad.png",
            mumberOfRating: 4,
            name: "GP11 Shooter USB Gamepad",
            outOfSales: true,
            ratings: 55,
            isNew: false  
        },
        {
            discountPercent: 30,
            discountPrice: "660",
            image: "/jacket.png",
            mumberOfRating: 4,
            name: "Quited Satin Jacket",
            outOfSales: true,
            ratings: 55,
            isNew: false  
        }
    ]
    return(
        <div className="grid grid-cols-4 mb-20">
            {wishListData.map(({ discountPercent, discountPrice,image,mumberOfRating,name,outOfSales,price, ratings }) =>(
                <WishListCard 
                    key={crypto.randomUUID()}
                    discountPercent={discountPercent}
                    discountPercentShown
                    discountPrice={discountPrice}
                    image={image}
                    mumberOfRating={mumberOfRating}
                    name={name}
                    outOfSales={outOfSales}
                    price={price}
                    ratings={ratings}
                />
            ))}
        </div>
    )
}

const ForYou = () => {
    return(
        <div className="flex items-center justify-between mb-[60px]">
            <SectionTitle text="Just For You"/>
            <div className="items-center">
                <div className="flex justify-between ">
                    <div className="flex items-center gap-2">
                        <Button className="h-[56px] w-[px]150 rounded-[4px] text-base font-medium text-[#000000] bg-transparent hover:bg-transparent cursor-pointer border border-[#00000080]">
                            See All
                        </Button>
                    </div>
                </div> 
            </div>
        </div>
    )
}

const ForYouCard = ({
    name, image, price, discountPercent, discountPercentShown, discountPrice, outOfSales, isNew = false, mumberOfRating, ratings
} : {
    name: string,
    price: string,
    discountPrice: string,
    ratings: number,
    discountPercent: number,
    outOfSales: boolean,
    mumberOfRating: number,
    image: string,
    discountPercentShown: boolean,
    isNew?: boolean,
    // colorCombination?: boolean
}) => {

     const starRating = ['', '', '', '', '']
    const navigate = useNavigate();
    return (
        <div
        className="min-h-[322px] w-[270px] shrink-0 cursor-pointer"
        onClick={()=>{
            navigate('/product')
        }}
    >
       <div className="h-[250px] relative flex items-center border rounded-[4px] justify-center bg-[#F5F5F5] mb-4">
            <img 
                src={image} 
                alt={name + 'image'} 
                height={129}
                width={178}
            />
            {
                !isNew && discountPercentShown && <div className="text-[12px] font-normal text-[#FAFAFA] absolute left-3 top-3 w-[55px] h-[26px] bg-[#DB4444] flex items-center justify-center">
                -{discountPercent}%
            </div>
            }
            {
                isNew && <div className="text-[12px] font-normal text-[#FAFAFA] absolute left-3 top-3 w-[55px] h-[26px] bg-[#00FF66] flex items-center justify-center">
                NEW
            </div>
            }
             {
                !outOfSales && <div className="h-[41px] w-full text-[#FFFFFF] bg-[#000000] text-base font-medium absolute bottom-0 left-0 flex items-center justify-center">
                    <ShoppingCartIcon className="mr-2" />
                Add To Cart
            </div> 
            }
            <div className="absolute top-3 right-3 flex flex-col gap-2 ">
                <Button className="size-[34px] rounded-full bg-[#FFFFFF] cursor-pointer hover:bg-transparent">
                    <Eye size={24} className="text-black"/>
                </Button>
            </div>
           
       </div>
       <div>
        <h4 className="text-base font-medium text-[#000000] mb-2">{name}</h4>
        <h5 className="text-base font-medium mb-2"><span className="text-[#DB4444]">${discountPrice}</span>{" "}{" "}<span className="text-[#000000] line-through">${price}</span></h5>
       </div>
       <div>
            <div className="flex items-center">
                {
                    starRating.map((_, index) =>(
                        <Star 
                            key={crypto.randomUUID()}
                            size={20}
                            fill={`${index + 1 <= mumberOfRating && '#FFAD33'}`}
                            className={`${index + 1 <= mumberOfRating ? 'text-[#FFAD33]' : 'text-[#000000]' }`}
                        />
                    ))
                }
                ({ratings})
            </div>
        </div>
    </div>
    )
}

const ForYouContent = () => {

    const wishListData = [
        {
            discountPercent: 30,
            discountPrice: "700",
            image: "/Laptop.png",
            mumberOfRating: 5,
            name: "ASUS FHD Gaming Laptop",
            outOfSales: true,
            ratings: 325,
            isNew: false   
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
            discountPercent: 40,
            discountPrice: "120",
            image: "/pes.png",
            mumberOfRating: 5,
            name: "HAVIT HV-G92 Gamepad",
            outOfSales: false,
            price: "160",
            ratings: 88,
            isNew: true   
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
    ]

    return(
        <div className="grid grid-cols-4 mb-20">
            {wishListData.map(({ discountPercent, discountPrice,image,mumberOfRating,name,outOfSales,price, ratings, isNew }) =>(
                <ForYouCard 
                    key={crypto.randomUUID()}
                    discountPercent={discountPercent}
                    discountPercentShown
                    discountPrice={discountPrice}
                    image={image}
                    mumberOfRating={mumberOfRating}
                    name={name}
                    outOfSales={outOfSales}
                    price={price}
                    ratings={ratings}
                    isNew={isNew}
                />
            ))}
        </div>
    )
}
const WishList = () => {
  return (
    <Wrapper className="mt-20">
        <div className="mb-[60px] flex items-center justify-between">
            <h3>Wishlist (4)</h3>
            <Button className="h-[56px] w-[223px] rounded-[4px] text-base bg-transparent hover:bg-transparent cursor-pointer font-medium text-[#000000] bg-transparent border border-[#00000080]">
                Move All To Bag
            </Button>
        </div>
        <WishListContent />
        <ForYou />
        <ForYouContent />
    </Wrapper>
  )
}

export default WishList