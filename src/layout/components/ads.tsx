import { ChevronDown } from "lucide-react"
import Wrapper from "./wrapper"

const Ads = () => {
  return (
    <section 
        className="h-12 bg-[#000000] text-[#FAFAFA]  text-sm font-[400]"
    >
        <Wrapper className="flex items-center h-full justify-between">

            <div />
            <div>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
                <span className="ml-2 font-[600] underline">ShopNow</span>
            </div>
            <div className="flex items-center">
                English
                <ChevronDown className="size-6 ml-[5px]" />
            </div>
        </Wrapper>
    </section>
  )
}

export default Ads