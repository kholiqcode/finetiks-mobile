import React, { memo } from 'react';

import { TextArea } from 'native-base';

import type { ITextAreaProps } from 'native-base';

export type IFATextAreaProps = { autoCompleteType?: string } & ITextAreaProps;

export const FATextArea = memo((props: IFATextAreaProps) => {
  const { testID, autoCompleteType, ...baseProps } = props;

  return <TextArea testID={testID} autoCompleteType={autoCompleteType} {...baseProps} />;
});
FATextArea.displayName = 'FATextArea';
