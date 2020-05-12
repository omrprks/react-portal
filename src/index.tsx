import React, {
  FunctionComponent,
  ReactChild,
  ReactElement,
  HTMLAttributes,
  StrictMode,
} from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

export const App: FunctionComponent<Props> = ({ children }): ReactElement => (
  <StrictMode>
    <div>
      Basic React App
      {children}
    </div>
  </StrictMode>
);

export default App;
