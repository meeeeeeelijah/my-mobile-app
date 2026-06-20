import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
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
        {/*Content-Overview*/}
        <ScrollView>
          <View style={styles.overview}>
            <View style={styles.overviewMain}>
              <Text
                style={[
                  styles.overviewText,
                  { fontSize: 24, fontWeight: "bold" },
                ]}
              >
                500 Pts
              </Text>
              <Text style={[styles.overviewText, { fontSize: 12 }]}>
                Points value: $0.50
              </Text>
            </View>
            <View style={styles.overviewMain}>
              <Text
                style={[
                  styles.overviewText,
                  { fontSize: 24, fontWeight: "bold" },
                ]}
              >
                $321.54
              </Text>
              <Text style={[styles.overviewText, { fontSize: 12 }]}>
                Saved with Skip+ and offers
              </Text>
            </View>
          </View>

          {/*Content-Offers*/}
          <View style={styles.tabNav}>
            <View style={styles.offerTabs}>
              <Pressable style={styles.offerTab}>
                <Text style={styles.offerTabActive}>My Offers</Text>
              </Pressable>
              <Pressable style={styles.offerTab}>
                <Text style={styles.offerTabText}>Partnerships</Text>
              </Pressable>
              <Pressable style={styles.offerTab}>
                <Text style={styles.offerTabText}>History</Text>
              </Pressable>
            </View>

            <View style={styles.welcomeBox}>
              <View style={[{ marginTop: 25 }]}></View>
              <Text
                style={[
                  styles.overviewText,
                  { fontSize: 15, fontWeight: "bold" },
                ]}
              >
                Welcome to your Skip page.
              </Text>
              <Text
                style={[
                  styles.overviewText,
                  { marginRight: 150, marginBottom: 35 },
                ]}
              >
                Find deals and more that were designed for you.
              </Text>
            </View>

            <View>
              <Text
                style={[
                  styles.overviewText,
                  { fontSize: 18, marginLeft: 20, fontWeight: "bold" },
                ]}
              >
                Partnership exclusive offers
              </Text>
              <View style={styles.offerBox}>
                <Image
                  style={styles.offerLogo}
                  source={require("../../assets/images/westjet.png")}
                />
                <Text
                  style={[
                    styles.offerText,
                    { fontSize: 15, fontWeight: "bold", marginTop: 15 },
                  ]}
                >
                  Collect 350 WestJet Points
                </Text>
                <Text style={styles.offerText}>
                  Order once with a subtotal of $35+ (before taxes, tips and
                  fees). Expires June 16.
                </Text>
                <View style={styles.divider}></View>
                <Text
                  style={[
                    styles.offerText,
                    { color: "#f78fa7", fontSize: 12, marginLeft: 20 },
                  ]}
                >
                  Ends Today
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>

        {/*Footer*/}
        <View style={styles.footer}>
          <Pressable onPress={() => router.push("/")}>
            <Ionicons name="home" size={30} color="white" />
          </Pressable>
          <Pressable onPress={() => router.push("/search")}>
            <Ionicons name="search" size={30} color="white" />
          </Pressable>
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

  content: {
    flex: 1,
    padding: 20,
    paddingBottom: 120,
  },

  header: {
    paddingBottom: 5,
    borderBottomWidth: 0.2,
    borderBottomColor: "black",
    zIndex: 999,
    overflow: "hidden",
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
    marginTop: 20,
  },

  overviewMain: {
    backgroundColor: "#101010",
    margin: 15,
    marginTop: 12,
    marginBottom: 12,
    borderRadius: 10,
    height: 80,
  },

  overviewText: {
    color: "#fff",
    textAlign: "left",
    marginTop: 10,
    marginLeft: 15,
  },

  welcomeBox: {
    backgroundColor: "#323232",
    borderRadius: 10,
    marginTop: 10,
    left: 0,
    right: 0,
    margin: 20,
  },

  offerTabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: 20,
  },

  offerTab: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
    alignItems: "center",
  },

  offerTabText: {
    color: "#ffffff",
    fontSize: 14,
  },

  offerTabActive: {
    color: "#ffffff",
    fontSize: 14,
    borderBottomWidth: 3,
    borderBottomColor: "#ff8030",
  },

  offerBox: {
    backgroundColor: "#1f1f1f",
    borderRadius: 10,
    marginTop: 10,
    left: 0,
    right: 0,
    margin: 20,
    height: 150,
  },

  offerText: {
    color: "#fff",
    textAlign: "left",
    marginLeft: 80,
    margin: 5,
  },

  offerLogo: {
    backgroundColor: "#fff",
    width: 50,
    height: 50,
    resizeMode: "contain",
    position: "absolute",
    top: 20,
    left: 20,
  },

  tabNav: {
    backgroundColor: "#101010",
    borderRadius: 25,
    marginTop: 10,
    paddingBottom: 200,
    left: 0,
    right: 0,
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

  divider: {
    height: 1,
    backgroundColor: "#444",
    marginVertical: 15,
    margin: 20,
  },
});
