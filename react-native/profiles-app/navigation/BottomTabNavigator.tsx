/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/ImagePickerScreen';
import ProfilesListScreen from '../screens/ProfilesListScreen';
import UserLocationScreen from '../screens/UserLocationScreen';
import { BottomTabParamList, TabOneParamList, ProfilesScreenParamList, UserLocationParamList } from '../types';
import ProfileDetailsScreen from '../screens/ProfileDetailsScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Perfis"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Camera"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="camera" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Perfis"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="person-sharp" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Local"
        component={UserLocationNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="map-outline" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Câmera' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<ProfilesScreenParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="ProfilesListScreen"
        component={ProfilesListScreen}
        options={{ headerTitle: 'Perfis' }}
      />
      <TabTwoStack.Screen
        name="ProfileDetails"
        component={ProfileDetailsScreen}
      />
    </TabTwoStack.Navigator>
  );
}

const UserLocationStack = createStackNavigator<UserLocationParamList>();

function UserLocationNavigator() {
  return (
    <UserLocationStack.Navigator>
      <UserLocationStack.Screen
        name="UserLocationScreen"
        component={UserLocationScreen}
        options={{ headerTitle: 'Geolocalização' }}
      />
    </UserLocationStack.Navigator>
  );
}
