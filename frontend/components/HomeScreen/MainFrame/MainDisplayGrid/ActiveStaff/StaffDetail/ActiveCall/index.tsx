import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import MuteIcon from "@/assets/Frame.svg";
import PhoneIcon from "@/assets/phone.svg";
import ChatIcon from "@/assets/smsg.svg"; // Example top row icon
import SpeakerIcon from "@/assets/speaker.svg";
import VideoIcon from "@/assets/video.svg";
import AudioWaveIcon from "@/assets/voice.svg";

const ActiveCall: React.FC<{ onEnd: () => void }> = ({ onEnd }) => {
  const handleEndCall = () => {
    onEnd(); // go back to StaffDetail main view
  };
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <View style={styles.card}>
        {/* Caller name */}
        <Text style={styles.callerName}>Sara Adams, MD</Text>
        <Text style={styles.callTimer}>00:02</Text>

        {/* Top button row */}
        <View style={styles.topRow}>
          <TouchableOpacity style={styles.iconButton}>
            <PhoneIcon width={20} height={20} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <ChatIcon width={20} height={20} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <AudioWaveIcon width={20} height={20} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <VideoIcon width={20} height={20} />
          </TouchableOpacity>
        </View>
<View></View>
        {/* Bottom button row */}
        <View style={styles.bottomRow}>
          <View style={styles.bottomItem}>
            <TouchableOpacity style={styles.bottomButton}>
              <SpeakerIcon width={24} height={24} />
            </TouchableOpacity>
            <Text style={styles.bottomLabel}>Speaker</Text>
          </View>

          <View style={styles.bottomItem}>
            <TouchableOpacity style={[styles.bottomButton, styles.endButton]}  onPress={handleEndCall}>
              <PhoneIcon width={24} height={24} />
            </TouchableOpacity>
            <Text style={styles.bottomLabel}>End</Text>
          </View>

          <View style={styles.bottomItem}>
            <TouchableOpacity style={styles.bottomButton}>
              <MuteIcon width={24} height={24} />
            </TouchableOpacity>
            <Text style={styles.bottomLabel}>Mute</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2d2d2c",
    // justifyContent: "",
    alignItems: "center",
    paddingBottom:0
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
    marginTop: 10,
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
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 100,
    width: "100%",
  },
  bottomItem: {
    alignItems: "center",
  },
  bottomButton: {
    backgroundColor: "#33332f",
    width: 50,
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  endButton: {
    backgroundColor: "#ab2d2d",
  },
  bottomLabel: {
    // marginTop: 6,
    fontSize: 11,
    color: "rgba(255,255,255,0.75)",
    fontFamily: "Inter-Medium",
  },
});

export default ActiveCall;
