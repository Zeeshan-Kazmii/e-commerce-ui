import {cn} from "@/lib/utils";
type CustomBUttomProps ={
  disabled?:boolean;
  isRounded?:boolean;
};
const CustomButtom = ({disabled=false, 
  isRounded=false }:CustomBUttomProps) => {
  return (
    <button
    disabled={disabled}
      className={cn("text-sm", disabled? "bg-blue-300":"bg-red-500",
        isRounded && "rounded-full",
        "p-4"
      )} >
        HELLO
    </button>
   
  )
}

export default CustomButtom