import React from 'react';

import { Center, Text, View } from 'native-base';

import { useSplash } from './hook';

export default function Splash() {
  useSplash();
  return (
    <Center flex={1}>
      <View
        bgColor={'muted.300'}
        borderRadius={6}
        height={217}
        width={203}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Text>Logo</Text>
      </View>
      <Text fontSize={14} position={'absolute'} bottom={10}>
        Version 0.00.00
      </Text>
    </Center>
  );
}
