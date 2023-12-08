import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import StateDefaultTypeFilledSi from "../components/StateDefaultTypeFilledSi";
import SlackButton from "../components/SlackButton";

const Landing = () => {
  const navigate = useNavigate();

  const onButtonDefaultClick = useCallback(() => {
    navigate("/signin");
  }, [navigate]);

  const onLabelContainerClick = useCallback(() => {
    navigate("/signin");
  }, [navigate]);

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center py-[334px] px-20 box-border bg-[url('/public/landing@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-xl text-grayscale-white font-desktop-body">
      <div className="relative tracking-[-0.02em] leading-[32px] flex items-center w-[832px] z-[0]">
        <span className="[line-break:anywhere] w-full">
          <span>{`We believe `}</span>
          <b>Entrepreneurship</b>
          <span>
            {" "}
            is the greatest way to change a life, a family, and a community. Our
            goal is to make Entrepreneurship accessible for everyone by
            surrounding founders with the resources most relevant to their
            business. We hope you like it, and appreciate any feedback you're
            willing to provide.
          </span>
        </span>
      </div>
      <div className="relative w-[100px] h-[100px] overflow-hidden shrink-0 z-[1] mt-[-16px]" />
      <StateDefaultTypeFilledSi
        iconImageUrl="/arrow.svg"
        label="Let's get started"
        imageSize="/arrow1.svg"
        hasIconRight
        hasIconLeft={false}
        stateDefaultTypeFilledSiBoxSizing="border-box"
        stateDefaultTypeFilledSiCursor="pointer"
        stateDefaultTypeFilledSiBorder="1px solid #fff"
        stateDefaultTypeFilledSiAlignSelf="unset"
        stateDefaultTypeFilledSiBackgroundColor="transparent"
        stateDefaultTypeFilledSiBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)"
        stateDefaultTypeFilledSiZIndex="2"
        stateDefaultTypeFilledSiMarginTop="-16px"
        stateDefaultTypeFilledSiWidth="unset"
        arrowIconWidth="24px"
        arrowIconHeight="24px"
        labelBoxSizing="border-box"
        labelCursor="pointer"
        labelLineHeight="24px"
        labelDisplay="inline-block"
        labelColor="#fff"
        arrowIconWidth1="24px"
        arrowIconHeight1="24px"
        onButtonDefaultClick={onButtonDefaultClick}
        onLabelContainerClick={onLabelContainerClick}
      />
      <SlackButton
        slackButtonPosition="absolute"
        slackButtonRight="16px"
        slackButtonBottom="16px"
        slackButtonMargin="0 !important"
        slackButtonZIndex="3"
      />
      <div className="absolute my-0 mx-[!important] top-[104px] left-[calc(50%_-_145px)] w-[290.5px] h-16 z-[4]">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/ee-logo-2@2x.png"
        />
      </div>
    </div>
  );
};

export default Landing;
