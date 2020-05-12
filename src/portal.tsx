import { ReactNode, ReactPortal } from 'react';
import { createPortal } from 'react-dom';

import usePortal from './usePortal';

export type Props = {
  node: string | Element;
  children: ReactNode;
}

export const Portal = (props: Props): ReactPortal | null => {
  const { node, children } = props;
  const target = usePortal(node);

  if (target) {
    return createPortal(children, target());
  }

  return null;
};

export default Portal;
