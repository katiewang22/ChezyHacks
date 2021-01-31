import * as React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import Constant from 'expo-constants'
import { WebView } from 'react-native-webview';

export default function SongScreen({route}){
  /*return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  );
}*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%', 
  }}

//const, SongScreen = ({route: string})=>{
    const{videoId,title} = route.params
   return(
       <View style={{
           flex:1,
        marginTop:Constant.statusBarHeight
        }}>
           <View style={{
               width:"100%",
               height:200
           }}>
              <WebView
              javaScriptEnabled={true}
              domStorageEnabled={true}
               source={{uri:`https://www.spotif.com/embed/${videoId}`}}
              />

           </View>
           <Text style={{
               fontSize:20,
               width:Dimensions.get("screen").width - 50,
               margin:9
           }}
           numberOfLines={2}
           ellipsizeMode="tail"
           >
             {title}
           </Text>
           <View
             style={{borderBottomWidth:1}}
           />
       </View>
   )
}

