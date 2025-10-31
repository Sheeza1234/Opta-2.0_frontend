import DownIcon from "@/assets/downIcon.svg";
import Polygon1 from "@/assets/Polygon1.svg";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
interface Alert {
  or: string;
  delay: string;
  cause: string;
  actions: string[];
  logged: string;
}

const alerts: Alert[] = [
  {
    or: "OR 02",
    delay: "11 Min Predicted Delay",
    cause: "Surgeon late from previous case",
    actions: [
      "Rerouted float nurse to reduce delay",
      "Dispatched EVS early",
      "Notified anesthesiologist",
      "Rerouted tech from 04 to 02",
    ],
    logged: "1 min ago",
  },
  {
    or: "OR 04",
    delay: "3 Min Predicted Delay",
    cause: "Turnover started late",
    actions: [
      "Added EVS tech",
      "Notified anesthesiologist",
    ],
    logged: "2 mins ago",
  },
  {
    or: "OR 12",
    delay: "8 Min Predicted Delay",
    cause: "Current procedure running long",
    actions: [
      "Rerouted EVS from 02 to 12",
      "Prepping patient early",
      "Rerouted tech from 02 to 12",
    ],
    logged: "2 mins ago",
  },
];

const AlertsActive: React.FC = () => {
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Alerts</Text>
        <View style={styles.iconWrapper}>
          <Polygon1 width={20} height={20} />
          <Text style={styles.iconNumber}>{alerts.length}</Text>
        </View>
      </View>

      {/* Alerts list */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {alerts.map((alert, index) => (
          <View key={index} style={styles.alertBlock}>
            <Text style={styles.alertTitle}>
              {alert.or}:  {alert.delay}
            </Text>
            <Text style={styles.alertCause}>Cause: {alert.cause}</Text>
            <Text style={styles.alertOpta}>Opta:</Text>
            {alert.actions.map((action, idx) => (
              <Text key={idx} style={styles.alertAction}>
                {idx + 1}. {action}
              </Text>
            ))}
            <Text style={styles.alertLogged}>Logged {alert.logged}</Text>

        
              <View style={styles.divider} />
            
          </View>
        ))}
         <View style={styles.fixedArrow}>
    <DownIcon width={20} height={20}/>
  </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2d2d2c",
    borderRadius: 15,
    paddingTop:22,
    paddingLeft:16,
    paddingRight:20
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    position: "relative",
  },
  headerText: {
    fontSize: 14,
    color: "#59c77c",
    fontFamily: "Inter-Medium",
    fontWeight: "500",
  },
  iconWrapper: {
    position: "absolute",
    right: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  iconNumber: {
    position: "absolute",
    top: 3,
    left: 7,
    fontSize: 10,
    color: "#33332f",
    fontFamily: "Inter-Medium",
  },
  scroll: {
    flex: 1,
  },
fixedArrow: {
  position: "absolute",
  bottom: 5,
  left: 0,
  right: 0,
  alignItems: "center",
  marginTop:10
},

  alertBlock: {
    paddingVertical: 8,
  },
  alertTitle: {
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
    color: "rgba(255, 255, 255, 0.75)",
  },
  alertCause: {
    fontSize: 11,
    fontFamily: "Inter-Regular",
    color: "rgba(255, 255, 255, 0.75)",
    marginTop: 2,
  },
  alertOpta: {
    fontSize: 11,
    fontFamily: "Inter-Regular",
    color: "rgba(255, 255, 255, 0.75)",
    marginTop: 4,
  },
  alertAction: {
    fontSize: 11,
    fontFamily: "Inter-Regular",
    color: "rgba(255, 255, 255, 0.75)",
    marginLeft: 10,
    lineHeight: 15,
  },
  alertLogged: {
    fontSize: 11,
    fontFamily: "Inter-Regular",
    color: "rgba(255, 255, 255, 0.75)",
    marginTop: 6,
  },
  divider: {
    borderTopWidth: 0.5,
    borderColor: "rgba(255, 255, 255, 0.5)",
    marginTop: 16,
    marginBottom:6
  },
});

export default AlertsActive;
