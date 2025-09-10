import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react"
import Wrapper from "../layout/components/wrapper"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import FlashSalesCard from "../components/components/flash-sale-card"
import { useState } from "react"

export const SectionTitle = ({ text } : {
    text: string
}) => {
    return(
        <div className="gap-4 mb-6 flex items-center">
            <div className="h-10 w-5 bg-[#DB4444]" />
            <span className="text-base text-[#DB4444] font-600">{text}</span>
        </div>
    )
}

const Hero = () => {
    const leftData = [
        {
            text: "Woman's Fashion",
            hasIcon: true,
        },
        {
            text: "Men's Fashion",
            hasIcon: true,
        },
        {
            text: "Electronics",
            hasIcon: false,
        },
        {
            text: "Home & Lifestyle",
            hasIcon: false,
        },
        {
            text: "Medicine",
            hasIcon: false,
        },
        {
            text: "Sports & Ourdoor",
            hasIcon: false,
        },
        {
            text: "Baby's Toys",
            hasIcon: false,
        },
        {
            text: "Griceries & Pets",
            hasIcon: false,
        },
        {
            text: "Health & Beauty",
            hasIcon: false,
        },
    ]
    return(
        <div>
            <Wrapper className="flex items-center gap-[45px]">
               <div className="border-r border-black h-full">
                 <div className="w-[217px] flex flex-col gap-4 mt-10">
                    {
                        leftData.map(leftDatum =>(
                            <div 
                                className="flex justify-between items-center text-base font-[400] text-[#000000] cursor-pointer"
                            >
                                {leftDatum.text}
                                {
                                    leftDatum.hasIcon && <ChevronRight />
                                }
                            </div>
                        ))
                    }
                </div>
               </div>
                <div className="h-[344px] w-full bg-[#000000] flex items-center justify-between relative">
                    <div className="ml-16">
                        <div className="flex items-center gap-6 mb-[20px]">
                            <img
                                src="/iphone.png"
                                width={40}
                                height={49}
                                alt="iphone 14 series image"
                            />
                            <h3 className="font-400 text-base text-[#FAFAFA]">iPhone 14 Series</h3>
                        </div>
                        <h2 className="text-5xl font-semibold text-[#FAFAFA] w-[294px] leading-[60px]">Up to 10% off Voucher</h2>
                        <Link 
                            to={''}
                            className="font-[500] text-base text-[#FAFAFA] flex items-center gap-2 mt-[22px]"
                        >
                            <span className="underline">Shop Now</span> <ArrowRight className="size-6" />
                        </Link>
                    </div>
                    <img 
                        src="iphone_hero.png" 
                        className="h-full" 
                        alt="" 
                    />
                    <div
                        className="absolute bottom-[11px] left-[50%] transform -translate-x-1/2 flex items-center gap-3"
                    >
                        <div className="size-3 bg-[#FFFFFF]  rounded-full" />
                        <div className="size-3 bg-[#FFFFFF]  rounded-full" />
                        <div className="size-3 bg-[#DB4444]  rounded-full" />
                        <div className="size-3 bg-[#FFFFFF]  rounded-full" />
                        <div className="size-3 bg-[#FFFFFF]  rounded-full" />
                    </div>
                    
                </div>
            </Wrapper>
        </div>
    )
}

