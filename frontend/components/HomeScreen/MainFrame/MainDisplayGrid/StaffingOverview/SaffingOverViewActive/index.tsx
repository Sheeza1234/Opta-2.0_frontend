import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const data = [
  { role: "EVS Techs", onDuty: 4, inOr: 2, enRoute: 1, idle: 1 },
  { role: "Circulators", onDuty: 2, inOr: 2, enRoute: 0, idle: 0 },
  { role: "Anesthesia", onDuty: 5, inOr: 3, enRoute: 1, idle: 1 },
  { role: "Float Nurses", onDuty: 2, inOr: 2, enRoute: 0, idle: 0 },
];

const StaffingOverviewTileActive = () => {
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <View style={styles.card}>
        <Text style={styles.title}>Staffing Overview</Text>

        {/* Table Header */}
        <View style={[styles.row, styles.headerRow]}>
          <Text style={[styles.headerText, { flex: 2 }]}>Role</Text>
          <Text style={styles.headerText}>On Duty</Text>
          <Text style={styles.headerText}>In OR</Text>
          <Text style={styles.headerText}>En Route</Text>
          <Text style={styles.headerText}>Idle</Text>
        </View>

        {/* Table Rows */}
        {data.map((item, index) => (
          <View key={index}>
            <View style={styles.separator} />
            <View style={styles.row}>
              <Text style={[styles.cellText, { flex: 2 }]}>{item.role}</Text>
              <Text style={styles.cellText}>{item.onDuty}</Text>
              <Text style={styles.cellText}>{item.inOr}</Text>
              <Text style={styles.cellText}>{item.enRoute}</Text>
              <Text
                style={[
                  styles.cellText,
                  item.idle > 0 && styles.idleHighlight,
                ]}
              >
                {item.idle}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212020",
    flex: 1,
    alignItems: "center",
    padding:13,
    // justifyContent: "center",
  },
  card: {
    backgroundColor: "#212020",
    borderRadius: 15,
    paddingHorizontal: 18,
    width: 300,
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    color: "#6BFF9B",
    textAlign: "center",
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8, // increased gap between rows
  },
  headerRow: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(255, 255, 255, 0.3)",
    paddingBottom: 8,
  },
  headerText: {
    flex: 1,
    fontSize: 13, // bigger header text
    fontWeight: "400",
    color: "rgba(255,255,255,0.85)",
    textAlign: "center",
  },
  cellText: {
    flex: 1,
    fontSize: 12, // bigger cell text
    color: "rgba(255,255,255,0.85)",
    textAlign: "center",
  },
  idleHighlight: {
    color: "#e6d51b",
    fontWeight: "600",
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "rgba(255,255,255,0.3)",
  },
});

export default StaffingOverviewTileActive;
