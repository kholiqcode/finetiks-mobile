import React from 'react';

import { Box, Center, Divider, Pressable, Text } from 'native-base';

import { useSelectLanguage } from './hook';

export default function SelectLanguage() {
  const { onPressLanguage } = useSelectLanguage();
  return (
    <Box flex={1} px={'20px'} backgroundColor={'white'}>
      <Box flex={1} justifyContent={'center'}>
        <Center bgColor={'muted.300'} borderRadius={23} width={142} height={115}>
          <Text fontSize={'18px'}>Icon</Text>
        </Center>
        <Text marginTop={7} fontSize={24} fontFamily={'heading'} fontWeight={'bold'}>
          Select Language
        </Text>
        <Text marginTop={9} fontSize={14} maxWidth={270} fontFamily={'body'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Text>
      </Box>
      <Box flex={1}>
        <Pressable paddingY={4} flexDirection={'row'} onPress={onPressLanguage}>
          <Box bgColor={'muted.500'} width={6} height={6} borderRadius={30} />
          <Text color={'muted.600'} marginLeft={5} fontSize={14}>
            English
          </Text>
        </Pressable>
        <Divider width={'80%'} alignSelf={'center'} backgroundColor={'muted.400'} />
        <Pressable paddingY={4} flexDirection={'row'} onPress={onPressLanguage}>
          <Box bgColor={'muted.500'} height={6} width={6} borderRadius={30} />
          <Text color={'muted.600'} marginLeft={5} fontSize={14}>
            Indonesian
          </Text>
        </Pressable>
      </Box>
    </Box>
  );
}
