import React from 'react';

import { Box, Center, HStack, Pressable, Text } from 'native-base';

import { FAIcon } from '@components/atoms';
import { FLAuth } from '@components/layout';
import { FMNumberPad, FMOtpField } from '@components/molecules';

import useLoginPin from './hook';

export default function LoginPin({ isWrong }: { isWrong?: boolean }) {
  const { onPressRegister } = useLoginPin();
  return (
    <FLAuth
      px={'20px'}
      backgroundColor={'white'}
      title={'Log in Account'}
      description={`Lorem ipsum dolor sit amet`}
    >
      <Box mt={'20'}>
        <FMOtpField isWrong={isWrong} />
        <HStack marginTop={3} justifyContent={'space-between'}>
          <HStack flexDirection={'row'}>
            {isWrong && (
              <>
                <FAIcon name="exclamation" color={'error.600'} size={'12px'} />
                <Text color={'error.600'} fontSize={'10px'}>
                  Wrong OTP code, please retry.
                </Text>
              </>
            )}
          </HStack>
        </HStack>
      </Box>
      <Center marginTop={84} justifyContent={'center'}>
        <Text marginRight={2} mb={'2'}>
          Phone Number
        </Text>
        <Text marginRight={2}>
          Dont' have an account?
          <Pressable onPress={onPressRegister}>
            <Text> Register</Text>
          </Pressable>
        </Text>
      </Center>
      <FMNumberPad />
    </FLAuth>
  );
}
