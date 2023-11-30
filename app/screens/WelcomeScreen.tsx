import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { View } from "react-native"

import { AppStackScreenProps } from "../navigators"

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen() {
  return <View></View>
})
