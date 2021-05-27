import * as React from 'react';
import '@acko-components/css';

export interface AckoButtonProps
  extends React.ComponentPropsWithoutRef<'button'> {}

export const AckoButton = ({ children }: AckoButtonProps) => {
  return (
    <button className={`acko-bg-success acko-text-yellow`}>{children}</button>
  );
};

export default React.memo(AckoButton);
