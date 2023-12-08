import { useMemo } from "react";

const SlackButton = ({
  slackButtonPosition,
  slackButtonRight,
  slackButtonBottom,
  slackButtonMargin,
  slackButtonZIndex,
}) => {
  const slackButtonStyle = useMemo(() => {
    return {
      position: slackButtonPosition,
      right: slackButtonRight,
      bottom: slackButtonBottom,
      margin: slackButtonMargin,
      zIndex: slackButtonZIndex,
    };
  }, [
    slackButtonPosition,
    slackButtonRight,
    slackButtonBottom,
    slackButtonMargin,
    slackButtonZIndex,
  ]);

  return (
    <div
      className="rounded-lg bg-grayscale-haiti overflow-hidden flex flex-row items-start justify-start p-2 gap-[8px] text-left text-xs text-grayscale-white font-desktop-body border-[1px] border-solid border-grayscale-stone"
      style={slackButtonStyle}
    >
      <img className="relative w-4 h-4" alt="" src="/group.svg" />
      <a
        className="relative [text-decoration:underline] leading-[16px] font-medium text-[inherit]"
        href="https://join.slack.com/share/enQtMzkxODMxNTg4OTE1OC05NWU4MDQ0ZjBhNDZlMjhjNmY0OGMzYjI3MmI4ZTg1ZWVhM2Y5YjA4Yjg1NzBhOWMyYTM0NzYyNWYzYTViNWY3"
        target="_blank"
      >
        Have feedback? Join our slack
      </a>
    </div>
  );
};

export default SlackButton;
