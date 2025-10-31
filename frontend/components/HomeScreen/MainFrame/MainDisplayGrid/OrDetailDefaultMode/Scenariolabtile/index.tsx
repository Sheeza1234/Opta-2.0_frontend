import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

import Frame1 from "@/assets/Frame1.svg";
import Frame2 from "@/assets/Frame2.svg";
import Frame3 from "@/assets/Frame3.svg";
import Frame4 from "@/assets/Frame4.svg";
import Frame5 from "@/assets/Frame5.svg";
import Frame6 from "@/assets/Frame6.svg";
import Frame7 from "@/assets/Frame7.svg";
import Frame8 from "@/assets/Frame8.svg";
import Frame9 from "@/assets/Frame9.svg";
import Vector from "@/assets/Vector.svg";

// Props type for ActionButton
interface ActionButtonProps {
  title: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}


const ActionButton: React.FC<ActionButtonProps> = ({ title, Icon }) => (
  <LinearGradient
    style={styles.actionButton}
    locations={[0.71, 1]}
    colors={["#2d2d2c", "#3b3b35"]}
    useAngle
    angle={180}
  >
    <View style={styles.actionContent}>
      {Icon && <Icon width={20} height={20} style={{ marginRight: 6 }} />}
      <Text style={styles.actionText}>{title}</Text>
    </View>
  </LinearGradient>
);


const ScenarioLabTile: React.FC = () => {
  return (
    <SafeAreaView style={styles.container} edges={["left", "right", "bottom"]}>
      {/* Title */}
      <Text style={styles.title}>Scenario Lab</Text>

      {/* Predicted Turnover */}
      <View style={styles.turnoverBox}>
        <Text style={styles.turnoverTime}>32:15</Text>
        <Text style={styles.turnoverLabel}>Predicted Turnover</Text>
        <View style={styles.timeChange}>
          <Vector width={12} height={12} />
          <Text style={styles.timeChangeText}>3:45 min</Text>
        </View>
      </View>

      {/* Drag actions here */}
      <View style={styles.dragBox}>
        <Text style={styles.dragText}>Drag actions here</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonGrid}>
        <ActionButton title={`Notify\nSurgeon\nEarly`} Icon={Frame2} />
        <ActionButton title={`Prep\nPatient\nEarly`} Icon={Frame3} />
        <ActionButton title={`Reroute\nFloating\nNurse`} Icon={Frame1} />
        <ActionButton title={`Reroute\nTech`} Icon={Frame7} />
        <ActionButton title={`Dispatch\nEVS\nEarly`} Icon={Frame6} />
        <ActionButton title={`Pre-Op\nRoom\nReady`} Icon={Frame6} />
        <ActionButton title={`Clear\nPACU\nSpace`} Icon={Frame4} />
        <ActionButton title={`Notify\nScrub\nNurse`} Icon={Frame6} />
        <ActionButton title={`Page\nCirculator\nEarly`} Icon={Frame5} />
        <ActionButton title={`Confirm\nRoom\nReady`} Icon={Frame3} />
        <ActionButton title={`Preload\nEMR\nOrders`} Icon={Frame8} />
        <ActionButton title={`Stage\nNext\nCase`} Icon={Frame9} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212020",
    alignItems: "center",
    paddingTop:12,
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    color: "#5dcc80",
    marginBottom: 18,
  },
  turnoverBox: {
    backgroundColor: "#2d2d2c",
    borderRadius: 5,
    width: "90%",
    alignItems: "center",
    paddingVertical: 16,
    marginBottom: 12,
  },
  turnoverTime: {
    fontSize: 30,
    fontWeight: "600",
    color: "rgba(255, 255, 255, 0.75)",
  },
  turnoverLabel: {
    fontSize: 11,
    fontWeight: "600",
    color: "rgba(255, 255, 255, 0.75)",
  },
  timeChange: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  timeChangeText: {
    fontSize: 11,
    fontWeight: "600",
    color: "rgba(107, 255, 155, 0.75)",
    marginLeft: 4,
  },
  dragBox: {
    backgroundColor: "#2d2d2c",
    borderRadius: 5,
    width: "90%",
    height:"21%",
    paddingVertical: 24,
    alignItems: "center",
    marginBottom: 16,
    justifyContent:'flex-end'
  },
  dragText: {
    color: "#fff",
    fontSize: 11,
  },
  buttonGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
    marginBottom:4
  },
 actionButton: {
  width: "25%",
  height: 60,
  borderRadius: 5,
  justifyContent: "center",
  alignItems: "center",
  margin: 4,
  shadowColor: "rgba(0,0,0,0.5)",
  shadowOpacity: 1,
  shadowRadius: 4,
  elevation: 4,
},
actionContent: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
},
actionText: {
  fontSize: 10,
  color: "#fff",
  textAlign: "center",
},

  
});

export default ScenarioLabTile;
