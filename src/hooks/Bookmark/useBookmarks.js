import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import Toast from 'react-native-toast-message';

const initialState = {
    bookmarkedNews: []
}

export default () => {
    const [bookmarkState, setBookmarkState] = useState(initialState)

    useEffect(() => {
        getAllBookmarks()
    }, [])

    const bookmarkNews = (data) => {
        let bookmarks = bookmarkState.bookmarkedNews
        if (!bookmarks.includes(data)) {
            bookmarks.push(data)
            setBookmarkState({ ...bookmarkState, bookmarkedNews: bookmarks })
            AsyncStorage.setItem('bookmarks', JSON.stringify(bookmarks));
            Toast.show({
                text1: 'The article has been bookmarked!',
                position: 'bottom'
            });
        } else {
            Toast.show({
                type: 'error',
                text1: 'The article has already been bookmarked!',
                position: 'bottom'
            });
        }
    }

    const getAllBookmarks = async() => {
        let data = await AsyncStorage.getItem('bookmarks')
        setBookmarkState({...bookmarkState, bookmarkedNews: data ? JSON.parse(data) : []})
    }

    return { bookmarkState, getAllBookmarks, bookmarkNews }
}