import Polygon1 from "@/assets/Polygon1.svg";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Findbuttonandicon from '../../../../assets/alert-icon.svg';

interface AlertsTileProps {
  onPress: () => void;
}

const AlertsTile:React.FC<AlertsTileProps> = ({onPress}) => {

	return (
		<SafeAreaView style={styles.alertsTile}>
			<View style={styles.view}>
				<View style={styles.findLayout}>
					<View style={[styles.findTile, styles.findLayout]}>
						<View style={styles.findTileLabelWrapper}>
							<Text style={styles.findTileLabel}>Alerts</Text>
						</View>
						<View style={styles.iconWrapper}>
							<TouchableOpacity onPress={onPress}>
								<Polygon1 width={20} height={20} />
								<Text style={styles.iconNumber}>2</Text>
							</TouchableOpacity>
						</View>
						<Findbuttonandicon style={styles.findButtonAndIcon} width={90} height={92} />
					</View>
					<View style={styles.groupChild} />
				</View>
			</View>
		</SafeAreaView>);
};

const styles = StyleSheet.create({
	alertsTile: {
		flex: 1
	},
	findLayout: {
		height: 190,
		width: 262
	},
	findTileLabel: {
		fontSize: 14,
		fontWeight: "500",
		fontFamily: "Inter-Medium",
		color: "#6BFF9B",
		textAlign: "center",
		flex: 1
	},
	findTileLabelWrapper: {
		alignSelf: "stretch",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center"
	},
	findButtonAndIcon: {
		width: 90,
		borderRadius: 5,
		height: 92,
		overflow: "hidden"
	},
	findTile: {
		top: 0,
		left: 0,
		borderRadius: 15,
		backgroundColor: "#212020",
		paddingHorizontal: 85,
		paddingVertical: 13,
		gap: 19,
		alignItems: "center",
		overflow: "hidden",
		position: "absolute"
	},
	groupChild: {
		top: 11,
		left: 230,
		width: 20,
		height: 20,
		position: "absolute"
	},
	iconWrapper: {
		position: "absolute",
		right: 0,
		flexDirection: "row",
		alignItems: "center",
	},
	iconNumber: {
		position: "absolute",
		top: 3,
		left: 7,
		fontSize: 10,
		color: "#33332f",
		fontFamily: "Inter-Medium",
	},
	view: {
		width: "100%",
		flex: 1
	}
});

export default AlertsTile;