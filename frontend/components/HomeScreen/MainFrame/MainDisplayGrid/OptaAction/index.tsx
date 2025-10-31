import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ActionItem = {
  time: string;
  delay: string;
  or: string;
  notes: string[];
};

type ViewMode = "chronological" | "grouped";

const OptaActions: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>("chronological");

  const actionsData: ActionItem[] = [
    {
      time: "08:30",
      delay: "Predicted delay 9 mins",
      or: "OR 02",
      notes: [
        "Not yet in closure phase",
        "Dispatched EVS early",
        "Rerouted floating nurse",
        "Anesthesiologist notified early",
        "EMR orders preloaded",
        "Scrub nurse notified",
      ],
    },
    {
      time: "08:32",
      delay: "Predicted delay 4 mins",
      or: "OR 04",
      notes: [
        "Surgeon late previous case",
        "Prepped patient early",
        "Rerouted tech from O2 to 14",
        "Dispatched EVS early",
      ],
    },
    {
      time: "08:48",
      delay: "Predicted delay 14 mins",
      or: "OR 06",
      notes: [
        "Anesthesiologist late previous case",
        "Prepped patient early",
        "Rerouted tech from 14 to 06",
        "Dispatched EVS early",
        "Added EVS tech",
      ],
    },
    {
      time: "08:54",
      delay: "Predicted delay 3 mins",
      or: "OR 12",
      notes: [
        "Prepped patient early",
        "Rerouted tech from 14 to 06",
        "Dispatched EVS tech",
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={["left", "right", "bottom"]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Opta Actions</Text>
      </View>

      {/* Toggle Buttons */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            viewMode === "chronological" && styles.activeToggle,
          ]}
          onPress={() => setViewMode("chronological")}
        >
          <Text style={styles.toggleText}>Chronological</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.toggleButton,
            viewMode === "grouped" && styles.activeToggle,
          ]}
          onPress={() => setViewMode("grouped")}
        >
          <Text style={styles.toggleText}>Grouped by OR</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable List */}
      <ScrollView contentContainerStyle={styles.listContainer}>
        {actionsData.map((item, index) => (
          <View key={index} style={styles.actionCard}>
            <View style={styles.headerRow}>
              <Text style={styles.timeText}>{item.time}</Text>
              <Text style={styles.delayText}>{item.delay}</Text>
              <View style={styles.orBadge}>
                <Text style={styles.orText}>{item.or}</Text>
              </View>
            </View>
            {item.notes.map((note, idx) => (
              <Text
                key={idx}
                style={[
                  styles.noteText,
                  idx === 0 &&
                  (note.toLowerCase().includes("late") ||
                    note.toLowerCase().includes("not yet"))
                    ? styles.italicNote
                    : null,
                ]}
              >
                {note}
              </Text>
            ))}
              {index < actionsData.length - 1 && <View style={styles.separator} />}

            
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2d2d2c",
    paddingRight:23,
    paddingLeft:10,
     borderRadius: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'center',
    paddingVertical: 10,
    paddingTop:13
  },
  headerTitle: {
    color: "#6BFF9BBF",
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 10,
  },
  toggleContainer: {
  flexDirection: "row",
  alignSelf: "center",
  borderRadius: 3,
  overflow: "hidden",
  marginVertical: 10,
  justifyContent:'center',
  width: "100%",
  shadowColor: "rgba(0, 0, 0, 0.25)",
  shadowOffset: { width: 0, height: 4 },
  shadowRadius: 4,
  elevation: 4,
  shadowOpacity: 1,
  borderTopLeftRadius: 3,
  borderBottomLeftRadius: 3,
  height: 24,
},

  toggleButton: {
    backgroundColor: "#33332f",
    paddingVertical: 5,
    paddingHorizontal: 15,
    shadowColor: "rgba(0, 0, 0, 0.25)",


  },
  activeToggle: {
    backgroundColor: "#4c4a4a",
  },
  toggleText: {
    color: "rgba(255, 255, 255, 0.75)",
    fontSize: 11,
  },
  listContainer: {
    paddingBottom: 20,
  },
  actionCard: {
    paddingVertical: 10,

  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeText: {
    color: "rgba(255, 255, 255, 0.75)",
    fontSize: 11,
    width: 50,
  },
  delayText: {
    color: "rgba(255, 255, 255, 0.75)",
    fontSize: 11,
    fontWeight: "600",
    flex: 1,
  },
  orBadge: {
    backgroundColor: "#33332f",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 2,
  },
  orText: {
    color: "#fff",
    fontSize: 11,
  },
  noteText: {
    color: "rgba(255, 255, 255, 0.75)",
    fontSize: 11,
    marginLeft: 50,
    // marginBottom:10
  },
  italicNote: {
    fontStyle: "italic",
    fontWeight: "300",
    marginBottom:6

  },
  separator: {
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    marginTop: 5

  },
});

export default OptaActions;
