import { useMemo } from "react";

const StateDefaultTypeFilledSi = ({
  iconImageUrl,
  label = "Button",
  imageSizeUrl,
  hasIconRight = true,
  hasIconLeft = true,
  stateDefaultTypeFilledSiBoxSizing,
  stateDefaultTypeFilledSiCursor,
  stateDefaultTypeFilledSiBorder,
  stateDefaultTypeFilledSiAlignSelf,
  stateDefaultTypeFilledSiPosition,
  stateDefaultTypeFilledSiTop,
  stateDefaultTypeFilledSiLeft,
  stateDefaultTypeFilledSiWidth,
  stateDefaultTypeFilledSiBackgroundColor,
  stateDefaultTypeFilledSiBoxShadow,
  stateDefaultTypeFilledSiZIndex,
  arrowIconWidth,
  arrowIconHeight,
  labelBoxSizing,
  labelLineHeight,
  labelDisplay,
  labelColor,
  arrowIconWidth1,
  arrowIconHeight1,
  onButtonDefaultClick,
}) => {
  const stateDefaultTypeFilledSiStyle = useMemo(() => {
    return {
      boxSizing: stateDefaultTypeFilledSiBoxSizing,
      cursor: stateDefaultTypeFilledSiCursor,
      border: stateDefaultTypeFilledSiBorder,
      alignSelf: stateDefaultTypeFilledSiAlignSelf,
      position: stateDefaultTypeFilledSiPosition,
      top: stateDefaultTypeFilledSiTop,
      left: stateDefaultTypeFilledSiLeft,
      width: stateDefaultTypeFilledSiWidth,
      backgroundColor: stateDefaultTypeFilledSiBackgroundColor,
      boxShadow: stateDefaultTypeFilledSiBoxShadow,
      zIndex: stateDefaultTypeFilledSiZIndex,
    };
  }, [
    stateDefaultTypeFilledSiBoxSizing,
    stateDefaultTypeFilledSiCursor,
    stateDefaultTypeFilledSiBorder,
    stateDefaultTypeFilledSiAlignSelf,
    stateDefaultTypeFilledSiPosition,
    stateDefaultTypeFilledSiTop,
    stateDefaultTypeFilledSiLeft,
    stateDefaultTypeFilledSiWidth,
    stateDefaultTypeFilledSiBackgroundColor,
    stateDefaultTypeFilledSiBoxShadow,
    stateDefaultTypeFilledSiZIndex,
  ]);

  const arrowIconStyle = useMemo(() => {
    return {
      width: arrowIconWidth,
      height: arrowIconHeight,
    };
  }, [arrowIconWidth, arrowIconHeight]);

  const labelStyle = useMemo(() => {
    return {
      boxSizing: labelBoxSizing,
    };
  }, [labelBoxSizing]);

  const label1Style = useMemo(() => {
    return {
      lineHeight: labelLineHeight,
      display: labelDisplay,
      color: labelColor,
    };
  }, [labelLineHeight, labelDisplay, labelColor]);

  const arrowIcon1Style = useMemo(() => {
    return {
      width: arrowIconWidth1,
      height: arrowIconHeight1,
    };
  }, [arrowIconWidth1, arrowIconHeight1]);

  return (
    <div
      className="rounded bg-blue-denim overflow-hidden flex flex-row items-center justify-center py-2 px-3 text-center text-base text-grayscale-white font-desktop-caption-bold-link"
      style={stateDefaultTypeFilledSiStyle}
      onClick={onButtonDefaultClick}
    >
      {hasIconLeft && (
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src={iconImageUrl}
          style={arrowIconStyle}
        />
      )}
      <div
        className="flex flex-row items-start justify-start py-0 px-2"
        style={labelStyle}
      >
        <b className="relative leading-[24px]" style={label1Style}>
          {label}
        </b>
      </div>
      {hasIconRight && (
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src={imageSizeUrl}
          style={arrowIcon1Style}
        />
      )}
    </div>
  );
};

export default StateDefaultTypeFilledSi;
