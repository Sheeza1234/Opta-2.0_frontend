import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const StateLogGroupedByOR = () => {
  	
  	return (
    		<SafeAreaView style={styles.viewBg} edges={["left", "right", "bottom"]}>
      			<View style={[styles.view, styles.viewBg]}>
        				<Text style={styles.todaysLog}>Today’s Log</Text>
        				<View style={styles.child} />
        				<View style={styles.frame} />
        				<View style={styles.groupParent}>
          					<View style={styles.avgTurnoverParent}>
            						<Text style={[styles.avgTurnover, styles.text17Typo]}>{`Avg Turnover `}</Text>
            						<Text style={[styles.text, styles.textTypo1]}>{`32:15 `}</Text>
            						{/* <Vector style={[styles.vectorIcon, styles.vectorIconLayout]} /> */}
            						<Text style={[styles.mins, styles.textTypo1]}>3:45 mins</Text>
          					</View>
          					<View style={styles.avgTurnoverParent}>
            						<View style={[styles.totalMinutesSavedParent, styles.groupPosition]}>
              							<Text style={[styles.avgTurnover, styles.text17Typo]}>Total Minutes Saved</Text>
              							<Text style={[styles.text1, styles.textTypo1]}>{`300 `}</Text>
            						</View>
          					</View>
          					<View style={styles.avgTurnoverParent}>
            						<Text style={[styles.avgTurnover, styles.text17Typo]}>ORs with Opta Intervention</Text>
            						<Text style={[styles.text2, styles.textTypo1]}>{`12 `}</Text>
          					</View>
          					<View style={styles.actionsTakenParent}>
            						<Text style={[styles.avgTurnover, styles.text17Typo]}>Actions Taken</Text>
            						<Text style={[styles.text3, styles.textTypo1]}>{`74 `}</Text>
          					</View>
          					<View style={styles.actionsTakenParent}>
            						<Text style={[styles.avgTurnover, styles.text17Typo]}>Predicted Delays Today</Text>
            						<Text style={[styles.text2, styles.textTypo1]}>{`18 `}</Text>
          					</View>
        				</View>
        				<View style={styles.lineParent}>
          					<View style={[styles.frameChild, styles.innerLayout]} />
          					<View style={[styles.frameItem, styles.frameLayout]} />
          					<View style={[styles.frameInner, styles.frameChildLayout5]} />
          					<View style={[styles.rectangleView, styles.frameChildLayout5]} />
          					<View style={[styles.frameChild1, styles.frameLayout]} />
          					<View style={[styles.frameChild2, styles.frameChildLayout5]} />
          					<View style={[styles.frameChild3, styles.frameChildLayout5]} />
          					<Text style={[styles.text5, styles.textTypo]}>02</Text>
          					<Text style={[styles.text6, styles.textTypo]}>03</Text>
          					<View style={[styles.lineView, styles.lineViewPosition]} />
          					<View style={[styles.frameChild4, styles.frameChildLayout2]} />
          					<View style={[styles.frameChild5, styles.frameChildLayout2]} />
          					<View style={[styles.frameChild6, styles.frameChildLayout2]} />
          					<View style={[styles.frameChild7, styles.frameChildLayout2]} />
          					<View style={[styles.frameChild8, styles.frameChildLayout2]} />
          					<View style={styles.frameChild9} />
          					<View style={[styles.frameChild10, styles.frameChildLayout1]} />
          					<View style={[styles.frameChild11, styles.frameChildLayout1]} />
          					<View style={[styles.frameChild12, styles.frameChildLayout]} />
          					<View style={[styles.frameChild13, styles.frameChildLayout1]} />
          					<View style={[styles.frameChild14, styles.frameChildLayout]} />
          					<View style={[styles.group, styles.groupPosition]}>
            						<Text style={[styles.text7, styles.textTypo]}>5</Text>
            						<Text style={[styles.text7, styles.textTypo]}>4</Text>
            						<Text style={[styles.text7, styles.textTypo]}>3</Text>
            						<Text style={[styles.text7, styles.textTypo]}>2</Text>
            						<Text style={[styles.text7, styles.textTypo]}>1</Text>
            						<Text style={[styles.text7, styles.textTypo]}>0</Text>
          					</View>
          					<Text style={[styles.text13, styles.textTypo]}>05</Text>
          					<Text style={[styles.text14, styles.textTypo]}>06</Text>
          					<Text style={[styles.text15, styles.textTypo]}>08</Text>
          					<Text style={[styles.text16, styles.textTypo]}>09</Text>
        				</View>
        				{/* <Vector1 style={[styles.vectorIcon1, styles.vectorIconLayout]} /> */}
        				<Text style={[styles.minutesSaved, styles.minutesSavedTypo]}>Minutes Saved</Text>
        				<Text style={[styles.operatingRoom, styles.minutesSavedTypo]}>Operating Room</Text>
        				<Text style={[styles.text17, styles.itemPosition]}>08:30</Text>
        				<Text style={[styles.predictedDelay9, styles.nursePosition]}>Predicted delay 9 mins</Text>
        				<Text style={[styles.notYetIn, styles.nursePosition]}>Not yet in closure phase</Text>
        				<Text style={[styles.dispatchedEvsEarly, styles.nursePosition]}>Dispatched EVS early</Text>
        				<Text style={[styles.reroutedFloatingNurse, styles.nursePosition]}>Rerouted floating nurse</Text>
        				<Text style={[styles.anesthesiologistNotifiedEarl, styles.nursePosition]}>Anesthesiologist notified early</Text>
        				<Text style={[styles.emrOrdersPreloaded, styles.nursePosition]}>EMR orders preloaded</Text>
        				<Text style={[styles.scrubNurseNotified, styles.nursePosition]}>Scrub nurse notified</Text>
        				<Text style={styles.or02}>OR 02</Text>
        				<View style={[styles.item, styles.itemPosition]} />
        				{/* <Vector2 style={[styles.vectorIcon2, styles.vectorIconLayout]} /> */}
        				<View style={[styles.groupedByOrWrapper, styles.innerPosition]}>
          					<Text style={[styles.groupedByOr, styles.text17Typo]}>Grouped by OR</Text>
        				</View>
        				<View style={[styles.inner, styles.innerPosition]} />
      			</View>
    		</SafeAreaView>);
};

