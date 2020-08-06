# React Native Alpha Flat List

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
    {
        'id': '5b588d4a8d264a917c4c2bb1',
        'name': 'Tracy Tyson',
        'company': 'PETIGEMS',
    },
    {
        'id': '5b588d4a7046d0e0404efb64',
        'name': 'Alexandria Boyer',
        'company': 'EXOSWITCH'
    },
    {
        'id': '5b588d4a3a35e8a4586732f5',
        'name': 'Frost Palmer',
        'company': 'QUANTASIS'
    },
    {
        'id': '5b588d4af18b5e4f04105423',
        'name': 'Woodard Savage',
        'company': 'MANGLO',
    },
    {
        'id': '5b588d4a6743a9a785da564e',
        'name': 'Johns Glover',
        'company': 'ZOLAR',
    },
    {
        'id': '5b588d4a4f61b85368658822',
        'name': 'Cortez Randall',
        'company': 'IMMUNICS',
    },
    {
        'id': '5b588d4aa4070ca7f1c93d85',
        'name': 'Prince Bailey',
        'company': 'UNCORP',
    },
    {
        'id': '5b588d4aab36ef57e848671a',
        'name': 'Bobbi Reese',
        'company': 'VIAGREAT',
    },
    {
        'id': '5b588d4a70ac9fe8fe892d37',
        'name': 'Gillespie Lloyd',
        'company': 'DIGIFAD',
    },
    {
        'id': '5b588d4a0d53be71e881e1a2',
        'name': 'Carole Suarez',
        'company': 'FOSSIEL',
    },
]

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
                data={items.sort((previous, next) => previous.name.localeCompare(next.name))}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                itemHeight={ITEM_HEIGHT}
            />
        </View>
    )
}
```