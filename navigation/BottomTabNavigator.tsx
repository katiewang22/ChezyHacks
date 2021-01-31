import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import HomeScreen from '../screens/HomeScreen';
import JournalScreen from '../screens/JournalScreen';
import FinJournalScreen from '../screens/FinJournalScreen';
import CalendarScreen from '../screens/CalendarScreen';
import DrawingScreen from '../screens/DrawingScreen';
import SongScreen from '../screens/SongScreen';
import { BottomTabParamList, HomeParamList, JournalParamList, CalendarParamList, DrawingParamList, SongParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ 
        activeTintColor: '#F28482',
        inactiveBackgroundColor: '#F7EDE2',
        activeBackgroundColor: '#F7EDE2',
      }}
    >
      
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Journal"
        component={JournalNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-journal" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Calendar"
        component={CalendarNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-calendar" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Drawing"
        component={DrawingNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="brush" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Songs"
        component={SongNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="musical-notes-outline" color={color} />,
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
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ 
          headerTitle: 'Home',
          headerStyle: {
            backgroundColor: '#F7EDE2',
          },
        }}
      />
    </HomeStack.Navigator>
  );
}

const JournalStack = createStackNavigator<JournalParamList>();

function JournalNavigator() {
  return (
    <JournalStack.Navigator>
      <JournalStack.Screen
        name="JournalScreen"
        component={JournalScreen}
        options={{ 
          headerTitle: 'Journal',
          headerStyle: {
            backgroundColor: '#F7EDE2',
          },
        }}
      />
      <JournalStack.Screen
        name="FinJournalScreen"
        component={FinJournalScreen}
        options={{ 
          headerTitle: 'Journal Entry',
          headerStyle: {
            backgroundColor: '#F7EDE2',
          },
        }}
      />
    </JournalStack.Navigator>
  );
}

const CalendarStack = createStackNavigator<CalendarParamList>();

function CalendarNavigator() {
  return (
    <CalendarStack.Navigator>
      <CalendarStack.Screen
        name="CalendarScreen"
        component={CalendarScreen}
        options={{ 
          headerTitle: 'Calendar',
          headerStyle: {
            backgroundColor: '#F7EDE2',
          },
        }}
      />
    </CalendarStack.Navigator>
  );
}

const DrawingStack = createStackNavigator<DrawingParamList>();

function DrawingNavigator() {
  return (
    <DrawingStack.Navigator>
      <DrawingStack.Screen
        name="DrawingScreen"
        component={DrawingScreen}
        options={{ 
          headerTitle: 'Drawing',
          headerStyle: {
            backgroundColor: '#F7EDE2',
          },
        }}
      />
    </DrawingStack.Navigator>
  );
}

const SongStack = createStackNavigator<SongParamList>();

function SongNavigator() {
  return (
    <SongStack.Navigator>
      <SongStack.Screen
        name="SongScreen"
        component={SongScreen}
        options={{ 
          headerTitle: 'Songs',
          headerStyle: {
            backgroundColor: '#F7EDE2',
          },
        }}
      />
    </SongStack.Navigator>
  );
}