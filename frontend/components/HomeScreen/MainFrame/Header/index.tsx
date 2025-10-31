import Ellipse11 from "@/assets/Ellipse11.svg"; // green status dot
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  return (
    <SafeAreaView style={[styles.headerContainer, { paddingTop: 0 }]} edges={[]}>
      <View style={styles.headerContent}>
        
        <View style={styles.logoContainer}>
          <Image
            source={require("@/assets/optaicon.png")}
            style={styles.optaGraphicLogo}
            resizeMode="contain"
          />
          <Text style={styles.logoText}>Opta</Text>
        </View>

    
        <View style={styles.rightContainer}>
          <Ellipse11 width={10} height={10} />
          <View style={styles.cfCircle}>
            <Text style={styles.cfText}>CF</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#2a2a2a",
    height:28,
        justifyContent: "center",
    borderTopWidth: 2, // thin line
    borderTopColor: "#000", // black line color
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    // height: "100%",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -30 }],
  },
  optaGraphicLogo: {
    width: 18,
    marginRight: 4,
  },
  logoText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#fff",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    right: 15,
  },
  cfCircle: {
    backgroundColor: "#444",
    borderRadius: 20,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 6,
  },
  cfText: {
    fontSize: 9,
    fontWeight: "500",
    color: "#fff",
  },
});


export default Header;
