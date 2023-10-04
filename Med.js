import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { PlusIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";

import Ionic from "react-native-vector-icons/Ionicons";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function LoginScreen() {
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
const [selectedTime,setSelectedTime]=useState('select Time')
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (time) => {
    console.warn("A time has been picked: ", time);
    const dt=new Date(date);
    const x =dt.toLocaleTimeString();
    console.log(x);
    setSelectedTime(x)
    hideTimePicker();
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="p-3 rounded-tr-2xl rounded-bl-2xl ml-4 "
        style={[styles.arrow]}
      >
        <ArrowLeftIcon size="20" color="white" />
      </TouchableOpacity>

      <Text style={[styles.addplan]}>ADD PILL</Text>
      <Text style={[styles.pillname]}>Pill name</Text>
      <TextInput style={[styles.inputpillname]} placeholder="Enter pill name" />
      <Text style={[styles.amnt]}>Amount & How Long ?</Text>
      <TextInput
        style={[styles.inputpill]}
        placeholder="No of pill"
        keyboardType="numeric"
      />
      <TextInput
        style={[styles.inputdate]}
        placeholder="No of Days"
        keyboardType="numeric"
      />
      <Text style={[styles.not]}>Notification</Text>
      <TextInput
        style={[styles.inputpilltime]}
        placeholder= {selectedTime}
       
      
      />
      
   
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />
      <TouchableOpacity style={[styles.plus]}   onPress={showTimePicker}>
        <PlusIcon size="30" color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.addbtn]}>
        <Text style={{ fontSize: 18, color: "white" }}>Done</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  arrow: {
    backgroundColor: "#929ae1",
    marginRight: 335,
    padding: 10,
  },
  addplan: {
    fontSize: 29,
    fontWeight: 700,
    top: 50,
    left: 30,
  },
  pillname: {
    top: 70,
    fontWeight: 600,
    left: 30,
    fontSize: 17,
  },
  inputpillname: {
    backgroundColor: "gainsboro",
    padding: 10,
    top: 90,
    left: 30,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    marginRight: 80,
  },
  amnt: {
    fontWeight: 600,
    fontSize: 17,
    top: 115,
    left: 30,
  },

  inputpill: {
    backgroundColor: "gainsboro",
    padding: 10,
    top: 130,
    left: 30,
    width: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    marginRight: 80,
  },
  inputdate: {
    backgroundColor: "gainsboro",
    padding: 10,
    top: 83,
    left: 200,
    width: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    marginRight: 80,
  },
  inputpilltime: {
    backgroundColor: "gainsboro",
    padding: 10,
    top: 140,
    left: 30,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    marginRight: 125,
  },
  not: {
    fontWeight: 600,
    fontSize: 17,
    top: 125,
    left: 30,
  },
  addbtn: {
    marginTop: 180,
    backgroundColor: "#929ae1",
    alignItems: "center",
    padding: 15,
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomRightRadius: 11,
    borderBottomLeftRadius: 11,
    marginLeft: 40,
    marginRight: 40,
    top: -25,
  },
  plus: {
    backgroundColor: "#929ae1",
    marginLeft: 310,
    top: 93,
    padding: 7,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    marginRight: 35,
  },
});
