import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const IPhone11ProX1 = () => {
  return (
    <View style={styles.iphone11ProX1}>
      <View style={[styles.search, styles.searchLayout]}>
        <View style={[styles.searchChild, styles.childBg]} />
        <Image
          style={styles.searchLine41}
          source={require("../assets/searchline-4-1.svg")}
        />
        <Text style={[styles.search1, styles.search1Typo]}>Search</Text>
      </View>
      <Text style={[styles.helloKathryn, styles.dailyReviewLayout]}>
        <Text style={styles.helloTypo}>{`Hello,
`}</Text>
        <Text style={styles.kathryn}>Kathryn</Text>
      </Text>
      <View style={styles.list}>
        <View style={[styles.rectangleParent, styles.groupLayout4]}>
          <View style={[styles.groupChild, styles.groupLayout4]} />
          <Text style={[styles.oxycodone, styles.search1Typo]}>Oxycodone</Text>
          <Image
            style={[styles.arrowRightSLine1Icon, styles.groupItemPosition]}
            source={require("../assets/arrowrightsline-1.svg")}
          />
          <Image
            style={[styles.groupItem, styles.groupItemPosition]}
            source={require("../assets/group-2.svg")}
          />
          <Text style={[styles.am, styles.amTypo]}>10:00 AM</Text>
          <Text style={[styles.completed, styles.amTypo]}>Completed</Text>
          <View style={[styles.groupInner, styles.groupLayout]} />
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
        <View style={[styles.rectangleContainer, styles.groupLayout4]}>
          <View style={[styles.groupChild, styles.groupLayout4]} />
          <Text style={[styles.oxycodone, styles.search1Typo]}>Oxycodone</Text>
          <Image
            style={[styles.arrowRightSLine1Icon, styles.groupItemPosition]}
            source={require("../assets/arrowrightsline-1.svg")}
          />
          <Image
            style={[styles.groupItem, styles.groupItemPosition]}
            source={require("../assets/group-2.svg")}
          />
          <Text style={[styles.am, styles.amTypo]}>10:00 AM</Text>
          <Text style={[styles.beforeEating, styles.amTypo]}>
            Before Eating
          </Text>
          <View style={[styles.groupChild3, styles.groupLayout]} />
        </View>
        <Text style={[styles.dailyReview, styles.dailyReviewLayout]}>
          Daily Review
        </Text>
      </View>
      <View style={[styles.slider, styles.sliderPosition]}>
        <View style={styles.sliderChild} />
        <View style={[styles.maskGroup, styles.maskGroupLayout]}>
          <View style={[styles.maskGroupChild, styles.maskGroupLayout]} />
          <Text style={[styles.of4Completed, styles.showMorePosition]}>
            1 of 4 completed
          </Text>
          <Text style={[styles.showMore, styles.showMorePosition]}>
            Show More
          </Text>
          <Text
            style={[styles.yourPlanFor, styles.showMorePosition]}
          >{`Your plan
for today`}</Text>
        </View>
        <View style={[styles.flamencoUploading1Wrapper, styles.flamencoLayout]}>
          <Image
            style={[styles.flamencoUploading1Icon, styles.flamencoLayout]}
            contentFit="cover"
            source={require("../assets/flamencouploading-1.png")}
          />
        </View>
        <View style={[styles.sliderItem, styles.groupLayout]} />
      </View>
      <Image
        style={styles.tabBarIcon}
        source={require("../assets/tab-bar.svg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
  dailyReviewLayout: {
    lineHeight: 38,
    color: Color.colorGray,
    textAlign: "left",
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
  sliderPosition: {
    top: 136,
    left: 28,
  },
  maskGroupLayout: {
    height: 180,
    left: 0,
    width: 319,
    position: "absolute",
  },
  showMorePosition: {
    lineHeight: 24,
    left: 24,
    textAlign: "left",
    position: "absolute",
  },
  flamencoLayout: {
    height: 251,
    width: 248,
    top: 0,
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
  helloTypo: {

    fontWeight: "600",
  },
  kathryn: {

    },
  helloKathryn: {
    fontSize: 28,
    color: Color.colorGray,
    top: 136,
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
  rectangleGroup: {
    top: 134,
  },
  beforeEating: {
    left: 133,

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
  sliderChild: {
    top: 120,
    left: 167,
    backgroundColor: Color.colorBlack,
    width: 124,
    height: 124,
    position: "absolute",
  },
  maskGroupChild: {
    borderRadius: 28,
    backgroundColor: "#f3f6c8",
    top: 0,
    height: 180,
  },
  of4Completed: {
    top: 74,
    fontSize: 11,
    color: Color.colorBlack,
    opacity: 0.4,
  
  },
  showMore: {
    top: 129,
    color: Color.colorSalmon,
    fontSize: FontSize.size_smi,

    fontWeight: "600",
  },
  yourPlanFor: {
    top: 24,
    fontSize: 18,

    fontWeight: "600",
    color: Color.colorGray,
  },
  maskGroup: {
    top: 92,
  },
  flamencoUploading1Icon: {
    left: 0,
  },
  flamencoUploading1Wrapper: {
    left: 129,
  },
  sliderItem: {
    top: 247,
    left: 23,
    borderStyle: "solid",
    borderColor: Color.colorSalmon,
    borderTopWidth: 2,
    width: 74,
  },
  slider: {
    width: 377,
    height: 272,
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


