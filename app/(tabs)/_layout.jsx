import { View, Text, Image } from 'react-native'
import React from 'react'
import { icons } from '../../constants'
import { Tabs } from 'expo-router'

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />

      <Text className={`${focused ? 'font-psemibold' :'font-pregular' } text-xs`}>
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs screenOptions={{tabBarShowLabel:false}}>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={true}
              />
            )
          }} />

          <Tabs.Screen
          name="create"
          options={{
            title: 'Create',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <TabIcon
                icon={icons.plus}
                color={color}
                name="Create"
                focused={true}
              />
            )
          }} />
          <Tabs.Screen
          name="bookmarks"
          options={{
            title: 'Bookmark',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <TabIcon
                icon={icons.bookmark}
                color={color}
                name="Bookmark"
                focused={true}
              />
            )
          }} />
          <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={true}
              />
            )
          }} />
      </Tabs>
    </>
  )
}

export default TabsLayout