const FlashSales = () => {
    return (
        <Wrapper className="mt-[140px]">
            <SectionTitle text="Today's"/>
            <div className="items-center">
                <div className="flex justify-between ">
                    <div className="flex items-baseline-last gap-[87px]">
                        <h2 className="text-4xl font-semibold text-[#000000]">Flash Sales</h2>
                    <div className="flex items-baseline-last">
                        <div className="flex flex-col ">
                            <span className="font-medium text-[12px] text-[#000000]">Days</span>
                            <h5 className="text-[32px] font-bold text-[#000000]">03</h5>
                        </div>
                        <div className="h-4 flex flex-col gap-2 mx-[17px]">
                            <span className="size-1 rounded-full bg-[#E07575]"/>
                            <span className="size-1 rounded-full bg-[#E07575]"/>
                        </div>
                        <div className="flex flex-col ">
                            <span className="font-medium text-[12px] text-[#000000]">Hours</span>
                            <h5 className="text-[32px] font-bold text-[#000000]">23</h5>
                        </div>
                        <div className="h-4 flex flex-col gap-2 mx-[17px]">
                            <span className="size-1 rounded-full bg-[#E07575]"/>
                            <span className="size-1 rounded-full bg-[#E07575]"/>
                        </div>
                        <div className="flex flex-col ">
                            <span className="font-medium text-[12px] text-[#000000]">Minutes</span>
                            <h5 className="text-[32px] font-bold text-[#000000]">19</h5>
                        </div>
                        <div className="h-4 flex flex-col gap-2 mx-[17px]">
                            <span className="size-1 rounded-full bg-[#E07575]"/>
                            <span className="size-1 rounded-full bg-[#E07575]"/>
                        </div>
                        <div className="flex flex-col ">
                            <span className="font-medium text-[12px] text-[#000000]">Seconds</span>
                            <h5 className="text-[32px] font-bold text-[#000000]">56</h5>
                        </div>
                    </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <Button className="size-[46px] rounded-full bg-[#F5F5F5] hover:bg-transparent cursor-pointer">
                            <ArrowLeft className="text-[#000000] size-6"/>
                        </Button>
                        <Button className="size-[46px] rounded-full bg-[#F5F5F5] hover:bg-transparent cursor-pointer">
                            <ArrowRight className="text-[#000000] size-6"/>
                        </Button>
                    </div>
                </div> 
            </div>
        </Wrapper>
    )
}

const FlashSalesContent = () => {

    const flashSalesContentData = [
        {
            discountPercent: 40,
            discountPrice: "120",
            image: "/pes.png",
            mumberOfRating: 5,
            name: "HAVIT HV-G92 Gamepad",
            outOfSales: true,
            price: "160",
            ratings: 88   
        },
        {
            discountPercent: 35,
            discountPrice: "960",
            image: "/keyboard.png",
            mumberOfRating: 4,
            name: "AK-900 Wired Keyboard",
            outOfSales: false,
            price: "1160",
            ratings: 76   
        },
        {
            discountPercent: 30,
            discountPrice: "370",
            image: "/monitor1.png",
            mumberOfRating: 4,
            name: "IPS LCD Gaming Monitor",
            outOfSales: true,
            price: "400",
            ratings: 76   
        },
        {
            discountPercent: 25,
            discountPrice: "375",
            image: "/chair.png",
            mumberOfRating: 5,
            name: "S-Series Comfort chair",
            outOfSales: true,
            price: "400",
            ratings: 99   
        },
        {
            discountPercent: 25,
            discountPrice: "375",
            image: "/chair.png",
            mumberOfRating: 5,
            name: "S-Series Comfort chair",
            outOfSales: true,
            price: "400",
            ratings: 99   
        },
    ]


    return(
        <div className="mt-10 mb-[60px] flex overflow-auto hide-scrollbar ml-[1%]">
           {
            flashSalesContentData.map(({discountPercent, discountPrice, image, mumberOfRating, name,outOfSales, price,ratings}) =>(
                <FlashSalesCard 
                    key={crypto.randomUUID()}
                    discountPercent={discountPercent}
                    discountPrice={discountPrice}
                    image={image}
                    mumberOfRating={mumberOfRating}
                    name={name}
                    outOfSales={outOfSales}
                    price={price}
                    ratings={ratings}
                    discountPercentShown={true}
                />
            ))
           }
        </div>
    )
}

const Categories = () => {
    return(
        <Wrapper>
            <SectionTitle text="Categories"/>
            <div className="items-center">
                <div className="flex justify-between ">
                    <div className="flex items-baseline-last gap-[87px]">
                        <h2 className="text-4xl font-semibold text-[#000000]">Browse By Category</h2>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button className="size-[46px] rounded-full bg-[#F5F5F5] hover:bg-transparent cursor-pointer">
                            <ArrowLeft className="text-[#000000] size-6"/>
                        </Button>
                        <Button className="size-[46px] rounded-full bg-[#F5F5F5] hover:bg-transparent cursor-pointer">
                            <ArrowRight className="text-[#000000] size-6"/>
                        </Button>
                    </div>
                </div> 
            </div>
        </Wrapper>
    )
}

