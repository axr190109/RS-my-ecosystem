import { useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StateDefaultTypeFilledSi from "../components/StateDefaultTypeFilledSi";
import SlackButton from "../components/SlackButton";

const Signup1 = () => {
  const navigate = useNavigate();

  const onButtonDefaultClick = useCallback(() => {
    navigate("/signin");
  }, [navigate]);

  const onButtonDefault1Click = useCallback(() => {
    navigate("/signup2");
  }, [navigate]);

  const onButtonDefault2Click = useCallback(() => {
    navigate("/01-my-ecosystem");
  }, [navigate]);

  return (
    <div className="relative bg-grayscale-white w-full overflow-hidden flex flex-row items-start justify-start text-left text-xl text-grayscale-white font-desktop-body">
      <div className="flex-1 h-[900px] flex flex-col items-start justify-center py-20 pr-40 pl-20 box-border relative gap-[40px] bg-[url('/public/frame5@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <div className="absolute my-0 mx-[!important] top-[80px] left-[80px] w-[181.5px] h-10 z-[0]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/ee-logo-22@2x.png"
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
      <div className="flex-1 h-[884px] overflow-hidden flex flex-col items-center justify-end text-right text-xs text-grayscale-stone">
        <div className="relative w-[672px] h-[844px] overflow-hidden shrink-0">
          <div className="absolute top-[0px] right-[65px] flex flex-row items-center justify-start gap-[16px] text-base">
            <div className="relative leading-[24px]">
              Already have an account?
            </div>
            <StateDefaultTypeFilledSi
              iconImageUrl="/arrow6.svg"
              label="Sign in"
              imageSize="/arrow7.svg"
              hasIconRight={false}
              hasIconLeft={false}
              stateDefaultTypeFilledSiBoxSizing="border-box"
              stateDefaultTypeFilledSiCursor="pointer"
              stateDefaultTypeFilledSiBorder="none"
              stateDefaultTypeFilledSiAlignSelf="unset"
              stateDefaultTypeFilledSiBackgroundColor="#0f5ec2"
              stateDefaultTypeFilledSiBoxShadow="unset"
              stateDefaultTypeFilledSiZIndex="unset"
              stateDefaultTypeFilledSiMarginTop="unset"
              stateDefaultTypeFilledSiWidth="unset"
              arrowIconWidth="16px"
              arrowIconHeight="16px"
              labelBoxSizing="border-box"
              labelCursor="unset"
              labelLineHeight="20px"
              labelDisplay="inline-block"
              labelColor="#fff"
              arrowIconWidth1="16px"
              arrowIconHeight1="16px"
              onButtonDefaultClick={onButtonDefaultClick}
            />
          </div>
          <div className="absolute top-[108px] left-[112px] w-96 flex flex-col items-start justify-start gap-[32px] text-left text-sm text-grayscale-haiti">
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-13xl text-blue-denim font-desktop-heading-1-bold">
              <b className="self-stretch relative leading-[40px]">
                Create new account
              </b>
              <div className="self-stretch relative text-base leading-[24px] font-desktop-body text-grayscale-stone">
                We need a new world of Entrepreneurship for Entrepreneurs, by
                Entrepreneurs. Enter your details below to help shape this new
                world.
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
              <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                <TextField
                  className="[border:none] bg-[transparent] flex-1"
                  color="primary"
                  label="First Name"
                  required={true}
                  variant="outlined"
                />
                <TextField
                  className="[border:none] bg-[transparent] flex-1"
                  color="primary"
                  label="Last Name"
                  required={true}
                  variant="outlined"
                />
              </div>
              <TextField
                className="[border:none] bg-[transparent] self-stretch"
                color="primary"
                label="Email Address"
                required={true}
                variant="outlined"
                type="email"
              />
              <TextField
                className="[border:none] bg-[transparent] self-stretch"
                color="primary"
                label="Phone Number"
                required={true}
                variant="outlined"
                type="tel"
              />
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
              <input
                className="relative w-5 h-5"
                required={true}
                type="checkbox"
              />
              <div className="relative leading-[20px]">
                <span>{`I agree to all the `}</span>
                <b className="[text-decoration:underline] text-blue-denim">
                  Terms
                </b>
                <span>{` and `}</span>
                <b className="[text-decoration:underline] text-blue-denim">{`Privacy policy `}</b>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-center">
              <StateDefaultTypeFilledSi
                iconImageUrl="/arrow.svg"
                label="Continue"
                imageSize="/arrow1.svg"
                hasIconRight
                hasIconLeft={false}
                stateDefaultTypeFilledSiBoxSizing="border-box"
                stateDefaultTypeFilledSiCursor="pointer"
                stateDefaultTypeFilledSiBorder="none"
                stateDefaultTypeFilledSiAlignSelf="stretch"
                stateDefaultTypeFilledSiBackgroundColor="#0f5ec2"
                stateDefaultTypeFilledSiBoxShadow="unset"
                stateDefaultTypeFilledSiZIndex="unset"
                stateDefaultTypeFilledSiMarginTop="unset"
                stateDefaultTypeFilledSiWidth="unset"
                arrowIconWidth="24px"
                arrowIconHeight="24px"
                labelBoxSizing="border-box"
                labelCursor="unset"
                labelLineHeight="24px"
                labelDisplay="inline-block"
                labelColor="#fff"
                arrowIconWidth1="24px"
                arrowIconHeight1="24px"
                onButtonDefaultClick={onButtonDefault1Click}
              />
              <div className="self-stretch relative leading-[20px]">Or</div>
              <button
                className="cursor-pointer py-2 px-3 bg-[transparent] self-stretch rounded overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-grayscale-iron"
                onClick={onButtonDefault2Click}
              >
                <div className="relative w-6 h-6">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/iconfinder-google-1298745-1@2x.png"
                  />
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-2">
                  <b className="relative text-base leading-[24px] font-desktop-body text-blue-denim text-center">
                    Sign in with Google
                  </b>
                </div>
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/arrow5.svg"
                />
              </button>
            </div>
          </div>
          <div className="absolute bottom-[24px] left-[0px] flex flex-row items-start justify-start gap-[32px] text-left text-blue-denim">
            <a className="[text-decoration:underline] relative leading-[16px] font-medium text-[inherit]">{`Terms & Conditions`}</a>
            <a className="[text-decoration:underline] relative leading-[16px] font-medium text-[inherit]">
              Privacy Policy
            </a>
          </div>
          <div className="absolute right-[64px] bottom-[24px] leading-[16px] text-grayscale-shuttle-gray font-desktop-heading-1-bold">
            <span className="font-medium">©</span>
            <span className="font-medium font-desktop-body">
              {" "}
              2020 All rights reserved.
            </span>
          </div>
          <SlackButton
            slackButtonPosition="absolute"
            slackButtonRight="0px"
            slackButtonBottom="0px"
            slackButtonMargin="unset"
            slackButtonZIndex="unset"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup1;
