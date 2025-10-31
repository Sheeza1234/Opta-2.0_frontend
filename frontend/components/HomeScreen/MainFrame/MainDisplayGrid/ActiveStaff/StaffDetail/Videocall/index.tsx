import React from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import MuteIcon from "@/assets/Frame.svg";
import EndCall from "@/assets/phone.svg";
import Speaker from "@/assets/speaker.svg";

const VideoCallWithNavButtons: React.FC = () => {
  return (
    <View style={styles.container}>
     
        {/* Top Bar */}
        <View style={styles.topBar}>
          <Text style={styles.name}>Sara Adams, MD</Text>
          <Text style={styles.timer}>00:02</Text>
        </View>
 <ImageBackground
        source={require("@/assets/recipient.png")} // replace with your uploaded PNG
        style={styles.image}
        resizeMode="cover"
      >
        {/* Bottom Control Bar */}
        <View style={styles.bottomBar}>
          <TouchableOpacity style={[styles.button, styles.darkButton]}>
            <Speaker width={18} height={18} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.endCallButton]}>
            <EndCall width={18} height={18} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.darkButton]}>
            <MuteIcon width={18} height={18} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.enlargeButton}>
            {/* <RectangleRed width={22} height={22} /> */}
            {/* <RectangleBlack/>/ */}
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default VideoCallWithNavButtons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D2D2C",
  },
  image: {
    flex: 1,
    // justifyContent: "space-between",
    // borderRadius: 15,
    overflow: "hidden",
  },
  topBar: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: "center",
  },
  name: {
    fontSize: 14,
    fontWeight: "500",
    color: "rgba(107, 255, 155, 0.85)",
  },
  timer: {
    fontSize: 11,
    color: "rgba(255,255,255,0.75)",
  },
  bottomBar: {
    position: "absolute",
    bottom: 10, // adjust to 0 if you want it flush with the bottom
    left: 10,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15, // space between buttons (RN 0.71+ supports gap)
    paddingVertical: 10,
  },

    button: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10, // spacing between buttons
  },
  darkButton: {
    backgroundColor: "#33332f",
  },
  endCallButton: {
    backgroundColor: "#ab2d2d",
  },
  enlargeButton: {
    padding: 6,
  },
});
