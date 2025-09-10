import { useState } from "react"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"

export const ProductCard = ({ image, text } : {
    image: string,
    text: string
}) => {
    return(
        <div
            className="flex items-center gap-5"
        >
            <img 
                src={image} 
                alt="monitor"
                className="h-[54px] w-[54px]"
            />
            <h5 className="text-base font-normal text-[#000000]">{text}</h5>
        </div>
    )
}

const Numbers = ({ providedAmount } : {
  providedAmount: string
}) => {
  const [amount, setAmount] = useState<string>(providedAmount)
  const realValue = +amount < 10 ?  `0${amount}` : amount
  return(
    <div>
      <input 
        onChange={(num)=>{
          setAmount(num.target.value)
        }}
        className="w-[72px] h-11 bg-white border-[1.5px] border-[#00000066] rounded-[4px] py-2.5 px-4 text-base" 
        type="number"  
        name="" 
        id=""
        value={realValue}
        placeholder="01" 
      />
    </div>
  )
}

const cart = [
  {
    cart_product: <ProductCard image="/monitor.png" text="LCD Monitor" />,
    cart_price: "$650",
    cart_quantity: <Numbers providedAmount="1" />,
    cart_subtotal: "$650",
  },
  {
    cart_product: <ProductCard text="H1 Gamepad" image="/gamepad.png"/>,
    cart_price: "$550",
    cart_quantity: <Numbers providedAmount="2"/>,
    cart_subtotal: "$1100",
  },
]

export function TableDemo() {
  return (
    <Table className="">
      <TableCaption></TableCaption>
      <TableHeader className="">
        <TableRow className="text-center">
          <TableHead >Product</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead className="text-right">Subtotal</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="">
        {cart.map(({cart_price, cart_product, cart_quantity, cart_subtotal}) => (
          <TableRow key={crypto.randomUUID()} className="gap-12">
            <TableCell className="font-medium py-5 mb-20 border-spacing-7">{cart_product}</TableCell>
            <TableCell>{cart_price}</TableCell>
            <TableCell>{cart_quantity}</TableCell>
            <TableCell className="text-right">{cart_subtotal}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
