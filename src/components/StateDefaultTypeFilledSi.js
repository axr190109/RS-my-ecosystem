import { useMemo } from "react";

const StateDefaultTypeFilledSi = ({
  iconImageUrl,
  label = "Button",
  imageSize,
  hasIconRight = true,
  hasIconLeft = true,
  stateDefaultTypeFilledSiBoxSizing,
  stateDefaultTypeFilledSiCursor,
  stateDefaultTypeFilledSiBorder,
  stateDefaultTypeFilledSiAlignSelf,
  stateDefaultTypeFilledSiBackgroundColor,
  stateDefaultTypeFilledSiBoxShadow,
  stateDefaultTypeFilledSiZIndex,
  stateDefaultTypeFilledSiMarginTop,
  stateDefaultTypeFilledSiWidth,
  arrowIconWidth,
  arrowIconHeight,
  labelBoxSizing,
  labelCursor,
  labelLineHeight,
  labelDisplay,
  labelColor,
  arrowIconWidth1,
  arrowIconHeight1,
  onButtonDefaultClick,
  onLabelContainerClick,
}) => {
  const stateDefaultTypeFilledSiStyle = useMemo(() => {
    return {
      boxSizing: stateDefaultTypeFilledSiBoxSizing,
      cursor: stateDefaultTypeFilledSiCursor,
      border: stateDefaultTypeFilledSiBorder,
      alignSelf: stateDefaultTypeFilledSiAlignSelf,
      backgroundColor: stateDefaultTypeFilledSiBackgroundColor,
      boxShadow: stateDefaultTypeFilledSiBoxShadow,
      zIndex: stateDefaultTypeFilledSiZIndex,
      marginTop: stateDefaultTypeFilledSiMarginTop,
      width: stateDefaultTypeFilledSiWidth,
    };
  }, [
    stateDefaultTypeFilledSiBoxSizing,
    stateDefaultTypeFilledSiCursor,
    stateDefaultTypeFilledSiBorder,
    stateDefaultTypeFilledSiAlignSelf,
    stateDefaultTypeFilledSiBackgroundColor,
    stateDefaultTypeFilledSiBoxShadow,
    stateDefaultTypeFilledSiZIndex,
    stateDefaultTypeFilledSiMarginTop,
    stateDefaultTypeFilledSiWidth,
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
      cursor: labelCursor,
    };
  }, [labelBoxSizing, labelCursor]);

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
      className="rounded bg-blue-denim overflow-hidden flex flex-row items-center justify-center py-2 px-3 text-center text-base text-grayscale-white font-desktop-body"
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
        onClick={onLabelContainerClick}
      >
        <b className="relative leading-[24px]" style={label1Style}>
          {label}
        </b>
      </div>
      {hasIconRight && (
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src={imageSize}
          style={arrowIcon1Style}
        />
      )}
    </div>
  );
};

export default StateDefaultTypeFilledSi;
