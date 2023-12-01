import * as React from "react"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { ScrollView, View, useTheme } from "tamagui"
import { KeyboardAvoidingView, Platform, StatusBar } from "react-native"
import { isNonScrolling, offsets, presets } from "./presets"
import { ScreenProps } from "./props"

const isIos = Platform.OS === "ios"

const ScreenWithoutScrolling: React.FC<ScreenProps> = (props) => {
  const theme = useTheme()
  const {
    style = {},
    backgroundColor = theme.background.val,
    unsafe,
    statusBar,
    keyboardOffset,
    children,
  } = props
  const insets = useSafeAreaInsets()
  const preset = presets.fixed

  const backgroundStyle = backgroundColor ? { backgroundColor } : {}
  const insetStyle = { paddingTop: unsafe ? 0 : insets.top }

  return (
    <KeyboardAvoidingView
      style={[preset.outer, backgroundStyle]}
      behavior={isIos ? "padding" : undefined}
      keyboardVerticalOffset={offsets[keyboardOffset || "none"]}
    >
      <StatusBar barStyle={statusBar || "light-content"} />
      <View style={[preset.inner, { flex: 1 }, style, insetStyle]}>{children}</View>
    </KeyboardAvoidingView>
  )
}

const ScreenWithScrolling: React.FC<ScreenProps> = (props) => {
  const theme = useTheme()
  const {
    style = {},
    backgroundColor = theme.background.val,
    unsafe,
    statusBar,
    keyboardOffset,
    keyboardShouldPersistTaps,
    children,
  } = props
  const insets = useSafeAreaInsets()
  const preset = presets.scroll
  const backgroundStyle = backgroundColor ? { backgroundColor } : {}
  const insetStyle = { paddingTop: unsafe ? 0 : insets.top }

  return (
    <KeyboardAvoidingView
      style={[preset.outer, backgroundStyle]}
      behavior={isIos ? "padding" : undefined}
      keyboardVerticalOffset={offsets[keyboardOffset || "none"]}
    >
      <StatusBar barStyle={statusBar || "light-content"} />
      <View style={[preset.outer, backgroundStyle, insetStyle]}>
        <ScrollView
          style={[preset.outer, backgroundStyle]}
          contentContainerStyle={[preset.inner, { flex: 1 }, style]}
          keyboardShouldPersistTaps={keyboardShouldPersistTaps || "handled"}
        >
          {children}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  )
}

/**
 * The starting component on every screen in the app.
 *
 * @param props The screen props
 */
export const Screen: React.FC<ScreenProps> = (props) => {
  if (isNonScrolling(props.preset)) {
    return <ScreenWithoutScrolling {...props} />
  }
  return <ScreenWithScrolling {...props} />
}

export default Screen
