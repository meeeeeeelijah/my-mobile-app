import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <View style={styles.tabs}>
            <Text style={styles.activeTab}>Delivery</Text>
            <Text style={styles.tab}>Pickup</Text>
          </View>

          <View>
            <Text style={styles.address}>3213 Address Goes Here ▼</Text>
          </View>
        </View>

        <View style={styles.profile}>
          <Ionicons name="person" size={25} color="white" />
        </View>
      </View>

      {/* Body */}
      <View style={styles.content}>
        <Text>Body Content</Text>
      </View>
      <View style={styles.footer}>
        <Ionicons name="home" size={30} color="white" />
        <Ionicons name="search" size={30} color="white" />
        <Ionicons name="newspaper" size={30} color="white" />
        {/*Placeholder for skip incon*/}
        <Ionicons name="ellipse-outline" size={30} color="white" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#2b2b2b",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    justifyContent: "flex-start",
  },
  content: {
    flex: 1,
    padding: 20,
    backgroundColor: "#111111",
  },
  contentText: {
    fontSize: 14,
    color: "#fff",
  },
  footer: {
    paddingVertical: 24,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#2b2b2b",
  },
  footerText: {
    fontSize: 14,
    color: "#fff",
  },
  tabs: {
    flexDirection: "row",
  },
  tab: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  activeTab: {
    color: "#ff8030",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 20,
  },
  profile: {
    backgroundColor: "#6e6e6e",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
  },
  address: {
    paddingTop: 10,
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
