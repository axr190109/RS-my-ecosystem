import { useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StateDefaultTypeFilledSi from "../components/StateDefaultTypeFilledSi";
import SlackButton from "../components/SlackButton";

const Signup2 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onButtonDefaultClick = useCallback(() => {
    navigate("/signup1");
  }, [navigate]);

  const onButtonDefault1Click = useCallback(() => {
    navigate("/signin");
  }, [navigate]);

  const onButtonDefault2Click = useCallback(() => {
    navigate("/my-ecosystem");
  }, [navigate]);

  return (
    <div className="relative bg-grayscale-white w-full overflow-hidden flex flex-row items-start justify-start gap-[22px] text-left text-xl text-grayscale-white font-desktop-body-bold">
      <div className="flex-1 h-[900px] flex flex-col items-start justify-center py-20 pr-40 pl-20 box-border relative gap-[40px] bg-[url('/public/frame6@3x.png')] bg-cover bg-no-repeat bg-[top]">
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
      <div className="flex-1 h-[884px] overflow-hidden flex flex-col items-center justify-end text-xs text-blue-denim">
        <div className="relative w-[672px] h-[844px] overflow-hidden shrink-0">
          <div className="absolute top-[0px] left-[0px] w-[607px] overflow-hidden flex flex-col items-end justify-center text-right text-base text-grayscale-stone">
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-between">
              <StateDefaultTypeFilledSi
                iconImageUrl="/arrow2.svg"
                label="Back"
                imageSize="/arrow3.svg"
                hasIconRight={false}
                hasIconLeft
                stateDefaultTypeFilledSiBoxSizing="border-box"
                stateDefaultTypeFilledSiCursor="pointer"
                stateDefaultTypeFilledSiBorder="1px solid #d9dbdd"
                stateDefaultTypeFilledSiAlignSelf="unset"
                stateDefaultTypeFilledSiBackgroundColor="transparent"
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
                labelColor="#0f5ec2"
                arrowIconWidth1="16px"
                arrowIconHeight1="16px"
                onButtonDefaultClick={onButtonDefaultClick}
              />
              <div className="flex flex-row items-center justify-start gap-[16px]">
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
                  onButtonDefaultClick={onButtonDefault1Click}
                />
              </div>
            </div>
          </div>
          <div className="absolute top-[108px] left-[0px] w-[496px] overflow-hidden flex flex-col items-end justify-center text-13xl font-desktop-heading-1-bold">
            <div className="w-96 flex flex-col items-start justify-start gap-[10px]">
              <b className="self-stretch relative leading-[40px]">
                Create password
              </b>
              <div className="self-stretch relative text-base leading-[24px] font-desktop-body-bold text-grayscale-stone">
                Please create a secure password including the following criteria
                below.
              </div>
            </div>
          </div>
          <div className="absolute top-[238px] left-[0px] w-[496px] overflow-hidden flex flex-col items-end justify-center text-grayscale-shuttle-gray">
            <div className="flex flex-col items-start justify-start gap-[24px]">
              <TextField
                className="[border:none] bg-[transparent]"
                color="primary"
                label="Password"
                required={true}
                sx={{ width: 384 }}
                variant="outlined"
                type={showPassword ? "text" : "password"}
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
              <div className="rounded bg-grayscale-white box-border w-96 h-10 flex flex-col items-start justify-start py-0 px-3 border-[1px] border-solid border-grayscale-iron">
                <div className="bg-grayscale-white h-0.5 flex flex-row items-center justify-start py-0 px-1 box-border">
                  <div className="relative leading-[16px] font-medium">
                    Confirm Password
                  </div>
                </div>
                <TextField
                  className="[border:none] bg-[transparent] self-stretch flex-1 hidden"
                  color="primary"
                  label="Confirm Password"
                  required={true}
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
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
            </div>
          </div>
          <div className="absolute top-[374px] left-[0px] w-[496px] overflow-hidden flex flex-col items-end justify-center text-sm text-grayscale-haiti">
            <div className="flex flex-col items-start justify-start gap-[8px]">
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
          </div>
          <div className="absolute top-[804px] left-[0px] w-[672px] overflow-hidden flex flex-row items-start justify-start gap-[240px]">
            <div className="flex flex-row items-start justify-start gap-[32px]">
              <a className="[text-decoration:underline] relative leading-[16px] font-medium text-[inherit]">{`Terms & Conditions`}</a>
              <a className="[text-decoration:underline] relative leading-[16px] font-medium text-[inherit]">
                Privacy Policy
              </a>
            </div>
            <div className="w-[212px] h-10 overflow-hidden shrink-0 flex flex-col items-start justify-start relative text-right text-grayscale-shuttle-gray font-desktop-heading-1-bold">
              <div className="relative leading-[16px] z-[0]">
                <span className="font-medium">©</span>
                <span className="font-medium font-desktop-body-bold">
                  {" "}
                  2020 All rights reserved.
                </span>
              </div>
              <SlackButton
                slackButtonPosition="absolute"
                slackButtonRight="0px"
                slackButtonBottom="0px"
                slackButtonMargin="0 !important"
                slackButtonZIndex="1"
              />
            </div>
          </div>
          <div className="absolute top-[510px] left-[0px] w-[496px] overflow-hidden flex flex-col items-end justify-center">
            <StateDefaultTypeFilledSi
              iconImageUrl="/arrow.svg"
              label="Let's get started"
              imageSize="/arrow1.svg"
              hasIconRight
              hasIconLeft={false}
              stateDefaultTypeFilledSiBoxSizing="border-box"
              stateDefaultTypeFilledSiCursor="pointer"
              stateDefaultTypeFilledSiBorder="none"
              stateDefaultTypeFilledSiAlignSelf="unset"
              stateDefaultTypeFilledSiBackgroundColor="#0f5ec2"
              stateDefaultTypeFilledSiBoxShadow="unset"
              stateDefaultTypeFilledSiZIndex="unset"
              stateDefaultTypeFilledSiMarginTop="unset"
              stateDefaultTypeFilledSiWidth="384px"
              arrowIconWidth="24px"
              arrowIconHeight="24px"
              labelBoxSizing="border-box"
              labelCursor="unset"
              labelLineHeight="24px"
              labelDisplay="inline-block"
              labelColor="#fff"
              arrowIconWidth1="24px"
              arrowIconHeight1="24px"
              onButtonDefaultClick={onButtonDefault2Click}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup2;
