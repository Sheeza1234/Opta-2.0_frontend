import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  	
  	return (
    		<SafeAreaView style={styles.homeScreen}>
				<ScrollView>
      			<View style={styles.view}>
        			{/* <MainFrame/>	 */}
      			</View>
				</ScrollView>
    		</SafeAreaView>);
};

const styles = StyleSheet.create({
  	homeScreen: {
    		flex: 1
  	},

  	view: {
    		// height: 834,
    		width: "100%",
    		// flex: 1
  	}
});

export default HomeScreen;
