import React from 'react';
import Constants from '../../constants';
import RadialSlider from './RadialSlider';
import SpeedoMeter from './SpeedoMeter';
import type { RootSliderProps, SpeedoMeterProps } from './types';
import type { defaultSpeedoMeterProps } from './SpeedometerDefaultProps';
import { defaultProps } from './SliderDefaultProps';

const RootSlider = (props: RootSliderProps) => {
  const { variant } = props;

  const transmittedProps = {...defaultProps, ...props}

  return variant === Constants.speedoMeterMarker ||
    variant === Constants.speedometer ? (
    // @ts-ignore
    <SpeedoMeter
      {...(props as SpeedoMeterProps &
        typeof defaultSpeedoMeterProps as object)}
    />
  ) : (
    <RadialSlider {...transmittedProps} />
  );
};

export default RootSlider;
