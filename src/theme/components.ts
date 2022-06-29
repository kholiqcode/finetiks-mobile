import type { ComponentTheme } from 'native-base';

const sizes = {
  sm: {
    px: 3,
    py: '10px',
    _text: {
      fontSize: 'xs',
    },
  },
};

const Button: ComponentTheme = {
  baseStyle: {},
  defaultProps: {
    rounded: 'xl',
    fontFamily: 'mono',
    fontWeight: 700,
    variant: 'solid',
    size: 'sm',
  },
  sizes,
  variants: {
    outlineGray: (props) => {
      return {
        borderWidth: '2',
        borderColor: 'muted.800',
        backgroundColor: 'muted.50',
        _text: {
          color: 'text.500',
          fontWeight: props.fontWeight,
          fontFamily: props.fontFamily,
        },
        ...props,
      };
    },
  },
};

const Progress: ComponentTheme = {
  defaultProps: {
    variant: 'default',
    colorScheme: 'warning',
  },
};

const Select = {
  baseStyle: {},
  defaultProps: {
    fontFamily: 'mono',
    fontWeight: 400,
    fontSize: 'sm',
    variant: 'outline',
    borderRadius: 8,
  },
  variants: {},
};

const Input = {
  baseStyle: {},
  defaultProps: {
    fontFamily: 'mono',
    fontSize: 'sm',
    color: 'muted.300',
    fontColor: 'muted.300',
    fontWeight: 500,
  },
  variants: {},
};

const Slider = {
  baseStyle: {},
  defaultProps: {},
};

const SliderThumb = {
  baseStyle: {},
  defaultProps: {},
};

const Switch = {
  baseStyle: {},
  defaultProps: {},
};

const components = {
  Button,
  Progress,
  Select,
  Input,
  Slider,
  SliderThumb,
  Switch,
};

export default components;
