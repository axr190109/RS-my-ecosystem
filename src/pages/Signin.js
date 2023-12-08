import { useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import StateDefaultTypeFilledSi from "../components/StateDefaultTypeFilledSi";
import SlackButton from "../components/SlackButton";

const Signin = () => {
  const navigate = useNavigate();

  const onButtonDefault1Click = useCallback(() => {
    // Please sync "00 Tip 1" to the project
  }, []);

  const onSignupContainerClick = useCallback(() => {
    navigate("/00-signup-1");
  }, [navigate]);

  const onFormContainerClick = useCallback(() => {
    // Please sync "00 Tip 1" to the project
  }, []);

  return (
    <div className="relative bg-grayscale-white w-full overflow-hidden flex flex-row items-start justify-start gap-[64px] text-left text-xl text-grayscale-white font-desktop-caption-bold-link">
      <div className="flex-1 h-[900px] flex flex-col items-start justify-start p-20 box-border gap-[40px] bg-[url('/public/frame@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <div className="relative w-[181.5px] h-10">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/ee-logo-2@2x.png"
          />
        </div>
        <div className="relative]">
          <span className="font-extrabold">Resolute Future</span>
          <span>
            {" "}
            believes the future is filled with people who take control of their
            lives and their time to pursue their passions.
          </span>
        </div>
        <div className="self-stretch relative tracking-[-0.02em] leading-[32px]">
          <span>{`We are resolute in our mission to remove the friction in the Entrepreneurial world and create a `}</span>
          <span className="font-extrabold">Future of Entrepreneurs</span>
          <span>.</span>
        </div>
      </div>
      <div className="flex-1 h-[884px] overflow-hidden flex flex-col items-center justify-end text-right text-base text-grayscale-stone">
        <div className="w-[672px] h-[844px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[362px]">
          <div className="overflow-hidden flex flex-col items-start justify-start gap-[76px]">
            <div className="w-[607px] overflow-hidden flex flex-row items-center justify-end">
              <div
                className="h-8 flex flex-row items-center justify-start gap-[16px] cursor-pointer"
                onClick={onSignupContainerClick}
              >
                <Link
                  className="cursor-pointer [text-decoration:none] relative leading-[24px] text-[inherit]"
                  to="/00-signup-1"
                >
                  Don't have an account?
                </Link>
                <StateDefaultTypeFilledSi
                  iconImageUrl="/arrow2.svg"
                  label="Create new account"
                  imageSizeUrl="/arrow3.svg"
                  hasIconRight={false}
                  hasIconLeft={false}
                  stateDefaultTypeFilledSiBoxSizing="border-box"
                  stateDefaultTypeFilledSiCursor="pointer"
                  stateDefaultTypeFilledSiBorder="none"
                  stateDefaultTypeFilledSiAlignSelf="unset"
                  stateDefaultTypeFilledSiPosition="unset"
                  stateDefaultTypeFilledSiTop="unset"
                  stateDefaultTypeFilledSiLeft="unset"
                  stateDefaultTypeFilledSiWidth="unset"
                  stateDefaultTypeFilledSiBackgroundColor="#0f5ec2"
                  stateDefaultTypeFilledSiBoxShadow="unset"
                  stateDefaultTypeFilledSiZIndex="unset"
                  arrowIconWidth="16px"
                  arrowIconHeight="16px"
                  labelBoxSizing="border-box"
                  labelLineHeight="20px"
                  labelDisplay="inline-block"
                  labelColor="#fff"
                  arrowIconWidth1="16px"
                  arrowIconHeight1="16px"
                />
              </div>
            </div>
            <div
              className="top-[0px] flex flex-col items-start justify-start gap-[32px] cursor-pointer h-[334px] ml-28 text-left text-13xl text-blue-denim font-desktop-heading-1-bold"
              onClick={onFormContainerClick}
            >
              <div className="w-96 flex flex-col items-start justify-start gap-[10px]">
                <h1 className="m-0 self-stretch relative text-inherit leading-[40px] font-bold font-inherit">
                  Hello again!
                </h1>
                <div className="self-stretch relative text-base leading-[24px] font-desktop-caption-bold-link text-grayscale-stone">
                  It is nice to have you back.
                </div>
              </div>
              <div className="relative w-96 h-[104px]">
                <TextField
                  className="[border:none] bg-[transparent] absolute top-[0px] left-[0px]"
                  color="primary"
                  label="Email"
                  sx={{ width: 384 }}
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Icon>done_sharp</Icon>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  className="[border:none] bg-[transparent] absolute top-[64px] left-[0px]"
                  color="primary"
                  label="Password"
                  required={true}
                  sx={{ width: 384 }}
                  variant="outlined"
                />
              </div>
              <a className="[text-decoration:underline] relative text-sm leading-[20px] font-bold font-desktop-caption-bold-link text-[inherit]">
                Forgot password?
              </a>
              <StateDefaultTypeFilledSi
                iconImageUrl="/arrow.svg"
                label="Log in"
                imageSizeUrl="/arrow1.svg"
                hasIconRight
                hasIconLeft={false}
                stateDefaultTypeFilledSiBoxSizing="border-box"
                stateDefaultTypeFilledSiCursor="pointer"
                stateDefaultTypeFilledSiBorder="none"
                stateDefaultTypeFilledSiAlignSelf="unset"
                stateDefaultTypeFilledSiPosition="unset"
                stateDefaultTypeFilledSiTop="unset"
                stateDefaultTypeFilledSiLeft="unset"
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
                onButtonDefaultClick={onButtonDefault1Click}
              />
            </div>
          </div>
          <div className="w-[672px] h-10 overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[240px] text-left text-xs text-blue-denim">
            <div className="relative w-[220px] h-4">
              <a className="[text-decoration:underline] absolute top-[0px] left-[0px] leading-[16px] font-medium text-[inherit]">{`Terms & Conditions`}</a>
              <a className="[text-decoration:underline] absolute top-[0px] left-[144px] leading-[16px] font-medium text-[inherit]">
                Privacy Policy
              </a>
            </div>
            <div className="w-[212px] h-10 overflow-hidden shrink-0 flex flex-col items-start justify-start text-right text-grayscale-shuttle-gray font-desktop-heading-1-bold">
              <div className="relative leading-[16px]">
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
                slackButtonPosition="unset"
                slackButtonRight="unset"
                slackButtonBottom="unset"
                slackButtonZIndex="unset"
                haveFeedbackJoinDisplay="inline-block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
