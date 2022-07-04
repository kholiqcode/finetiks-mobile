import { Dimensions } from 'react-native';

const WINDOW_WIDTH: number = Dimensions.get('window').width;
const guidelineBaseWidth = 360;

export const scaleSizeX = (size: number): number => (WINDOW_WIDTH / guidelineBaseWidth) * size;

const WINDOW_HEIGHT: number = Dimensions.get('window').height;
const guidelineBaseHeight = 800;

export const scaleSizeY = (size: number): number => (WINDOW_HEIGHT / guidelineBaseHeight) * size;
