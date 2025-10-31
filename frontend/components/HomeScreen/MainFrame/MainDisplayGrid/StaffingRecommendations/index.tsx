import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Staffingrecommendationsbuttonandicon from "../../../../../assets/staffing-recommendation.svg";

const StaffingRecommendationsTile = () => {
  	
  	return (
    		<SafeAreaView style={styles.viewBg} edges={['left', 'right', 'bottom']}>
      			<View style={[styles.view, styles.viewBg]}>
        				<Text style={styles.staffingRecommendationsLabel}>Staffing Recommendations</Text>
        				<Staffingrecommendationsbuttonandicon style={styles.staffingRecommendationsButto} width={90} height={92} />
						{/* <SideNavBar/> */}
      			</View>
    		</SafeAreaView>);
};

const styles = StyleSheet.create({
  	staffingRecommendationsTile: {
    		flex: 1,
    		backgroundColor: "#212020",
			paddingTop:12
  	},
  	viewBg: {
    		backgroundColor: "#212020",
    		flex: 1
  	},
  	staffingRecommendationsLabel: {
    		alignSelf: "stretch",
    		fontSize: 14,
    		fontWeight: "500",
    		fontFamily: "Inter-Medium",
    		color: "#6BFF9B",
    		textAlign: "center"
  	},
  	staffingRecommendationsButto: {
    		width: 90,
    		borderRadius: 5,
    		height: 92,
    		overflow: "hidden"
  	},
  	view: {
    		width: "100%",
    		borderRadius: 15,
    		// height: 254,
    		alignItems: "center",
    		paddingHorizontal: 36,
    		paddingVertical: 13,
    		gap: 53,
    		overflow: "hidden"
  	}
});

export default StaffingRecommendationsTile;
