import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ordetailbuttonandicon from "../../../../../assets/or-detail-button.svg";

const ORDetailDefaultMode = () => {
  return (
    <SafeAreaView style={styles.orDetailDefaultMode} edges={['left', 'right', 'bottom']}>
      <View style={styles.container}>
        
        {/* Top */}
        <Text style={styles.orDetail}>OR Detail</Text>
        
        {/* Middle */}
        <View style={styles.middleContent}>
          <View style={styles.orDetailButtonAndIcon}>
            <Ordetailbuttonandicon width={90} height={92} />
          </View>
          <Text style={styles.tapAnyOr}>Tap any OR to view details.</Text>
        </View>

        {/* Bottom */}
        <View style={styles.scenarioLabButtonAndLabel}>
          <Text style={styles.scenarioLab}>Scenario Lab</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  orDetailDefaultMode: {
    flex: 1,
    backgroundColor: "#212020",
  },
  container: {
    flex: 1,
    paddingTop: 12,
    paddingBottom: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  orDetail: {
    width: 219,
    textAlign: "center",
    color: "#6BFF9BBF",
    fontFamily: "Inter-Medium",
    fontWeight: "500",
    fontSize: 14,
  },
  middleContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  orDetailButtonAndIcon: {
    width: 90,
    height: 92,
    borderRadius: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  tapAnyOr: {
    fontSize: 11,
    fontFamily: "Inter-Regular",
    color: "rgba(255, 255, 255, 0.75)",
    textAlign: "center",
    width: 219,
  },
  scenarioLabButtonAndLabel: {
    backgroundColor: "#33332f",
    height: 43,
    width: 219,
    borderRadius: 5,
    justifyContent: "center",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 1,
    elevation: 4,
  },
  scenarioLab: {
    textAlign: "center",
    color: "#6BFF9BBF",
    fontFamily: "Inter-Medium",
    fontWeight: "500",
    fontSize: 14,
  },
});

export default ORDetailDefaultMode;