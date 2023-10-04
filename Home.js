import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import { StyleSheet, View, Text,TouchableOpacity } from "react-native";
import{Image} from 'expo-image';
import Med from '../screens/Med'
import {ArrowLeftIcon,Bars3Icon,CalendarIcon,ChatBubbleOvalLeftEllipsisIcon ,HomeIcon, PlusIcon, UserIcon} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import profilepic from '../assets/hello.png'





export default function Home() {
 
const navigation = useNavigation();


  return (
    

 <SafeAreaView style={{backgroundColor:"white", height:1000,}}>
        <View style={[styles.header]}>
        
        <View >
      <Image source={profilepic} style={styles.profilePic} />
     </View>
     <Bars3Icon style={[styles.menuico]} size="30" color="black" />
        <Text style={{textAlign:'center',marginTop:-17,color:"black",fontWeight:600,fontSize:25,}}>MedX</Text>
      
        </View>
    <Text style={[styles.hello]}>
    <Text style={{color:"grey"}} >{`Hello,
`}</Text>
    <Text >Jai ganesh</Text>
  </Text>



  <View style={[styles.slider]}>
        <View style={[styles.maskGroup, styles.maskGroupLayout]}>
          <View style={[styles.maskGroupChild, styles.maskGroupLayout]} />
          <Text style={[styles.sliderCompleted, styles.showMorePosition]}>
            1 of 4 completed
          </Text>
          <Text style={[styles.showMore, styles.showMorePosition]}>
            Show More
          </Text>
          <Text
            style={[styles.sliderHead, styles.showMorePosition]}
          >{`Your plan
for today`}</Text>
  </View>


        <View style={[ styles.iconLayout]}>
          <Image
            style={[ styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/6298463.png")}
          />
        </View>
        <View style={[styles.sliderItem, styles.groupLayout]} />
        
      </View>

      <View style={{marginTop:160}}>
        <Text style={[styles.schedule]}>Your Schedule </Text>
        <Text style={[styles.seeall]}>See all</Text>
      </View>

      <View style={[styles.rectangleGroup, styles.groupLayout4]}>
          <View style={[styles.groupChild, styles.groupLayout4]} />
          <Text style={[styles.oxycodone, styles.search1Typo]}>Naloxone</Text>
          <Image
            style={[styles.arrowRightSLine1Icon, styles.groupItemPosition]}
            source={require("../assets/arrowrightsline-1.svg")}
          />
          <Image
            style={[styles.groupItem, styles.groupItemPosition]}
            source={require("../assets/group-2.svg")}
          />
          <Text style={[styles.am, styles.amTypo]}>04:00 PM</Text>
          <Text style={[styles.skipped, styles.amTypo]}>Skipped</Text>
          <View style={[styles.ellipseView, styles.groupLayout]} />
        </View>


        
      <View style={[styles.rectanglegroup2, styles.groupLayout4]}>
          <View style={[styles.groupChild, styles.groupLayout4]} />
          <Text style={[styles.oxycodone, styles.search1Typo]}>Dolo</Text>
          <Image
            style={[styles.arrowRightSLine1Icon, styles.groupItemPosition]}
            source={require("../assets/arrowrightsline-1.svg")}
          />
          <Image
            style={[styles.groupItem, styles.groupItemPosition]}
            source={require("../assets/group-2.svg")}
          />
          <Text style={[styles.am, styles.amTypo]}>05:00 PM</Text>
          <Text style={[styles.skipped, styles.amTypo]}>Upcoming</Text>
          <View style={[styles.ellipseView, styles.groupLayout]} />
        </View>
        
        <View style={[styles.footer]}>
        <TouchableOpacity style={[styles.ico]}>
        <HomeIcon  size="30" color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.ico]}>
        <CalendarIcon  size="30" color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Med')} style={[styles.ico ,styles.plusico]}>
        <PlusIcon  size="30" color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.ico]}>
        <ChatBubbleOvalLeftEllipsisIcon  size="30" color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.ico]}>
        <UserIcon  size="30" color="black" />
        </TouchableOpacity>
        </View>
        


        

</SafeAreaView>
  )
}


