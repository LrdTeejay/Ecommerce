import { useNavigate } from "react-router-dom"
import { Button } from "../components/ui/button"
import Wrapper from "../layout/components/wrapper"

const NotFoundPage = () => {
    const navigate = useNavigate();
  return (
    <Wrapper className="mt-20 mb-[140px]">
        <div className="flex items-center gap-3 mb-[140px]">
            <span>Home</span><span>/</span>
            <span className="font-bold">404 Error</span>
        </div>
        <div className="text-center">
            <h1 className="font-medium text-[110px] text-[#000000] mb-10">404 Not Found</h1>
            <h5 className="text-base font-normal text-[#000000]">Your visited page not found. You may go home page.</h5>
        </div>
        <div className="flex items-center justify-center mt-20">
            <Button 
                className="h-[56px] w-[254px] mx-auto font-medium text-base text-[#FAFAFA] bg-[#DB4444] hover:bg-[#DB4444] cursor-pointer"
                onClick={()=>{
                    navigate('/')
                }}
            >
            Back to home page
            </Button>
        </div>
    </Wrapper>
  )
}

export default NotFoundPage