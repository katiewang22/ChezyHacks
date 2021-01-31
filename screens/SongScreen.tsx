import * as React from 'react';
import { Button, Alert, Dimensions, StyleSheet } from 'react-native';
import Constant from 'expo-constants'
import { WebView } from 'react-native-webview';
import { Audio, Video } from "expo-av";
import YoutubePlayer from "react-native-youtube-iframe";
import { LinearGradient } from 'expo-linear-gradient';

import { Text, View } from '../components/Themed';

export default function SongScreen(){

  /* 1. Main vid
  2. Songs
  3. Podcasts
  4. Other vids
  */

 const [playing, setPlaying] = React.useState(false);

 const onStateChange = React.useCallback((state) => {
   if (state === "ended") {
     setPlaying(false);
     Alert.alert("The video has finished playing!");
   }
 }, []);

 const togglePlaying = React.useCallback(() => {
   setPlaying((prev) => !prev);
 }, []);

  return (
    <View>
      <View style={styles.mainVideo}>
        <YoutubePlayer
          height={240}
          play={playing}
          videoId={"8w5InPjOk-w"}
          onChangeState={onStateChange}
        />
        <Button title={playing ? "Pause" : "🌴 Want to be on an island eating coconuts? 🥥"} onPress={togglePlaying} />
      </View>
      <View style={styles.songs}>
        
      </View>
    </View>
  );
}

/* <View style={styles.container}>
      <View style={styles.spotify}>
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: `` }}
        />
      </View>
        <Text 
          style={styles.spotifyText}
          numberOfLines={2}
          ellipsizeMode="tail"
        >

        </Text>
      </View>
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spotify: {
    width:"100%",
    height:200
  },
  spotifyText: {
    fontSize: 20,
    width: Dimensions.get("screen").width - 50,
    margin: 9
  },
  mainVideo: {
    marginTop: 30,
  },
  songs: {

  },
});