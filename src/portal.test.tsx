import React from 'react';
import { render } from '@testing-library/react';

import {
  AppendToExistingParentById,
  AppendToExistingParentByElement,
  AppendToNewParent,
  AppendToDocumentBody,
  appendToExistingParentByIdText,
  appendToExistingParentByElementText,
  appendToNewParentText,
  appendToDocumentBodyText,
} from './portal.story';

describe('Portal', () => {
  test('appends to existing parent element using parent id', () => {
    const { getByText } = render(<AppendToExistingParentById />);

    expect(getByText(appendToExistingParentByIdText)).toBeDefined();
  });

  test('appends to existing parent using parent element ref', () => {
    const { getByText } = render(<AppendToExistingParentByElement />);

    expect(getByText(appendToExistingParentByElementText)).toBeDefined();
  });

  test('creates a new HTML element and appends to it', () => {
    const { getByText } = render(<AppendToNewParent />);

    expect(getByText(appendToNewParentText)).toBeDefined();
  });

  test('appends to document.body', () => {
    const { getByText } = render(<AppendToDocumentBody />);

    expect(getByText(appendToDocumentBodyText)).toBeDefined();
  });
});
