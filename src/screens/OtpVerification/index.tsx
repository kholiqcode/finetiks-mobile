import React from 'react';

import { Pressable, Text, View } from 'native-base';

import { FAIcon, FAInput } from '@components/atoms';
import { FLAuth } from '@components/layout';

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
      <View flex={2}>
        <View>
          <View flexDirection={'row'} justifyContent={'space-between'}>
            <FAInput
              width={39}
              height={57}
              borderColor={isWrong ? 'error.600' : 'muted.300'}
              textAlign={'center'}
              textAlignVertical={'center'}
              secureTextEntry
              fontSize={18}
              placeholder={'*'}
              maxLength={1}
              keyboardType="numeric"
              backgroundColor={'muted.300'}
              placeholderTextColor={'#000'}
            />
            <FAInput
              width={39}
              height={57}
              borderColor={isWrong ? 'error.600' : 'muted.300'}
              textAlign={'center'}
              textAlignVertical={'center'}
              secureTextEntry
              fontSize={18}
              placeholder={'*'}
              maxLength={1}
              keyboardType="numeric"
              backgroundColor={'muted.300'}
              placeholderTextColor={'#000'}
            />
            <FAInput
              width={39}
              height={57}
              borderColor={isWrong ? 'error.600' : 'muted.300'}
              textAlign={'center'}
              textAlignVertical={'center'}
              secureTextEntry
              fontSize={18}
              placeholder={'*'}
              maxLength={1}
              keyboardType="numeric"
              backgroundColor={'muted.300'}
              placeholderTextColor={'#000'}
            />
            <Text alignSelf={'center'} fontSize={14}>
              -
            </Text>
            <FAInput
              width={39}
              height={57}
              borderColor={isWrong ? 'error.600' : 'muted.300'}
              textAlign={'center'}
              textAlignVertical={'center'}
              secureTextEntry
              fontSize={18}
              placeholder={'*'}
              maxLength={1}
              keyboardType="numeric"
              backgroundColor={'muted.300'}
              placeholderTextColor={'#000'}
            />
            <FAInput
              width={39}
              height={57}
              borderColor={isWrong ? 'error.600' : 'muted.300'}
              textAlign={'center'}
              textAlignVertical={'center'}
              secureTextEntry
              fontSize={18}
              placeholder={'*'}
              maxLength={1}
              keyboardType="numeric"
              backgroundColor={'muted.300'}
              placeholderTextColor={'#000'}
            />
            <FAInput
              width={39}
              height={57}
              borderColor={isWrong ? 'error.600' : 'muted.300'}
              textAlign={'center'}
              textAlignVertical={'center'}
              secureTextEntry
              fontSize={18}
              placeholder={'*'}
              maxLength={1}
              keyboardType="numeric"
              backgroundColor={'muted.300'}
              placeholderTextColor={'#000'}
            />
          </View>
          <View flexDirection={'row'} marginTop={3} justifyContent={'space-between'}>
            <View flexDirection={'row'}>
              {isWrong && (
                <>
                  <FAIcon name="exclamation" color={'error.600'} size={'12px'} />
                  <Text color={'error.600'} fontSize={'10px'}>
                    Wrong OTP code, please retry.
                  </Text>
                </>
              )}
            </View>

            <Text>(00:{counter < 10 ? `0${counter}` : counter})</Text>
          </View>
        </View>
        {counter === 0 && (
          <View marginTop={84} justifyContent={'center'} flexDirection={'row'}>
            <Text marginRight={2}>Didnt recieve it?</Text>
            <Pressable onPress={onPressResend}>
              <Text>Resend Code</Text>
            </Pressable>
          </View>
        )}
      </View>
    </FLAuth>
  );
}
