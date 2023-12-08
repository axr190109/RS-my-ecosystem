const AuthFrame = () => {
  return (
    <div className="absolute h-full w-[calc(100%_-_752px)] top-[0px] right-[752px] bottom-[0px] left-[0px] flex flex-col items-start justify-center py-20 pr-40 pl-20 box-border gap-[40px] bg-[url('/public/frame1@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-xl text-grayscale-white font-desktop-caption-bold-link">
      <div className="absolute my-0 mx-[!important] top-[80px] left-[80px] w-[181.5px] h-10 z-[0]">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/ee-logo-2@2x.png"
        />
      </div>
      <div className="self-stretch relative tracking-[-0.02em] leading-[32px] z-[1]">
        <span className="font-extrabold">Resolute Future</span>
        <span>
          {" "}
          believes the future is filled with people who take control of their
          lives and their time to pursue their passions.
        </span>
      </div>
      <div className="self-stretch relative tracking-[-0.02em] leading-[32px] z-[2]">
        <span>{`We are resolute in our mission to remove the friction in the Entrepreneurial world and create a `}</span>
        <span className="font-extrabold">Future of Entrepreneurs</span>
        <span>.</span>
      </div>
    </div>
  );
};

export default AuthFrame;
