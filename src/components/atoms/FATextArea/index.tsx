import React from 'react';

import { TextArea } from 'native-base';

import type { ITextAreaProps } from 'native-base';

export type FATextAreaProps = { autoCompleteType?: string } & ITextAreaProps;

export default React.memo(function FATextArea(props: FATextAreaProps) {
  const { testID, autoCompleteType, ...baseProps } = props;

  return <TextArea testID={testID} autoCompleteType={autoCompleteType} {...baseProps} />;
});
