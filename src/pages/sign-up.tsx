import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import AuthCard from "../layout/components/auth-card"

const SignUp = () => {
  return (
    <AuthCard>
        <form className="h-[530px]">
            <h2 className="text-4xl font-medium text-[#000000] mb-6">Create an account</h2>
            <h3 className="text-base font-normal text-[#000000]">Enter your details below</h3>
            <Input 
                placeholder="Name"
                className="h-8 border-0 mt-12 ring-0 outline-0 border-b mb-10 text-base font-normal text-[#000000]"
            />
            <Input 
                placeholder="Email or Phone Number"
                className="h-8 border-0 outline-0 border-b mb-10 text-base font-normal text-[#000000"
            />
            <Input 
                placeholder="Password"
                className="h-8 border-0 outline-0 border-b mb-10 text-base font-normal text-[#000000"
                type="password"
            />
            <Button className="h-[56px] bg-[#DB4444] font-medium text-base text-[#FAFAFA] w-full rounded-[4px] mb-4 cursor-pointer hover:bg-[#DB4444]">
                Create Account
            </Button>
             <Button className="h-[56px] bg-[#FAFAFA] font-medium text-base text-[#000000] w-full rounded-[4px] cursor-pointer hover:bg-[#FAFAFA] border-black border mb-8">
                <img 
                    src="/google.svg" 
                    alt="google icon"
                    className="h-6 w-6 mr-4" 
                />
                Sign up with Google
            </Button>
            <h6 className="text-center font-normal text-base text-[#000000]">Already have account? <Link className="font-medium" to={'/login'}>Log in</Link></h6>
        </form>
    </AuthCard>
  )
}

export default SignUp