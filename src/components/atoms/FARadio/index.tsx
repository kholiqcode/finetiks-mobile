import React from 'react';

import { Radio } from 'native-base';

import type { IRadioProps } from 'native-base';

export type IFARadioProps = { label?: string } & IRadioProps;

export default React.memo(function FARadio(props: IFARadioProps) {
  const { testID, label, ...baseProps } = props;

  return (
    <Radio testID={testID} {...baseProps}>
      {label}
    </Radio>
  );
});
