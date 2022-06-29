import {
  getHeightDevice,
  getWidthDevice,
  heightHeader as _heightHeader,
  heightTabView,
  isLanguageRTL,
  parseHexTransparency,
  reloadLocale,
  scrollEnabled,
} from '../layout';

jest.doMock('react-native/Libraries/Utilities/Dimensions', () => ({
  get: jest.fn().mockReturnValue({ width: 414, height: 896 }),
}));

describe('Utils_Layout', () => {
  it('should heightHeader is typeof number', () => {
    expect(typeof _heightHeader()).toBe('number');
  });
  it('should heightHeader more than zero', () => {
    expect(_heightHeader()).toBeGreaterThan(0);
  });
  it('should heightTabView is typeof number', () => {
    expect(typeof heightTabView()).toBe('number');
  });
  it('should heightTabView more than zero', () => {
    expect(heightTabView()).toBeGreaterThan(0);
  });
  it('should getWidthDevice is typeof number', () => {
    expect(typeof getWidthDevice()).toBe('number');
  });
  it('should getWidthDevice more than zero', () => {
    expect(getWidthDevice()).toBeGreaterThan(0);
  });
  it('should getHeightDevice is typeof number', () => {
    expect(typeof getHeightDevice()).toBe('number');
  });
  it('should getHeightDevice more than zero', () => {
    expect(getHeightDevice()).toBeGreaterThan(0);
  });
  it('should scrollEnabled is typeof boolean', () => {
    expect(typeof scrollEnabled(400)).toBe('boolean');
  });
  it('should scrollEnabled return true if contentHeight greater than Dimension height', () => {
    const heightHeader = jest.fn();
    heightHeader.mockReturnValue(30);
    expect(scrollEnabled(1000)).toBe(true);
  });
  it('should scrollEnabled return true if contentHeight less than Dimension height', () => {
    const heightHeader = jest.fn();
    heightHeader.mockReturnValue(30);
    expect(scrollEnabled(100)).toBe(false);
  });
  it('should isLanguageRTL is typeof boolean', () => {
    expect(typeof isLanguageRTL('ar')).toBe('boolean');
  });
  it('should isLanguageRTL return true if language is RTL', () => {
    expect(isLanguageRTL('ar')).toBe(true);
  });
  it('should isLanguageRTL return false if language not RTL', () => {
    expect(isLanguageRTL('en')).toBe(false);
  });
  it('should reloadLocale called', () => {
    expect(reloadLocale('id', 'en')).toBe(undefined);
  });
  it('should parseHexTransparency return parse hex color', () => {
    expect(parseHexTransparency('#FFFFFF')).toContain('#');
  });
});