const styles = StyleSheet.create({

    profilePic: {
        width: 44,
        height: 44,
        borderRadius: 25,
        marginRight: 19,
        marginTop:5,
        position:'absolute',
      },

    header:{
     
        backgroundColor:'#000000',
        padding:12,
        backgroundColor: 'white', // Background color of the header container
        borderBottomWidth: 1,    // Optional: Add a border at the bottom of the header container
        borderBottomColor: 'rgba(0, 0, 0, 0.1)', // Optional: Border color
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        paddingBottom:16,

        
    },
    menuico:{
      marginLeft:330,
      top:14,
    },


    hello: {
        fontSize: 30,
        color: Color.colorGray,
        top: 145,
        left: 28,
        position:'absolute',
        fontWeight: "500",
        letterSpacing: 1,
        marginLeft:5,
        lineHeight:42,
      },

      iconLayout: {
        height: 180,
        width: 168,
        top: 58,
        left:93,
        
      },

      slider: {
        top: 30,
        left: 28,
      },
      maskGroupLayout: {
        height: 180,
        left: 0,
        width: 335,
        position: "absolute",
  
      },
      maskGroup: {
        top: 110,
      },
      maskGroupChild: {
        borderRadius: 28,
        backgroundColor: "#929ae1",
        top: 0,
        height: 180,
      },
      
    showMorePosition: {
        lineHeight: 24,
        left: 24,
        textAlign: "left",
        position: "absolute",
      },
      sliderCompleted: {
        top: 74,
        fontSize: 14,
        color: Color.colorBlack,
        opacity: 0.4,
    
      
      },
      showMore: {
        top: 129,
        color: "white",
        fontSize:16,

        padding:3,
        fontWeight: "600",
      },
      sliderHead: {
        top: 24,
        fontSize: 22,
        letterSpacing:0.5,
        fontWeight: "700",
        color: Color.colorGray,
      },

      schedule:{
        fontSize:20,
        marginLeft:40,
        top:5,
      },

      seeall:{
        textAlign:'right',
        marginTop:-30,
        padding:10,
        paddingBottom:60,
        fontSize:17,
        marginRight:10,
        color:'#929ae1'
      },
   
      rectangleGroup: {
        top: 505,
        marginLeft:40,
      },
      beforeEating: {
        left: 133,
    
      },
      rectanglegroup2:{
        top: 595,
        marginLeft:40,
      },

      footer:{
        display:"flex",
        flexDirection: 'row', 
        marginLeft:-15,
        top:30,
       
      
        marginTop:170,
      },
      ico:{
        marginLeft:45,

      },
      plusico:{
        backgroundColor:"#929ae1",
        padding:7,
        borderTopLeftRadius: 7,
        borderTopRightRadius:7,
        borderBottomRightRadius: 7,
        borderBottomLeftRadius: 7,
       top:-10,
        
      },







    searchLayout: {
      height: 48,
      width: 319,
      position: "absolute",
    },
    childBg: {
      backgroundColor: Color.colorWhitesmoke,
      top: 0,
    },
    search1Typo: {
      textAlign: "left",
      fontSize: FontSize.size_mini,
      fontWeight: "500",
      position: "absolute",
    },
    groupLayout4: {
      height: 72,
      left: 0,
      width: 319,
      position: "absolute",
    },
    groupItemPosition: {
      top: 26,
      height: 20,
      width: 20,
      position: "absolute",
    },
    amTypo: {
      top: 37,
      fontSize: FontSize.size_smi,
      textAlign: "left",
      color: Color.colorDarkgray,
      fontWeight: "500",
      position: "absolute",
    },
    groupLayout: {
      height: 2,
      position: "absolute",
    },


 
    searchChild: {
      borderRadius: 14,
      left: 0,
      height: 48,
      width: 319,
      position: "absolute",
    },
    searchLine41: {
      left: 20,
      height: 20,
      width: 20,
      top: 14,
      position: "absolute",
      overflow: "hidden",
    },
    search1: {
      top: 13,
      left: 56,
      letterSpacing: -0.4,
      width: 56,
      height: 22,
      color: Color.colorDarkgray,
      textAlign: "left",
    },
    search: {
      top: 52,
      left: 28,
    },

 
    groupChild: {
      borderRadius: Border.br_5xl,
      backgroundColor: Color.colorWhitesmoke,
      top: 0,
    },
    oxycodone: {
      left: 64,
      color: Color.colorGray,
      textAlign: "left",
      top: 14,
    },
    arrowRightSLine1Icon: {
      left: 275,
      overflow: "hidden",
    },
    groupItem: {
      left: 28,
    },
    am: {
  
      left: 64,
    },
    completed: {
      left: 132,
  
    },
    groupInner: {
      left: 124,
      width: 2,
      backgroundColor: Color.colorDarkgray,
      top: 47,
      height: 2,
    },
    rectangleParent: {
      top: 50,
    },
    skipped: {
      left: 134,
    },
    ellipseView: {
      left: 127,
      width: 2,
      backgroundColor: Color.colorDarkgray,
      top: 47,
      height: 2,
    },

    groupChild3: {
      left: 125,
      width: 2,
      backgroundColor: Color.colorDarkgray,
      top: 47,
      height: 2,
    },
    rectangleContainer: {
      top: 218,
    },
    dailyReview: {
      fontSize: 17,
      color: Color.colorGray,
  
      fontWeight: "500",
      lineHeight: 38,
      left: 0,
      top: 0,
    },
    list: {
      top: 428,
      height: 290,
      width: 319,
      left: 28,
      position: "absolute",
    },


 


    tabBarIcon: {
      top: 646,
      width: 375,
      height: 166,
      left: 0,
      position: "absolute",
    },
    iphone11ProX1: {
      backgroundColor: "#fff",
      flex: 1,
      width: "100%",
      height: 812,
      overflow: "hidden",
    },
  });
  