import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {WebView} from 'react-native-webview';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <WebView
      source={{uri: 'https://vehicle-tracking.vercel.app/'}}
      // style={{marginTop: 20}}
    />
  );

  // return (
  //   <SafeAreaView style={backgroundStyle}>
  //     <StatusBar
  //       barStyle={isDarkMode ? 'light-content' : 'dark-content'}
  //       backgroundColor={backgroundStyle.backgroundColor}
  //     />
  //     <View
  //       style={{
  //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
  //       }}>
  //       <Text>Is it working fine</Text>
  //       <WebView
  //         source={{uri: 'https://vehicle-tracking.vercel.app/'}}
  //         // originWhitelist={['*']}
  //         style={{marginTop: 20}}
  //       />
  //     </View>
  //   </SafeAreaView>
  // );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
