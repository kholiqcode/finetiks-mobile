import React from 'react';

import { Link } from 'native-base';

import type { ILinkProps } from 'native-base';

export type FALinkProps = ILinkProps;

export default React.memo(function FALink(props: FALinkProps) {
  const { testID, ...baseProps } = props;

  return <Link testID={testID} {...baseProps} />;
});
