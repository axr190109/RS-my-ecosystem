import { useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StateDefaultTypeFilledSi from "../components/StateDefaultTypeFilledSi";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onButtonDefaultClick = useCallback(() => {
    navigate("/signup1");
  }, [navigate]);

  const onButtonDefault1Click = useCallback(() => {
    navigate("/01-my-ecosystem");
  }, [navigate]);

  return (
    <div className="relative bg-grayscale-white w-full h-[100h] overflow-hidden flex flex-row items-start justify-start gap-[28px] text-left text-xl text-grayscale-white font-desktop-body lg:h-auto md:flex-col md:h-auto">
      <div className="flex-1 overflow-hidden flex flex-col items-center justify-center md:items-center md:justify-center md:flex-[unset] md:self-stretch">
        <div className="self-stretch h-[900px] overflow-hidden shrink-0 flex flex-col items-start justify-center py-20 pr-40 pl-20 box-border relative gap-[40px] bg-[url('/public/frame7@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <div className="self-stretch relative tracking-[-0.02em] leading-[32px] z-[0]">
            <span className="font-extrabold">Resolute Future</span>
            <span>
              {" "}
              believes the future is filled with people who take control of
              their lives and their time to pursue their passions.
            </span>
          </div>
          <div className="self-stretch relative tracking-[-0.02em] leading-[32px] z-[1]">
            <span>{`We are resolute in our mission to remove the friction in the Entrepreneurial world and create a `}</span>
            <span className="font-extrabold">Future of Entrepreneurs</span>
            <span>.</span>
          </div>
          <div className="absolute my-0 mx-[!important] top-[80px] left-[80px] w-[181.5px] h-10 z-[2]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/ee-logo-22@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="flex-1 h-[884px] overflow-hidden flex flex-col items-center justify-end text-xs text-blue-denim md:items-center md:justify-start md:flex-[unset] md:self-stretch">
        <div className="relative w-[652px] h-[844px] overflow-hidden shrink-0">
          <div className="absolute top-[0px] right-[65px] flex flex-row items-center justify-start gap-[16px] h-[100vp] text-right text-base text-grayscale-stone">
            <div className="relative leading-[24px]">
              Don't have an account?
            </div>
            <StateDefaultTypeFilledSi
              iconImageUrl="/arrow6.svg"
              label="Create new account"
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
          <div className="absolute top-[108px] left-[109px] w-96 flex flex-col items-start justify-start gap-[32px] text-13xl font-desktop-heading-1-bold">
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
              <b className="self-stretch relative leading-[40px]">
                Hello again!
              </b>
              <div className="self-stretch relative text-base leading-[24px] font-desktop-body text-grayscale-stone">
                It is nice to have you back.
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
              <TextField
                className="[border:none] bg-[transparent] self-stretch"
                color="primary"
                label="Email"
                required={true}
                variant="outlined"
                type="email"
              />
              <TextField
                className="[border:none] bg-[transparent] self-stretch"
                color="primary"
                label="Password"
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
            <b className="relative text-sm [text-decoration:underline] leading-[20px] font-desktop-body">
              Forgot password?
            </b>
            <StateDefaultTypeFilledSi
              iconImageUrl="/arrow.svg"
              label="Log in"
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
          </div>
          <div className="absolute right-[0px] bottom-[0px] rounded-lg bg-grayscale-haiti overflow-hidden hidden flex-row items-start justify-start p-2 gap-[8px] text-grayscale-white border-[1px] border-solid border-grayscale-stone">
            <img className="relative w-4 h-4" alt="" src="/group.svg" />
            <a
              className="relative [text-decoration:underline] leading-[16px] font-medium text-[inherit]"
              href="https://join.slack.com/share/enQtMzkxODMxNTg4OTE1OC05NWU4MDQ0ZjBhNDZlMjhjNmY0OGMzYjI3MmI4ZTg1ZWVhM2Y5YjA4Yjg1NzBhOWMyYTM0NzYyNWYzYTViNWY3"
              target="_blank"
            >
              Have feedback? Join our slack
            </a>
          </div>
          <div className="absolute top-[804px] left-[0px] w-[588px] h-4 overflow-hidden flex flex-row items-center justify-start gap-[220px]">
            <div className="w-[220px] flex flex-row items-start justify-between">
              <div className="relative [text-decoration:underline] leading-[16px] font-medium">{`Terms & Conditions`}</div>
              <div className="relative [text-decoration:underline] leading-[16px] font-medium">
                Privacy Policy
              </div>
            </div>
            <div className="relative leading-[16px] text-grayscale-shuttle-gray text-right inline-block w-[148px] shrink-0 font-desktop-heading-1-bold">
              <span className="font-medium">©</span>
              <span className="font-medium font-desktop-body">
                {" "}
                2020 All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
