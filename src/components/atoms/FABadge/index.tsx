import React, { memo } from 'react';

import { Badge } from 'native-base';

import type { IBadgeProps } from 'native-base';

export type IFABadgeProps = IBadgeProps;

export const FABadge = memo((props: IFABadgeProps) => {
  const { testID, ...baseProps } = props;

  return <Badge testID={testID} {...baseProps} />;
});
FABadge.displayName = 'FABadge';
