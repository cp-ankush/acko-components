import * as React from 'react';
import clsx from 'clsx';
import { AckoToggleSize } from './types';

export interface AckoToggleProps
  extends React.ComponentPropsWithoutRef<'input'> {
  /**
   * ID of the toggle.
   * @type {string}
   */
  id: string;

  /**
   * Label text linked to the toggle.
   * @type {string}
   */
  labelText: string;

  /**
   * The size of the toggle.
   * @default 'medium'
   */
  size?: AckoToggleSize;
}

export const AckoToggle = ({
  className,
  id,
  labelText,
  size = 'medium',
  ...props
}: AckoToggleProps) => {
  return (
    <div
      className={clsx('Acko-toggle', `Acko-toggle_size--${size}`, className)}>
      <div className="Acko-toggle_switch">
        <input type="checkbox" id={id} {...props} />
        <span aria-hidden="true"></span>
      </div>
      <label htmlFor={id}>{labelText}</label>
    </div>
  );
};

export default React.memo(AckoToggle);
