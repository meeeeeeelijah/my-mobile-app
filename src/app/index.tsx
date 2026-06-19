import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
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
        <ScrollView showsVerticalScrollIndicator={false}>
          {/*Promo Banner*/}
          <View style={styles.banner}>
            <Text style={styles.bannerSmallText}>Sponsored</Text>
            <Text style={styles.bannerTitle}>fire up!</Text>
            <Text style={styles.bannerDiscount}>$30 off!</Text>
            <Text style={styles.bannerBody}>On $70+ orders with code!</Text>
            <Text style={styles.bannerCode}>SPRING30</Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryRow}
          >
            {/* Category 1 */}

            <View style={styles.categoryItem}>
              <View style={styles.categoryIconContainer}>
                <Ionicons name="fast-food-outline" size={34} color="#ff8030" />
              </View>
              <Text style={styles.categoryText}>McDonald's</Text>
            </View>

            <View style={styles.categoryItem}>
              <View style={styles.categoryIconContainer}>
                <Ionicons name="ice-cream-outline" size={34} color="#ff8030" />
              </View>
              <Text style={styles.categoryText}>Desserts</Text>
            </View>
            <View style={styles.categoryItem}>
              <View style={styles.categoryIconContainer}>
                <Ionicons name="pricetag-outline" size={34} color="#ff8030" />
              </View>
              <Text style={styles.categoryText}>Offers</Text>
            </View>

            <View style={styles.categoryItem}>
              <View style={styles.categoryIconContainer}>
                <Ionicons name="nutrition-outline" size={34} color="#ff8030" />
              </View>
              <Text style={styles.categoryText}>Grocery</Text>
            </View>

            <View style={styles.categoryItem}>
              <View style={styles.categoryIconContainer}>
                <Ionicons name="cart-outline" size={34} color="#ff8030" />
              </View>
              <Text style={styles.categoryText}>Retail</Text>
            </View>

            <View style={styles.categoryItem}>
              <View style={styles.categoryIconContainer}>
                <Ionicons name="basket-outline" size={34} color="#ff8030" />
              </View>
              <Text style={styles.categoryText}>Convenience</Text>
            </View>

            <View style={styles.categoryItem}>
              <View style={styles.categoryIconContainer}>
                <Ionicons name="medkit-outline" size={34} color="#ff8030" />
              </View>
              <Text style={styles.categoryText}>Pharmacy</Text>
            </View>
          </ScrollView>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryRow}
          >
            {/* Category 2 */}
            <View style={styles.categoryRow}>
              <View style={styles.categoryItem}>
                <View style={styles.categoryIconContainer}>
                  <Ionicons
                    name="restaurant-outline"
                    size={34}
                    color="#ff8030"
                  />
                </View>
                <Text style={styles.categoryText}>New</Text>
              </View>

              <View style={styles.categoryItem}>
                <View style={styles.categoryIconContainer}>
                  <Ionicons name="bag-outline" size={34} color="#ff8030" />
                </View>
                <Text style={styles.categoryText}>Only on Skip</Text>
              </View>

              <View style={styles.categoryItem}>
                <View style={styles.categoryIconContainer}>
                  <Ionicons name="pizza-outline" size={34} color="#ff8030" />
                </View>
                <Text style={styles.categoryText}>Fast Food</Text>
              </View>

              <View style={styles.categoryItem}>
                <View style={styles.categoryIconContainer}>
                  <Ionicons
                    name="fast-food-outline"
                    size={34}
                    color="#ff8030"
                  />
                </View>
                <Text style={styles.categoryText}>Burgers</Text>
              </View>

              <View style={styles.categoryItem}>
                <View style={styles.categoryIconContainer}>
                  <Ionicons name="pizza-outline" size={34} color="#ff8030" />
                </View>
                <Text style={styles.categoryText}>Pizza</Text>
              </View>

              <View style={styles.categoryItem}>
                <View style={styles.categoryIconContainer}>
                  <Ionicons name="fish-outline" size={34} color="#ff8030" />
                </View>
                <Text style={styles.categoryText}>Sushi</Text>
              </View>

              <View style={styles.categoryItem}>
                <View style={styles.categoryIconContainer}>
                  <Ionicons
                    name="restaurant-outline"
                    size={34}
                    color="#ff8030"
                  />
                </View>
                <Text style={styles.categoryText}>Pasta</Text>
              </View>
            </View>
          </ScrollView>

          {/* Restaurant Cards */}
          <View style={styles.restaurantCard}>
            <View style={styles.discountBadge}>
              <Text style={styles.discountText}>$3 off orders $30+</Text>
            </View>

            <View style={styles.heartButton}>
              <Ionicons name="heart-outline" size={26} color="white" />
            </View>

            <Text style={styles.restaurantImageText}>SUBWAY SANDWICHES</Text>

            <View style={styles.restaurantLogo}>
              <Text style={styles.logoText}>SUBWAY</Text>
            </View>
          </View>

          {/*Restaurant Details*/}
          <Text style={styles.restaurantName}>Subway</Text>
          <Text style={styles.restaurantInfo}>
            Sandwiches🥪 • Fast Food • 15-35 min
          </Text>
          {/*Alert Button*/}
          <Pressable
            style={styles.alertButton}
            onPress={() =>
              Alert.alert(
                "Special Offer!",
                "Get $30 off your next order of $70 or more with code SPRING30. Don't miss out on this limited-time deal!",
              )
            }
          >
            <Text style={styles.alertButtonText}>View Special Offer</Text>
          </Pressable>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <Ionicons name="home" size={30} color="#ff8030" />
        <Pressable onPress={() => router.push("/search")}>
          <Ionicons name="search" size={30} color="white" />
        </Pressable>
        <Ionicons name="newspaper" size={30} color="white" />
        {/*Placeholder for skip incon*/}
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
    backgroundColor: "#2b2b2b",
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

  banner: {
    backgroundColor: "#e9fbff",
    borderRadius: 16,
    padding: 10,
    height: 185,
    marginBottom: 20,
  },
  bannerSmallText: {
    color: "#222",
    fontSize: 12,
  },
  bannerTitle: {
    color: "#1f5bd8",
    fontSize: 34,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  bannerDiscount: {
    color: "#1f5bd8",
    fontSize: 34,
    fontWeight: "bold",
  },
  bannerBody: {
    color: "#222",
    fontSize: 15,
    marginTop: 8,
  },
  bannerCode: {
    color: "#222",
    fontSize: 17,
    fontWeight: "bold",
  },
  categoryRow: {
    flexDirection: "row",
    marginBottom: 24,
  },
  categoryItem: {
    width: 90,
    alignItems: "center",
    marginRight: 16,
  },
  categoryIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 15,
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  categoryText: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
    marginTop: 8,
  },
  restaurantCard: {
    height: 170,
    backgroundColor: "#eaf7d8",
    borderRadius: 16,
    marginTop: 0,
    marginBottom: 12,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  discountBadge: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: "#2f2a16",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  discountText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  heartButton: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "#111",
    borderRadius: 24,
    padding: 8,
  },
  restaurantImageText: {
    color: "#8b4f1f",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  restaurantLogo: {
    position: "absolute",
    bottom: 12,
    left: 14,
    width: 75,
    height: 65,
    borderRadius: 12,
    backgroundColor: "#159447",
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    color: "#ffd34d",
    fontWeight: "bold",
  },
  restaurantName: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  restaurantInfo: {
    color: "#aaa",
    fontSize: 14,
    marginBottom: 40,
  },
  alertButton: {
    backgroundColor: "#ff8030",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  alertButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
