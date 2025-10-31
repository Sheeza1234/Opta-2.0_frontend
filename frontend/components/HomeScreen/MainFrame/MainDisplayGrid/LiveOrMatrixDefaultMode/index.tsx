import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FloorMap from "./FloormapMid/index";
import { TurnoverTile, TurnoverTile1, TurnoverTile2, TurnoverTile3, TurnoverTile4, TurnoverTile5, TurnoverTile6, TurnoverTile7, TurnoverTile8 } from "./TurnOverTiles";
type TileData = Record<string, string[]>;
type LiveORMatrixDefaultModeProps = {
  selectedTileId: string | null;
  setSelectedTileId: (staff: string | null) => void;
   onRoomSelect?: (tileId: string, staffId?: string) => void;
};

const LiveORMatrixDefaultMode:React.FC<LiveORMatrixDefaultModeProps> = ({selectedTileId, setSelectedTileId,onRoomSelect}) => {

  const handleClick = (tileId: string) => {
    setSelectedTileId(tileId);
    onRoomSelect?.(tileId);
  };

  return (
    <SafeAreaView style={styles.liveOrMatrixDefaultMode} edges={["left", "right"]}>
      {selectedTileId ? (
        <FloorMap selectedTileId={selectedTileId} onBack={() => setSelectedTileId(null)} onRoomSelect={onRoomSelect}/>
      ) : (
        <View style={styles.view}>
          <Text style={styles.liveOrMatrix}>Live OR Matrix</Text>
          <View style={styles.orTileGrid}>
            <TurnoverTile onPress={() => handleClick("1")} />
            <TurnoverTile1 onPress={() => handleClick("2")} />
            <TurnoverTile2 onPress={() => handleClick("3/4")} />
            <TurnoverTile3 onPress={() => handleClick("5")} />
            <TurnoverTile4 onPress={() => handleClick("6")} />
            <TurnoverTile5 onPress={() => handleClick("7")} />
            <TurnoverTile6 onPress={() => handleClick("8")} />
            <TurnoverTile7 onPress={() => handleClick("T1")} />
            <TurnoverTile8 onPress={() => handleClick("T2")} />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  liveOrMatrixDefaultMode: { backgroundColor: "#1a1a1a", flex: 1, paddingTop: 12, paddingBottom: 12 },
  orTileGrid: { flexDirection: "row", flexWrap: "wrap", marginTop: 20, paddingHorizontal: 5 },
  liveOrMatrix: { marginTop: 5, marginBottom: 5, fontSize: 14, fontWeight: "500", fontFamily: "Inter-Medium", color: "#6BFF9BBF", textAlign: "center" },
  view: { borderRadius: 20, overflow: "hidden", width: "100%", backgroundColor: "#1a1a1a", flex: 1, alignItems: "center" }
});

export default LiveORMatrixDefaultMode;
