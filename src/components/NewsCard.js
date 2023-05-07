import * as React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import useScale from '../hooks/Util/useScale';

const NewsCard = ({ data, cardAction, hideButton }) => {
    const { normalize } = useScale()
    return (
        <View
            style={{
                width: '90%',
                backgroundColor: 'white',
                alignSelf: 'center',
                padding: normalize(10),
                borderRadius: normalize(20)
            }}
        >
            <Image source={{ uri: data.urlToImage }}
                style={{
                    height: normalize(200),
                    width: '100%',
                    borderRadius: normalize(20)
                }}
            />
            <View
                style={{
                    padding: normalize(10)
                }} >
                <Text>{data.title}</Text>
            </View>
            {!hideButton && <View
                style={{
                    padding: normalize(10)
                }} >
                <Pressable
                    onPress={cardAction}
                    style={{
                        width: '100%',
                        height: normalize(30),
                        borderRadius: normalize(10),
                        borderWidth: 2,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Text>Bookmark</Text>
                </Pressable>
            </View>}
        </View>
    )
}

export default NewsCard