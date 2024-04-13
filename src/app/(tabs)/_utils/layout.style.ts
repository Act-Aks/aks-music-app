import { colors, fontSize } from '@/constants/tokens'

import { StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native'

export const tabLayoutStyles = {
  tabBarLabelStyle: {
    fontSize: fontSize.xs,
    fontWeight: '500',
  } as StyleProp<TextStyle>,
  tabBarStyle: {
    position: 'absolute',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopWidth: 0,
    paddingTop: 8,
    paddingBottom: 8,
    height: 60,
  } as StyleProp<ViewStyle>,
  tabBlurViewStyle: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.background,
  } as StyleProp<ViewStyle>,
}
