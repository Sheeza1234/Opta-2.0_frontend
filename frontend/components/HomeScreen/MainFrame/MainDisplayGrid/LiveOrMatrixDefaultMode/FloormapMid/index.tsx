import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { rooms } from "../FlooringMap/index";

type Props = {
  selectedTileId: string;
  onBack: () => void;
};

export default function FloorMap({ selectedTileId,onRoomSelect  }: Props & { onRoomSelect?: (tileId: string, id?: string, showDetail?: boolean) => void
 }) {
  const [showLabel, setShowLabel] = useState(true);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/FlooringMapMid.png")}
        style={styles.map}
        resizeMode="stretch"
      >
        {rooms.map((room) => (
          <TouchableOpacity
            key={room.id}
            style={{
              position: "absolute",
              top: `${room.topPct}%`,
              left: `${room.leftPct}%`,
              width: `${room.widthPct}%`,
              height: `${room.heightPct}%`,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => onRoomSelect?.(room.id, room.id,true)}
          >
            {room.id === selectedTileId && room.label && showLabel && (
              <View style={[styles.labelContainer, { backgroundColor: room.color || "rgba(0,0,0,0.6)" }]}>
                <Text style={styles.labelText}>{room.label}</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  map: { flex: 1, width: "100%", height: "100%" },
  labelContainer: { flexDirection: "row", alignItems: "center", paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },
  labelText: { color: "white", fontSize: 10, marginRight: 4 },
  closeText: { color: "white", fontSize: 12, fontWeight: "bold" },
  backButton: { position: "absolute", bottom: 20, left: 20, backgroundColor: "white", padding: 10, borderRadius: 8 },
  backButtonText: { fontWeight: "bold" },
});
