import { LogOut, Star, User, XCircle } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "../../components/ui/dropdown-menu";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";


export function DropdownMenuDemo({isLoggedIn} : {
    isLoggedIn: boolean
}) {

  const navigate = useNavigate();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer" asChild>
        <Button className={"rounded-full  bg-[#DB4444] hover:bg-[#DB4444] flex items-center justify-center "+ `${isLoggedIn ? 'block' : 'hidden'}`}>
          <User />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[224px] blur-[150] z-50" align="end">
        <DropdownMenuGroup className="flex flex-col justify-center text-center">
          <DropdownMenuItem onClick={()=>{
            navigate('/account')
          }}>
            <User size={24} className="size-6"/> <span>Manage My Account</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <img 
                src="/mailbag.svg" 
                alt="mailbag icon"
                height={24}
                width={24}
                className="size-6 invert-100" 
            />
            <span>My Order</span>
            
          </DropdownMenuItem>
          <DropdownMenuItem>
            <XCircle size={24} className="size-6"/>
            <span>My Cancellations</span>            
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Star size={24} className="size-6"/>
           <span>My Reviews</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogOut size={24} className="size-6"/>
           <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
