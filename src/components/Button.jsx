const Button = ({ children }) => {
  return (
    <div className='px-[30px] md:max-lg:px-[20px] py-[10px] md:max-lg:py-[8px] bg-blue-1 text-white-1 text-xs 2xl:text-sm tracking-wider border-2 border-blue-1 font-bold inline rounded-md  hover:opacity-80'>
      {children}
    </div>
  );
};

export default Button;