const CategoriesContent = () => {

    const [number, setNumber] = useState<number>(3);
    
    const categoriesdata = [
        {
            image: "/phone.svg",
            text: "Phones",
            id: 0
        },
                {
            image: "/phone.svg",
            text: "Computers",
            id: 1
        },
                {
            image: "/phone.svg",
            text: "SmartWatch",
            id:3
        },
                {
            image: "/phone.svg",
            text: "Camera",
            id:4
        },
                {
            image: "/phone.svg",
            text: "HeadPhones",
            id: 5
        },
                {
            image: "/phone.svg",
            text: "Gaming",
            id:6
        },
    ]

    const Card = ({ image, text, id } : {
        image: string,
        text: string,
        id: number
    }) => {
        return (
            <div 
                className={"w-[170px] h-[145px] rounded-[4px] flex flex-col items-center justify-center border shrink-0 cursor-pointer" + ` ${id === number && 'bg-[#DB4444] text-white'}`}
                onClick={()=>{
                    setNumber(id)
                }}
            >
                <img 
                    src={image} 
                    alt=""
                    width={56}
                    height={56} 
                />
                <h5 className="font-[400] text-base text-[#000000]">{text}</h5>
            </div>
        )
    }

    return(
        <Wrapper className="flex items-center overflow-auto hide-scrollbar gap-[30px] mt-[60px] mb-[70px]">
            {
                categoriesdata.map(({ image, text, id }) =>(
                    <Card 
                        key={crypto.randomUUID()}
                        image={image}
                        text={text}
                        id={id}
                    />
                ))
            }
        </Wrapper>
    )
}

const BestSelling = () => {
    return(
        <Wrapper className="mb-[60px]">
            <SectionTitle text="This Month"/>
            <div className="items-center">
                <div className="flex justify-between ">
                    <div className="flex items-baseline-last gap-[87px]">
                        <h2 className="text-4xl font-semibold text-[#000000]">Best Selling Products</h2>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button
                            className="w-[159px] h-[56px] bg-[#DB4444] text-[#FAFAFA] text-base font-medium rounded-[4px] mx-auto hover:bg-[#DB4444] cursor-pointer"
                        >
                            View All
                        </Button>
                    </div>
                </div> 
            </div>
        </Wrapper>
    )
}

const BestSellingContent = () => {
    const bestSellingData = [
        {
            discountPercent: 40,
            discountPrice: "260",
            image: "/hoodie.png",
            mumberOfRating: 5,
            name: "The north coat",
            outOfSales: true,
            price: "360",
            ratings: 65   
        },
        {
            discountPercent: 35,
            discountPrice: "960",
            image: "/gucci-bag.png",
            mumberOfRating: 4,
            name: "The duffle bag",
            outOfSales: true,
            price: "360",
            ratings: 65   
        },
        {
            discountPercent: 30,
            discountPrice: "370",
            image: "/speaker-2.png",
            mumberOfRating: 4,
            name: "RGB liquid CPU Cooler",
            outOfSales: true,
            price: "160",
            ratings: 65   
        },
        {
            discountPercent: 40,
            discountPrice: "120",
            image: "/BookShelf.png",
            mumberOfRating: 5,
            name: "Small BookSelf",
            outOfSales: true,
            price: "360",
            ratings: 88   
        },
        
    ]
    return(
<div className="mt-10 mb-[140px] flex overflow-auto hide-scrollbar ml-[1%]">
           {
            bestSellingData.map(({discountPercent, discountPrice, image, mumberOfRating, name,outOfSales, price,ratings}) =>(
                <FlashSalesCard 
                    key={crypto.randomUUID()}
                    discountPercent={discountPercent}
                    discountPrice={discountPrice}
                    image={image}
                    mumberOfRating={mumberOfRating}
                    name={name}
                    outOfSales={outOfSales}
                    price={price}
                    ratings={ratings}
                    discountPercentShown={false}
                />
            ))
           }
        </div>
    )
}

