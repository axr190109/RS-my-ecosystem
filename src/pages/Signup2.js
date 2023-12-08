import { useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AuthFrame from "../components/AuthFrame";
import StateDefaultTypeFilledSi from "../components/StateDefaultTypeFilledSi";
import SlackButton from "../components/SlackButton";

const Signup2 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onButtonDefaultClick = useCallback(() => {
    navigate("/00-signin");
  }, [navigate]);

  const onButtonDefault1Click = useCallback(() => {
    navigate("/00-signup-1");
  }, [navigate]);

  const onButtonDefault2Click = useCallback(() => {
    // Please sync "00 Tip 1" to the project
  }, []);

  return (
    <div className="relative bg-grayscale-white w-full h-full overflow-hidden text-left text-xs text-blue-denim font-desktop-caption-bold-link">
      <AuthFrame />
      <div className="absolute top-[40px] left-[752px] w-[672px] h-[844px] overflow-hidden">
        <div className="absolute top-[0px] right-[65px] flex flex-row items-center justify-start gap-[16px] text-right text-base text-grayscale-stone">
          <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
            Already have an account?
          </a>
          
        </div>
        <StateDefaultTypeFilledSi
          iconImageUrl="/arrow6.svg"
          label="Back"
          imageSizeUrl="/arrow7.svg"
          hasIconRight={false}
          hasIconLeft
          stateDefaultTypeFilledSiBoxSizing="border-box"
          stateDefaultTypeFilledSiCursor="pointer"
          stateDefaultTypeFilledSiBorder="1px solid #d9dbdd"
          stateDefaultTypeFilledSiAlignSelf="unset"
          stateDefaultTypeFilledSiPosition="absolute"
          stateDefaultTypeFilledSiTop="0px"
          stateDefaultTypeFilledSiLeft="112px"
          stateDefaultTypeFilledSiWidth="unset"
          stateDefaultTypeFilledSiBackgroundColor="transparent"
          stateDefaultTypeFilledSiBoxShadow="unset"
          stateDefaultTypeFilledSiZIndex="unset"
          arrowIconWidth="16px"
          arrowIconHeight="16px"
          labelBoxSizing="border-box"
          labelLineHeight="20px"
          labelDisplay="inline-block"
          labelColor="#0f5ec2"
          arrowIconWidth1="16px"
          arrowIconHeight1="16px"
          onButtonDefaultClick={onButtonDefault1Click}
        />
        <div className="absolute top-[108px] left-[112px] w-96 flex flex-col items-start justify-start gap-[10px] text-13xl font-desktop-heading-1-bold">
          <b className="self-stretch relative leading-[40px]">
            Create password
          </b>
          <div className="self-stretch relative text-base leading-[24px] font-desktop-caption-bold-link text-grayscale-stone">
            Please create a secure password including the following criteria
            below.
          </div>
        </div>
        <div className="absolute top-[238px] left-[112px] flex flex-col items-start justify-start gap-[24px]">
          <TextField
            className="[border:none] bg-[transparent]"
            color="primary"
            label="Password"
            required={true}
            sx={{ width: 384 }}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleShowPasswordClick}
                    aria-label="toggle password visibility"
                  >
                    <Icon>
                      {showPassword ? "visibility_off" : "visibility"}
                    </Icon>
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            className="[border:none] bg-[transparent]"
            color="primary"
            label="Confirm Password"
            required={true}
            sx={{ width: 384 }}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleShowPasswordClick}
                    aria-label="toggle password visibility"
                  >
                    <Icon>
                      {showPassword ? "visibility_off" : "visibility"}
                    </Icon>
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <StateDefaultTypeFilledSi
          iconImageUrl="/arrow.svg"
          label="Let's get started"
          imageSizeUrl="/arrow1.svg"
          hasIconRight
          hasIconLeft={false}
          stateDefaultTypeFilledSiBoxSizing="border-box"
          stateDefaultTypeFilledSiCursor="pointer"
          stateDefaultTypeFilledSiBorder="none"
          stateDefaultTypeFilledSiAlignSelf="unset"
          stateDefaultTypeFilledSiPosition="absolute"
          stateDefaultTypeFilledSiTop="510px"
          stateDefaultTypeFilledSiLeft="112px"
          stateDefaultTypeFilledSiWidth="384px"
          stateDefaultTypeFilledSiBackgroundColor="#0f5ec2"
          stateDefaultTypeFilledSiBoxShadow="unset"
          stateDefaultTypeFilledSiZIndex="unset"
          arrowIconWidth="24px"
          arrowIconHeight="24px"
          labelBoxSizing="border-box"
          labelLineHeight="24px"
          labelDisplay="inline-block"
          labelColor="#fff"
          arrowIconWidth1="24px"
          arrowIconHeight1="24px"
          onButtonDefaultClick={onButtonDefault2Click}
        />
        <div className="absolute top-[374px] left-[112px] flex flex-col items-start justify-start gap-[8px] text-sm text-grayscale-haiti">
          <div className="w-96 flex flex-row items-center justify-start gap-[8px]">
            <div className="rounded-sm bg-blue-denim flex flex-row items-start justify-start p-0.5">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/check.svg"
              />
            </div>
            <div className="relative leading-[20px]">
              At least 1 lower-case letter
            </div>
          </div>
          <div className="w-96 flex flex-row items-center justify-start gap-[8px]">
            <div className="rounded-sm bg-blue-denim flex flex-row items-start justify-start p-0.5">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/check.svg"
              />
            </div>
            <div className="relative leading-[20px]">
              At least 1 upper-case letter
            </div>
          </div>
          <div className="w-96 flex flex-row items-center justify-start gap-[8px]">
            <div className="rounded-sm bg-grayscale-sand flex flex-row items-start justify-start p-0.5">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/check1.svg"
              />
            </div>
            <div className="relative leading-[20px]">
              At least 1 number or special character letter (e.g @#$)
            </div>
          </div>
          <div className="w-96 flex flex-row items-center justify-start gap-[8px]">
            <div className="rounded-sm bg-grayscale-sand flex flex-row items-start justify-start p-0.5">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/check1.svg"
              />
            </div>
            <div className="relative leading-[20px]">
              At least 8 total characters
            </div>
          </div>
        </div>
        <div className="absolute bottom-[24px] left-[0px] flex flex-row items-start justify-start gap-[32px]">
          <a className="[text-decoration:underline] relative leading-[16px] font-medium text-[inherit]">{`Terms & Conditions`}</a>
          <a className="[text-decoration:underline] relative leading-[16px] font-medium text-[inherit]">
            Privacy Policy
          </a>
        </div>
        <div className="absolute right-[64px] bottom-[24px] leading-[16px] text-grayscale-shuttle-gray text-right font-desktop-heading-1-bold">
          <span className="font-medium">©</span>
          <span className="font-medium font-desktop-caption-bold-link">
            {" "}
            2020 All rights reserved.
          </span>
        </div>
        <SlackButton
          slackButtonBoxSizing="border-box"
          slackButtonCursor="pointer"
          slackButtonMargin="unset"
          slackButtonPosition="absolute"
          slackButtonRight="0px"
          slackButtonBottom="0px"
          slackButtonZIndex="unset"
          haveFeedbackJoinDisplay="inline-block"
        />
      </div>
    </div>
  );
};

export default Signup2;
