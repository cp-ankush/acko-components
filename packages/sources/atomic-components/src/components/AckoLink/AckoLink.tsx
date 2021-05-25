import * as React from 'react';
import clsx from 'clsx';
import { AckoLinkSize } from './types';

export interface AckoLinkProps extends React.ComponentPropsWithoutRef<'a'> {
  /**
   * The size of the link.
   * @default 'medium'
   */
  size?: AckoLinkSize;

  /**
   * Whether link is standalone or not.
   * @type {boolean}
   * @default false
   */
  isStandalone?: boolean;
}

export const AckoLink = ({
  isStandalone = false,
  size = 'medium',
  children,
  className,
  ...props
}: AckoLinkProps) => {
  return (
    <a
      className={clsx(
        'Acko-link',
        `Acko-link_size--${size}`,
        { 'Acko-link--standalone': isStandalone },
        className,
      )}
      {...props}>
      {children}
    </a>
  );
};

export default React.memo(AckoLink);
