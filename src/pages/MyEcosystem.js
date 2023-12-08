import { useCallback } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";

const MyEcosystem = () => {
  const onMyEcosystemClick = useCallback(() => {
    // Please sync "01 My Ecosystem" to the project
  }, []);

  const onButtonIconClick = useCallback(() => {
    // Please sync "01 My Ecosystem" to the project
  }, []);

  return (
    <div className="relative bg-grayscale-white w-full h-[900px] overflow-hidden text-left text-xs text-grayscale-white font-desktop-body">
      <div className="absolute top-[0px] left-[1224px] w-52 overflow-hidden flex flex-col items-center justify-end">
        <div className="my-0 mx-[!important] absolute right-[0px] bottom-[0px] rounded-lg bg-grayscale-haiti overflow-hidden flex flex-row items-start justify-start p-2 gap-[8px] z-[0] border-[1px] border-solid border-grayscale-stone">
          <img className="relative w-4 h-4" alt="" src="/group.svg" />
          <a
            className="relative [text-decoration:underline] leading-[16px] font-medium text-[inherit]"
            href="https://join.slack.com/share/enQtMzkxODMxNTg4OTE1OC05NWU4MDQ0ZjBhNDZlMjhjNmY0OGMzYjI3MmI4ZTg1ZWVhM2Y5YjA4Yjg1NzBhOWMyYTM0NzYyNWYzYTViNWY3"
            target="_blank"
          >
            Have feedback? Join our slack
          </a>
        </div>
      </div>
      <img
        className="absolute top-[0px] left-[512px] w-[704px] h-[896px] overflow-hidden"
        alt=""
        src="/frame.svg"
      />
      <img
        className="absolute top-[0px] left-[562px] w-[572px] h-[798px] overflow-hidden"
        alt=""
        src="/frame1.svg"
      />
      <div className="absolute top-[0px] left-[692px] w-14 h-[521px] overflow-hidden flex flex-col items-center justify-end">
        <div className="relative w-14 h-14">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-blue-curious-blue" />
          <div className="absolute top-[3px] left-[3px] rounded-999980xl bg-grayscale-white w-[50px] h-[50px]">
            <img
              className="absolute h-[calc(100%_-_10px)] w-[calc(100%_-_10px)] top-[5px] right-[5px] bottom-[5px] left-[5px] rounded-999980xl max-w-full overflow-hidden max-h-full object-cover opacity-[0.75]"
              alt=""
              src="/logo@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[924px] w-14 h-[656px] overflow-hidden flex flex-col items-center justify-end">
        <div className="relative w-14 h-14">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-blue-curious-blue" />
          <div className="absolute top-[3px] left-[3px] rounded-999980xl bg-grayscale-white w-[50px] h-[50px]">
            <img
              className="absolute h-[calc(100%_-_10px)] w-[calc(100%_-_10px)] top-[5px] right-[5px] bottom-[5px] left-[5px] rounded-999980xl max-w-full overflow-hidden max-h-full object-cover opacity-[0.75]"
              alt=""
              src="/logo1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[753px] w-14 h-[437px] overflow-hidden flex flex-col items-center justify-end">
        <div className="relative w-14 h-14">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-blue-curious-blue" />
          <div className="absolute top-[3px] left-[3px] rounded-999980xl bg-grayscale-white w-[50px] h-[50px]">
            <img
              className="absolute h-[calc(100%_-_10px)] w-[calc(100%_-_10px)] top-[5px] right-[5px] bottom-[5px] left-[5px] rounded-999980xl max-w-full overflow-hidden max-h-full object-cover opacity-[0.75]"
              alt=""
              src="/logo2@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[734px] w-14 h-[746px] overflow-hidden flex flex-col items-center justify-end">
        <div className="relative w-14 h-14">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-blue-curious-blue" />
          <div className="absolute top-[3px] left-[3px] rounded-999980xl bg-grayscale-white w-[50px] h-[50px]">
            <img
              className="absolute h-[calc(100%_-_10px)] w-[calc(100%_-_10px)] top-[5px] right-[5px] bottom-[5px] left-[5px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/logo3@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[988px] w-14 h-[562px] overflow-hidden flex flex-col items-center justify-end">
        <div className="relative w-14 h-14">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-blue-curious-blue" />
          <div className="absolute top-[3px] left-[3px] rounded-999980xl bg-grayscale-white w-[50px] h-[50px]">
            <img
              className="absolute h-[calc(100%_-_10px)] w-[calc(100%_-_10px)] top-[5px] right-[5px] bottom-[5px] left-[5px] rounded-999980xl max-w-full overflow-hidden max-h-full object-cover opacity-[0.75]"
              alt=""
              src="/logo4@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[917px] w-14 h-[463px] overflow-hidden flex flex-col items-center justify-end">
        <div className="relative w-14 h-14">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-blue-curious-blue" />
          <div className="absolute top-[3px] left-[3px] rounded-999980xl bg-grayscale-white w-[50px] h-[50px]">
            <img
              className="absolute h-[calc(100%_-_10px)] w-[calc(100%_-_10px)] top-[5px] right-[5px] bottom-[5px] left-[5px] rounded-999980xl max-w-full overflow-hidden max-h-full object-cover opacity-[0.75]"
              alt=""
              src="/logo5@2x.png"
            />
          </div>
        </div>
      </div>
      <img
        className="absolute top-[0px] left-[580px] w-14 h-[714px] overflow-hidden"
        alt=""
        src="/frame2.svg"
      />
      <img
        className="absolute top-[0px] left-[1116px] w-14 h-[358px] overflow-hidden"
        alt=""
        src="/frame3.svg"
      />
      <img
        className="absolute top-[0px] left-[820px] w-20 h-[584px] overflow-hidden"
        alt=""
        src="/frame4.svg"
      />
      <div className="absolute top-[0px] left-[312px] w-60 h-[152px] overflow-hidden flex flex-col items-center justify-end text-13xl text-grayscale-haiti font-desktop-heading-1-bold">
        <b className="relative leading-[40px]">My Ecosystem</b>
      </div>
      <div className="absolute top-[0px] left-[1152px] w-64 h-[152px] overflow-hidden flex flex-col items-center justify-end">
        <FormControl sx={{ width: 256 }} variant="outlined">
          <InputLabel color="primary">Ecosystem</InputLabel>
          <Select color="primary" defaultValue="Profile 2" label="Ecosystem">
            <MenuItem value="Profile 1">Profile 1</MenuItem>
            <MenuItem value="Profile 2">Profile 2</MenuItem>
            <MenuItem value="Profile 3">Profile 3</MenuItem>
            <MenuItem value="Profile4">Profile4</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
      </div>
      <TextField
        className="[border:none] bg-[transparent] absolute w-[calc(100%_-_288px)] top-[0px] right-[0px] left-[288px]"
        color="primary"
        size="large"
        placeholder="Find a Resource"
        fullWidth={true}
        variant="standard"
        type="text"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Icon>search_sharp</Icon>
            </InputAdornment>
          ),
        }}
      />
      <div className="absolute top-[0px] left-[0px] bg-grayscale-haiti w-72 h-[900px] flex flex-col items-start justify-start pt-28 px-6 pb-6 box-border gap-[16px] text-base text-black">
        <button
          className="cursor-pointer [border:none] p-2 bg-blue-denim rounded w-60 overflow-hidden flex flex-row items-center justify-start box-border gap-[16px] z-[0]"
          onClick={onMyEcosystemClick}
        >
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 mix-blend-normal"
            alt=""
            src="/apps.svg"
          />
          <b className="flex-1 relative text-base leading-[24px] font-desktop-body text-grayscale-white text-left">
            My Ecosystem
          </b>
          <div className="rounded-3xl bg-grayscale-white hidden flex-row items-center justify-start py-0 px-2">
            <div className="relative text-xs leading-[16px] font-medium font-desktop-body text-blue-denim text-left">
              6
            </div>
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-2 bg-grayscale-haiti rounded w-60 overflow-hidden flex flex-row items-center justify-start box-border gap-[16px] z-[1]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 mix-blend-normal"
            alt=""
            src="/layer-check.svg"
          />
          <b className="flex-1 relative text-base leading-[24px] font-desktop-body text-grayscale-white text-left">
            Free Resources
          </b>
          <div className="rounded-3xl bg-blue-curious-blue hidden flex-row items-center justify-start py-0 px-2">
            <div className="relative text-xs leading-[16px] font-medium font-desktop-body text-grayscale-white text-left">
              4
            </div>
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-2 bg-grayscale-haiti rounded w-60 overflow-hidden flex flex-row items-center justify-start box-border gap-[16px] z-[2]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 mix-blend-normal"
            alt=""
            src="/calendar.svg"
          />
          <b className="flex-1 relative text-base leading-[24px] font-desktop-body text-grayscale-white text-left">
            Events
          </b>
          <div className="rounded-3xl bg-blue-curious-blue hidden flex-row items-center justify-start py-0 px-2">
            <div className="relative text-xs leading-[16px] font-medium font-desktop-body text-grayscale-white text-left">
              14
            </div>
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-2 bg-grayscale-haiti rounded w-60 overflow-hidden flex flex-row items-center justify-start box-border gap-[16px] z-[3]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 mix-blend-normal"
            alt=""
            src="/search2.svg"
          />
          <b className="flex-1 relative text-base leading-[24px] font-desktop-body text-grayscale-white text-left">
            Find a Resource
          </b>
        </button>
        <img
          className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 z-[4]"
          alt=""
          src="/vector-89.svg"
        />
        <button className="cursor-pointer [border:none] p-2 bg-grayscale-haiti rounded w-60 overflow-hidden flex flex-row items-center justify-start box-border gap-[16px] z-[5]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/sliders.svg"
          />
          <b className="flex-1 relative text-base leading-[24px] font-desktop-body text-grayscale-white text-left">
            Settings
          </b>
        </button>
        <button className="cursor-pointer [border:none] p-2 bg-grayscale-haiti rounded w-60 overflow-hidden flex flex-row items-center justify-start box-border gap-[16px] z-[6]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 mix-blend-normal"
            alt=""
            src="/help.svg"
          />
          <b className="flex-1 relative text-base leading-[24px] font-desktop-body text-grayscale-white text-left">
            Help Support
          </b>
        </button>
        <div className="my-0 mx-[!important] absolute bottom-[32px] left-[calc(50%_-_112px)] rounded [background:linear-gradient(111.86deg,_#fff,_#f4f5f7)] box-border w-56 hidden flex-col items-center justify-end pt-8 px-4 pb-4 gap-[24px] z-[7] border-t-[4px] border-solid border-blue-denim">
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px] z-[0]">
            <b className="self-stretch relative leading-[24px]">Title</b>
            <div className="self-stretch relative text-sm leading-[20px]">
              Description
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[8px] z-[1] text-sm text-blue-denim">
            <div className="flex-1 rounded overflow-hidden flex flex-row items-center justify-center py-1.5 px-2 border-[1px] border-solid border-grayscale-iron">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/arrow2.svg"
              />
              <div className="flex flex-row items-start justify-start py-0 px-2">
                <b className="relative leading-[20px]">No</b>
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/arrow3.svg"
              />
            </div>
            <div className="flex-1 rounded overflow-hidden flex flex-row items-center justify-center py-1.5 px-2 border-[1px] border-solid border-grayscale-iron">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/arrow2.svg"
              />
              <div className="flex flex-row items-start justify-start py-0 px-2">
                <b className="relative leading-[20px]">Yes</b>
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/arrow3.svg"
              />
            </div>
          </div>
          <div className="my-0 mx-[!important] absolute top-[-16px] right-[16px] rounded-99980xl bg-blue-curious-blue shadow-[0px_8px_16px_rgba(15,_94,_194,_0.32)] flex flex-row items-start justify-start p-2 z-[2]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 mix-blend-normal"
              alt=""
              src="/help-question.svg"
            />
          </div>
        </div>
        <div className="absolute my-0 mx-[!important] top-[32px] left-[32px] w-[217.8px] h-12 overflow-hidden shrink-0 z-[8]">
          <div className="absolute top-[0px] left-[0px] w-[217.8px] h-12">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/ee-logo-21@2x.png"
            />
          </div>
        </div>
        <div
          className="my-0 mx-[!important] absolute top-[44px] right-[-12px] rounded bg-blue-denim w-6 h-6 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border cursor-pointer z-[9]"
          onClick={onButtonIconClick}
        >
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0"
            alt=""
            src="/chevron1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default MyEcosystem;
