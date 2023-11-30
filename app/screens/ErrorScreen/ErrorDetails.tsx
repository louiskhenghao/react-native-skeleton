import React, { ErrorInfo } from "react"
import { View, Text } from "react-native"

export interface ErrorDetailsProps {
  error: Error
  errorInfo: ErrorInfo | null
  onReset(): void
}

export function ErrorDetails(props: ErrorDetailsProps) {
  return (
    <View>
      <Text>Error</Text>
    </View>
  )
}
