import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon,} from 'react-native-heroicons/solid'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import Ionic from 'react-native-vector-icons/Ionicons';


export default function LoginScreen() {
  const navigation = useNavigation();

  const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');


    const [showErrors ,setShowErrors] = useState(false);
    const [errors ,setErrors] = useState({});

    const getErrors = (email,password) =>{
        const errors ={};
       

        if(!email){
            errors.email ='Please Enter Email';
        }
        else if (!email.includes('@') || !email.includes('.com')){
            errors.email ='Please Enter Valid Email';
        }
        if (!password){
            errors.password = 'Enter Password';
        }
        else if (password.length < 8){
            errors.password='Enter Password of 8 characters';
        }
        
        return errors;
    };

    const handleLogin = () =>{
        const errors = getErrors(email,password);
         
        if(Object.keys(errors).length > 0){
            setShowErrors(true);
            setErrors(showErrors && errors);
            console.log (errors)
        } else {
            setErrors({});
            setShowErrors(false);
         
           navigation.navigate('Home')
        }

    };


  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView  className="flex ">
        <View className="flex-row justify-start">
          <TouchableOpacity onPress={()=> navigation.goBack()} 
          className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4" style={{backgroundColor:themeColors.btnbg}}>
            <ArrowLeftIcon  size="20" color="black" />
          </TouchableOpacity>
        </View>
        <View  className="flex-row justify-center">
          <Image source={require('../assets/images/medx-logoo.png')} 
          style={{width: 200, height: 200}} />
        </View>
        
        
      </SafeAreaView>
      <View 
        style={{borderTopLeftRadius: 50,paddingTop:70, borderTopRightRadius: 50}} 
        className="flex-1 bg-white px-8 pt-8">
          <View className="form space-y-2">
            <Text className="text-gray-700 ml-4">Email Address</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-1"
               value={email}
               onChangeText={e => setEmail(e)}
                placeholder='Enter Email'
                
            />
             {errors.email && 
            <Text
            style ={{
                fontSize:14,
                color:'#ff4d4d',
                marginLeft:10,
                marginBottom:10,
            }}
            >{errors.email}</Text>}
            <Text className="text-gray-700 ml-4">Password</Text>
           
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-1"
                secureTextEntry
                value={password}
                onChangeText={e => setPassword(e)}
                placeholder='Enter Password'
                maxLength={8}
            />
            
             {errors.password && 
            <Text
            style ={{
                fontSize:14,
                color:'#ff4d4d',
                marginLeft:10,
             
            }}
            >{errors.password}</Text>}
          
            <TouchableOpacity className="flex items-end">
              <Text style={{color:themeColors.btnbg }} className=" mb-4">Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => handleLogin() }
              className="py-3 bg-yellow-400 rounded-xl" style={{backgroundColor:themeColors.btnbg}}>
                <Text 
                    className="text-xl font-bold text-center text-black-700"
                >
                        Login
                </Text>
             </TouchableOpacity>
            
          </View>
          
          <View className="flex-row justify-center mt-7">
              <Text className="text-gray-500 font-semibold">
                  Don't have an account?
              </Text>
              <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
                  <Text style={{color:themeColors.btnbg}} className="font-semibold"> Sign Up</Text>
              </TouchableOpacity>
          </View>
          
      </View>
    </View>
    
  )
}