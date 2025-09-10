import { Mail, Phone } from "lucide-react"
import Wrapper from "../layout/components/wrapper"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Button } from "../components/ui/button"


const Contact = () => {
  return (
    <Wrapper className="mt-20 mb-[140px]">
      <div className="flex items-center gap-3 mb-20">
            <span>Home</span><span>/</span>
            <span className="font-bold">Contact</span>
        </div>

        <div className="grid grid-cols-3 h-[457px] gap-[30px]">
          <div className="col-span-1 h-full border border-[#0000000D] shadow rounded-[4px] py-10 px-[35px]">
            <div className="flex items-center gap-4 mb-6">
              <div className="size-10 rounded-full bg-[#DB4444] flex items-center justify-center">
                <Phone className="size-5 text-[white]"/>
              </div>
              <span className="text-base font-medium text-[#000000]">Call To Us</span>
            </div>
            <div className="text-sm font-normal text-[#000000] flex flex-col gap-4">
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>
            <hr className="my-8" />

            <div className="flex items-center gap-4 mb-6">
              <div className="size-10 rounded-full bg-[#DB4444] flex items-center justify-center">
                <Mail className="size-5 text-[white]"/>
              </div>
              <span className="text-base font-medium text-[#000000]">Write To US</span>
            </div>
            <div className="text-sm font-normal text-[#000000] flex flex-col gap-4">
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>
          <form className="col-span-2 h-full border border-[#0000000D] shadow rounded-[4px] py-10 px-[31px]">
            <div className="flex items-center gap-4 mb-8">
              <Input 
                className="h-[50px] bg-[#F5F5F5] w-[235px]"
                placeholder="Your Name *"
                required
              />
              <Input 
                className="h-[50px] bg-[#F5F5F5] w-[235px]"
                placeholder="Your Email *"
                required
              />
              <Input 
                className="h-[50px] bg-[#F5F5F5] w-[235px]"
                placeholder="Your Phone *"
                required
              />
            </div>
            <Textarea 
              className="w-[737px] h-[207px] bg-[#f5f5f5] resize-none mb-8"
              placeholder="Your Massage"
              required
            />
            <div className="flex items-center justify-between">
              <div />
              <Button className="bg-[#DB4444] hover:bg-[#DB4444] cursor-pointer h-[56px] w-[215px] text-[#FAFAFA] text-base font-medium">
                Send Massage
              </Button>
            </div>
          </form>
        </div>
    </Wrapper>
  )
}

export default Contact