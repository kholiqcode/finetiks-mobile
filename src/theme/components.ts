/* eslint-disable @typescript-eslint/no-explicit-any */
const sizes = {
  lg: {
    px: 6,
    py: 3,
    _text: {
      fontSize: 'lg',
    },
  },
  md: {
    px: 5,
    py: 3,
    _text: {
      fontSize: 'md',
    },
  },
  sm: {
    px: 4,
    py: 3,
    _text: {
      fontSize: 'sm',
    },
  },
  xs: {
    px: 2,
    py: 1,
    _text: {
      fontSize: 'xs',
    },
  },
};

const Button = {
  defaultProps: {
    rounded: 'xl',
    fontFamily: 'mono',
    fontWeight: 700,
    variant: 'solid',
    size: 'sm',
    fontSize: 'xl',
  },
  sizes,
};

const Progress = {
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
    color: 'manta.100',
    variant: 'outline',
    borderColor: 'manta.100',
    borderRadius: 8,
  },
  variants: {},
};

const Input = {
  baseStyle: {},
  defaultProps: {
    fontFamily: 'mono',
    fontSize: 'sm',
    color: 'manta.100',
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
