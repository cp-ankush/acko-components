import * as React from 'react';
import '@acko-components/css';

export interface AckoButtonProps
  extends React.ComponentPropsWithoutRef<'button'> {
  className?: string;
}

export const AckoButton = ({ children, className }: AckoButtonProps) => {
  return (
    <button className={`acko-bg-success acko-text-yellow ${className}`}>
      {children}
    </button>
  );
};

export default React.memo(AckoButton);
