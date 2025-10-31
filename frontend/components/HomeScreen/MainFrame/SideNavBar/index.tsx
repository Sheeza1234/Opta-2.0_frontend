import ActiveStaff from '@/assets/ActiveStaff.svg';
import ActiveStaff1 from "@/assets/ActiveStaffIcon.svg";
import Alerts from '@/assets/alerts.svg';
import Alerts1 from '@/assets/Alerts1.svg';
import Backicon from "@/assets/BackIcon.svg";
import Homeicon from "@/assets/HomeIcon.svg";
import Homeicon1 from "@/assets/HomeIcon1.svg";
import Livemapicon from "@/assets/Livemapicon.svg";
import Livemapicon1 from "@/assets/LiveMapIcon1.svg";
import LogIcon from "@/assets/logIcon.svg";
import LogIcon1 from "@/assets/LogIcon1.svg";
import Messagesicon from "@/assets/MessagesIcon.svg";
import Messageicon1 from "@/assets/MessagesIcon1.svg";
import Optaactionsicon from "@/assets/OptaActionsIcon.svg";
import Optaactionsicon1 from "@/assets/OptaActionsIcon1.svg";
import Scenarioicon from '@/assets/Scenario.svg';
import Scenarioicon1 from '@/assets/ScenarioIcon1.svg';

import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface MenuItem {
  label: string;
  icon: React.ReactNode;
   activeIcon: React.ReactNode;
}

interface SideNavBarProps {
  onMenuSelect: (menu: string) => void;
  selectedMenu: string;
  onBack: () => void; // <-- add this
}


const SideNavBar: React.FC<SideNavBarProps> = ({ onMenuSelect, selectedMenu,onBack }) => {
  const menuItems: MenuItem[] = [
    { label: "Home", icon: <Homeicon style={styles.icon} />, activeIcon: <Homeicon1 style={styles.icon} /> },
    { label: "Live Map", icon: <Livemapicon style={styles.icon} />, activeIcon: <Livemapicon1 style={styles.icon} /> },
    { label: "Alerts", icon: <Alerts style={styles.icon} />, activeIcon: <Alerts1 style={styles.icon} /> },
    { label: "Messages", icon: <Messagesicon style={styles.icon} />, activeIcon: <Messageicon1 style={styles.icon} /> },
    { label: "Active Staff", icon: <ActiveStaff style={styles.icon} />, activeIcon: <ActiveStaff1 style={styles.icon} /> },
    { label: "Scenario Lab", icon: <Scenarioicon style={styles.icon} />, activeIcon: <Scenarioicon1 style={styles.icon} /> },
    { label: "Opta Actions", icon: <Optaactionsicon style={styles.icon} />, activeIcon: <Optaactionsicon1 style={styles.icon} /> },
    { label: "Log", icon: <LogIcon style={styles.icon} />, activeIcon: <LogIcon1 style={styles.icon} /> },
  ];

  return (
    <SafeAreaView style={styles.sideNavBar}>
<TouchableOpacity style={styles.backButton} onPress={onBack}>
  <Backicon style={{ width: 15, height: 15 }} />
</TouchableOpacity>


      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => {
          const isActive = selectedMenu === item.label;
          return (
            <TouchableOpacity
              key={index}
              style={[styles.menuItem, isActive && styles.activeMenuItem]}
              onPress={() => onMenuSelect(item.label)}
            >
              <View style={styles.iconLabelContainer}>
                {isActive ? item.activeIcon : item.icon}
                <Text style={[styles.menuLabel]}>
                  {item.label}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideNavBar: {
    width: 80,
    backgroundColor: "#2a2a2a",
    alignItems: "center",
  },
 activeMenuItem: {
 
},

activeLabel: {
  color: "white", // active text color
  fontWeight: "bold",
  fontSize: 13, // slightly bigger text
},

activeIcon: {
  width: 20, // bigger icon
  height: 20,
  marginBottom: 6,
},

  iconLabelContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  indicator: {
    width: 4,
    height: "100%",
    backgroundColor: "transparent",
    marginRight: 6,
    borderRadius: 2,
  },
  activeIndicator: {
    backgroundColor: "red",
  },
  
  backButton: {
    marginBottom: 40,
  },
  menuContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuItem: {
    alignItems: "center",
    marginVertical: 10,
  },
  icon: {
    width: 10,
    height: 10,
    marginBottom: 6,
  },
  menuLabel: {
    fontSize: 11,
    color: "rgba(255,255,255,0.75)",
    textAlign: "center",
  },
  placeholderIcon: {
    width: 30,
    height: 30,
    borderRadius: 5,
    marginBottom: 6,
  },
});

export default SideNavBar;
