# React Native Alpha Flat List

A simple and fully customizable React Native component that implements Alphabetical List

## Getting Started

```
$ yarn add react-native-alpha-flat-list
```

or

```
$ npm install --save react-native-alpha-flat-list
```

## Usage

Import the `AlphaFlatList` component from `react-native-alpha-flat-list` and use it like so:

```jsx
import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'

import AlphaFlatList from 'react-native-alpha-flat-list'

const ITEM_HEIGHT = 20

const items = Array.from({ length: 500 }, () => {
    return {
        id: '_' + Math.random().toString(36).substr(2, 9),
        name: Math.random().toString(36).substring(7).replace(/[0-9]/g, '')
    }
})

const data = items.sort((previous, next) => previous.name.localeCompare(next.name))

export default function App () {
    const renderItem = ({ item }) => (
        <View style={{ height: ITEM_HEIGHT }}>
            <Text>{item.name}</Text>
        </View>
    )

    const keyExtractor = ({ id }) => id

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AlphaFlatList
                data={data}
                initialNumToRender={data.length}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                itemHeight={ITEM_HEIGHT}
                displayOnlyAvailableLetters
            />
        </SafeAreaView>
    )
}
```