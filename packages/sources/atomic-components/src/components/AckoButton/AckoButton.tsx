import * as React from 'react';
import { AckoButtonVariant, AckoButtonSize } from './types';

export interface AckoButtonProps
  extends React.ComponentPropsWithoutRef<'button'> {
  /**
   * The variant of the button.
   * @default 'primary'
   */
  variant?: AckoButtonVariant;
  /**
   * The size of the button.
   * @default 'medium'
   */
  size?: AckoButtonSize;
  /**
   * The value of the optional icon.
   * @default undefined
   **/
  icon?: string;
}

export const AckoButton = ({
  variant = 'primary',
  size = 'medium',
  children,
  className,
  ...props
}: AckoButtonProps) => {
  return (
    <button
      className={`acko-btn acko-btn_variant--${variant} acko-btn_size--${size} ${
        className ? className : ''
      }`}
      {...props}>
      {children}
    </button>
  );
};

export default React.memo(AckoButton);
