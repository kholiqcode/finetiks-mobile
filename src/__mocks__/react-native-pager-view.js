import React from 'react';
import { View } from 'react-native';

/**
 * This mock exists because there's no official jest setup for this library yet.
 *
 * @see {@link https://github.com/callstack/react-native-pager-view/issues/220}
 * @see {@link https://github.com/callstack/react-native-pager-view/issues/481}
 */
class PagerView extends React.Component {
  setPage(selectedPage) {
    this.props.onPageSelected?.({ nativeEvent: { position: selectedPage } });
  }

  render() {
    const { children, style, scrollEnabled, accessibilityLabel } = this.props;

    return (
      <View
        testID={this.props.testID}
        style={style}
        scrollEnabled={scrollEnabled}
        accessibilityLabel={accessibilityLabel}
      >
        {children}
      </View>
    );
  }
}

export { PagerView };

export default PagerView;
