import React, { useRef } from 'react'
import { View, Text, PanResponder } from 'react-native'

import PropTypes from 'prop-types'
import debounce from 'lodash.debounce'

import ResponsiveFontSize from 'react-native-responsive-fontsize'

import styles from './Sidebar.styles'

let containerTop
let containerHeight

function Sidebar (props) {
    const alphabetContainerRef = useRef()

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: debounce(onPanResponderGrant),
            onPanResponderMove: debounce(onPanResponderMove),
        })
    ).current

    function getTouchedLetter (y) {
        const top = y - (containerTop || 0)

        if (top >= 1 && top <= containerHeight) {
            const lettersRanges = props.letters.map((letter, index) => {
                return {
                    letter: letter,
                    start: index * containerHeight / props.letters.length,
                    end: (index + 1) * containerHeight / props.letters.length
                }
            })

            const index = lettersRanges.findIndex((letter) => letter.start <= top && top <= letter.end)

            return props.letters[index]
        }
    }

    function onPanResponderGrant (event, gestureState) {
        const letter = getTouchedLetter(gestureState.y0)

        onTouchLetter(letter)
    }

    function onPanResponderMove (event, gestureState) {
        const letter = getTouchedLetter(gestureState.moveY)

        onTouchLetter(letter)
    }

    function onTouchLetter (letter) {
        props.onScroll(letter)
    }

    function onLayout () {
        if (alphabetContainerRef && alphabetContainerRef.current) {
            alphabetContainerRef.current.measure((width, x1, y1, height, px, py) => {
                if (!containerTop && !containerHeight) {
                    containerTop = py
                    containerHeight = height
                }
            })
        }
    }

    return (
        <View
            ref={alphabetContainerRef}
            {...panResponder.panHandlers}
            onLayout={onLayout}
            style={[
                styles.container, 
                props.sidebarContainerStyle,
            ]}
        >
            {
                props.letters.map((letter) => (
                    <View
                        key={letter}
                        style={[
                            props.sidebarLetterContainerStyle,
                            props.activeLetter === letter && props.sidebarLetterContainerActiveStyle,
                        ]}
                    >
                        <Text
                            style={[
                                { fontSize: ResponsiveFontSize(1.6) },
                                props.sidebarLetterStyle, 
                                props.activeLetter === letter && props.sidebarLetterActiveStyle,
                            ]}
                        >
                            {letter}
                        </Text>
                    </View>
                ))
            }
        </View>
    )
}

Sidebar.propTypes = {
    onScroll: PropTypes.func,
    sidebarContainerStyle: PropTypes.object,
    sidebarLetterContainerStyle: PropTypes.object,
    sidebarLetterContainerActiveStyle: PropTypes.object,
    sidebarLetterStyle: PropTypes.object,
    sidebarLetterActiveStyle: PropTypes.object,
}

export default Sidebar
