import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Search() {
  return (
    <SafeAreaView style={styles.container}>
      {/*Header*/}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.tabs}>
            <Text style={styles.activeTab}>Delivery</Text>
            <Text style={styles.tab}>Pickup</Text>
          </View>

          <Text style={styles.address}>3213 Address Goes Here</Text>
        </View>

        <View style={styles.profile}>
          <Ionicons name="person" size={25} color="white" />
        </View>
      </View>

      {/*Body*/}
      <ScrollView style={styles.content}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={24} color="#ff8030" />
          <Text style={styles.searchText}>Search skip</Text>
        </View>

        {/* Featured Restaurants */}
        <Text style={styles.sectionTitle}>Featured Restaurants</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.restaurantBubble}>
            <Text style={styles.bubbleText}>Papa John's</Text>
          </View>

          <View style={styles.restaurantBubble}>
            <Text style={styles.bubbleText}>Dairy Queen</Text>
          </View>

          <View style={styles.restaurantBubble}>
            <Text style={styles.bubbleText}>Denny's</Text>
          </View>

          <View style={styles.restaurantBubble}>
            <Text style={styles.bubbleText}>Harvey's</Text>
          </View>
        </ScrollView>

        <Text style={styles.sectionTitle}>Popular For Lunch</Text>

        <View style={styles.foodGrid}>
          <View style={styles.foodCard}>
            <Text style={styles.foodCardText}>Shawarma</Text>
          </View>

          <View style={styles.foodCard}>
            <Text style={styles.foodCardText}>Barbecue</Text>
          </View>

          <View style={styles.foodCard}>
            <Text style={styles.foodCardText}>Middle Eastern</Text>
          </View>

          <View style={styles.foodCard}>
            <Text style={styles.foodCardText}>Pho</Text>
          </View>

          <View style={styles.foodCard}>
            <Text style={styles.foodCardText}>Sandwiches & Subs</Text>
          </View>

          <View style={styles.foodCard}>
            <Text style={styles.foodCardText}>Vietnamese</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Recent Searches</Text>

        <View style={styles.placeholderCard}>
          <Text style={styles.placeholderText}>No Recent Searches</Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Ionicons
          name="home"
          size={30}
          color="white"
          onPress={() => router.push("/")}
        />

        <Ionicons name="search" size={30} color="#ff8030" />

        <Ionicons
          name="newspaper"
          size={30}
          color="white"
          onPress={() => router.push("/orders")}
        />

        <Ionicons
          name="ellipse-outline"
          size={30}
          color="white"
          onPress={() => router.push("/myskip")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
  },

  header: {
    backgroundColor: "#2b2b2b",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  headerTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },

  content: {
    padding: 20,
    paddingBottom: 120,
  },

  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2b2b2b",
    borderRadius: 20,
    padding: 15,
    marginBottom: 25,
  },

  searchText: {
    color: "#aaa",
    marginLeft: 10,
    fontSize: 10,
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },

  placeholderCard: {
    backgroundColor: "#222",
    borderRadius: 15,
    padding: 30,
    marginBottom: 25,
    alignItems: "center",
  },

  placeholderText: {
    color: "#fff",
  },

  foodGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  foodCard: {
    width: "48%",
    height: 100,
    backgroundColor: "#2b2b2b",
    borderRadius: 14,
    justifyContent: "flex-end",
    padding: 12,
    marginBottom: 14,
  },

  foodCardText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  restaurantBubble: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    marginBottom: 25,
  },

  bubbleText: {
    color: "#111",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
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
    backgroundColor: "#2b2b2b",
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

  address: {
    paddingTop: 12,
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },

  profile: {
    backgroundColor: "#6e6e6e",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
  },

  headerLeft: {
    flex: 1,
  },
});
