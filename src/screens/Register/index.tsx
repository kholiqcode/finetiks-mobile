import React from 'react';

import { Box, Center, Divider, HStack, Text } from 'native-base';

import { FAButton, FAIcon, FAInput } from '@components/atoms';
import { FLAuth } from '@components/layout';

import { useRegister } from './hook';

export default function Register() {
  const { isEmailRegistered, isPhoneRegistered, isInvalidEmail, onPressRegister, onPressLogin } =
    useRegister();

  return (
    <FLAuth
      px={'20px'}
      title={'Register Account'}
      description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua`}
      backgroundColor={'white'}
    >
      <Box flex={0.5}>
        <Box flex={1}>
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
                This phone number has been registered in Finetiks. Please login.
              </Text>
            </HStack>
          )}

          <FAInput
            marginTop={25}
            borderColor={'muted.300'}
            color={'text.900'}
            placeholder="Email"
          />
          {isEmailRegistered ||
            (isInvalidEmail && (
              <HStack alignItems={'center'} marginTop={'5px'}>
                <FAIcon name="exclamation" color={'error.600'} size={'12px'} />
                <Text color={'error.600'} fontSize={'10px'}>
                  {isEmailRegistered
                    ? 'This email address has been registered in Finetiks. Please login.'
                    : 'Invalid Email Format'}
                </Text>
              </HStack>
            ))}
        </Box>

        <Box alignItems={'center'} flex={1} justifyContent={'flex-end'} marginBottom={'18px'}>
          <Text fontSize={10} fontFamily={'body'}>
            by creating an account, you agree with our
          </Text>
          <Text fontSize={10} fontFamily={'body'}>
            Terms of Use and Privacy Policy
          </Text>
        </Box>
      </Box>
      <Box flex={0.3}>
        <FAButton colorScheme={'muted'} variant={'solid'} onPress={onPressRegister}>
          Register
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
        <FAButton colorScheme={'muted'} variant={'outlineGray'} onPress={onPressLogin}>
          Log in
        </FAButton>
      </Box>
    </FLAuth>
  );
}
