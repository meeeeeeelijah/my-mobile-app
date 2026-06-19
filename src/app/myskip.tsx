import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MySkip() {
  return (
    <LinearGradient
      colors={["#a84f00", "#002707cc"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 2.5, y: 0 }}
      style={[styles.container, { opacity: 0.9 }]}
    >
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoText}>
            <Image
              style={styles.headerLogo}
              source={require("../../assets/images/SkipProfileLogo.png")}
            />
            <Text style={styles.headerText}>Manage Membership</Text>
          </View>
        </View>

        {/*Body*/}
        {/*Content-Over*/}
        <View style={styles.overview}>
          <View style={styles.overviewMain}>
            <Text style={[styles.overviewText, { fontSize: 24 }]}>500 Pts</Text>
            <Text style={[styles.overviewText, { fontSize: 12 }]}>
              Points value: $0.50
            </Text>
          </View>
          <View style={styles.overviewMain}>
            <Text style={[styles.overviewText, { fontSize: 24 }]}>$321.54</Text>
            <Text style={[styles.overviewText, { fontSize: 12 }]}>
              Saved with Skip+ and offers
            </Text>
          </View>
        </View>

        {/*Content-Tab*/}
        <View style={styles.tabNav}></View>

        {/*Footer*/}
        <View style={styles.footer}>
          <Ionicons
            name="home"
            size={30}
            color="white"
            onPress={() => router.push("/")}
          />
          <Ionicons name="search" size={30} color="white" />
          <Ionicons name="newspaper" size={30} color="white" />
          {/*Placeholder for skip incon*/}
          <Ionicons name="ellipse-outline" size={30} color="#ff8030" />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    paddingBottom: 5,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 50,
    borderBottomWidth: 0.2,
    borderBottomColor: "black",
  },

  headerText: {
    fontSize: 13,
    color: "white",
    textDecorationLine: "underline",
  },

  headerLogo: {
    width: 75,
    height: 40,
    resizeMode: "contain",
  },

  logoText: {
    paddingTop: 20,
    paddingLeft: 15,
  },

  overview: {
    backgroundColor: "#10101075",
    margin: 20,
    borderRadius: 15,
    position: "absolute",
    top: 125,
    left: 0,
    right: 0,
    height: 200,
  },

  overviewMain: {
    backgroundColor: "#101010",
    margin: 15,
    marginTop: 12,
    marginBottom: 0,
    borderRadius: 10,
    height: 80,
  },

  overviewText: {
    color: "#fff",
    textAlign: "left",
    marginTop: 10,
    marginLeft: 10,
  },

  tabNav: {
    backgroundColor: "#101010",
    borderRadius: 25,
    position: "absolute",
    top: 375,
    left: 0,
    right: 0,
    height: 500,
  },

  footer: {
    paddingVertical: 24,
    borderTopWidth: 1,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 50,
    borderTopColor: "#828282",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#101010",
  },

  footerText: {
    fontSize: 14,
    color: "#fff",
  },
});
