import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'one',
            },
          },
          Journal: {
            screens: {
              JournalScreen: 'two',
            },
          },
          Calendar: {
            screens: {
              CalendarScreen: 'three',
            },
          },
          Drawing: {
            screens: {
              DrawingScreen: 'four',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
