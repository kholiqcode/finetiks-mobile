import React from 'react';
import { memo } from 'react';

import { Input, InputGroup, InputLeftAddon, InputRightAddon } from 'native-base';

import type { IInputProps } from 'native-base';

export type IFAInputProps = {
  leftAddon?: string | JSX.Element;
  rightAddon?: string | JSX.Element;
} & IInputProps;

export const FAInput = memo((props: IFAInputProps) => {
  const { testID, leftAddon, rightAddon, ...baseProps } = props;

  if (leftAddon || rightAddon) {
    return (
      <InputGroup>
        {leftAddon && <InputLeftAddon children={leftAddon} />}
        <Input testID={testID} {...baseProps} placeholder="nativebase" />
        {rightAddon && <InputRightAddon children={rightAddon} />}
      </InputGroup>
    );
  }

  return <Input testID={testID} {...baseProps} />;
});
FAInput.displayName = 'FAInput';
