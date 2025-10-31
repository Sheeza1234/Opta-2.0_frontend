import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import AlertsTile from "./AlertTile";
import AlertsActive from "./AlertTile/AlertActive";
import DailyTurnoverPerformance from "./DailyTurnOverRecommendation";
import FindTile from "./FindTile";
import Header from './Header/index';
import StateLogGroupedByOR from "./MainDisplayGrid/ActiveLog";
import ActiveStaff from "./MainDisplayGrid/ActiveStaff";
import StaffDetail from "./MainDisplayGrid/ActiveStaff/StaffDetail";
import LiveORMatrixDefaultMode from "./MainDisplayGrid/LiveOrMatrixDefaultMode";
import FloorMap from "./MainDisplayGrid/LiveOrMatrixDefaultMode/FloormapMid";
import MessagesTileDisplay from "./MainDisplayGrid/MessageDisplayGrid";
import OptaActions from "./MainDisplayGrid/OptaAction";
import ORDetailDefaultMode from "./MainDisplayGrid/OrDetailDefaultMode";
import OrDetailActive from "./MainDisplayGrid/OrDetailDefaultMode/OrDetailActive";
import ScenarioLabTile from "./MainDisplayGrid/OrDetailDefaultMode/Scenariolabtile";
import StaffingOverviewTile from "./MainDisplayGrid/StaffingOverview";
import StaffingOverviewTileActive from "./MainDisplayGrid/StaffingOverview/SaffingOverViewActive";
import StaffingRecommendationsTile from "./MainDisplayGrid/StaffingRecommendations";
import SideNavBar from "./SideNavBar";

