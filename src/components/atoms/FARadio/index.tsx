import { memo } from 'react';

import { Radio } from 'native-base';

import type { IRadioProps } from 'native-base';

export type IFARadioProps = { label?: string } & IRadioProps;

export const FARadio = memo((props: IFARadioProps) => {
  const { testID, label, ...baseProps } = props;

  return (
    <Radio testID={testID} {...baseProps}>
      {label}
    </Radio>
  );
});

FARadio.displayName = 'FARadio';
