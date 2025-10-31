import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Findbuttonandicon from '../../../../assets/find-button-and-icon.svg';
interface FindTileProps {
  onPress: () => void;
}

const FindTile: React.FC<FindTileProps> = ({ onPress }) => {
  	
  	return (
    		<SafeAreaView style={styles.viewBg}>
				 <TouchableOpacity
        onPress={onPress}
      >
      			<View style={[styles.view, styles.viewBg]}>
        				<Text style={styles.findTileLabel}>Find</Text>
        				<Findbuttonandicon style={styles.findButtonAndIcon} width={90} height={92} />
      			</View>
				</TouchableOpacity>
    		</SafeAreaView>);
};

const styles = StyleSheet.create({
  	findTile: {
    		flex: 1,
    		backgroundColor: "#212020"
  	},
  	viewBg: {
    		backgroundColor: "#212020",
    		flex: 1
  	},
  	findTileLabel: {
    		alignSelf: "stretch",
    		fontSize: 14,
    		fontWeight: "500",
    		fontFamily: "Inter-Medium",
    		color: "#6BFF9B",
    		textAlign: "center"
  	},
  	findButtonAndIcon: {
    		width: 90,
    		borderRadius: 5,
    		height: 92,
    		overflow: "hidden"
  	},
  	view: {
    		width: "100%",
    		borderRadius: 15,
    		height: 188,
    		alignItems: "center",
    		paddingHorizontal: 85,
    		paddingVertical: 13,
    		gap: 19,
    		overflow: "hidden"
  	}
});

export default FindTile;
