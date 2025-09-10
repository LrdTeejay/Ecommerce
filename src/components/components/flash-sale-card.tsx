import { Eye, Heart, Star } from "lucide-react"
import { Button } from "../ui/button"
import { useNavigate } from "react-router-dom"

const FlashSalesCard = ({
    name, image, price, discountPercent, discountPercentShown, discountPrice, ratings, mumberOfRating, outOfSales, isNew = false, 
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

    const navigate = useNavigate();
    const starRating = ['', '', '', '', '']
  return (
    <div
        className="min-h-[350px] w-[270px] mr-[30px] shrink-0 cursor-pointer"
        onClick={()=>{
            navigate('/product')
        }}
    >
       <div className="h-[250px] relative flex items-center border rounded-[4px] justify-center bg-[#F5F5F5] mb-4">
            <img 
                src={image} 
                alt={name + 'image'} 
                height={180}
                width={190}
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
                Add To Cart
            </div> 
            }
            <div className="absolute top-3 right-3 flex flex-col gap-2 ">
                <Button className="size-[34px] rounded-full bg-[#FFFFFF] cursor-pointer hover:bg-transparent">
                    <Heart size={24} className="text-black"/>
                </Button>
                <Button className="size-[34px] rounded-full bg-[#FFFFFF] cursor-pointer hover:bg-transparent">
                    <Eye size={24} className="text-black"/>
                </Button>
            </div>
           
       </div>
       <div>
        <h4 className="text-base font-medium text-[#000000] mb-2">{name}</h4>
        <h5 className="text-base font-medium mb-2"><span className="text-[#DB4444]">${discountPrice}</span>{" "}{" "}<span className="text-[#000000] line-through">${price}</span></h5>
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
    </div>
  )
}

export default FlashSalesCard