const MainFrame = () => {
  const [selectedMenu, setSelectedMenu] = useState("Home");
const [menuHistory, setMenuHistory] = useState(["Home"]);
const [selectedStaff, setSelectedStaff] = useState<string | null>(null);
const [selectedTileId, setSelectedTileId] = useState<string | null>(null);
const [activeORDetail, setActiveORDetail] = useState(false);
const [activeStaffDetail, setActiveStaffDetail] = useState(false);
const [showFloorMap, setShowFloorMap] = useState(false);
const[showAlertTile,setShowAlertTile]=useState(false)


const handleRoomSelect = (tileId: string, staffId?: string, showDetail?: boolean) => {
  setSelectedTileId(tileId);

  if (staffId) {
    setSelectedStaff(staffId);
    setActiveStaffDetail(true);
  }

  // Only show OR detail if specifically requested
  if (showDetail) {
    setActiveORDetail(true);
  }
};

const handleClick = () => {
  setSelectedMenu("Alerts");
  setActiveORDetail(false);
  setSelectedTileId(null);
  setShowFloorMap(false);
  setShowAlertTile(true);
};

 const handleFindClick = () => {
  setSelectedMenu("Live Map");
  setActiveORDetail(false);
  setSelectedTileId(null);
  setShowFloorMap(true);
    setShowAlertTile(false);
};




const handleMenuSelect = (menu: string) => {
  setMenuHistory((prev) => [...prev, menu]);
  setSelectedMenu(menu);
};

const handleGoBack = () => {
    if (activeORDetail || activeStaffDetail) {
      setActiveORDetail(false);
      setActiveStaffDetail(false);
      setSelectedTileId(null);
      setSelectedStaff(null);
    } if (selectedTileId) {
    setSelectedTileId(null);
  } else if (selectedStaff) {
    setSelectedStaff(null);
  } else {
    setMenuHistory((prev) => {
      if (prev.length > 1) {
        const newHistory = prev.slice(0, -1);
        setSelectedMenu(newHistory[newHistory.length - 1]);
        return newHistory;
      }
      return prev;
    });
  }
  };


  const renderContent = () => {
    switch (selectedMenu) {
      case "Home":
        return (
          <>
          <View>
            <View style={styles.topRow}>
              <View style={styles.topBox}>
                <AlertsTile onPress={handleClick}/>
              </View>
              <View style={styles.topBox1}>
                <DailyTurnoverPerformance />
              </View>
              <View style={styles.topBox2}>
                <FindTile onPress={handleFindClick} />
              </View>
            </View>
            <View style={styles.bottomRow}>
               <View style={styles.container1}>
          <View style={styles.leftColumn}>
            <View style={styles.staffingOverviewWrapper}>
              <StaffingOverviewTileActive/>
            </View>
            <View style={styles.staffingRecommendationsWrapper}>
              {activeStaffDetail ? (
    <StaffDetail/>
  ) : (
    <>
      <View style={styles.staffingRecommendationsWrapper}>
        <StaffingRecommendationsTile />
      </View>
    </>
  )}
            </View>
          </View>
          <View style={styles.centerColumn}>
            <LiveORMatrixDefaultMode selectedTileId={selectedTileId} setSelectedTileId={setSelectedTileId} onRoomSelect={handleRoomSelect}/>
          </View>

<View style={styles.rightColumn}>
  {activeORDetail ? (
    <OrDetailActive />
  ) : (
    <ORDetailDefaultMode />
  )}
</View>
        </View>
            </View>
            </View>
          </>
        );
      case "Live Map":
        return ( 
       <>
          <View>
            <View style={styles.topRow}>
              <View style={styles.topBox}>
                <AlertsTile  onPress={handleClick}/>
              </View>
              <View style={styles.topBox1}>
                <DailyTurnoverPerformance />
              </View>
              <View style={styles.topBox2}>
                <FindTile onPress={handleFindClick} />

              </View>
            </View>
            <View style={styles.bottomRow}>
               <View style={styles.container1}>
          <View style={styles.leftColumn}>
            <View style={styles.staffingOverviewWrapper}>
              <StaffingOverviewTile />
            </View>
            <View style={styles.staffingRecommendationsWrapper}>
              <StaffingRecommendationsTile/>
            </View>
          </View>
          <View style={styles.centerColumn1}>
            {/* <LiveORMatrixDefaultMode selectedTileId={selectedTileId} setSelectedTileId={setSelectedTileId}/> */}
            <FloorMap/>
          </View>

          {/* <View style={styles.rightColumn}>
            <ORDetailDefaultMode />
          </View> */}
        </View>
            </View>
            </View>
          </>)
      case "Alerts":
        return (<>
          <View>
            <View style={styles.topRow}>
              <View style={styles.topBox}>
                <AlertsTile  onPress={handleClick}/>
              </View>
              <View style={styles.topBox1}>
                <DailyTurnoverPerformance />
              </View>
              <View style={styles.topBox2}>
                <FindTile onPress={handleFindClick} />

              </View>
            </View>
            <View style={styles.bottomRow}>
               <View style={styles.container1}>
          <View style={styles.leftColumn}>
           <AlertsActive/>
          </View>
          <View style={styles.centerColumn}>
            <LiveORMatrixDefaultMode selectedTileId={selectedTileId} setSelectedTileId={setSelectedTileId}/>
          </View>

          <View style={styles.rightColumn}>
            <ORDetailDefaultMode />
          </View>
        </View>
            </View>
            </View>
          </>)
         case "Messages":
        return ( <>
          <View>
            <View style={styles.topRow}>
              <View style={styles.topBox}>
                <AlertsTile  onPress={handleClick}/>
              </View>
              <View style={styles.topBox1}>
                <DailyTurnoverPerformance />
              </View>
              <View style={styles.topBox2}>
                <FindTile onPress={handleFindClick} />
              </View>
            </View>
            <View style={styles.bottomRow}>
               <View style={styles.container1}>
          <View style={styles.leftColumn}>
            <View style={styles.staffingOverviewWrapper}>
              <MessagesTileDisplay/>
            </View>
            <View style={styles.staffingRecommendationsWrapper}>
              <StaffingRecommendationsTile/>
            </View>
          </View>
          <View style={styles.centerColumn}>
            <LiveORMatrixDefaultMode selectedTileId={selectedTileId} setSelectedTileId={setSelectedTileId}/>
          </View>

          <View style={styles.rightColumn}>
            <ORDetailDefaultMode />
          </View>
        </View>
            </View>
            </View>
          </>)
         case "Active Staff":
        return ( <>
          <View>
            <View style={styles.topRow}>
              <View style={styles.topBox}>
                <AlertsTile  onPress={handleClick}/>
              </View>
              <View style={styles.topBox1}>
                <DailyTurnoverPerformance />
              </View>
              <View style={styles.topBox2}>
                <FindTile onPress={handleFindClick} />
              </View>
            </View>
            <View style={styles.bottomRow}>
               <View style={styles.container1}>
          <View style={styles.leftColumn}>
            <View style={styles.staffingOverviewWrapper}>
              <StaffingOverviewTile/>
            </View>
            <View style={styles.staffingRecommendationsWrapper}>
              <ActiveStaff selectedStaff={selectedStaff} setSelectedStaff={setSelectedStaff} />
            </View>
          </View>
          <View style={styles.centerColumn}>
          <LiveORMatrixDefaultMode selectedTileId={selectedTileId} setSelectedTileId={setSelectedTileId}/>
          </View>

          <View style={styles.rightColumn}>
            <ORDetailDefaultMode />
          </View>
        </View>
            </View>
            </View>
          </>)
         case "Scenario Lab":
        return ( <>
          <View>
            <View style={styles.topRow}>
              <View style={styles.topBox}>
                <AlertsTile  onPress={handleClick}/>
              </View>
              <View style={styles.topBox1}>
                <DailyTurnoverPerformance />
              </View>
              <View style={styles.topBox2}>
                <FindTile onPress={handleFindClick} />
              </View>
            </View>
            <View style={styles.bottomRow}>
               <View style={styles.container1}>
          <View style={styles.leftColumn}>
            <View style={styles.staffingOverviewWrapper}>
              <StaffingOverviewTile/>
            </View>
            <View style={styles.staffingRecommendationsWrapper}>
              <StaffingRecommendationsTile/>
            </View>
          </View>
          <View style={styles.centerColumn}>
            <LiveORMatrixDefaultMode selectedTileId={selectedTileId} setSelectedTileId={setSelectedTileId}/>
          </View>

          <View style={styles.rightColumn}>
            <ScenarioLabTile/>
          </View>
        </View>
            </View>
            </View>
          </>)
         case "Opta Actions":
        return (<>
          <View>
            <View style={styles.topRow}>
              <View style={styles.topBox}>
                <AlertsTile  onPress={handleClick}/>
              </View>
              <View style={styles.topBox1}>
                <DailyTurnoverPerformance />
              </View>
              <View style={styles.topBox2}>
                <FindTile onPress={handleFindClick} />
              </View>
            </View>
            <View style={styles.bottomRow}>
               <View style={styles.container1}>
          <View style={styles.leftColumn}>
          <OptaActions/>
          </View>
          <View style={styles.centerColumn}>
            <LiveORMatrixDefaultMode selectedTileId={selectedTileId} setSelectedTileId={setSelectedTileId}/>
          </View>

          <View style={styles.rightColumn}>
            <ORDetailDefaultMode />
          </View>
        </View>
            </View>
            </View>
          </>)
         case "Log":
        return(<>
          <View>
            <View style={styles.topRow}>
              <View style={styles.topBox}>
                <AlertsTile  onPress={handleClick}/>
              </View>
              <View style={styles.topBox1}>
                <DailyTurnoverPerformance />
              </View>
              <View style={styles.topBox2}>
                <FindTile onPress={handleFindClick} />
              </View>
            </View>
            <View style={styles.bottomRow}>
               <View style={styles.container1}>
          <View style={styles.leftColumn}>
            {/* <View style={styles.staffingOverviewWrapper}>
              <MessagesTileDisplay/>
            </View>
            <View style={styles.staffingRecommendationsWrapper}>
              <StaffingRecommendationsTile/>
            </View> */}
            <StateLogGroupedByOR/>
          </View>
          <View style={styles.centerColumn}>
            <LiveORMatrixDefaultMode selectedTileId={selectedTileId} setSelectedTileId={setSelectedTileId}/>
          </View>

          <View style={styles.rightColumn}>
            <ORDetailDefaultMode />
          </View>
        </View>
            </View>
            </View>
          </>)
      default:
        return <Text style={{ color: "white" }}>Coming Soon...</Text>;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Left side: Nav */}
<SideNavBar
  onMenuSelect={handleMenuSelect}
  onBack={() => {
  if (selectedStaff) {
    setSelectedStaff(null); // go back to list
  } else {
    handleGoBack(); // go back in menu or home
  }
}}
  selectedMenu={selectedMenu}
/>


      {/* Right side: Header + Main Content */}
      <View style={styles.rightSection}>
        <Header />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {renderContent()}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#000",
  },
    container1: {
  flexDirection: "row",
  alignItems: "flex-start",
   flex: 1,
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
   centerColumn1: {
    flex: 0.75,
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
  rightSection: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#000",
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 10,
  },
  topRow: {
    flexDirection: "row",
    marginBottom: 10,
  },
  topBox: {
    flex: 0.25,
    backgroundColor: "#212020",
    borderRadius: 15,
    overflow: "hidden",
    marginRight: 10,
  },
  topBox1: {
    flex: 0.5,
    backgroundColor: "#212020",
    borderRadius: 15,
    overflow: "hidden",
    marginRight: 10,
  },
  topBox2: {
    flex: 0.25,
    backgroundColor: "#212020",
    borderRadius: 15,
    overflow: "hidden",
  },
  bottomRow: {
    flexDirection: "row",
    flex: 1,
    marginTop: 10,
  },
});

export default MainFrame;
