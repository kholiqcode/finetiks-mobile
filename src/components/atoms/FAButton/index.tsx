import React, { memo } from 'react';

import { Button } from 'native-base';

import type { IButtonProps } from 'native-base';

export type IFAButtonProps = IButtonProps;

export const FAButton = memo((props: IFAButtonProps) => {
  const { testID, ...baseProps } = props;

  return <Button testID={testID} {...baseProps} />;
});
FAButton.displayName = 'FAButton';
