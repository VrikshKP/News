import * as React from 'react';
import { FlatList, Text, View } from 'react-native';
import NewsCard from '../../components/NewsCard';
import useScale from '../../hooks/Util/useScale';
import useBookmarks from '../../hooks/Bookmark/useBookmarks';
import { useFocusEffect } from '@react-navigation/native';

const BookmarkScreen = () => {
    const { normalize } = useScale()
    const { bookmarkState, getAllBookmarks } = useBookmarks()

    useFocusEffect(React.useCallback(() => {
        getAllBookmarks()
    }, []))

    return (
        <View>
            <FlatList
                data={bookmarkState.bookmarkedNews}
                renderItem={({ item }) => <NewsCard data={item} hideButton={true}/>}
                style={{
                    height: '100%',
                    backgroundColor: '#cfcfcf'
                }}
                ItemSeparatorComponent={<View style={{ height: normalize(20) }} />}
            />
        </View>
    )
}

export default BookmarkScreen