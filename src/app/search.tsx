import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Search() {
  return (
    <SafeAreaView style={styles.container}>
      {/*Header*/}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Search</Text>
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
  },

  headerTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },

  content: {
    padding: 20,
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
});
