import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import PhoneIcon from "@/assets/phone.svg";
import ChatIcon from "@/assets/smsg.svg";
import VideoIcon from "@/assets/video.svg";
import AudioWaveIcon from "@/assets/voice.svg";

const Texting: React.FC = () => {
  const messages = [
    { id: 1, text: "Hey John, do we need to get EVS into Rm 3 early?", sender: "me" },
    { id: 2, text: "No, we’re good.  They dropped a couple minutes, so we’re on track.", sender: "other" },
    { id: 3, text: "Got it.  Thanks.", sender: "me" },
    { id: 4, text: "Certainly!", sender: "other" },
  ];

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

        {/* Chat messages */}
        <View style={styles.chatContainer}>
          {messages.map((msg) => (
            <View
              key={msg.id}
              style={[
                styles.messageBubble,
                msg.sender === "me" ? styles.myMessage : styles.otherMessage,
              ]}
            >
              <Text style={styles.messageText}>{msg.text}</Text>
            </View>
          ))}
        </View>
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
    paddingHorizontal: 16,
    width: 260,
  },
  callerName: {
    fontSize: 14,
    color: "#6BFF9B",
    fontFamily: "Inter-Medium",
    fontWeight: "500",
    textAlign: "center",
  },
  callTimer: {
    fontSize: 11,
    color: "rgba(255,255,255,0.75)",
    fontFamily: "Inter-Regular",
    marginTop: 4,
    textAlign: "center",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 8,
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
  chatContainer: {
    marginTop: 20,
    gap: 8,
  },
  messageBubble: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    maxWidth: "80%",
  },
  myMessage: {
    backgroundColor: "#4a4a48",
    alignSelf: "flex-start",
  },
  otherMessage: {
    backgroundColor: "#4a4a48",
    alignSelf: "flex-end",
  },
  messageText: {
    color: "#fff",
    fontSize: 12,
    lineHeight: 16,
  },
});

export default Texting;