const styles = StyleSheet.create({
  	parent: {
    		flex: 1,
    		backgroundColor: "#2d2d2c",
			
  	},
  	viewBg: {
    		backgroundColor: "#2d2d2c",
    		flex: 1,
			borderRadius:15,
			paddingLeft:13,
			paddingRight:18
  	},
  	text17Typo: {
    		color: "rgba(255, 255, 255, 0.75)",
    		fontSize: 11,
    		textAlign: "left"
  	},
  	textTypo1: {
    		textAlign: "right",
    		color: "rgba(255, 255, 255, 0.75)",
    		fontSize: 11,
    		top: 0,
    		position: "absolute"
  	},
  	vectorIconLayout: {
    		maxHeight: "100%",
    		maxWidth: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	groupPosition: {
    		left: 0,
    		position: "absolute"
  	},
  	innerLayout: {
    		width: 1,
    		borderRightWidth: 0.5,
    		borderStyle: "solid"
  	},
  	frameLayout: {
    		height: 79,
    		top: 40,
    		width: 20,
    		backgroundColor: "rgba(89, 199, 124, 0.75)",
    		position: "absolute"
  	},
  	frameChildLayout5: {
    		width: 20,
    		backgroundColor: "rgba(89, 199, 124, 0.75)",
    		position: "absolute"
  	},
  	textTypo: {
    		textAlign: "center",
    		fontSize: 10,
    		color: "#fff",
    		fontFamily: "Inter-Regular"
  	},
  	lineViewPosition: {
    		borderColor: "rgba(255, 255, 255, 0.75)",
    		left: 12,
    		position: "absolute"
  	},
  	frameChildLayout2: {
    		height: 0,
    		borderTopWidth: 0.3,
    		borderStyle: "solid"
  	},
  	frameChildLayout1: {
    		height: 120,
    		width: 0,
    		borderRightWidth: 0.3,
    		borderColor: "rgba(255, 255, 255, 0.25)",
    		borderStyle: "solid",
    		top: 0,
    		position: "absolute"
  	},
  	frameChildLayout: {
    		height: 119,
    		width: 0,
    		borderRightWidth: 0.3,
    		borderColor: "rgba(255, 255, 255, 0.25)",
    		borderStyle: "solid",
    		top: 0,
    		position: "absolute"
  	},
  	minutesSavedTypo: {
    		fontSize: 9,
    		textAlign: "center",
    		color: "#fff",
    		fontFamily: "Inter-Regular",
    		position: "absolute"
  	},
  	itemPosition: {
    		left: 11,
    		position: "absolute"
  	},
  	nursePosition: {
    		left: 62,
    		color: "rgba(255, 255, 255, 0.75)",
    		fontSize: 11,
    		textAlign: "left",
    		position: "absolute"
  	},
  	innerPosition: {
    		left: 127,
    		top: 357,
    		position: "absolute"
  	},
  	todaysLog: {
    		top: 13,
    		left: 88,
    		fontSize: 14,
    		color: "rgba(107, 255, 155, 0.75)",
    		width: 80,
    		textAlign: "left",
    		fontFamily: "Inter-Medium",
    		fontWeight: "500",
    		position: "absolute"
  	},
  	child: {
    		top: 123,
    		left: 112,
    		width: 4,
    		height: 3,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	frame: {
    		left: 188,
    		width: 10,
    		height: 10,
    		top: 24,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	avgTurnover: {
    		left: 0,
    		position: "absolute",
    		top: 0,
    		fontFamily: "Inter-Medium",
    		fontWeight: "500"
  	},
  	text: {
    		left: 136,
    		fontFamily: "Inter-Medium",
    		fontWeight: "500"
  	},
  	vectorIcon: {
    		height: "57.69%",
    		width: "2.43%",
    		top: "30.77%",
    		right: "23.65%",
    		bottom: "11.54%",
    		left: "73.91%"
  	},
  	mins: {
    		left: 178,
    		fontFamily: "Inter-Regular"
  	},
  	avgTurnoverParent: {
    		height: 13,
    		width: 230
  	},
  	text1: {
    		left: 209,
    		fontFamily: "Inter-Regular"
  	},
  	totalMinutesSavedParent: {
    		top: 0,
    		left: 0,
    		height: 13,
    		width: 230
  	},
  	text2: {
    		left: 218,
    		fontFamily: "Inter-Regular"
  	},
  	text3: {
    		left: 217,
    		fontFamily: "Inter-Regular"
  	},
  	actionsTakenParent: {
    		alignSelf: "stretch",
    		height: 13
  	},
  	groupParent: {
    		left: 13,
    		gap: 7,
    		width: 230,
    		top: 48,
    		position: "absolute"
  	},
  	frameChild: {
    		height: 121,
    		borderColor: "rgba(255, 255, 255, 0.75)",
    		left: 12,
    		position: "absolute",
    		borderRightWidth: 0.5,
    		top: 0
  	},
  	frameItem: {
    		left: 25
  	},
  	frameInner: {
    		left: 55,
    		height: 71,
    		top: 48
  	},
  	rectangleView: {
    		top: 29,
    		left: 85,
    		height: 90
  	},
  	frameChild1: {
    		left: 115
  	},
  	frameChild2: {
    		top: 36,
    		left: 145,
    		height: 83
  	},
  	frameChild3: {
    		left: 175,
    		height: 95,
    		top: 24
  	},
  	text5: {
    		left: 29,
    		top: 122,
    		textAlign: "center",
    		fontSize: 10,
    		position: "absolute"
  	},
  	text6: {
    		left: 59,
    		top: 122,
    		textAlign: "center",
    		fontSize: 10,
    		position: "absolute"
  	},
  	lineView: {
    		top: 120,
    		borderTopWidth: 0.5,
    		width: 193,
    		height: 1,
    		borderStyle: "solid",
    		borderColor: "rgba(255, 255, 255, 0.75)",
    		left: 12
  	},
  	frameChild4: {
    		top: 98,
    		width: 192,
    		borderColor: "rgba(255, 255, 255, 0.25)",
    		height: 0,
    		borderTopWidth: 0.3,
    		left: 12,
    		position: "absolute"
  	},
  	frameChild5: {
    		top: 76,
    		width: 192,
    		borderColor: "rgba(255, 255, 255, 0.25)",
    		height: 0,
    		borderTopWidth: 0.3,
    		left: 12,
    		position: "absolute"
  	},
  	frameChild6: {
    		top: 31,
    		width: 192,
    		borderColor: "rgba(255, 255, 255, 0.25)",
    		height: 0,
    		borderTopWidth: 0.3,
    		left: 12,
    		position: "absolute"
  	},
  	frameChild7: {
    		top: 54,
    		width: 192,
    		borderColor: "rgba(255, 255, 255, 0.25)",
    		height: 0,
    		borderTopWidth: 0.3,
    		left: 12,
    		position: "absolute"
  	},
  	frameChild8: {
    		top: 10,
    		width: 192,
    		borderColor: "rgba(255, 255, 255, 0.25)",
    		height: 0,
    		borderTopWidth: 0.3,
    		left: 12,
    		position: "absolute"
  	},
  	frameChild9: {
    		left: 35,
    		height: 122,
    		width: 0,
    		borderRightWidth: 0.3,
    		borderColor: "rgba(255, 255, 255, 0.25)",
    		borderStyle: "solid",
    		top: 0,
    		position: "absolute"
  	},
  	frameChild10: {
    		left: 64
  	},
  	frameChild11: {
    		left: 95
  	},
  	frameChild12: {
    		left: 125
  	},
  	frameChild13: {
    		left: 155
  	},
  	frameChild14: {
    		left: 185
  	},
  	text7: {
    		alignSelf: "stretch"
  	},
  	group: {
    		top: 2,
    		width: 7,
    		alignItems: "center",
    		gap: 10
  	},
  	text13: {
    		left: 89,
    		top: 122,
    		textAlign: "center",
    		fontSize: 10,
    		position: "absolute"
  	},
  	text14: {
    		left: 119,
    		top: 122,
    		textAlign: "center",
    		fontSize: 10,
    		position: "absolute"
  	},
  	text15: {
    		left: 149,
    		top: 122,
    		textAlign: "center",
    		fontSize: 10,
    		position: "absolute"
  	},
  	text16: {
    		left: 179,
    		top: 122,
    		textAlign: "center",
    		fontSize: 10,
    		position: "absolute"
  	},
  	lineParent: {
    		top: 176,
    		left: 27,
    		width: 204,
    		height: 134,
    		position: "absolute"
  	},
  	vectorIcon1: {
    		height: "1.76%",
    		width: "2.72%",
    		top: "30.23%",
    		right: "4.31%",
    		bottom: "68.01%",
    		left: "92.97%"
  	},
  	minutesSaved: {
    		top: 272,
    		transform: [
      			{
        				rotate: "-90deg"
      			}
    		],
    		left: 9
  	},
  	operatingRoom: {
    		top: 320,
    		left: 94
  	},
  	text17: {
    		top: 407,
    		fontFamily: "Inter-Regular",
    		color: "rgba(255, 255, 255, 0.75)",
    		fontSize: 11,
    		textAlign: "left"
  	},
  	predictedDelay9: {
    		fontWeight: "600",
    		fontFamily: "Inter-SemiBold",
    		top: 407
  	},
  	notYetIn: {
    		top: 425,
    		fontStyle: "italic",
    		fontWeight: "300",
    		fontFamily: "Inter-Light"
  	},
  	dispatchedEvsEarly: {
    		top: 443,
    		fontFamily: "Inter-Regular"
  	},
  	reroutedFloatingNurse: {
    		top: 461,
    		fontFamily: "Inter-Regular"
  	},
  	anesthesiologistNotifiedEarl: {
    		top: 479,
    		fontFamily: "Inter-Regular"
  	},
  	emrOrdersPreloaded: {
    		top: 497,
    		fontFamily: "Inter-Regular"
  	},
  	scrubNurseNotified: {
    		top: 515,
    		fontFamily: "Inter-Regular"
  	},
  	or02: {
    		left: 205,
    		top: 407,
    		color: "#fff",
    		fontFamily: "Inter-Regular",
    		fontSize: 11,
    		textAlign: "left",
    		position: "absolute"
  	},
  	item: {
    		top: 540,
    		width: 232,
    		height: 0,
    		borderTopWidth: 0.3,
    		borderStyle: "solid",
    		left: 11,
    		borderColor: "rgba(255, 255, 255, 0.75)"
  	},
  	vectorIcon2: {
    		height: "1.2%",
    		width: "6.36%",
    		top: "95.42%",
    		right: "48.05%",
    		bottom: "3.37%",
    		left: "45.59%"
  	},
  	groupedByOr: {
    		top: 5,
    		left: 9,
    		fontFamily: "Inter-Regular",
    		position: "absolute"
  	},
  	groupedByOrWrapper: {
    		shadowColor: "rgba(0, 0, 0, 0.25)",
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		shadowRadius: 4,
    		elevation: 4,
    		shadowOpacity: 1,
    		borderTopRightRadius: 3,
    		borderBottomRightRadius: 3,
    		backgroundColor: "#4c4a4a",
    		width: 98,
    		height: 24,
    		overflow: "hidden"
  	},
  	inner: {
    		borderColor: "#000",
    		height: 25,
    		width: 1,
    		borderRightWidth: 0.5,
    		borderStyle: "solid"
  	},
  	view: {
    		width: "100%",
    		borderRadius: 15,
    		height: 590,
    		overflow: "hidden"
  	}
});

export default StateLogGroupedByOR;
