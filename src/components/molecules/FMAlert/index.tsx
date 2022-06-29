import React from 'react';

import { Alert, Box, CloseIcon, HStack, IconButton, Text, VStack } from 'native-base';

import type { IAlertProps } from 'native-base';

export type IFMAlertProps = {
  title?: string;
  description?: string;
} & IAlertProps;

export default React.memo(function FMAlert(props: IFMAlertProps) {
  const { testID, title, description, ...baseProps } = props;

  return (
    <Alert testID={testID} {...baseProps}>
      <VStack space={2} flexShrink={1} w="100%">
        <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
          <HStack flexShrink={1} space={2} alignItems="center">
            <Alert.Icon />
            <Text fontSize="md" fontWeight="medium" color="coolGray.800">
              {title}
            </Text>
          </HStack>
          <IconButton
            variant="unstyled"
            _focus={{
              borderWidth: 0,
            }}
            icon={<CloseIcon size="3" color="coolGray.600" />}
          />
        </HStack>
        <Box
          pl="6"
          _text={{
            color: 'coolGray.600',
          }}
        >
          {description}
        </Box>
      </VStack>
    </Alert>
  );
});
