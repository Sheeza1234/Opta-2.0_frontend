import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Staffingoverviewbuttonandicon from "../../../../../assets/staffing-overview-button.svg";

const StaffingOverviewTile = () => {
  	
  	return (
    		<SafeAreaView style={styles.viewBg} edges={['left', 'right', 'bottom']}>
      			<View style={[styles.view, styles.viewBg]}>
        				<Text style={styles.staffingOverview}>Staffing Overview</Text>
        				<Staffingoverviewbuttonandicon style={styles.staffingOverviewButtonAndI} width={90} height={92} />
      			</View>
    		</SafeAreaView>);
};

const styles = StyleSheet.create({
  	staffingOverviewTile: {
      paddingTop:13,
    		flex: 1,
    		backgroundColor: "#212020",
			alignItems:'center'
  	},
  	viewBg: {
    		backgroundColor: "#212020",
    		flex: 1
  	},
  	staffingOverview: {
    		alignSelf: "stretch",
    		fontSize: 14,
    		fontWeight: "500",
    		fontFamily: "Inter-Medium",
    		color: "#6BFF9BBF",
    		textAlign: "center"
  	},
  	staffingOverviewButtonAndI: {
    		width: 90,
    		borderRadius: 5,
    		height: 92,
    		overflow: "hidden"
  	},
  	view: {
    		width: "100%",
    		borderRadius: 15,
    		// height: 320,
    		alignItems: "center",
    		paddingHorizontal: 70,
    		paddingVertical: 13,
    		gap: 86,
    		overflow: "hidden"
  	}
});

export default StaffingOverviewTile;