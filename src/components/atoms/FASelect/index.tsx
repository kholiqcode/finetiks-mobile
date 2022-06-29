import React from 'react';

import { Select } from 'native-base';

import type { ISelectProps } from 'native-base';

export type FASelectProps = {
  data: Array<{
    label: string;
    value: string;
  }>;
} & ISelectProps;

export default React.memo(function FASelect(props: FASelectProps) {
  const { testID, data, ...baseProps } = props;

  return (
    <Select testID={testID} {...baseProps}>
      {data.map((item) => (
        <Select.Item key={item.value} label={item.label} value={item.value} />
      ))}
    </Select>
  );
});
