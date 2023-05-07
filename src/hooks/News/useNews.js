import { useState } from "react"

const initialState = {
    allNews: [],
}

export default () => {
    const [newsState, setNewsState] = useState(initialState)

    const getTopNews = async () => {
        let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=497cfcfb0d554b2ba19d8ead2563f203'
        let res = await (await fetch(url)).json()
        if (res?.status === 'ok') {
            setNewsState({ ...newsState, allNews: res?.articles })
        }
    }

    return { newsState, getTopNews }
}