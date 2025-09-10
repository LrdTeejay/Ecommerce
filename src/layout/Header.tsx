import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Ads from "./components/ads";
import Wrapper from "./components/wrapper";
import { Heart, Search, SendHorizonal, ShoppingCart } from "lucide-react";
import { Input } from "../components/ui/input";
import { useEffect, useState } from "react";
import { DropdownMenuDemo } from "./components/drop-down-user";
import { useAuthProvider } from "../context/auth-context";

const Footer = () => {
    
    return(
    <footer className="bg-[#000000] h-[440px]">
       <Wrapper className="text-[#FAFAFA] w-full grid grid-cols-4 pt-20 px-[135px] pb-[124px]">
       <div className="flex flex-col gap-4">
         <div className="flex flex-col gap-6">
            <h2 className="font-bold text-2xl">Exclusive</h2>
            <h3 className="text-[20px] font-medium">Subscribe</h3>
            <h4 className="text-base font-normal">Get 10% off your first order</h4>
          </div>
          <div className="h-12 w-[217px] relative">
            <Input 
              type="email" 
              required
              placeholder="Enter your email"
              className="h-full w-full"
            />
            <SendHorizonal className="absolute top-[50%] transform -translate-y-1/2 right-[17px] "/>
          </div>
       </div>

        <div>
          <div className="flex flex-col gap-6 w-[175px]">
            <h2 className="font-bold text-2xl">Support</h2>
            <h3 className="text-base font-normal">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</h3>
            <h4 className="text-base font-normal">exclusive@gmail.com</h4>
            <h4 className="text-base font-normal">+88015-88888-9999</h4>
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-6 ">
            <h2 className="font-bold text-2xl">Account</h2>
            <h3 className="text-base font-normal">My Account</h3>
            <h4 className="text-base font-normal">Login / Register</h4>
            <h4 className="text-base font-normal">Cart</h4>
            <h4 className="text-base font-normal">Wishlist</h4>
            <h4 className="text-base font-normal">Shop</h4>
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-6 ">
            <h2 className="font-bold text-2xl">Quick Link</h2>
            <h3 className="text-base font-normal">Privacy Policy</h3>
            <h4 className="text-base font-normal">Terms Of Use</h4>
            <h4 className="text-base font-normal">FAQ</h4>
            <h4 className="text-base font-normal">Contact</h4>
          </div>
        </div>
       </Wrapper>
    </footer>
    )
}

const links = [
  {
    name: "Home",
    url: "/"
  },
  {
    name: "Contact",
    url: "/contact"
  },
  {
    name: "About",
    url: "/about"
  },
  {
    name: "Sign Up",
    url: "/sign-up"
  },
]

const Header = () => {

  const location = useLocation();
  const [pathName, setPathName] = useState<string>(location.pathname);
  const navigate = useNavigate()
  const { isLoggedIn } = useAuthProvider()
  useEffect(() =>{
    setPathName(location.pathname)
  }, [location.pathname])

  return (
    <div className={`flex flex-col  min-h-screen`}>
      <Ads />
      <header
        className="mt-10 mb-4"
      >
        <Wrapper className="flex items-center justify-between ">
          <Link 
            to={'/'}
            className={"text-2xl font-bold text-[#000000]"}
          >
            Exclusive
          </Link>
          <ul className="flex items-center gap-12">
            {
              links.map(link =>(
                <li key={crypto.randomUUID()}>
                  <Link 
                    to={link.url}
                    className={"text-base font-[400] text-[#000000]"+ ` ${pathName === link.url && 'underline' }` + ` ${pathName === '/user' && link.url === '/' && 'underline'}` + ` ${isLoggedIn && link.url === '/sign-up' && 'hidden'} `}
                  >
                    {link.name}
                  </Link>
                </li>
              ))
            }
          </ul>

          <div className="flex items-center gap-6">
            <div className="relative w-[243px] h-[38px]">
              <Input 
                placeholder="What are you looking for?"
                className="h-full w-full"
              />
              <Search className="absolute top-[50%] transform -translate-y-[50%] right-[11px] size-6 text-[#000000]"/>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Heart 
                  onClick={()=>{
                    navigate('/wishlist')
                    }}
                    role="button" 
                    className="cursor-pointer"
                  />
                 {isLoggedIn && <span className="absolute -top-[5px] -right-[5px] size-4 bg-[#DB4444] rounded-full flex items-center justify-center text-white text-[12px]">4</span>}
              </div>
              <div className="relative">
                <ShoppingCart
                  onClick={()=>{
                    navigate('/cart')
                  }}
                  role="button"
                  className="cursor-pointer"
                />
                {isLoggedIn && <span className="absolute -top-[5px] -right-[5px] size-4 bg-[#DB4444] rounded-full flex items-center justify-center text-white text-[12px]">2</span>}
              </div>
              <DropdownMenuDemo isLoggedIn={isLoggedIn}/>
            </div>
          </div>
        </Wrapper>
      </header>
      <hr className="text-[#000000]"/>
      <Outlet />
      <Footer />
    </div>
    
  )
}

export default Header