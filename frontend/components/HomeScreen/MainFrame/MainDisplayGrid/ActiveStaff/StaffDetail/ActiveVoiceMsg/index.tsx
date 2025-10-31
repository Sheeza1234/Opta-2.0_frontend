import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import PhoneIcon from "@/assets/phone.svg";
import ChatIcon from "@/assets/smsg.svg";
import SpeakerIcon from "@/assets/speaker.svg"; // For Push to Talk icon
import VideoIcon from "@/assets/video.svg";
import AudioWaveIcon from "@/assets/voice.svg";

const ActiveVoiceMsg: React.FC = () => {
  return (
    <SafeAreaView style={styles.container} edges={["left", "right", "bottom"]}>
      <View style={styles.card}>
        {/* Caller name */}
        <Text style={styles.callerName}>Sara Adams, MD</Text>
        <Text style={styles.callTimer}>00:02</Text>

        {/* Top icon row */}
        <View style={styles.topRow}>
          <TouchableOpacity style={styles.iconButton}>
            <PhoneIcon width={16} height={16} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <ChatIcon width={16} height={16} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <AudioWaveIcon width={16} height={16} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <VideoIcon width={16} height={16} />
          </TouchableOpacity>
        </View>

        {/* Push to Talk button */}
        <TouchableOpacity style={styles.pushToTalk}>
          <SpeakerIcon width={40} height={40} />
        </TouchableOpacity>
        <Text style={styles.pushLabel}>Push to Talk</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2d2d2c",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#2d2d2c",
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 24,
    width: 240,
    alignItems: "center",
  },
  callerName: {
    fontSize: 14,
    color: "#6BFF9B",
    fontFamily: "Inter-Medium",
    fontWeight: "500",
  },
  callTimer: {
    fontSize: 11,
    color: "rgba(255,255,255,0.75)",
    fontFamily: "Inter-Regular",
    marginTop: 4,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "100%",
  },
  iconButton: {
    backgroundColor: "#33332f",
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  pushToTalk: {
    backgroundColor: "#6BFF9B",
    width: 70,
    height: 70,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 38,
  },
  pushLabel: {
    fontSize: 12,
    color: "rgba(255,255,255,0.75)",
    fontFamily: "Inter-Medium",
    marginTop: 8,
  },
});

export default ActiveVoiceMsg;
