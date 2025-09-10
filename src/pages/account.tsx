import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import Wrapper from "../layout/components/wrapper"

const Account = () => {
  return (
    <Wrapper className="mt-20 mb-[140px]">
        <div className="text-sm font-normal text-[#000000] flex items-center justify-between mb-20">
            <div className="flex items-center gap-3 ">
                <span>Home</span>
                <span>/</span>
                <span className="font-bold">My Account</span>
            </div>
            <h5 >
                Welcome! <span className="text-[#DB4444]">Md Rimel</span>
            </h5>
        </div>

        <div className="grid grid-cols-3">
            <div className="col-span-1">
                <div className=" text-base font-medium text-[#000000]">
                    <h1 className="mb-4">Manage My Account</h1>
                    <ul className="font-normal ml-6 flex flex-col gap-2 mb-6">
                        <li className="text-[#DB4444]">My Profile</li>
                        <li>Address Book</li>
                        <li>My Payment Options</li>
                    </ul>
                </div>
                <div className=" text-base font-medium text-[#000000]">
                    <h1 className="mb-4">My Orders</h1>
                    <ul className="font-normal ml-6 flex flex-col gap-2 mb-6">
                        <li>My Returns</li>
                        <li>My Cancellations</li>
                    </ul>
                </div>

                <div className=" text-base font-medium text-[#000000]">
                    <h1 className="mb-4">My WishList</h1>
                </div>
            </div>

            
            <div className="col-span-2 border border-[#0000000D] shadow rounded-[4px] py-10 px-20">
                <h4 className="text-[20px] font-medium text-[#DB4444] mb-4">Edit Your Profile</h4>
                <div className="flex flex-col gap-6 mb-6">
                    <div className="flex items-center gap-[50px]">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="first-name" className="text-base font-normal text-[#000000]">First Name</Label>
                        <Input 
                            className="h-[50px] w-[330px] bg-[#F5F5F5] text-base font-normal text-[#000000]"
                            id="first-name"
                            placeholder="Md"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="last-name" className="text-base font-normal text-[#000000]">Last Name</Label>
                        <Input 
                            className="h-[50px] w-[330px] bg-[#F5F5F5] text-base font-normal text-[#000000]"
                            id="last-name"
                            placeholder="Rimel"
                        />
                    </div>
                </div>


                <div className="flex items-center gap-[50px]">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="email" className="text-base font-normal text-[#000000]">Email</Label>
                        <Input 
                            className="h-[50px] w-[330px] bg-[#F5F5F5] text-base font-normal text-[#000000]"
                            id="email"
                            placeholder="rimel1111@gmail.com"
                            type="email"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="address" className="text-base font-normal text-[#000000]">Address</Label>
                        <Input 
                            className="h-[50px] w-[330px] bg-[#F5F5F5] text-base font-normal text-[#000000]"
                            id="address"
                            placeholder="Kingston, 5236, United State"
                        />
                    </div>
                </div>  

                <div className="mb-2">
                    <Label htmlFor="password" className="text-base font-normal text-[#000000] mb-2">Password Changes</Label>
                    <Input 
                            className="h-[50px] w-[710px] bg-[#F5F5F5] text-base font-normal text-[#000000]"
                            id="password"
                            placeholder="Current Passwod"
                        />
                </div>  

                <div>
                    <Input 
                            className="h-[50px] w-[710px] bg-[#F5F5F5] text-base font-normal text-[#000000]"
                            
                            placeholder="New Passwod"
                        />

                        <Input 
                            className="h-[50px] w-[710px] mt-4 bg-[#F5F5F5] text-base font-normal text-[#000000]"
                            
                            placeholder="Confirm New Passwod"
                        />
                </div>  

                <div className="flex items-center justify-between w-[710px]">
                    <div />
                    <div className="h-[56px]">
                        <Button className="h-full bg-transparent hover:bg-transparent text-[#000000] text-base font-normal cursor-pointer">
                            Cancel
                        </Button>
                        <Button className="h-full bg-[#DB4444] text-[#FAFAFA] text-base font-medium w-[214px] rounded-[4px] hover:bg-[#DB4444] cursor-pointer">
                              Save Changes
                        </Button>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    </Wrapper>
  )
}

export default Account