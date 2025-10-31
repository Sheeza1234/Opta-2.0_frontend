import * as React from "react";
import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ScenarioLabTile from "../Scenariolabtile/index";
interface RowProps {
  label: string;
  value: string;
  valueStyle?: TextStyle;
  multiline?: boolean;
}

const Row: React.FC<RowProps> = ({ label, value, valueStyle, multiline }) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}</Text>
    <Text
      style={[styles.value, valueStyle, multiline && { flex: 1, textAlign: "right" }]}
      numberOfLines={multiline ? 2 : 1}
    >
      {value}
    </Text>
  </View>
);

const OrDetailActive: React.FC = () => {
   const [showScenarioDetail, setShowScenarioDetail] = React.useState(false);

  if (showScenarioDetail) {
    return <ScenarioLabTile/>; 
  }

  return (
    <SafeAreaView style={styles.parent} edges={['left', 'right', 'bottom']}>
      <View style={styles.container}>
        
        {/* Header */}
        <Text style={styles.header}>OR 02 Detail</Text>
        <Text style={styles.updated}>Updated 1 min ago</Text>

        {/* Case Information */}
        <Text style={styles.sectionTitle}>Case Information</Text>
        <Row label="Procedure" value="Total Hip Replacement" />
        <Row label="Case ID" value="10358972" />
        <Row label="Scheduled" value="09:30" />
        <Row label="Predicted End" value="12:30" />
        <Row label="Actual Start" value="09:47" />

        {/* Delay Information */}
        <Text style={styles.sectionTitle}>Delay Information</Text>
        <Row label="Predicted Delay" value="+11 mins" valueStyle={{ color: "#ab2d2d" }} />
        <Row label="Cause" value="Surgeon late from previous case" multiline />

        {/* Actions Taken */}
        <Text style={styles.sectionTitle}>Actions Taken</Text>
        {[
          "11:57   Rerouted floating nurse",
          "11:57   Dispatched EVS early",
          "11:59   Anesthesiologist notified",
          "11:59   Scrub nurse notified",
          "12:00   EMR orders preloaded",
          "12:00   Patient prepped early",
        ].map((action, i) => (
          <Text key={i} style={styles.action}>{action}</Text>
        ))}

        {/* Scenario Lab Button */}
          <TouchableOpacity
          style={styles.scenarioButton}
          onPress={() => setShowScenarioDetail(true)}
        >
          <Text style={styles.scenarioText}>Scenario Lab</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

interface Styles {
  parent: ViewStyle;
  container: ViewStyle;
  header: TextStyle;
  updated: TextStyle;
  sectionTitle: TextStyle;
  row: ViewStyle;
  label: TextStyle;
  value: TextStyle;
  action: TextStyle;
  scenarioButton: ViewStyle;
  scenarioText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  parent: {
    flex: 1,
    backgroundColor: "#2d2d2c",
  },
  container: {
    padding: 16,
    flex: 1,
    paddingTop:12
  },
  header: {
    textAlign: "center",
    color: "#6BFF9BBF",
    fontSize: 14,
    fontWeight: "500",
    marginTop: 8,
  },
  updated: {
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.75)",
    fontSize: 11,
    marginTop: 4,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "rgba(255, 255, 255, 0.75)",
    marginTop: 14,
    marginBottom: 4,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 4,
  },
  label: {
    color: "rgba(255, 255, 255, 0.75)",
    fontSize: 11,
  },
  value: {
    color: "rgba(255, 255, 255, 0.75)",
    fontSize: 12,
    textAlign: "right",
    marginBottom:5,
  },
  action: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.75)",
    marginBottom: 8,

  },
  scenarioButton: {
    marginTop: "auto",
    backgroundColor: "#33332f",
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: "center",
  },
  scenarioText: {
    color: "#6BFF9BBF",
    fontSize: 14,
    fontWeight: "500",
  },
});

export default OrDetailActive;
