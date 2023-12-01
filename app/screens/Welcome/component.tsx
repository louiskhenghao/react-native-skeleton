import { SizableText, YStack, styled } from "tamagui"

// Define Tamagui styled components
export const ListItem = styled(YStack, {
  padding: 20,
  borderBottomWidth: 1,
  borderBottomColor: "#ddd",
  alignItems: "flex-start",
})

export const TitleText = styled(SizableText, {
  fontSize: 18,
  fontWeight: "bold",
  color: "$color",
})

export const DescriptionText = styled(SizableText, {
  fontSize: 14,
  color: "$color",
  marginTop: 8,
})
