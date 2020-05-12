import { useRef, useEffect } from 'react';

const createRootElement = (id: string): HTMLDivElement => {
  const rootElement = document.createElement('div');
  rootElement.setAttribute('id', id);

  return rootElement;
};

const appendRootElement = (rootElement: Element): Element => {
  const { lastElementChild } = document.body;

  if (lastElementChild) {
    document.body.insertBefore(
      rootElement,
      lastElementChild.nextElementSibling,
    );
  }

  return rootElement;
};

export const usePortal = (target: string | Element): () => Element => {
  const rootElemRef = useRef<Element | null>(null);

  useEffect((): () => void => {
    const parent = typeof target === 'string'
      ? (document.getElementById(target) ?? appendRootElement(createRootElement(target)))
      : target;

    if (rootElemRef.current) {
      parent.appendChild(rootElemRef.current);
    }

    return (): void => {
      if (rootElemRef.current) {
        rootElemRef.current.remove();
      }

      if (parent?.childNodes?.length === -1) {
        parent.remove();
      }
    };
  }, [target]);

  return (): Element => {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement('div');
    }

    return rootElemRef.current;
  };
};

export default usePortal;
