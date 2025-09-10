import type React from "react"

const AuthCard = ({ children } : {
    children: React.ReactNode
}) => {
  return (
    <div
        className="mr-[1%] mt-[60px] grid grid-cols-9 h-[781px] place-items-center rounded-[4px]"
    >
        <img 
            src="/auth-image.png" 
            alt="auth image"
            className="col-span-5 w-full h-full"
            draggable={false}
             
        />
       <div className="col-span-4">
         {children}
       </div>
    </div>
  )
}

export default AuthCard