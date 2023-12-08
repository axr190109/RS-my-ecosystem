import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import StateDefaultTypeFilledSi from "../components/StateDefaultTypeFilledSi";
import SlackButton from "../components/SlackButton";

const Splash = () => {
  const navigate = useNavigate();

  const onButtonDefaultClick = useCallback(() => {
    navigate("/00-signin");
  }, [navigate]);

  return (
    <div className="relative w-full h-[900px] flex flex-col items-center justify-center py-[334px] px-20 box-border gap-[40px] bg-[url('/public/00-splash@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-xl text-grayscale-white font-desktop-caption-bold-link">
      <div className="flex flex-row items-center justify-center z-[0]">
        <p className="m-0 relative tracking-[-0.02em] leading-[32px] flex items-center w-[832px] shrink-0">
          <span className="[break-normal:anywhere] w-full">
            <span>{`We believe `}</span>
            <b>Entrepreneurship</b>
            <span>
              {" "}
              is the greatest way to change a life, a family, and a community.
              Our goal is to make Entrepreneurship accessible for everyone by
              surrounding founders with the resources most relevant to their
              business. We hope you like it, and appreciate any feedback you're
              willing to provide.
            </span>
          </span>
        </p>
      </div>
      <div className="relative w-[100px] h-[100px] overflow-hidden shrink-0 z-[1]" />
      <StateDefaultTypeFilledSi
        iconImageUrl="/arrow.svg"
        label="Let's get started"
        imageSizeUrl="/arrow1.svg"
        hasIconRight
        hasIconLeft={false}
        stateDefaultTypeFilledSiBoxSizing="border-box"
        stateDefaultTypeFilledSiCursor="pointer"
        stateDefaultTypeFilledSiBorder="1px solid #fff"
        stateDefaultTypeFilledSiAlignSelf="unset"
        stateDefaultTypeFilledSiPosition="unset"
        stateDefaultTypeFilledSiTop="unset"
        stateDefaultTypeFilledSiLeft="unset"
        stateDefaultTypeFilledSiWidth="unset"
        stateDefaultTypeFilledSiBackgroundColor="transparent"
        stateDefaultTypeFilledSiBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)"
        stateDefaultTypeFilledSiZIndex="2"
        arrowIconWidth="24px"
        arrowIconHeight="24px"
        labelBoxSizing="border-box"
        labelLineHeight="24px"
        labelDisplay="inline-block"
        labelColor="#fff"
        arrowIconWidth1="24px"
        arrowIconHeight1="24px"
        onButtonDefaultClick={onButtonDefaultClick}
      />
      <SlackButton
        slackButtonBoxSizing="border-box"
        slackButtonCursor="pointer"
        slackButtonMargin="0 !important"
        slackButtonPosition="absolute"
        slackButtonRight="16px"
        slackButtonBottom="16px"
        slackButtonZIndex="3"
        haveFeedbackJoinDisplay="inline-block"
      />
      <img
        className="absolute my-0 mx-[!important] top-[104px] left-[calc(50%_-_145px)] w-[290.5px] h-16 object-cover z-[4]"
        alt=""
        src="/logo@2x.png"
      />
    </div>
  );
};

export default Splash;
