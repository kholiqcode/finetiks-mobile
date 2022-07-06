import React from 'react';

import { Box, Center, Divider, HStack, Text } from 'native-base';

import { FAButton, FAIcon, FAInput } from '@components/atoms';
import { FLAuth } from '@components/layout';

import { useLoginPhone } from './hook';

export default function LoginPhone() {
  const { isPhoneRegistered, onPressUsePin, onPressLogin } = useLoginPhone();

  return (
    <FLAuth
      px={'20px'}
      title={'Register Account'}
      description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua`}
      backgroundColor={'white'}
    >
      <Box flex={0.5}>
        <HStack mt={'20'}>
          <FAInput
            InputLeftElement={
              <Box height={4} width={4} bgColor={'muted.500'} borderRadius={30} marginLeft={4} />
            }
            color={'text.900'}
            width={86}
            marginRight={4}
            placeholder="+62"
            variant={'outline'}
            borderColor={'muted.600'}
            max={3}
          />
          <FAInput
            flex={1}
            borderColor={isPhoneRegistered ? 'error.600' : 'muted.300'}
            placeholder="Phone Number"
            color={'text.900'}
          />
        </HStack>
        {isPhoneRegistered && (
          <HStack alignItems={'center'} marginTop={'5px'}>
            <FAIcon name="exclamation" color={'error.600'} size={'12px'} />
            <Text color={'error.600'} fontSize={'10px'}>
              Phone number hasn't been registered
            </Text>
          </HStack>
        )}
      </Box>
      <Box flex={0.3}>
        <FAButton colorScheme={'muted'} variant={'solid'} onPress={onPressLogin}>
          Login
        </FAButton>
        <Box my={'18px'}>
          <Center
            zIndex={1}
            bgColor={'white'}
            width={30}
            height={30}
            alignSelf={'center'}
            borderRadius={30}
            _dark={{ backgroundColor: 'gray.800' }}
          >
            <Text fontFamily={'body'}>or</Text>
          </Center>
          <Divider
            position={'absolute'}
            bottom={13}
            backgroundColor={'blueGray.900'}
            width={'80%'}
            alignSelf={'center'}
            _dark={{ backgroundColor: 'white' }}
          />
        </Box>
        <FAButton colorScheme={'muted'} variant={'outlineGray'} onPress={onPressUsePin}>
          Use Pin
        </FAButton>
      </Box>
    </FLAuth>
  );
}
