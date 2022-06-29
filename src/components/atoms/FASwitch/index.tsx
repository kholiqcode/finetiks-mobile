import React from 'react';

import { Switch } from 'native-base';

import type { ISwitchProps } from 'native-base';

export type FASwitchProps = ISwitchProps;

export default React.memo(function FASwitch(props: FASwitchProps) {
  const { testID, ...baseProps } = props;

  return <Switch testID={testID} {...baseProps} />;
});