const Banner = () => {
    return(
        <Wrapper className="h-[500px] bg-[#000000] mb-[71px]">
            <div className="flex items-center h-full mt-[37px] mr-[44px] mb-[43px] ml-[56px]">
                <div className="flex-1">
                <h4 className="text-base font-semibold text-[#00FF66] mb-8">Categories</h4>
                <h3 className="text-5xl font-semibold text-[#FAFAFA] w-[443px] leading-[60px] mb-8">Enhance Your Music Experience</h3>
                <div className="flex items-center gap-6">
                    <div 
                        className="h-[62px] w-[62px] rounded-full bg-[#FFFFFF] flex flex-col items-center justify-center">
                        <span className="text-base font-semibold text-[#000000]">23</span>
                        <span className="text-[11px] font-[400] text-[#000000]">Hours</span>
                    </div>
                    <div 
                        className="h-[62px] w-[62px] rounded-full bg-[#FFFFFF] flex flex-col items-center justify-center">
                        <span className="text-base font-semibold text-[#000000]">05</span>
                        <span className="text-[11px] font-[400] text-[#000000]">Days</span>
                    </div>
                    <div 
                        className="h-[62px] w-[62px] rounded-full bg-[#FFFFFF] flex flex-col items-center justify-center">
                        <span className="text-base font-semibold text-[#000000]">59</span>
                        <span className="text-[11px] font-[400] text-[#000000]">Minutes</span>
                    </div>
                    <div 
                        className="h-[62px] w-[62px] rounded-full bg-[#FFFFFF] flex flex-col items-center justify-center">
                        <span className="text-base font-semibold text-[#000000]">35</span>
                        <span className="text-[11px] font-[400] text-[#000000]">Seconds</span>
                    </div>
                </div>
                <Button
                    className="w-[171px] h-[56px] bg-[#00FF66] text-[#FAFAFA] text-base font-medium rounded-[4px] mx-auto hover:bg-[#00FF66] cursor-pointer mt-[40px]"
                >
                    Buy Now!
                </Button>

            </div>
            <img 
                src="/jbl.png" 
                alt=""
                width={600}
                height={420} 
                className="!h-[420px] flex-1"
                draggable={false}
            />
            </div>
            
        </Wrapper>
    )
}


const OurProduct = () => {
    return(
       <Wrapper className=" mb-[60px]">
            <SectionTitle text="Our Products"/>
            <div className="items-center">
                <div className="flex justify-between ">
                    <div className="flex items-baseline-last gap-[87px]">
                        <h2 className="text-4xl font-semibold text-[#000000]">Explore Our Products</h2>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button className="size-[46px] rounded-full bg-[#F5F5F5] hover:bg-transparent cursor-pointer">
                            <ArrowLeft className="text-[#000000] size-6"/>
                        </Button>
                        <Button className="size-[46px] rounded-full bg-[#F5F5F5] hover:bg-transparent cursor-pointer">
                            <ArrowRight className="text-[#000000] size-6"/>
                        </Button>
                    </div>
                </div> 
            </div>
        </Wrapper>
    )
}

