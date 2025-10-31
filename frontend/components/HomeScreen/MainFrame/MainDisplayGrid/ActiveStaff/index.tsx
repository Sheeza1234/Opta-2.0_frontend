import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StaffDetail from "./StaffDetail";

type StaffData = Record<string, string[]>;
type ActiveStaffProps = {
  selectedStaff: string | null;
  setSelectedStaff: (staff: string | null) => void;
};

const staffData: StaffData = {
  A: [
    "Sara Adams, MD",
    "Jefferey Aldrich, RN",
    "Jen Lie Aosakas, MD",
    "Sierra Amfords, RN",
  ],
  B: [
    "Sean Baker, RN",
    "Meredith Bartling, MD",
    "Pietro Balderas, MD",
    "Sophia Bonilla, RN",
  ],
};




 const ActiveStaff: React.FC<ActiveStaffProps> = ({ selectedStaff, setSelectedStaff }) => {
  if (selectedStaff) {
    return <StaffDetail name={selectedStaff} onBack={() => setSelectedStaff(null)} />;
  }
  return (
    <SafeAreaView style={styles.container} edges={["left", "right"]}>
      <View style={styles.card}>
        <Text style={styles.title}>Active Staff</Text>
        {(Object.keys(staffData) as Array<keyof typeof staffData>).map((letter) => (
          <View key={letter}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{letter}</Text>
            </View>
            <View style={styles.divider} />

            {staffData[letter].map((name) => (
              <React.Fragment key={name}>
                <TouchableOpacity onPress={() => setSelectedStaff(name)}>
                  <Text style={styles.name}>{name}</Text>
                </TouchableOpacity>
                <View style={styles.divider} />
              </React.Fragment>
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2d2d2c",
    alignItems: "center",
    paddingTop:12,
    paddingBottom:12
  },
   card: {
    backgroundColor: "#2d2d2c",
    borderRadius: 15,
    paddingLeft:22,
    paddingRight:43,
    width: 300,
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    color: "#6BFF9B",
    textAlign: "center",
    // marginBottom: 8,

  },
  sectionHeader: {
    paddingVertical: 3,
  },
  sectionHeaderText: {
    fontSize: 16,
    color: "rgba(255,255,255,0.75)",
    marginTop:12
  },
  name: {
    fontSize: 13,
    color: "rgba(255,255,255,0.75)",
    paddingVertical: 2,
  },
 divider: {
  height: 1, // was 0.3 for hairline, making it more visible
  backgroundColor: "rgba(255,255,255,0.3)", // softer so not too bright
  width: "100%",
},

});

export default ActiveStaff;
