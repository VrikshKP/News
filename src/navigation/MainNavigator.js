import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from '../screens/Home';
import BookmarkScreen from '../screens/Bookmark';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const TabNavigator = () => {
    const TabNav = createBottomTabNavigator();

    return (
        <TabNav.Navigator screenOptions={{
            tabBarLabelPosition: "beside-icon",
            tabBarLabelStyle: {
              fontWeight: "700",
            },
            tabBarIconStyle: { display: "none" },
          }}>
            <TabNav.Screen name='Home' component={HomeScreen} />
            <TabNav.Screen name='Bookmarks' component={BookmarkScreen} />
        </TabNav.Navigator>
    )
}

const MainNavigator = () => {

    const MainStack = createNativeStackNavigator();

    return (
        <MainStack.Navigator>
            <MainStack.Screen name='Tabs' component={TabNavigator} options={{headerShown: false}} />
        </MainStack.Navigator>
    )
}

export default MainNavigator