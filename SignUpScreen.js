import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React,{useState} from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

// subscribe for more videos like this :)
export default function SignUpScreen() {
    const navigation = useNavigation();

    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[confirmPassword,setConfirmPassword] = useState('');
    const[fullname,setFullname] =useState('');

    const [showErrors ,setShowErrors] = useState(false);
    const [errors ,setErrors] = useState({});

    const getErrors = (email,password,confirmPassword) =>{
        const errors ={};
        if(!fullname){
            errors.fullname ='Enter your name';
        }

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
        if (!confirmPassword){
            errors.confirmPassword = 'Re-Enter Password';
        }
        else if (confirmPassword.length < 8 || password !== confirmPassword){
            errors.confirmPassword='Password Doesnt Match';
        }
        return errors;
    };

    const handleRegister = () =>{
        const errors = getErrors(email,password,confirmPassword);
         
        if(Object.keys(errors).length > 0){
            setShowErrors(true);
            setErrors(showErrors && errors);
            console.log (errors)
        } else {
            setErrors({});
            setShowErrors(false);
            console.log('Registered');
        }

    };


  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
            <TouchableOpacity 
                onPress={()=> navigation.goBack()}
                className=" p-2 rounded-tr-2xl rounded-bl-2xl ml-4 " style={{backgroundColor:themeColors.btnbg,color:themeColors.bg}}
            >
                <ArrowLeftIcon size="20" color="black" />
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
            <Image source={require('../assets/images/medx-logoo.png')} 
                style={{width: 165, height: 110}} />
        </View>
      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-8"
        style={{borderTopLeftRadius: 50,paddingTop:20, borderTopRightRadius: 50}}
      >
        <View className="form space-y-1">
            <Text className="text-gray-700 ml-4">Full Name</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-1"
                value={fullname}
                placeholder='Enter Name'
                onChangeText={e => setFullname(e)}
            />
             {errors.fullname && 
            <Text
            style ={{
                fontSize:14,
                color:'#ff4d4d',
                marginLeft:10,
                marginBottom:10,
            }}
            >{errors.fullname}</Text>}
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
                marginBottom:10,
            }}
            >{errors.password}</Text>}
             <Text className="text-gray-700 ml-4">Confirm Password</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-1 "
                secureTextEntry
                value={confirmPassword}
                onChangeText={e => setConfirmPassword(e)}
                placeholder='Confirm Password'
                maxLength={8}
            />
            {errors.confirmPassword&& 
            <Text
            style ={{
                fontSize:14,
                color:'#ff4d4d',
                marginLeft:10,
                marginBottom:10,
            }}
            >{errors.confirmPassword}</Text>}
            <TouchableOpacity
            onPress={() => handleRegister()}
                className="py-3  rounded-xl" style={{backgroundColor:themeColors.btnbg}}
            >
                <Text className="font-xlfont-bold text-center" style={{backgroundColor:themeColors.bg }}>
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>
     
        <View className="flex-row justify-center mt-2">
            <Text className="text-gray-500 font-semibold">Already have an account?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                <Text  style={{color:themeColors.btnbg}} className="font-semibold "> Login</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
