import React from 'react';

import { Badge } from 'native-base';

import type { IBadgeProps } from 'native-base';

export type FABadgeProps = IBadgeProps;

export default React.memo(function FABadge(props: FABadgeProps) {
  const { testID, ...baseProps } = props;

  return <Badge testID={testID} {...baseProps} />;
});
