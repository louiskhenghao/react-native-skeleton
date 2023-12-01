import { observer } from "mobx-react-lite"
import React, { useState, useEffect, FC } from "react"
import { FlashList } from "@shopify/flash-list"
import { TouchableOpacity } from "react-native"
import { Button, XStack, AnimatePresence } from "tamagui"
import { Plus, Minus } from "@tamagui/lucide-icons"
import Screen from "app/components/Screen"

import { AppStackScreenProps } from "../../navigators"
import { DescriptionText, ListItem, TitleText } from "./component"

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen() {
  // ======================= STATES
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)

  // ======================= EFFECTS
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setItems(data))
  }, [])

  // ======================= EVENT
  const toggleItem = (id) => {
    setSelectedItem(selectedItem === id ? null : id)
  }

  // ======================= VIEWS
  return (
    <Screen>
      <FlashList
        data={items}
        renderItem={({ item }) => (
          <AnimatePresence>
            {
              <ListItem>
                <TouchableOpacity onPress={() => toggleItem(item.id)}>
                  <TitleText>{item.title}</TitleText>
                </TouchableOpacity>
                {selectedItem === item.id && <DescriptionText>{item.body}</DescriptionText>}
                <XStack space>
                  <Button icon={<Plus size="$1" />} onPress={() => console.log("Action 1")}>
                    Action 1
                  </Button>
                  <Button icon={<Minus size="$1" />} onPress={() => console.log("Action 1")}>
                    Action 2
                  </Button>
                </XStack>
              </ListItem>
            }
          </AnimatePresence>
        )}
        keyExtractor={(item) => item.id.toString()}
        estimatedItemSize={150}
      />
    </Screen>
  )
})