const OurProductContent = () => {
    const OurProductContentData = [
        {
            discountPercent: 40,
            discountPrice: "100",
            image: "/Cesar.png",
            mumberOfRating: 3,
            name: "Breed Dry Dog Food",
            outOfSales: true,
            price: "160",
            ratings: 35,
            isNew: true
        },
        {
            discountPercent: 35,
            discountPrice: "360",
            image: "/Canon.png",
            mumberOfRating: 4,
            name: "CANON EOS DSLR CAMERA",
            outOfSales: false,
            price: "160",
            ratings: 95,
            isNew: true   
        },
        {
            discountPercent: 30,
            discountPrice: "700",
            image: "/Laptop.png",
            mumberOfRating: 5,
            name: "ASUS FHD Gaming Laptop",
            outOfSales: true,
            price: "160",
            ratings: 325,
            isNew: false   
        },
        {
            discountPercent: 40,
            discountPrice: "500",
            image: "/Cream tube.png",
            mumberOfRating: 4,
            name: "Curology Product Set",
            outOfSales: true,
            price: "160",
            ratings: 145,
            isNew: false  
        },
        {
            discountPercent: 35,
            discountPrice: "960",
            image: "/Car.png",
            mumberOfRating: 5,
            name: "Kids Electric Car",
            outOfSales: true,
            price: "160",
            ratings: 65,
            isNew: false  
        },
        {
            discountPercent: 30,
            discountPrice: "1160",
            image: "/soccer boot.png",
            mumberOfRating: 4,
            name: "Jr. Zoom Soccer Cleats",
            outOfSales: true,
            price: "160",
            ratings: 76 ,
            isNew: false  
        },
        {
            discountPercent: 35,
            discountPrice: "660",
            image: "/pad.png",
            mumberOfRating: 4,
            name: "GP11 Shooter USB Gamepad",
            outOfSales: true,
            price: "160",
            ratings: 55,
            isNew: false  
        },
        {
            discountPercent: 30,
            discountPrice: "660",
            image: "/jacket.png",
            mumberOfRating: 4,
            name: "Quited Satin Jacket",
            outOfSales: true,
            price: "160",
            ratings: 55,
            isNew: false  
        }
    ]
    return(
    <Wrapper className="mb-[60px] grid grid-cols-4 gap-y-[60px] gap-x-[30px]">
           {
            OurProductContentData.map(({discountPercent, discountPrice, image, mumberOfRating, name,outOfSales, price,ratings, isNew}) =>(
                <FlashSalesCard 
                    key={crypto.randomUUID()}
                    discountPercent={discountPercent}
                    discountPrice={discountPrice}
                    image={image}
                    mumberOfRating={mumberOfRating}
                    name={name}
                    outOfSales={outOfSales}
                    price={price}
                    ratings={ratings}
                    discountPercentShown={false}
                    isNew={isNew}
                />
            ))
           }
        </Wrapper>
    )
}

const NewArrival = () => {
    return(
        <Wrapper className=" mb-[60px]">
            <SectionTitle text="Featured"/>
            <div className="items-center">
                <div className="flex justify-between ">
                    <div className="flex items-baseline-last gap-[87px]">
                        <h2 className="text-4xl font-semibold text-[#000000]">New Arrival</h2>
                    </div>
                </div> 
            </div>
        </Wrapper>
    )
}

