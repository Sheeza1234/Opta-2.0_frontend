import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ellipse9 from "../../../../assets/Ellipse9.svg";

const DailyTurnoverPerformance = () => {
  	
  	return (
    		<SafeAreaView style={styles.dailyTurnoverPerformance}>
      			<View style={styles.view}>
        				<View style={styles.dailyTurnoverPerformance1}>
          					<Text style={styles.dailyTurnoverPerformance2}>Daily Turnover  Performance</Text>
          					<View style={styles.kpis}>
            						<View style={styles.minutesSavedShadowBox}>
              							<Text style={[styles.averageTurnover1, styles.text1Typo]}>Average Turnover</Text>
              							<Text style={[styles.text, styles.textTypo]}>00:00</Text>
            						</View>
            						<View style={styles.minutesSavedShadowBox}>
              							<Text style={[styles.onTimeTurnovers, styles.text1Typo]}>On Time Turnovers</Text>
              							<Ellipse9 style={styles.onTimeTurnoversDisplayChild} width={60} height={60} />
              							<Text style={[styles.text1, styles.text1Typo]}>73%</Text>
            						</View>
            						<View style={styles.minutesSavedShadowBox}>
              							<Text style={[styles.minutesSaved1, styles.text1Typo]}>Minutes Saved</Text>
              							<Text style={[styles.text2, styles.textTypo]}>00:00</Text>
            						</View>
          					</View>
        				</View>
      			</View>
    		</SafeAreaView>);
};

const styles = StyleSheet.create({
  	dailyTurnoverPerformance: {
    		flex: 1
  	},
  	text1Typo: {
    		textAlign: "center",
    		fontFamily: "Inter-SemiBold",
    		fontWeight: "600",
    		position: "absolute"
  	},
  	textTypo: {
    		fontSize: 32,
    		top: 41,
    		textAlign: "center",
    		fontFamily: "Inter-SemiBold",
    		fontWeight: "600",
    		position: "absolute"
  	},
  	dailyTurnoverPerformance2: {
    		fontSize: 14,
    		fontWeight: "500",
    		fontFamily: "Inter-Medium",
    		textAlign: "center",
    		color: "#6BFF9BBF",
    		alignSelf: "stretch",
			paddingBottom:12
  	},
  	averageTurnover1: {
    		color: "rgba(255, 255, 255, 0.75)",
    		fontSize: 11,
    		top: 17,
    		fontFamily: "Inter-SemiBold",
    		fontWeight: "600",
    		left: 11
  	},
  	text: {
    		left: 16,
    		color: "rgba(255, 255, 255, 0.75)"
  	},
  	minutesSavedShadowBox: {
    		height: 121,
    		backgroundColor: "#2d2d2c",
    		borderRadius: 5,
    		shadowOpacity: 1,
    		elevation: 4,
    		shadowRadius: 4,
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		shadowColor: "rgba(0, 0, 0, 0.25)",
    		width: 118,
    		overflow: "hidden"
  	},
  	onTimeTurnovers: {
    		left: 9,
    		color: "rgba(255, 255, 255, 0.75)",
    		fontSize: 11,
    		top: 17,
    		fontFamily: "Inter-SemiBold",
    		fontWeight: "600"
  	},
  	onTimeTurnoversDisplayChild: {
    		top: 40,
    		left: 29,
    		width: 60,
    		height: 60,
    		opacity: 0.6,
    		position: "absolute"
  	},
  	text1: {
    		top: 60,
    		left: 44,
    		fontSize: 15,
    		color: "#fff"
  	},
  	minutesSaved1: {
    		left: 19,
    		color: "rgba(255, 255, 255, 0.75)",
    		fontSize: 11,
    		top: 17,
    		fontFamily: "Inter-SemiBold",
    		fontWeight: "600"
  	},
  	text2: {
    		left: 11,
    		color: "#6BFF9B"
  	},
kpis: {
  flexDirection: "row",
  justifyContent: "space-between", // distribute evenly
  alignSelf: "stretch",
  alignItems: "center",
}
,
  	dailyTurnoverPerformance1: {
  borderRadius: 15,
  backgroundColor: "#212020",
  paddingHorizontal: 50,
  paddingVertical: 13,
//   gap: 15,
  alignItems: "center",
  overflow: "hidden",

  // ✅ Remove fixed width & height
  width: "100%", // fill parent width
  // height: 190, // optional, only keep if you want fixed height
}
,
  	view: {
    		// width: "100%",
    		flex: 1
  	}
});

export default DailyTurnoverPerformance;
