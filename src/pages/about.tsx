import { useState } from "react"
import { cn } from "../lib/utils"
import { Instagram, Linkedin, Twitter } from "lucide-react"
import { CustomerService } from "./landing-page"

const MinorCard = ({ image, title, text, isActive, setIsActive, id } :{
    image: string,
    title: string,
    text: string,
    isActive: boolean,
    setIsActive: (n: number) => void,
    id: number
}) => {



    return(
        <div 
            className={cn(`h-[230px] w-[270px] cursor-pointer flex text-[#000000] flex-col items-center justify-center border border-[#0000004D] rounded-[4pc
        x] ${isActive && 'bg-[#DB4444] border-[#DB4444] text-[#FFFFFF]'}`)}
            onClick={()=>{
                setIsActive(id)
            }}
        >
            <div 
                className={cn(`size-20 rounded-full bg-black flex items-center justify-center mb-6 ${isActive && 'bg-[#FFFFFF]'}`)}
            >
                <img 
                src={image}
                alt="site"
                className={cn(`size-10 ${id !== 838 && isActive && 'invert-100'} ${id == 838 && !isActive && 'invert-100'}`)} 
                draggable={false}
            />
            </div>
            <h4 className="text-[32px] font-bold  mb-3">{title} </h4>
            <h5 className="font-normal text-base ">{text}</h5>
        </div>
    )
}

const MinorContent = () => {
    const [active, setIsActive] = useState<number>(838);

    const minorData = [
        {
            image: '/site.png',
            title: "10.5k",
            text: "Sallers active our site",
            id: 0,
        },
        {
            image: '/money.png',
            title: "33k",
            text: "SMopnthly Produduct Sale",
            id: 838
        },
        {
            image: '/shopping-bag.png',
            title: "45.5k",
            text: "Customer active in our site",
            id: 923
        },
        {
            image: '/bag-of-money.png',
            title: "25k",
            text: "Anual gross sale in our site",
            id: 626
        },
    ]
    return(
        <div className="grid grid-cols-4 mb-[140px]">
            {
                minorData.map(({image, text, title, id}) =>(
                    <MinorCard 
                        key={crypto.randomUUID()}
                        image={image}
                        text={text}
                        title={title}
                        isActive={active === id}
                        setIsActive={setIsActive}
                        id={id}
                    />
                ))
            }
        </div>
    )
}

const MenCard = ({ image, role, name } : {
    image: string,
    role: string,
    name: string
}) => {
    return(
        <div className="h-[564px] w-[370px]">
            <img 
                src={image}
                alt="tom cruise"
                className="h-[430px] w-[370px] mb-8" 
            />
            <div>
                <h3 className="text-[32px] font-medium text-[#000000] mb-2">{name}</h3>
                <h4 className="text-base font-normal text-[#000000]">{role}</h4>
                <div className="flex items-center gap-4 mt-4">
                    <Twitter className="cursor-pointer"/>
                    <Instagram className="cursor-pointer"/>
                    <Linkedin className="cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}

const Men = () => {
    const mendata = [
        {
            name: "Tom Cruise",
            role: "Founder & Chairman",
            image: "/tom-cruise.png"
        },
        {
            name: "Emma Watson",
            role: "Managing Director",
            image: "/emma-wilson.png"
        },
        {
            name: "Will Smith",
            role: "Product Designer",
            image: "/will-smith.png"
        }
    ]
    return(
        <div className="grid grid-cols-3 mb-10">
            {
                mendata.map(({ image, name, role }) =>(
                    <MenCard 
                        key={crypto.randomUUID()}
                        name={name}
                        image={image}
                        role={role}
                    />
                ))
            }
        </div>
    )
}

const FourDots = () => {
    return(
        <div className="w-[112px] mx-auto flex gap-3 mb-[140px]">
            <div className="size-3 bg-[#000000] rounded-full"/>
            <div className="size-3 bg-[#000000] rounded-full"/>
            <div className="size-3 bg-[#DB4444] rounded-full"/>
            <div className="size-3 bg-[#000000] rounded-full"/>
            <div className="size-3 bg-[#000000] rounded-full"/>
        </div>
    )
}
const About = () => {
  return (
    <div className="mt-20 ml-[1%]">
        <div className="flex items-center gap-3 ">
            <span>Home</span><span>/</span>
            <span className="font-bold">About</span>
        </div>
        <div className="flex mt-[42px] items-center mb-[140px]">
            <div className="flex-1">
                <h3 className="text-[54px] font-semibold text-[#000000] mb-10">Our Story</h3>
                <h4 className="w-[525px] text-base font-normal text-[#000000] mb-6">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </h4>
                <h4 className="w-[525px] text-base font-normal text-[#000000]">
                    Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
                </h4>
            </div>
            <div className="flex-1">
                <img 
                    src="/about.png" 
                    alt="about image"
                    className="h-[609px] rounded-[4px]" 
                />
            </div>
        </div>
        <div>
            <MinorContent />
            <Men />
            <FourDots />
            <CustomerService />
        </div>
    </div>
  )
}

export default About