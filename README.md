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
import { View, Text } from 'react-native'

import AlphaFlatList from 'react-native-alpha-flat-list'

const ITEM_HEIGHT = 50

const items = [
    {
        'id': '5b588d4acb1fe7c48301af77',
        'name': 'Iris Maddox',
        'company': 'COLAIRE',
    },
    {
        'id': '5b588d4a19428267ed675c5e',
        'name': 'Fuentes Schmidt',
        'company': 'APEXTRI',
    },
    {
        'id': '5b588d4a7e7b0b916259c3f0',
        'name': 'Jane Small',
        'company': 'DUOFLEX',
    },
    {
        'id': '5b588d4a478f8056d34b794c',
        'name': 'Dotson Ortiz',
        'company': 'CYTREX',
    },
    {
        'id': '5b588d4a14ed168a2673c902',
        'name': 'Hall Nguyen',
        'company': 'ENTROFLEX',
    },
    {
        'id': '5b588d4a7549063dbb46df0b',
        'name': 'Estrada Armstrong',
        'company': 'BOILICON',
    },
    {
        'id': '5b588d4aa564689268c5472a',
        'name': 'Josie Harmon',
        'company': 'RODEMCO',
    },
    {
        'id': '5b588d4a00f614c7ae794fd3',
        'name': 'Sondra Stevenson',
        'company': 'OHMNET',
    },
    {
        'id': '5b588d4a69a2745fe601a688',
        'name': 'Booker Trevino',
        'company': 'OCEANICA',
    },
    {
        'id': '5b588d4a22d9a7800b157b0e',
        'name': 'Lilly Luna',
        'company': 'INCUBUS',
    },
    {
        'id': '5b588d4a04251caba4c9fb97',
        'name': 'Bird Landry',
        'company': 'ELECTONIC',
    },
    {
        'id': '5b588d4a7192ff64019d9c40',
        'name': 'Rasmussen Berry',
        'company': 'PHOLIO',
    },
]

const data = items.sort((previous, next) => previous.name.localeCompare(next.name))

export default function App () {
    const renderItem = ({ item} ) => (
        <View>
            <Text>{item.name}</Text>
            <Text>{item.company}</Text>
        </View>
    )

    const keyExtractor = ({ id }) => id

    return (
        <View style={styles.container}>
            <AlphaFlatList
                data={data}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                itemHeight={ITEM_HEIGHT}
            />
        </View>
    )
}
```