const NewArrivalContent = () => {
    return(
        <Wrapper className="h-[600px] flex items-center gap-[30px] mb-[140px]">
            <div
                style={{backgroundImage: "url('/ps5_background_image.png')", backgroundSize: '100%', backgroundColor: 'black', backgroundRepeat: 'no-repeat', backgroundPosition: 'center/center'}}
                className="h-full w-full flex-1 bg-[#000000] flex items-end rounded-[4px]"
            >
                <div className="w-[242px] m-[32px]">
                    <h4 className="text-2xl font-semibold text-[#FAFAFA]">PlayStation 5</h4>
                    <h5 className="font-normal text-[14px] text-[#FAFAFA] my-4">Black and White version of the PS5 coming out on sale.</h5>
                    <h6 className="font-medium text-base text-[#FFFFFF] underline">Shop Now</h6>
                </div>
            </div>
            <div
                className="flex-1 flex flex-col gap-8"
            >
                <div
                    style={{backgroundImage: "url('/women_collection.png')", backgroundSize: '100%', backgroundColor: 'black', backgroundRepeat: 'no-repeat', backgroundPosition: 'center/center'}}
                    className="h-[284px] w-full flex items-end rounded-[4px]"
                >
                    
                    <div className="w-[255px] m-[32px] flex-1">
                        <h4 className="text-2xl w-full font-semibold text-[#FAFAFA]">Women{'’'}s Collections</h4>
                        <h5 className="font-normal text-[14px] text-[#FAFAFA] my-4">Featured woman collections that give you another vibe.</h5>
                        <h6 className="font-medium text-base text-[#FFFFFF] underline">Shop Now</h6>
                    </div>

                     <img src="/women_collection.png" alt="" className="flex-1"/>
                </div>
                <div
                    className="h-[284px] w-full flex items-center gap-[30px]"
                >
                    <div
                        style={{backgroundImage: "url('/speakers.png')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: 'black'}}
                        className="h-full w-full flex items-end rounded-[4px]"
                    >
                        <div className="w-[242px] m-[32px]">
                            <h4 className="text-2xl font-semibold text-[#FAFAFA]">Speakers</h4>
                            <h5 className="font-normal text-[14px] text-[#FAFAFA] my-2">Amazon wireless speakers</h5>
                            <h6 className="font-medium text-base text-[#FFFFFF] underline">Shop Now</h6>
                        </div>
                    </div>
                    <div
                        style={{backgroundImage: "url('/perfume.png')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: 'black'}}
                        className="h-full w-full flex items-end rounded-[4px]"
                    >
                        <div className="w-[242px] m-[32px]">
                            <h4 className="text-2xl font-semibold text-[#FAFAFA]">Perfume</h4>
                            <h5 className="font-normal text-[14px] text-[#FAFAFA] my-2">GUCCI INTENSE OUD EDP</h5>
                            <h6 className="font-medium text-base text-[#FFFFFF] underline">Shop Now</h6>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export const CustomerService = () => {

    const CustomerServiceData = [
        {
            url: '/delivery.png',
            heading: 'FREE AND FAST DELIVERY',
            text: 'Free delivery for all orders over $140'
        },
        {
            url: '/call.png',
            heading: '24/7 CUSTOMER SERVICE',
            text: 'Friendly 24/7 customer support'
        },
                {
            url: '/secured.png',
            heading: 'MONEY BACK GUARANTEE',
            text: 'We reurn money within 30 days'
        },
    ]
    const Card = ({ url, heading, text } : {
        url: string,
        heading: string,
        text: string
    }) => {
        return(
            <div className="h-[161px] w-[249px] flex flex-col items-center justify-center">
                <img 
                    src={url} 
                    alt="" 
                    height={80}
                    width={80}
                    className="w-20 h-20 mb-6"
                />
                <div className="w-full">
                    <h4 className="text-[20px] font-semibold text-[#000000] mb-2">{heading}</h4>
                    <h5 className="text-sm font-normal text-[#000000]">{text}</h5>
                </div>
            </div>
        )
    }

    return(
        <div
            className="w-[943px] h-[161px] mx-auto grid grid-cols-3 gap-[88px] mb-[140px]"
        >
         {
            CustomerServiceData.map(({ heading, text, url }) =>(
                <Card 
                    key={crypto.randomUUID()}
                    heading={heading}
                    text={text}
                    url={url}
                />
            ))
         }
        </div>
    )
}
const LandingPage = () => {
  return (
    <div>
        <Hero />
        <FlashSales />
        <FlashSalesContent />
        <Button
            className="w-[234px] h-[56px] bg-[#DB4444] text-[#FAFAFA] text-base font-medium rounded-[4px] mx-auto hover:bg-[#DB4444] cursor-pointer flex place-items-center mb-[60px]"
        >
            View All Products
        </Button>
        <Wrapper className="mb-20">
            <hr className="text-[#000000]"/>
        </Wrapper>
        <Categories />
        <CategoriesContent />
        <Wrapper className="mb-20">
            <hr className="text-[#000000]"/>
        </Wrapper>
        <BestSelling />
        <BestSellingContent />
        <Banner />
        <OurProduct />
        <OurProductContent />
        <Button
            className="w-[234px] h-[56px] bg-[#DB4444] text-[#FAFAFA] text-base font-medium rounded-[4px] mx-auto hover:bg-[#DB4444] cursor-pointer flex place-items-center mb-[60px]"
        >
            View All Products
        </Button>
       <NewArrival />
       <NewArrivalContent />
       <CustomerService />
    </div>
  )
}

export default LandingPage