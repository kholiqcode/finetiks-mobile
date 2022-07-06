import React from 'react';

import { render } from '@mocks';

import { FMOtpField } from '@components/molecules';

describe('FMAlert', () => {
  it('should render correctly', () => {
    const container = render(<FMOtpField isWrong />);

    expect(container).toBeDefined();
  });

  // it('should show red border when isWrong true', () => {
  //   const { getByTestId } = render(<FMOtpField isWrong />);

  //   expect(getByTestId('otp-input-1')).toHaveProperty('borderColor', 'error.600');
  // });
});
