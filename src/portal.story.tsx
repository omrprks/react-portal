import React, {
  StrictMode,
  ReactElement,
  ReactNode,
  CSSProperties,
  useState,
  createContext,
} from 'react';

import Portal from './portal';

export default {
  title: 'Portal',
  includeStories: [
    'AppendToExistingParentById',
    'AppendToExistingParentByElement',
    'AppendToNewParent',
    'AppendToDocumentBody',
  ],
};

export const appendToExistingParentByIdText = 'Portal which utilizes an existing HTML Element using id';
export const appendToExistingParentByElementText = 'Portal which appends to an existing HTML Element by HTMLElement';
export const appendToNewParentText = 'Portal which appends to a new HTML Element that&apos;s appended to document.body';
export const appendToDocumentBodyText = 'Portal which appends to document.body';

const AppContext = createContext<HTMLDivElement | null>(null);
const App = ({ children, style }: { children: ReactNode; style?: CSSProperties }): ReactElement => {
  const [targetRef, setTargetRef] = useState<HTMLDivElement | null>(null);

  return (
    <StrictMode>
      <AppContext.Provider value={targetRef}>
        <div style={{ border: '1px solid #000' }}>
          App Root
          <div
            id="target"
            ref={(ref): void => setTargetRef(ref)}
            style={style}
          />

          {children}
        </div>
      </AppContext.Provider>
    </StrictMode>
  );
};

export const AppendToExistingParentById = (): ReactElement => (
  <App style={{ border: '1px solid black' }}>
    <Portal node="target">
      {appendToExistingParentByIdText}
    </Portal>
  </App>
);

export const AppendToNewParent = (): ReactElement => (
  <App style={{ border: '1px solid #F00' }}>
    <Portal node="new-target">
      {appendToNewParentText}
    </Portal>
  </App>
);

export const AppendToExistingParentByElement = (): ReactElement => (
  <App style={{ border: '1px solid #F00' }}>
    <AppContext.Consumer>
      {(forwardRef: HTMLDivElement | null): ReactElement => {
        if (!forwardRef) {
          return <></>;
        }

        return (
          <Portal node={forwardRef}>
            {appendToExistingParentByElementText}
          </Portal>
        );
      }}
    </AppContext.Consumer>
  </App>
);

export const AppendToDocumentBody = (): ReactElement => (
  <App style={{ border: '1px solid #F00' }}>
    <Portal node={document.body}>
      {appendToDocumentBodyText}
    </Portal>
  </App>
);
