import React, { memo } from 'react';

import { Switch } from 'native-base';

import type { ISwitchProps } from 'native-base';

export type IFASwitchProps = ISwitchProps;

export const FASwitch = memo((props: IFASwitchProps) => {
  const { testID, ...baseProps } = props;

  return <Switch testID={testID} {...baseProps} />;
});
FASwitch.displayName = 'FASwitch';
