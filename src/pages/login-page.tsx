import { Link, useNavigate } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import AuthCard from "../layout/components/auth-card"
import type { FormEvent } from "react"
import { useAuthProvider } from "../context/auth-context"

const LoginPage = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuthProvider();
  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    navigate('/user')
    setIsLoggedIn(true)
  }

  return (
   <AuthCard>
        <form className="h-[530px]">
            <h2 className="text-4xl font-medium text-[#000000] mb-6">Log in to Exclusive</h2>
            <h3 className="text-base font-normal text-[#000000]">Enter your details below</h3>
            <Input 
                placeholder="Email or Phone Number"
                className="h-8 border-0 mt-12 ring-0 outline-0 border-b mb-10 text-base font-normal text-[#000000]"
                required
            />
            
            <Input 
                placeholder="Password"
                className="h-8 border-0 outline-0 border-b mb-10 text-base font-normal text-[#000000"
                type="password"
                required
            />
            <div className="flex items-center justify-between">
              <Button 
                className="h-[56px] bg-[#DB4444] font-medium text-base text-[#FAFAFA] w-[143px] rounded-[4px] cursor-pointer hover:bg-[#DB4444]"
                onClick={handleLogin}
              >
                Log In

              </Button>
              <Link 
                to={'/forgot-password'}
                className="text-base font-normal text-[#DB4444]"
              >
                Forget Password?
              </Link>
            </div>
        </form>
    </AuthCard>
  )
}

export default LoginPage