import React from 'react';

import { Center, Text } from 'native-base';

import { useSplash } from './hook';

export default function Splash() {
  useSplash();
  return (
    <Center flex={1} backgroundColor={'white'}>
      <Center bgColor={'muted.300'} borderRadius={6} height={217} width={203}>
        <Text>Logo</Text>
      </Center>
      <Text fontSize={14} position={'absolute'} bottom={10}>
        Version 0.00.00
      </Text>
    </Center>
  );
}
