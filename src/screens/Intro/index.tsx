import React from 'react';
import { Dimensions, StatusBar } from 'react-native';

import { ArrowBackIcon, ArrowForwardIcon, Box, Center, HStack, Pressable, Text } from 'native-base';
import { TabView } from 'react-native-tab-view';

import { FAButton } from '@components/atoms';
import { scaleSizeX, scaleSizeY } from '@theme';

import useIntro from './hook';

const initialLayout = {
  width: Dimensions.get('window').width,
};

export default function Intro() {
  const { index, setIndex, routes, onNextPress, onBackPress, onGettingStartedPress } = useIntro();

  const FirstRoute = (props) => {
    return (
      <Box px={'20px'} pb={'20px'} flex={1} justifyContent={'space-between'}>
        <Center backgroundColor={'muted.300'} borderRadius={'xl'} height={scaleSizeY(420)}>
          <Text>Ilustration</Text>
        </Center>
        <Text
          mt={`${scaleSizeY(20)}px`}
          fontWeight={'bold'}
          fontFamily={'heading'}
          letterSpacing={'lg'}
          fontSize={24}
        >
          Lorem ipsum dolor sit, consectetur adipiscing
        </Text>
        <Text fontSize={14} fontFamily={'body'}>
          Lorem ipsum dolor sit amet, consectetur elit et adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </Text>
        <RenderNavigation {...props} />
      </Box>
    );
  };

  const SecondRoute = (props) => (
    <Box px={'20px'} pb={'20px'} flex={1} justifyContent={'space-between'}>
      <Center backgroundColor={'muted.300'} borderRadius={'xl'} height={scaleSizeY(420)}>
        <Text>Ilustration</Text>
      </Center>
      <Text
        mt={`${scaleSizeY(20)}px`}
        fontWeight={'bold'}
        fontFamily={'heading'}
        letterSpacing={'lg'}
        fontSize={24}
      >
        Lorem ipsum dolor sit, consectetur adipiscing
      </Text>
      <Text fontSize={14} fontFamily={'body'}>
        Lorem ipsum dolor sit amet, consectetur elit et adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </Text>
      <RenderNavigation {...props} />
    </Box>
  );

  const ThirdRoute = (props) => (
    <Box px={'20px'} pb={'20px'} flex={1} justifyContent={'space-between'}>
      <Center backgroundColor={'muted.300'} borderRadius={'xl'} height={scaleSizeY(420)}>
        <Text>Ilustration</Text>
      </Center>
      <Text
        mt={`${scaleSizeY(20)}px`}
        fontWeight={'bold'}
        fontFamily={'heading'}
        letterSpacing={'lg'}
        fontSize={24}
      >
        Lorem ipsum dolor sit, consectetur adipiscing
      </Text>
      <Text fontSize={14} fontFamily={'body'}>
        Lorem ipsum dolor sit amet, consectetur elit et adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </Text>
      <RenderNavigation {...props} />
    </Box>
  );

  const FourthRoute = (props) => (
    <Box px={'20px'} pb={'20px'} flex={1} justifyContent={'space-between'}>
      <Center backgroundColor={'muted.300'} borderRadius={'xl'} height={scaleSizeY(420)}>
        <Text>Ilustration</Text>
      </Center>
      <Text
        mt={`${scaleSizeY(20)}px`}
        fontWeight={'bold'}
        fontFamily={'heading'}
        letterSpacing={'lg'}
        fontSize={24}
      >
        Lorem ipsum dolor sit, consectetur adipiscing
      </Text>
      <Text fontSize={14} fontFamily={'body'}>
        Lorem ipsum dolor sit amet, consectetur elit et adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </Text>
      <RenderNavigation {...props} />
    </Box>
  );

  const RenderNavigation = (props) => (
    <HStack flex={1}>
      {props.route.key != 'first' && props.route.key != 'fourth' && (
        <Pressable position={'absolute'} bottom={0} left={0} onPress={onBackPress}>
          <HStack py={'8px'} px={'12px'} alignItems={'center'}>
            <ArrowBackIcon color={'muted.500'} />
            <Text ml={'4px'} color={'muted.600'}>
              Back
            </Text>
          </HStack>
        </Pressable>
      )}
      {props.route.key != 'fourth' && (
        <FAButton
          position={'absolute'}
          bottom={0}
          right={0}
          mt={'70px'}
          variant={'solid'}
          colorScheme={'muted'}
          width={scaleSizeX(152)}
          endIcon={<ArrowForwardIcon />}
          onPress={onNextPress}
        >
          Next
        </FAButton>
      )}
      {props.route.key == 'fourth' && (
        <Box alignSelf={'flex-end'} flex={1}>
          <FAButton variant={'solid'} colorScheme={'muted'} onPress={onGettingStartedPress}>
            Getting Started
          </FAButton>
        </Box>
      )}
    </HStack>
  );

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection="row" px={'20px'} mb={scaleSizeY(33)}>
        {props.navigationState.routes.map((route, i) => {
          const borderColor = index === i ? 'muted.400' : 'muted.200';
          return (
            <Box
              key={i}
              borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              mr={inputRange.length - 1 == i ? '0px' : '12px'}
            ></Box>
          );
        })}
      </Box>
    );
  };

  const renderScene = (props) => {
    switch (props.route.key) {
      case 'second':
        return <SecondRoute {...props} />;
      case 'third':
        return <ThirdRoute {...props} />;
      case 'fourth':
        return <FourthRoute {...props} />;
      default:
        return <FirstRoute {...props} />;
    }
  };

  return (
    <TabView
      navigationState={{
        index,
        routes,
      }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{
        marginTop: StatusBar.currentHeight,
      }}
    />
  );
}
