import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AuthFrame from "../components/AuthFrame";
import StateDefaultTypeFilledSi from "../components/StateDefaultTypeFilledSi";
import SlackButton from "../components/SlackButton";

const Signup1 = () => {
  const navigate = useNavigate();

  const onButtonDefaultClick = useCallback(() => {
    navigate("/00-signin");
  }, [navigate]);

  const onButtonDefault1Click = useCallback(() => {
    navigate("/00-signup-2");
  }, [navigate]);

  return (
    <div className="relative bg-grayscale-white w-full h-[900px] overflow-hidden text-right text-xs text-blue-denim font-desktop-caption-bold-link">
      <AuthFrame />
      <div className="absolute top-[40px] right-[81px] flex flex-row items-center justify-start gap-[16px] text-base text-grayscale-stone">
        <div className="relative leading-[24px]">Already have an account?</div>
        <StateDefaultTypeFilledSi
          iconImageUrl="/arrow2.svg"
          label="Sign in"
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
          onButtonDefaultClick={onButtonDefaultClick}
        />
      </div>
      <div className="absolute top-[148px] left-[864px] w-96 flex flex-col items-start justify-start gap-[32px] text-left text-13xl font-desktop-heading-1-bold">
        <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
          <b className="self-stretch relative leading-[40px]">
            Create new account
          </b>
          <div className="self-stretch relative text-base leading-[24px] font-desktop-caption-bold-link text-grayscale-stone">
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
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Icon>done_sharp</Icon>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              className="[border:none] bg-[transparent] flex-1"
              color="primary"
              label="Last Name"
              required={true}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Icon>done_sharp</Icon>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <TextField
            className="[border:none] bg-[transparent] self-stretch"
            color="primary"
            label="Email Address"
            required={true}
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
            className="[border:none] bg-[transparent] self-stretch"
            color="primary"
            label="Phone Number"
            required={true}
            variant="outlined"
          />
        </div>
        <FormControlLabel
          className="self-stretch"
          label="I agree to all the Terms and Privacy policy "
          control={<Checkbox color="primary" defaultChecked />}
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-center text-sm text-grayscale-haiti font-desktop-caption-bold-link">
          <StateDefaultTypeFilledSi
            iconImageUrl="/arrow.svg"
            label="Continue"
            imageSizeUrl="/arrow1.svg"
            hasIconRight
            hasIconLeft={false}
            stateDefaultTypeFilledSiBoxSizing="border-box"
            stateDefaultTypeFilledSiCursor="pointer"
            stateDefaultTypeFilledSiBorder="none"
            stateDefaultTypeFilledSiAlignSelf="stretch"
            stateDefaultTypeFilledSiPosition="unset"
            stateDefaultTypeFilledSiTop="unset"
            stateDefaultTypeFilledSiLeft="unset"
            stateDefaultTypeFilledSiWidth="unset"
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
          <div className="self-stretch relative leading-[20px]">Or</div>
          <button className="cursor-pointer py-2 px-3 bg-[transparent] self-stretch rounded overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-grayscale-iron">
            <div className="relative w-6 h-6">
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/iconfinder-google-1298745-1@2x.png"
              />
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-2">
              <b className="relative text-base leading-[24px] font-desktop-caption-bold-link text-blue-denim text-center">
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
      <div className="absolute bottom-[40px] left-[752px] flex flex-row items-start justify-start gap-[32px] text-left">
        <a className="[text-decoration:underline] relative leading-[16px] font-medium text-[inherit]">{`Terms & Conditions`}</a>
        <a className="[text-decoration:underline] relative leading-[16px] font-medium text-[inherit]">
          Privacy Policy
        </a>
      </div>
      <div className="absolute right-[80px] bottom-[40px] leading-[16px] text-grayscale-shuttle-gray font-desktop-heading-1-bold">
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
        slackButtonRight="16px"
        slackButtonBottom="16px"
        slackButtonZIndex="unset"
        haveFeedbackJoinDisplay="inline-block"
      />
    </div>
  );
};

export default Signup1;
