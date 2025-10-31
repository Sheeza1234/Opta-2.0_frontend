import * as React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import ActiveStaff from "./ActiveStaff";
import LiveORMatrixDefaultMode from "./LiveOrMatrixDefaultMode";
import MessagesTileDisplay from "./MessageDisplayGrid";
import ORDetailDefaultMode from "./OrDetailDefaultMode";

const MainDisplayGridFinal = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          {/* LEFT COLUMN */}
          <View style={styles.leftColumn}>
          {/* <StateLogGroupedByOR/> */}
            <View style={styles.staffingOverviewWrapper}>
              {/* <StaffingOverviewTile />
               */}
               <MessagesTileDisplay/>
            </View>
            <View style={styles.staffingRecommendationsWrapper}>
              <ActiveStaff/>
            </View>
          </View>

          {/* CENTER COLUMN */}
          <View style={styles.centerColumn}>
            <LiveORMatrixDefaultMode />
          </View>

          {/* RIGHT COLUMN */}
          <View style={styles.rightColumn}>
            <ORDetailDefaultMode />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  scrollContent: {
    flexGrow: 1, // allow ScrollView to expand
	// alignItems: 'flex-start',
	// paddingBottom: 20,
  },
  container: {
  flexDirection: "row",
  alignItems: "flex-start",
//   padding: 10,
},
  // LEFT
  leftColumn: {
    flex: 0.25,
    justifyContent: "space-between",
  },
  staffingOverviewWrapper: {
    flex: 0.55,
    backgroundColor: "#212020",
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 10,
  },
  staffingRecommendationsWrapper: {
    flex: 0.43,
    backgroundColor: "#212020",
    borderRadius: 15,
    overflow: "hidden",
  },
  // CENTER
  centerColumn: {
    flex: 0.5,
    backgroundColor: "#212020",
    borderRadius: 15,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  // RIGHT
  rightColumn: {
    flex: 0.25,
    backgroundColor: "#212020",
    borderRadius: 15,
    overflow: "hidden",
  },
});

export default MainDisplayGridFinal;
