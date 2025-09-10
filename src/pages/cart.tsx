import { useNavigate } from "react-router-dom"
import { TableDemo } from "../components/components/table-demo"
import { Button } from "../components/ui/button"
import Wrapper from "../layout/components/wrapper"


const CartProduct = () => {
    return(
        <TableDemo />
    )
}

const Cart = () => {

    const navigate = useNavigate();

  return (
    <Wrapper className="mt-20 mb-[140px]">
        <div className="flex items-center gap-3 mb-[64px]">
            <span className="text-sm font-normal text-[#000000]">Home</span>
            <span className="text-[#000000]">/</span>
            <span className="text-sm font-normal text-[#000000]">Cart</span>
        </div>
        <CartProduct />
        <div className="flex items-center justify-between mb-20">
            <Button 
                className="h-[56px] w-[218px] rounded-[4px] text-base bg-transparent hover:bg-transparent cursor-pointer font-medium text-[#000000] border border-[#00000080]"
                onClick={()=>{
                    navigate(-1)
                }}
            >
                Return To Shop
            </Button>
             <Button className="h-[56px] w-[195px] rounded-[4px] text-base bg-transparent hover:bg-transparent cursor-pointer font-medium text-[#000000] border border-[#00000080]">
                Update Cart
            </Button>
        </div>
        <div
            className="flex justify-between gap-[173px]"
        >
            <div
                className="flex-1 grid grid-cols-3 gap-4 w-[221px]"
            >
                <Button
                    className="col-span-2 text-base justify-start font-normal text-[#000000] h-[56px] bg-transparent hover:bg-transparent rounded-[4px] border border-[#000000]"
                >
                    Coupon Code
                </Button>
                <Button
                    className="col-span-1 h-[56px] bg-[#DB4444] hover:bg-[#DB4444] font-medium text-base text-[#FAFAFA]"
                >
                    Apply Coupon
                </Button>
            </div>
            <div
                className="flex-1 flex justify-center flex-col h-[324px] border-[1.5px] border-[#000000] rounded-[4px] py-8 px-6"
            >
                <h4 className="font-medium text-[20px] text-[#000000] mb-6">Cart</h4>
                <div className="flex items-center justify-between text-base font-normal text-[#000000] border-b border-b-[#000000] pb-4">
                    <h5>Subtotal:</h5>
                    <h6>$1750</h6>
                </div>

                <div className="mt-4 flex items-center justify-between text-base font-normal text-[#000000] border-b border-b-[#000000] pb-4">
                    <h5>Shipping:</h5>
                    <h6>Free</h6>
                </div>

                <div className="mt-4 flex items-center justify-between text-base font-normal text-[#000000] border-b border-b-[#000000] pb-4 mb-4">
                    <h5>Total:</h5>
                    <h6>$1750</h6>
                </div>

                 <Button
                    className="col-span-1 h-[56px] w-[260px] bg-[#DB4444] hover:bg-[#DB4444] font-medium text-base text-[#FAFAFA] mx-auto cursor-pointer"
                    onClick={()=>{
                        navigate('/checkout')
                    }}
                >
                    Procees to checkout
                </Button>

            </div>
        </div>
    </Wrapper>
  )
}

export default Cart