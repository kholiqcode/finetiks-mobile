import React from 'react';

import { Box, IBoxProps, Text } from 'native-base';

type IFLAuthProps = {
  children: React.ReactNode;
  title?: string | Record<string, unknown>;
  description?: string | Record<string, unknown>;
} & IBoxProps;

export default React.memo(function FLAuth(props: IFLAuthProps) {
  const { children, title, description, ...baseProps } = props;

  return (
    <Box flex={1} {...baseProps} safeAreaTop>
      <Box mt={'20'} justifyContent={'center'}>
        {title && (
          <Text fontSize={24} fontWeight={'bold'}>
            {title.toString()}
          </Text>
        )}
        {description && (
          <Text marginTop={36} fontSize={14} width={270} fontFamily={'body'}>
            {description.toString()}
          </Text>
        )}
      </Box>
      {children}
    </Box>
  );
});
