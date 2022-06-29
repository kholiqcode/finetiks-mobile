import React from 'react';

import { Heading, Spinner, Stack } from 'native-base';

import type { ISpinnerProps } from 'native-base';
import type { ColorType, ResponsiveValue } from 'native-base/lib/typescript/components/types';

export type FASpinnerProps = {
  children?: string | number;
  color?: ColorType;
  direction?: ResponsiveValue<'row' | 'column' | 'column-reverse' | 'row-reverse'>;
} & ISpinnerProps;

export default React.memo(function FASpinner(props: FASpinnerProps) {
  const { testID, children, color, size, direction, ...baseProps } = props;

  return (
    <Stack space={4} direction={direction ?? 'row'}>
      <Spinner testID={testID} {...baseProps} />
      {children && (
        <Heading color={color} fontSize={size}>
          {children}
        </Heading>
      )}
    </Stack>
  );
});
