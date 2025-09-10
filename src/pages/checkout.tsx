import { ProductCard } from "../components/components/table-demo"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import Wrapper from "../layout/components/wrapper"

const Checkout = () => {
  return (
    <Wrapper className="mt-20 mb-[140px]">
        <div className="flex items-center gap-3 text-sm font-normal text-[#000000] mb-20">
            <span>Account</span>
            <span>/</span>
            <span>My Account</span>
            <span>/</span>
            <span>Product</span>
            <span>/</span>
            <span>View Cart</span>
            <span>/</span>
            <span className="font-bold">CheckOut</span>
        </div>
        <h5 className="text-[38px] text-[#000000] font-medium">Billing Details</h5>
        <form className="mt-12 flex gap-[173px]" action="">
            <div className="flex-1">
                <Label htmlFor="first-name" className="mb-2 font-normal text-base text-[#000000]">First Name*</Label>
                <Input 
                    className="bg-[#F5F5F5] h-[50px] mb-8"
                    id="first-name"
                />

                <Label htmlFor="Name" className="mb-2 font-normal text-base text-[#000000]">Company Name</Label>
                <Input 
                    className="bg-[#F5F5F5] h-[50px] mb-8"
                    id="Name"
                />

                <Label htmlFor="Apartment" className="mb-2 font-normal text-base text-[#000000]">Apartment, floor, etc. (optional)</Label>
                <Input 
                    className="bg-[#F5F5F5] h-[50px] mb-8"
                    id="Apartment"
                />


                <Label htmlFor="town" className="mb-2 font-normal text-base text-[#000000]">Town/City*</Label>
                <Input 
                    className="bg-[#F5F5F5] h-[50px] mb-8"
                    id="town"
                />


                <Label htmlFor="phone" className="mb-2 font-normal text-base text-[#000000]">Phone Number*</Label>
                <Input 
                    className="bg-[#F5F5F5] h-[50px] mb-8"
                    id="phone"
                />
                
                <Label htmlFor="email" className="mb-2 font-normal text-base text-[#000000]">Email Address*</Label>
                <Input 
                    className="bg-[#F5F5F5] h-[50px] mb-8"
                    id="email"
                />
                
               <div className="flex items-center">
                <input type="checkbox" name="" id="check" checked className="mr-4 size-6 accent-[#DB4444]" />
                <Label className="font-normal text-base text-[#000000]" htmlFor="check" >Save this information for faster check-out next time</Label>
               </div>
            </div>
            <div
                className="bg-red-400mx-auto flex-1"
            >
               <div
                className="flex items-center justify-between mb-8 w-[425px] "
               >
                 <ProductCard 
                    image="/monitor.png" text="LCD Monitor"
                />
                <span>$650</span>
               </div>

               <div
                className="flex items-center justify-between w-[425px] "
               >
                 <ProductCard 
                    text="H1 Gamepad" image="/gamepad.png"
                />
                <span>$650</span>
               </div>

               <div className="flex w-[425px]   mt-8 items-center justify-between text-base font-normal text-[#000000] border-b border-b-[#000000] pb-4">
                    <h5>Subtotal:</h5>
                    <h6>$1750</h6>
                </div>

                <div className="mt-4 flex w-[425px]  items-center justify-between text-base font-normal text-[#000000] border-b border-b-[#000000] pb-4">
                    <h5>Shipping:</h5>
                    <h6>Free</h6>
                </div>

                 <div className="mt-4 flex w-[425px]  items-center justify-between text-base font-normal text-[#000000] pb-4 mb-8">
                    <h5>Total:</h5>
                    <h6>$1750</h6>
                </div>

                <div className="grid grid-cols-2 gap-y-8 mb-8">
                    <div className="flex items-center">
                        <Input id="bank" className="size-6 mr-4" type="radio" />
                        <Label htmlFor="bank">
                            Bank
                        </Label>
                    </div>
                    <img src="/cards.png" alt="" />
                    <div className="flex items-center">
                        <Input id="cash" className="size-6 mr-4" type="radio" />
                        <Label htmlFor="cash">
                            Cash on delivery
                        </Label>
                    </div>
                </div>

                <div
                className="flex gap-4 mb-8"
            >
                <Button
                    className="col-span-2 text-base justify-start font-normal text-[#000000] w-[300px] h-[56px] bg-transparent hover:bg-transparent rounded-[4px] border border-[#000000]"
                >
                    Coupon Code
                </Button>
                <Button
                    className="col-span-1 h-[56px] w-[211px] bg-[#DB4444] hover:bg-[#DB4444] font-medium text-base text-[#FAFAFA]"
                >
                    Apply Coupon
                </Button>
            </div>

            <Button className="h-[56px] w-[190px] bg-[#DB4444] hover:bg-[#DB4444] font-medium text-base text-[#FAFAFA]">
                Place Order
            </Button>
                
            </div>
        </form>
    </Wrapper>
  )
}

export default Checkout