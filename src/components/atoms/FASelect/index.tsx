import React, { memo } from 'react';

import { Select } from 'native-base';

import type { ISelectProps } from 'native-base';

export type IFASelectProps = {
  data: Array<{
    label: string;
    value: string;
  }>;
} & ISelectProps;

export const FASelect = memo((props: IFASelectProps) => {
  const { testID, data, ...baseProps } = props;

  return (
    <Select testID={testID} {...baseProps}>
      {data.map((item) => (
        <Select.Item label={item.label} value={item.value} />
      ))}
    </Select>
  );
});
FASelect.displayName = 'FASelect';
