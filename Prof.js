import { View,StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import profilepic from '../assets/hello.png'

export default function Prof() {
   
  return (
    <View style={[styles.header]}>
    <View>
    <Image source={profilepic} style={styles.profilePic} />
    </View>
    </View>
  )
}


const styles = StyleSheet.create({

   header:{
    backgroundColor:'#929ae1',
    height:180,
    width:400,
   },

   profilepic:{
    
   },
  });
  