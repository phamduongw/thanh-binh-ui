import Button from '../../components/Button';

const Welcome = () => {
  return (
    <div className='relative overflow-hidden border-t-blue-1 md:max-lg:border-t-[3.5vw] max-xl:border-t-[1.5vw] max-md:h-[75.5vw] max-lg:h-[47vw] max-xl:h-[45vw] h-[43.5vw]'>
      <div
        className={`w-0 h-0 border-t-[43vw] border-t-blue-1 border-l-[115vw] border-l-transparent translate-x-[-15vw] max-md:hidden`}
      />
      <div className='absolute top-0 w-full flex md:justify-center px-[3vw]'>
        <div className='md:basis-1/2 md:translate-y-[18vw] translate-y-[25vw] translate-x-[9vw]'>
          <h1 className='text-black-1 md:text-[2.4vw] text-[7.1vw] 2xl:leading-[3.5vw] md:leading-[4vw] leading-[11vw] font-bold'>
            We give
            <br />
            <span className='text-blue-1'>Perfect</span> Solutions
            <br />
            of Your Problem <span className='text-blue-1'>Print</span>
          </h1>
          <div className='md:translate-y-[4.2vw] translate-y-[6.5vw]'>
            <Button>Get Started</Button>
          </div>
        </div>
        <div className='md:basis-1/2 translate-y-[12vw] translate-x-[-9vw] max-md:hidden'>
          <img alt='' src={`images/cards.png`} />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
