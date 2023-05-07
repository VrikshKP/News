import * as React from 'react';
import { FlatList, Text, View } from 'react-native';
import useNews from '../../hooks/News/useNews';
import NewsCard from '../../components/NewsCard';
import useScale from '../../hooks/Util/useScale';
import useBookmarks from '../../hooks/Bookmark/useBookmarks';
import { useFocusEffect } from '@react-navigation/native';

const HomeScreen = () => {
    const { newsState, getTopNews } = useNews()
    const { bookmarkNews } = useBookmarks()
    const { normalize } = useScale()

    useFocusEffect(React.useCallback(() => {
        getTopNews()
    }, []))

    return (
        <View>
            <FlatList
                data={newsState.allNews}
                renderItem={({ item }) => <NewsCard data={item} cardAction={() => bookmarkNews(item)} />}
                style={{
                    height: '100%',
                    backgroundColor: '#cfcfcf'
                }}
                ItemSeparatorComponent={<View style={{ height: normalize(20) }} />}
            />
        </View>
    )
}

export default HomeScreen