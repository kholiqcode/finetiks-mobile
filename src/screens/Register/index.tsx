import React from 'react';

import { Divider, Text, View } from 'native-base';

import { FAButton, FAIcon, FAInput } from '@components/atoms';
import { FLAuth } from '@components/layout';

import { useRegister } from './hook';

export default function Register() {
  const { isEmailRegistered, isPhoneRegistered, isInvalidEmail, onPressRegister } = useRegister();

  return (
    <FLAuth
      title={'Register Account'}
      description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua`}
      px={'20px'}
      backgroundColor={'white'}
    >
      <View flex={1}>
        <View flexDirection={'row'}>
          <FAInput
            InputLeftElement={
              <View height={4} width={4} bgColor={'muted.500'} borderRadius={30} marginLeft={4} />
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
        </View>
        {isPhoneRegistered && (
          <View flexDirection={'row'} alignItems={'center'} marginTop={'5px'}>
            <FAIcon name="exclamation" color={'error.600'} size={'12px'} />
            <Text color={'error.600'} fontSize={'10px'}>
              This phone number has been registered in Finetiks. Please login.
            </Text>
          </View>
        )}

        <FAInput marginTop={25} borderColor={'muted.300'} color={'text.900'} placeholder="Email" />
        {isEmailRegistered ||
          (isInvalidEmail && (
            <View flexDirection={'row'} alignItems={'center'} marginTop={'5px'}>
              <FAIcon name="exclamation" color={'error.600'} size={'12px'} />
              <Text color={'error.600'} fontSize={'10px'}>
                {isEmailRegistered
                  ? 'This email address has been registered in Finetiks. Please login.'
                  : 'Invalid Email Format'}
              </Text>
            </View>
          ))}
      </View>
      <View flex={1}>
        <View alignItems={'center'}>
          <Text fontSize={10} fontFamily={'body'}>
            by creating an account, you agree with our
          </Text>
          <Text fontSize={10} fontFamily={'body'}>
            Terms of Use and Privacy Policy
          </Text>
        </View>
        <FAButton
          colorScheme={'muted'}
          variant={'solid'}
          marginTop={'18px'}
          onPress={onPressRegister}
        >
          Register
        </FAButton>
        <View marginTop={'30px'}>
          <View
            zIndex={1}
            bgColor={'white'}
            width={30}
            height={30}
            alignItems={'center'}
            alignSelf={'center'}
            justifyContent={'center'}
            borderRadius={30}
            _dark={{ backgroundColor: 'gray.800' }}
          >
            <Text fontFamily={'body'}>or</Text>
          </View>
          <Divider
            position={'absolute'}
            bottom={13}
            backgroundColor={'blueGray.900'}
            width={'80%'}
            alignSelf={'center'}
            _dark={{ backgroundColor: 'white' }}
          />
        </View>
        <FAButton colorScheme={'muted'} variant={'outlineGray'} marginTop={'18px'}>
          Log in
        </FAButton>
      </View>
    </FLAuth>
  );
}
