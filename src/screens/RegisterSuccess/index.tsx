import React from 'react';

import { Box, Text } from 'native-base';

import { FAButton } from '@components/atoms';
import { scaleSizeY } from '@theme';

export default function RegisterSuccess() {
  return (
    <Box flex={1} backgroundColor={'white'} px={'20px'} justifyContent={'space-evenly'}>
      <Box alignItems={'center'}>
        <Text fontFamily={'heading'} fontSize={'lg'} fontWeight={'bold'}>
          Registration Success
        </Text>
        <Box
          mt={`${scaleSizeY(42)}px`}
          bgColor={'muted.300'}
          borderRadius={6}
          height={217}
          width={203}
          alignItems={'center'}
          justifyContent={'center'}
          alignSelf={'center'}
        >
          <Text>Ilustration</Text>
        </Box>
        <Text mt={'20px'} fontSize={'md'} textAlign={'center'}>
          Congratulation, your account has been successfully created!
        </Text>
        <Text mt={'10px'} textAlign={'center'}>
          Proceed to onboard for accessing the full features or try he app for a quick review.
        </Text>
      </Box>
      <Box>
        <FAButton variant={'solid'} colorScheme={'muted'}>
          Onboard Me
        </FAButton>
        <FAButton
          mt={'20px'}
          _text={{ color: 'muted.600' }}
          variant={'unstyled'}
          colorScheme={'muted'}
        >
          Try App
        </FAButton>
      </Box>
    </Box>
  );
}
