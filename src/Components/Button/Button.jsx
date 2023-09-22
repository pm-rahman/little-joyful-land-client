const Button = ({ type, onClick, size, variant, className, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-sm uppercase sm:text-base text-center font-semibold
   ${
     size === "block"
       ? //    block
         "w-full text-center py-2 sm:py-3"
       : size !== "small"
       ? //    big
         "w-fit px-4 sm:px-10 py-2 sm:py-3"
       : //    small
         "w-fit px-3 sm:px-4 py-[10px]"
   }
    ${
      variant
        ? variant === "outline"
          ? //   outline
            "hover:bg-[#f3bd98] hover:text-black border-2 border-[#f3bd98] text-[#f3bd98] bg-white"
          : variant === "outline-fill"
          ? //   outline fill
            "bg-[#f3bd98] text-black border-2 border-[#f3bd98] hover:text-[#f3bd98] hover:bg-white"
          : variant === "white-blue"
          ? //   white blue
            "bg-white text-black hover:bg-[#cee5ec]"
          : //   white
            variant === "white" &&
            "bg-white text-black hover:bg-[#f3bd98] hover:text-white"
        : //   normal
          "bg-[#f3bd98] border-2 border-[#f3bd98] text-black hover:text-black hover:bg-[#cee5ec] hover:border-[#cee5ec]"
    }
    ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
