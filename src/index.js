import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, Dimensions } from 'react-native';
import debounce from 'lodash.debounce';

import Sidebar from './components/Sidebar';

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
    hideSideBar: PropTypes.bool,
    scrollKey: PropTypes.string,
    reverse: PropTypes.bool,
    itemHeight: PropTypes.number,
    data: PropTypes.array,
    activeColor: PropTypes.string,
    scrollBarColor: PropTypes.string,
    scrollBarFontSizeMultiplier: PropTypes.number,
    onScrollEnds: PropTypes.func,
    onScrollStarts: PropTypes.func,
    scrollBarContainerStyle: PropTypes.object
};

AlphaScrollFlatList.defaultProps = {
    hideSideBar: false,
    scrollKey: 'name',
    activeColor: '#52bad5',
    reverse: false,
    itemHeight: 20,
    scrollBarFontSizeMultiplier: 1,
    onScrollEnds: () => { },
    onScrollStarts: () => { },
    scrollBarContainerStyle: { }
};
