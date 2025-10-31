import PhoneIcon from "@/assets/phone.svg";
import ChatIcon from "@/assets/smsg.svg";
import VideoIcon from "@/assets/video.svg";
import AudioWaveIcon from "@/assets/voice.svg";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';


interface Message {
  id: string;
  initials: string;
  name: string;
  message: string;
  time: string;
  bgColor: string;
  textColor: string;
}

const messagesData: Message[] = [
  { id: "1", initials: "O", name: "Opta", message: "Delay trending in OR 15", time: "10:20", bgColor: "#5A5757", textColor: "#E0CF17" },
  { id: "2", initials: "OP", name: "Olivia Powers", message: "I’m running late, be there in 10", time: "10:21", bgColor: "#5A5757", textColor: "#fff" },
  { id: "3", initials: "O", name: "Opta", message: "Rerouted float nurse to 14", time: "10:21", bgColor: "#5A5757", textColor: "#fff" },
  { id: "4", initials: "JH", name: "Jason Hwa", message: "Need another tech in 7", time: "10:23", bgColor: "#5A5757", textColor: "#fff" },
  { id: "5", initials: "SC", name: "Sara Chan", message: "OK, will do", time: "10:24", bgColor: "#5A5757", textColor: "#fff" },
  { id: "6", initials: "OP", name: "Olivia Powers", message: "I’m running late, be there in 10", time: "10:21", bgColor: "#5A5757", textColor: "#fff" },
];

interface MessageItemProps extends Message {}

const MessageItem: React.FC<MessageItemProps> = ({ initials, name, message, time, bgColor, textColor }) => (
  <View style={styles.messageRow}>
    <View style={[styles.circle, { backgroundColor: bgColor }]}>
      <Text style={[styles.circleText, { color: textColor }]}>{initials}</Text>
    </View>
    <View style={styles.messageContent}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
    <Text style={styles.time}>{time}</Text>
  </View>
);

const MessagesTileDisplay: React.FC = () => {
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <View style={styles.tile}>
        <Text style={styles.header}>Messages</Text>
        <ScrollView contentContainerStyle={{ paddingVertical: 10 }}>
          {messagesData.map((msg) => (
            <MessageItem key={msg.id} {...msg} />
          ))}
        </ScrollView>
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
    paddingLeft:17,
    paddingBottom:12,
    paddingRight:41
  },
  tile: {
    backgroundColor: "#2d2d2c",
    borderRadius: 15,
    width: 260,
    paddingHorizontal: 10,
    paddingTop: 10,
    // paddingBottom: 5,
  },
  header: {
    fontSize: 14,
    fontWeight: "500",
    color: "#6bff9b",
    alignSelf: "center",
    marginBottom: 8,
  },
  messageRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  circleText: {
    fontWeight: "700",
    fontSize: 10,
  },
  messageContent: {
    flex: 1,
  },
  name: {
    fontSize: 11,
    fontWeight: "600",
    color: "rgba(255, 255, 255, 0.75)",
  },
  message: {
    fontSize: 11,
    color: "rgba(255, 255, 255, 0.75)",
  },
  time: {
    fontSize: 11,
    fontWeight: "600",
    color: "rgba(255, 255, 255, 0.75)",
    marginLeft: 8,
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
});

export default MessagesTileDisplay;
