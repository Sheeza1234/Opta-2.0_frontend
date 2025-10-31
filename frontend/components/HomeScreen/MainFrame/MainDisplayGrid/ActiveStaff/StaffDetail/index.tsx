import * as React from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Import your SVG icons
import VideoIcon from "@/assets/camera.svg";
import CallIcon from "@/assets/phone.svg";
import Smsg from "@/assets/smsg.svg";
import FileIcon from "@/assets/voice.svg";
import ActiveCall from "./ActiveCall";
import ActiveVoiceMsg from "./ActiveVoiceMsg";
import InActiveVoiceMsg from "./InActiveVoiceMsg";
import Texting from "./Texting";
type StaffDetailProps = {
  name: string; // selected staff name
  onBack: () => void; // function to go back
};


const StaffDetail: React.FC<StaffDetailProps> = ({ name }) => {
   const [activeScreen, setActiveScreen] = React.useState<string | null>(null);

  // Render the active screen if set
  if (activeScreen === "call") 
  return <ActiveCall onEnd={() => setActiveScreen(null)} />;

  if (activeScreen === "voice") return <InActiveVoiceMsg />;
  if (activeScreen === "message") return <Texting/>;
  if (activeScreen === "video") return <ActiveVoiceMsg />;
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <View style={styles.card}>
        {/* Header */}
        <Text style={styles.name}>{name || "Sara Adams,MD"}</Text>
        <Text style={styles.updated}>Updated 1 min ago</Text>

        {/* Icons */}
         <View style={styles.iconRow}>
          <TouchableOpacity onPress={() => setActiveScreen("call")}>
          <ImageBackground source={require("@/assets/Rectangle.png")} style={styles.iconRect} resizeMode="stretch">
            <CallIcon width={18} height={18} />
          </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => setActiveScreen("voice")}>
          <ImageBackground source={require("@/assets/Rectangle.png")} style={styles.iconRect} resizeMode="stretch">
            <FileIcon width={18} height={18} />
          </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveScreen("message")}>
          <ImageBackground source={require("@/assets/Rectangle.png")} style={styles.iconRect} resizeMode="stretch">
            <Smsg width={18} height={18} />
          </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveScreen("video")}>
          <ImageBackground source={require("@/assets/Rectangle.png")} style={styles.iconRect} resizeMode="stretch">
            <VideoIcon width={18} height={18} />
          </ImageBackground>
          </TouchableOpacity>
        </View>

        {/* Info Rows */}
        <View style={styles.infoRow}>
          <Text style={styles.label}>Role</Text>
          <Text style={styles.value}>Surgeon</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Current Location</Text>
          <Text style={styles.value}>OR 02</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Time in Location</Text>
          <Text style={styles.value}>01:32</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Assigned Cases Today</Text>
          <Text style={styles.value}>OR 02 - 09:30</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Current Status</Text>
          <Text style={[styles.value, styles.statusWarning]}>Est +9 mins</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Contributing Factors</Text>
          <Text style={[styles.value, styles.multiLine]}>
            Procedure not yet in closure phase
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2d2d2c",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop:12
  },
  card: {
    backgroundColor: "#2d2d2c",
    borderRadius: 12,
    paddingRight:26,
    paddingLeft:18,
    width: 300,
  },
  name: {
    fontSize: 14,
    fontWeight: "500",
    color: "#6BFF9B",
    textAlign: "center",
  },
  updated: {
    fontSize: 11,
    color: "rgba(255,255,255,0.75)",
    textAlign: "center",
    marginBottom: 8,
    marginTop:6
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 14,
    gap:10
  },
  iconRect: {
    width: 40, // match your rectangle image size
    height: 40,
    alignItems: "center",
    overflow: "hidden", 
    justifyContent: "center",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  label: {
    fontSize: 11,
    fontWeight: "600",
    color: "rgba(255,255,255,0.75)",
  },
  value: {
    fontSize: 11,
    color: "rgba(255,255,255,0.75)",
    textAlign: "right",
    maxWidth: 110,
  },
  statusWarning: {
    color: "#ab2d2d",
    fontWeight: "600",
  },
  multiLine: {
    textAlign: "right",
    flexShrink: 1,
  },
});

export default StaffDetail;
