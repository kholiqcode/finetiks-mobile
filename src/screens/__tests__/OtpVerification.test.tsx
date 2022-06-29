import React from 'react';

import { render } from '@mocks';

import { OtpVerification } from '@screens';

describe('OtpVerification_Screen', () => {
  it('Render OtpVerification screen', () => {
    const intro = render(<OtpVerification />);
    expect(intro).toBeDefined();
  });
});
