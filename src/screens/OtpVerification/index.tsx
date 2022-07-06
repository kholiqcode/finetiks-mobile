import React from 'react';

import { Box, HStack, Pressable, Text } from 'native-base';

import { FAIcon } from '@components/atoms';
import { FLAuth } from '@components/layout';
import { FMOtpField } from '@components/molecules';

import useOtpVerification from './hook';

export default function Register() {
  const { isWrong, counter, onPressResend } = useOtpVerification();

  return (
    <FLAuth
      px={'20px'}
      backgroundColor={'white'}
      title={'OTP Verification'}
      description={`Lorem ipsum dolor sit amet, consectetur (OTP code is sent to the +62*******7512)`}
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
          <Text>(00:{counter < 10 ? `0${counter}` : counter})</Text>
        </HStack>
        {counter === 0 && (
          <HStack marginTop={84} justifyContent={'center'}>
            <Text marginRight={2}>Didnt recieve it?</Text>
            <Pressable onPress={onPressResend}>
              <Text>Resend Code</Text>
            </Pressable>
          </HStack>
        )}
      </Box>
    </FLAuth>
  );
}
