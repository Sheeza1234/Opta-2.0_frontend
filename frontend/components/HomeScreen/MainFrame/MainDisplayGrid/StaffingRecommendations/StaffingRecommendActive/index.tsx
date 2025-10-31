import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const StaffingRecommendationsTileActive = () => {
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <View style={styles.card}>
        <Text style={styles.title}>Staffing Recommendations</Text>

        <View style={styles.section}>
          <Text style={styles.line}>
            <Text style={styles.orLabel}>OR 06: </Text>
            Reroute EVS Tech from OR 10 (Idle 3 min)
          </Text>
          <Text style={styles.line}>
            <Text style={styles.orLabel}>OR 14: </Text>
            Float Nurse available--assign to assist turnover
          </Text>
          <Text style={styles.line}>
            <Text style={styles.orLabel}>OR 07: </Text>
            Alert--No scrub nurse assigned yet
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.generalLabel}>General:</Text>
          <Text style={styles.subLine}>
            EVS staffing coverage insufficient: Recommend Dispatch
          </Text>
          <Text style={styles.subLine}>
            Anesthesiologist #5 out of position: Notify Supervisor
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2d2d2c",
    paddingTop:13,
    paddingLeft:13,
    paddingRight:23
  },
  card: {
    backgroundColor: "#2d2d2c",
    borderRadius: 12,
    // padding: 14,
  },
  title: {
    fontSize: 14,
    color: "#6BFF9BBF",
    fontWeight: "500",
    marginBottom: 24,
    textAlign:'center'
  },
  section: {
    marginBottom: 14,
  },
  line: {
    fontSize: 11,
    color: "rgba(255,255,255,0.75)",
    marginBottom: 10,
  },
  orLabel: {
    fontWeight: "500",
  },
  generalLabel: {
    fontSize: 11,
    fontWeight: "500",
    color: "rgba(255,255,255,0.75)",
    // marginBottom: 9,
  },
  subLine: {
    fontSize: 11,
    color: "rgba(255,255,255,0.75)",
    marginLeft: 12,
    marginBottom: 6,
  },
});

export default StaffingRecommendationsTileActive;
