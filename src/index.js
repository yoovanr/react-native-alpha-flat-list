import React, { useRef, useState } from 'react'
import { FlatList, View } from 'react-native'

import PropTypes from 'prop-types'
import debounce from 'lodash.debounce'

import Sidebar from './components/Sidebar'

export default function AlphaScrollFlatList (props) {
    const [activeLetter, setActiveLetter] = useState(0)
    const [activeLetterViewTop, setActiveLetterViewTop] = useState(undefined)

    const flatListRef = useRef()

    function onScroll (activeLetter, activeLetterViewTop) {
        if (activeLetter) {
            let index

            setActiveLetter(activeLetter)
            setActiveLetterViewTop(activeLetterViewTop)

            if (activeLetter === '#') {
                index = 0
            } else {
                index = props.data.findIndex(item => item[props.scrollKey].charAt(0).localeCompare(activeLetter) === 0)
            }

            if (index !== -1) {
                const options = {
                    animated: false,
                    offset: index * props.itemHeight,
                }

                flatListRef.current.scrollToOffset(options)
            }
        }
    }

    function onScrollEnds () {
        setActiveLetter(0)
        setActiveLetterViewTop(undefined)
    }

    return (
        <View> 
            <FlatList
                {...props}
                ref={flatListRef}
            />

            <Sidebar
                onScroll={debounce(onScroll)}
                onScrollEnds={debounce(onScrollEnds)}
            />
        </View>
    )
}

AlphaScrollFlatList.propTypes = {
    data: PropTypes.array,
    scrollKey: PropTypes.string,
    itemHeight: PropTypes.number,
    sidebarContainerStyles: PropTypes.object,
    sidebarLetterStyle: PropTypes.object,
}

AlphaScrollFlatList.defaultProps = {
    scrollKey: 'name',
    itemHeight: 20,
}
