import React from 'react';

import { Box, HStack, Pressable, Text } from 'native-base';

import { FAIcon } from '@components/atoms';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, 'delete'];

export default React.memo(function FMNumberPad() {
  return (
    <Box flex={1} justifyContent="center">
      <HStack flexWrap={'wrap'} width={'100%'}>
        {numbers.map((item) => (
          <Pressable
            width={'33%'}
            height={'25%'}
            alignItems={'center'}
            justifyContent="center"
            key={item}
          >
            {({ isPressed }) => {
              return (
                <Box
                  style={{
                    transform: [
                      {
                        scale: isPressed ? 0.8 : 1,
                      },
                    ],
                  }}
                >
                  {item === 'delete' ? (
                    <FAIcon
                      type="ionicons"
                      name="backspace-sharp"
                      size={'4xl'}
                      testID={'icon-delete'}
                    />
                  ) : (
                    <Text fontSize={'30px'}>{item}</Text>
                  )}
                </Box>
              );
            }}
          </Pressable>
        ))}
      </HStack>
    </Box>
  );
});
