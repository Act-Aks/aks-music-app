import { Icon } from '@/components'
import { colors } from '@/constants/tokens'

import { BlurView } from 'expo-blur'
import { Tabs } from 'expo-router'

import { tabLayoutStyles } from './_utils/layout.style'

const TabNavigator = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: tabLayoutStyles.tabBarLabelStyle,
        tabBarStyle: tabLayoutStyles.tabBarStyle,
        tabBarBackground: () => (
          <BlurView intensity={20} style={tabLayoutStyles.tabBlurViewStyle} />
        ),
      }}
    >
      <Tabs.Screen
        name={'favorites'}
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color }) => (
            <Icon iconType={'FontAwesome'} iconName={'heart'} size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name={'playlists'}
        options={{
          title: 'Playlists',
          tabBarIcon: ({ color }) => (
            <Icon
              iconType={'MaterialCommunityIcons'}
              iconName={'playlist-play'}
              size={28}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={'(songs)'}
        options={{
          title: 'Songs',
          tabBarIcon: ({ color }) => (
            <Icon iconType={'Ionicons'} iconName={'musical-notes-sharp'} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name={'artists'}
        options={{
          title: 'Artists',
          tabBarIcon: ({ color }) => (
            <Icon iconType={'FontAwesome6'} iconName={'users-line'} size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}

export default TabNavigator
