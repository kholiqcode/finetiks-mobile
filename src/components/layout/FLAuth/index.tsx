/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';

import { Box, Text, View } from 'native-base';

type IFLAuthProps = {
  children: any;
  title?: string | {};
  description?: string | {};
};

export default function FLAuth(props: IFLAuthProps) {
  const { children, title, description } = props;

  return (
    <Box flex={1}>
      <View flex={1} justifyContent={'center'}>
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
      </View>
      {children}
    </Box>
  );
}
