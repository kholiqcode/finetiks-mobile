import React from 'react';

import { Box, Divider, Pressable, Text, View } from 'native-base';

import { useSelectLanguage } from './hook';

export default function SelectLanguage() {
  const { onPressLanguage } = useSelectLanguage();
  return (
    <Box flex={1} px={'20px'} backgroundColor={'white'}>
      <View flex={1} justifyContent={'center'}>
        <View
          bgColor={'muted.300'}
          borderRadius={23}
          width={142}
          height={115}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Text fontSize={'18px'}>Icon</Text>
        </View>
        <Text marginTop={7} fontSize={24} fontFamily={'heading'} fontWeight={'bold'}>
          Select Language
        </Text>
        <Text marginTop={9} fontSize={14} maxWidth={270} fontFamily={'body'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Text>
      </View>
      <View flex={1}>
        <Pressable paddingY={4} flexDirection={'row'} onPress={onPressLanguage}>
          <View bgColor={'muted.500'} width={6} height={6} borderRadius={30} />
          <Text color={'muted.600'} marginLeft={5} fontSize={14}>
            English
          </Text>
        </Pressable>
        <Divider width={'80%'} alignSelf={'center'} backgroundColor={'muted.400'} />
        <Pressable paddingY={4} flexDirection={'row'} onPress={onPressLanguage}>
          <View bgColor={'muted.500'} height={6} width={6} borderRadius={30} />
          <Text color={'muted.600'} marginLeft={5} fontSize={14}>
            Indonesian
          </Text>
        </Pressable>
      </View>
    </Box>
  );
}
