import React from 'react';

import { Button } from 'native-base';

import type { IButtonProps } from 'native-base';

export type FAButtonProps = IButtonProps;

export default React.memo(function FAButton(props: FAButtonProps) {
  const { testID, ...baseProps } = props;

  return <Button testID={testID} {...baseProps} />;
});
