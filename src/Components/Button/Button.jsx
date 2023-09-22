
const Button = ({onClick,variant,className,children}) => {
    return <button onClick={onClick} className={`text-sm sm:text-base px-5 sm:px-7 py-2 sm:py-3 font-semibold
    ${variant?
        variant!=="outline"?
        "":
        "bg-[#f3bd98] text-white border-2 border-[#f3bd98] hover:text-[#f3bd98] hover:bg-white":
        "bg-[#f3bd98] text-white hover:text-black hover:bg-[#cee5ec]"}
    ${className}`}>{children}</button>;
};

export default Button;