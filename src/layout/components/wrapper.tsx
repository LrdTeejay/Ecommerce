import { cn } from "../../lib/utils"

const Wrapper = ({ children, className } : {
    children: React.ReactNode,
    className?: string
}) => {
  return (
    <div className={cn('w-[98%] mx-auto', className)}>
        {children}
    </div>
  )
}

export default Wrapper