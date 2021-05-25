import * as React from 'react';
import { ackoxId } from '@acko-components/icons/dist/ackox/font/ackox';
import { AckoIconColor, AckoIconSize } from './types';

export interface AckoIconProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The size of the icon in pixels.
   * @default 24
   **/
  size?: AckoIconSize;
  /**
   * The color of the icon.
   * @default 'black'
   **/
  color?: AckoIconColor;
  /**
   * The value of the icon.
   **/
  value: ackoxId;
  /**
   * The aria-label of the icon.
   **/
  ariaLabel?: string;
}

export const Icon: React.FC<AckoIconProps> = ({
  size = 24,
  color = 'black',
  value,
  ariaLabel,
  className,
  style,
  ...props
}) => (
  <span
    className={`acx-${value} ${className ? className : ''}`}
    style={{ fontSize: size, color: `var(--acko-color_${color})`, ...style }}
    aria-label={ariaLabel ? ariaLabel : value}
    {...props}></span>
);

export default React.memo(Icon);
