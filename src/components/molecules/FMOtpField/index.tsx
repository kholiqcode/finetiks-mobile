import React from 'react';

import { HStack, Text } from 'native-base';

import { FAInput } from '@components/atoms';

export type FMOtpFieldProps = {
  isWrong: boolean;
};

export default React.memo(function FMOtpField({ isWrong }: FMOtpFieldProps) {
  return (
    <HStack justifyContent={'space-between'}>
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
    </HStack>
  );
});
