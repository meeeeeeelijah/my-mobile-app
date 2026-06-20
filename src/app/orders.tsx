import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function orders() {
  return (
    <SafeAreaView style={styles.container}>
      {/*Header*/}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.headerLeft}>
            <Text style={styles.address}>Your Orders</Text>
          </View>

          <View style={styles.profile}>
            <Ionicons name="person" size={25} color="white" />
          </View>
        </View>

        <View style={styles.searchBar}>
          <Ionicons name="search" size={24} color="#ff8030" />
          <Text style={styles.searchText}>Search Orders</Text>
        </View>
      </View>

      {/*Body*/}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Order History */}
        <Text style={styles.sectionTitle}>Order History</Text>

        <View>
          {/* Order Cards */}
          <View style={styles.orderBubble}>
            <View style={styles.orderHeader}>
              <View style={styles.restaurantInfo}>
                <View style={styles.logo}>
                  <Image
                    style={styles.restaurantLogo}
                    source={require("../../assets/images/Dairy-Queen-Logo.png")}
                  />
                </View>

                <View>
                  <Text style={styles.bubbleText}>Dairy Queen</Text>
                  <Text style={styles.orderDetails}>
                    Jun 13, 2026 #762743946
                  </Text>
                </View>
              </View>
              <Ionicons name="ellipsis-vertical" size={22} color="#fff" />
            </View>

            <View style={styles.divider}></View>

            <View style={styles.statusRow}>
              <View style={styles.status}>
                <Text style={styles.statusText}>Complete</Text>
              </View>
              <Text style={styles.price}>$22.70</Text>
            </View>

            <View style={styles.bottomRow}>
              <View style={styles.orderButton}>
                <Text style={styles.orderButtonText}>Reorder</Text>
              </View>
              <View style={styles.recieptButton}>
                <Ionicons name="receipt-outline" size={24} color="#fff" />
              </View>
            </View>
          </View>

          <View style={styles.orderBubble}>
            <View style={styles.orderHeader}>
              <View style={styles.restaurantInfo}>
                <View style={styles.logo}>
                  <Image
                    style={styles.restaurantLogo}
                    source={require("../../assets/images/denny-s-logo.png")}
                  />
                </View>

                <View>
                  <Text style={styles.bubbleText}>Denny's</Text>
                  <Text style={styles.orderDetails}>
                    Jun 9, 2026 #761915095
                  </Text>
                </View>
              </View>
              <Ionicons name="ellipsis-vertical" size={22} color="#fff" />
            </View>

            <View style={styles.divider}></View>

            <View style={styles.statusRow}>
              <View style={styles.status}>
                <Text style={styles.statusText}>Complete</Text>
              </View>
              <Text style={styles.price}>$26.22</Text>
            </View>

            <View style={styles.bottomRow}>
              <View style={styles.orderButton}>
                <Text style={styles.orderButtonText}>Reorder</Text>
              </View>
              <View style={styles.recieptButton}>
                <Ionicons name="receipt-outline" size={24} color="#fff" />
              </View>
            </View>
          </View>

          <View style={styles.orderBubble}>
            <View style={styles.orderHeader}>
              <View style={styles.restaurantInfo}>
                <View style={styles.logo}>
                  <Image
                    style={styles.restaurantLogo}
                    source={require("../../assets/images/Harveys-Offer-Logo.png")}
                  />
                </View>

                <View>
                  <Text style={styles.bubbleText}>Harvey's</Text>
                  <Text style={styles.orderDetails}>
                    Jun 8, 2026 #761832505
                  </Text>
                </View>
              </View>
              <Ionicons name="ellipsis-vertical" size={22} color="#fff" />
            </View>

            <View style={styles.divider}></View>

            <View style={styles.statusRow}>
              <View style={styles.status}>
                <Text style={styles.statusText}>Complete</Text>
              </View>
              <Text style={styles.price}>$21.44</Text>
            </View>

            <View style={styles.bottomRow}>
              <View style={styles.orderButton}>
                <Text style={styles.orderButtonText}>Reorder</Text>
              </View>
              <View style={styles.recieptButton}>
                <Ionicons name="receipt-outline" size={24} color="#fff" />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Ionicons
          name="home"
          size={30}
          color="white"
          onPress={() => router.push("/")}
        />

        <Ionicons
          name="search"
          size={30}
          color="white"
          onPress={() => router.push("/search")}
        />

        <Ionicons name="newspaper" size={30} color="#ff8030" />

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
  },

  content: {
    padding: 20,
    paddingBottom: 120,
  },

  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#444",
    borderRadius: 20,
    padding: 15,
  },

  searchText: {
    color: "#dddddd",
    marginLeft: 10,
    fontSize: 16,
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },

  orderBubble: {
    width: 370,
    height: 180,
    borderRadius: 12,
    backgroundColor: "#242424",
    justifyContent: "center",
    marginRight: 16,
    marginBottom: 18,
    elevation: 4,
  },

  orderHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
  },

  restaurantLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: "contain",
  },

  restaurantInfo: {
    flexDirection: "row",
    alignItems: "center",
  },

  orderDetails: {
    fontSize: 12,
    marginTop: 2,
    color: "#9a9a9a",
  },

  logo: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#262626",
    borderColor: "#686868",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  bubbleText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  divider: {
    height: 1,
    backgroundColor: "#3a3a3a",
    marginVertical: 14,
  },

  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    paddingHorizontal: 18,
  },

  status: {
    backgroundColor: "#085224",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
  },

  statusText: {
    color: "white",
    fontSize: 12,
    fontWeight: "300",
  },

  price: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  recieptButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#3a3a3a",
    justifyContent: "center",
    alignItems: "center",
  },

  orderButton: {
    width: 280,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#ef6109",
    borderRadius: 30,
    padding: 8,
    marginHorizontal: 18,
  },

  orderButtonText: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
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

  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2b2b2b",
    borderRadius: 20,
    padding: 15,
  },
});
