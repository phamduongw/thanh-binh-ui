const Card = ({ icon, title, content }) => {
  return (
    <div
      key={title}
      className='bg-white rounded-md border-[1px] border-[#e5e5e5] text-center text-black-1 hover:bg-blue-1 hover:text-white transition-all duration-300 group xl:w-[360px] xl:h-[318.77px] xl:p-[30px] lg:w-[293.33px] lg:h-[293.36px] lg:p-[20px] md:w-[220px] md:h-[322.55px] p-[20px] max-md:mb-[25px]'
    >
      <div className='flex justify-center text-blue-1 group-hover:text-white transition-all duration-300 xl:text-6xl xl:pt-[30px] lg:text-5xl pt-[15px] pb-[15px] text-[34px] '>
        {icon}
      </div>
      <h3 className='text-sm font-bold my-[10px] pb-[10px]'>{title}</h3>
      <div className='text-xs mb-[10px] pb-[10px] leading-[1.8]'>{content}</div>
    </div>
  );
};

export default Card;
