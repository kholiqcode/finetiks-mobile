import React, { memo } from 'react';

import { Link } from 'native-base';

import type { ILinkProps } from 'native-base';

export type IFALinkProps = ILinkProps;

export const FALink = memo((props: IFALinkProps) => {
  const { testID, ...baseProps } = props;

  return <Link testID={testID} {...baseProps} />;
});
FALink.displayName = 'FALink';
