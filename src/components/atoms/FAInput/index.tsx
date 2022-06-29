import React from 'react';

import { Input, InputGroup, InputLeftAddon, InputRightAddon } from 'native-base';

import type { IInputProps } from 'native-base';

export type FAInputProps = {
  leftAddon?: string | JSX.Element;
  rightAddon?: string | JSX.Element;
} & IInputProps;

export default React.memo(function FAInput(props: FAInputProps) {
  const { testID, leftAddon, rightAddon, ...baseProps } = props;

  if (leftAddon || rightAddon) {
    return (
      <InputGroup>
        {leftAddon && <InputLeftAddon children={leftAddon} testID={'leftAddon'} />}
        <Input testID={testID} {...baseProps} placeholder="nativebase" />
        {rightAddon && <InputRightAddon children={rightAddon} testID={'rightAddon'} />}
      </InputGroup>
    );
  }

  return <Input testID={testID} {...baseProps} />;
});
