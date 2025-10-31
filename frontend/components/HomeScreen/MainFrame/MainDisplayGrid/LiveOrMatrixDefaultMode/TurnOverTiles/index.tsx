import Calender from "@/assets/calender.svg";
import Surgery from "@/assets/surgery.svg";
import TurnOverProgress from '@/assets/turnover-in-progress.svg';
import TurnOverRed from '@/assets/Turnover.svg';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface TurnoverTileProps {
  onPress?: () => void;
}

export const TurnoverTile: React.FC<TurnoverTileProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.tile} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.tileHeader}>
        <Text style={styles.tileTextTop}>01</Text>
        <TurnOverProgress />
      </View>

      <Text style={styles.tileTextMiddle}>00:00</Text>
    </TouchableOpacity>
  );
};
export const TurnoverTile4: React.FC<TurnoverTileProps> = ({ onPress }) => {
  return (
     <TouchableOpacity style={styles.tile} onPress={onPress} activeOpacity={0.7}>
      	        <View style={styles.tileHeader}>
        <Text style={styles.tileTextTop}>01</Text>
		<TurnOverProgress/>

      </View>
      <Text style={styles.tileTextMiddle}>00:00</Text>
       <View style={styles.bottomIcons}>
        <MaterialCommunityIcons name="hospital-building" size={16} color="#6BFF9B" />
        <MaterialCommunityIcons
          name="account-group"
          size={16}
          color="#6BFF9B"
        />
        <MaterialCommunityIcons name="bed" size={16} color="#6BFF9B" />
                <MaterialCommunityIcons name="checkbox-outline" size={16} color="#6BFF9B" />
       
      </View>

    </TouchableOpacity>
  );
};


export const TurnoverTile1: React.FC<TurnoverTileProps> = ({ onPress }) => {
  return (
     <TouchableOpacity style={styles.tile} onPress={onPress} activeOpacity={0.7}>
      	        <View style={styles.tileHeader}>
        <Text style={styles.tileTextTop}>01</Text>
		<TurnOverProgress/>

      </View>
      <Text style={styles.tileTextMiddle}>00:00</Text>
       <View style={styles.bottomIcons}>
        <MaterialCommunityIcons name="hospital-building" size={16} color="#6BFF9B" />
        
      </View>

    </TouchableOpacity>
  );
};

export const TurnoverTile2: React.FC<TurnoverTileProps> = ({ onPress }) => {
  return (
     <TouchableOpacity style={styles.tile} onPress={onPress} activeOpacity={0.7}>
      	        <View style={styles.tileHeader}>
        <Text style={styles.tileTextTop}>01</Text>
		<TurnOverProgress/>

      </View>
      <Text style={styles.tileTextMiddle}>00:00</Text>
       <View style={styles.bottomIcons}>
        <MaterialCommunityIcons name="hospital-building" size={16} color="#6BFF9B" />
        <MaterialCommunityIcons
          name="account-group"
          size={16}
          color="#6BFF9B"
        />

      </View>

    </TouchableOpacity>
  );
};

export const TurnoverTile3: React.FC<TurnoverTileProps> = ({ onPress }) => {
  return (
     <TouchableOpacity style={styles.tile} onPress={onPress} activeOpacity={0.7}>
      	        <View style={styles.tileHeader}>
        <Text style={styles.tileTextTop}>01</Text>
		<TurnOverProgress/>

      </View>
      <Text style={styles.tileTextMiddle}>00:00</Text>
       <View style={styles.bottomIcons}>
        <MaterialCommunityIcons name="hospital-building" size={16} color="#6BFF9B" />
        <MaterialCommunityIcons
          name="account-group"
          size={16}
          color="#6BFF9B"
        />
        <MaterialCommunityIcons name="bed" size={16} color="#6BFF9B" />
      </View>

    </TouchableOpacity>
  );
};

export const TurnoverTile5: React.FC<TurnoverTileProps> = ({ onPress }) => {
  return (
     <TouchableOpacity style={styles.tile} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.tileHeader}>
        <Text style={styles.tileTextTop}>01</Text>
        <MaterialCommunityIcons name="alert" size={20} color="yellow" />
      </View>

      <View style={styles.middleContainer}>
        <Surgery width={40} height={40} />
      </View>

      <Text style={styles.delaytext}>00 Min Delay</Text>
    </TouchableOpacity>
  );
};

export const TurnoverTile6: React.FC<TurnoverTileProps> = ({ onPress }) => {
  return (
     <TouchableOpacity style={styles.tile} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.tileHeader}>
        <Text style={styles.tileTextTop}>01</Text>
      </View>

      <View style={styles.middleContainer}>
        <Surgery width={40} height={40} />
      </View>

     
    </TouchableOpacity>
  );
};

export const TurnoverTile7: React.FC<TurnoverTileProps> = ({ onPress }) => {
  return (
     <TouchableOpacity style={styles.tile} onPress={onPress} activeOpacity={0.7}>
      	        <View style={styles.tileHeader}>
        <Text style={styles.tileTextTop}>01</Text>
		<TurnOverRed/>

      </View>
      <Text style={styles.tileTextMiddleRed}>00:00</Text>
       <Text style={styles.delaytext}>00 Min Delay</Text>

    </TouchableOpacity>
  );
};

export const TurnoverTile8: React.FC<TurnoverTileProps> = ({ onPress }) => {
  return (
   <TouchableOpacity style={styles.tile} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.tileHeader}>
        <Text style={styles.tileTextTop}>01</Text>
      </View>

      <View style={styles.middleContainer}>
        <Calender width={40} height={40}  style={{marginBottom:4}}/>
      </View>

      <Text style={styles.delaytext}>Block Time</Text>
      <Text style={styles.delaytext}>Surgeon Name</Text>

     
    </TouchableOpacity>
  );
};

const styles=StyleSheet.create({
     bottomIcons: {
    flexDirection: "row",
    // justifyContent: "space-around",
    gap:6,
    left:3,
    width: "80%",
    justifyContent:'center',
    
  },
orTileGrid: {
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop:20,
  // justifyContent: "flex-start",
  paddingHorizontal: 5, // grid padding
},
tile: {
  width: "21%", // roughly 4 per row with spacing
  // height:"15%",
  aspectRatio: 1.12, // keeps the height proportional
  backgroundColor: "#333",
  borderRadius: 6,
  margin: "2%", // equal spacing all sides
  padding: 8,
  justifyContent: "space-between",
},

tileHeader: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
},
tileTextMiddle: {
  fontSize: 22,
  color: "rgba(255,255,255,0.75)",
  textAlign: "center",
  flex: 1,
  textAlignVertical: "center",
},
tileTextMiddleRed: {
  fontSize: 22,
  color: "#AB2D2D",
  textAlign: "center",
  flex: 1,
  textAlignVertical: "center",
},
middleContainer: {
  flex: 1, // takes up the available space between header and footer
  justifyContent: "center", // center vertically
  alignItems: "center", // center horizontally
},

delaytext: {
  textAlign: "center",
  color: "#FFFFFFBF",
  fontSize:11,
  fontWeight:'500',
  marginTop: 2,
  
},


  tileTextTop: {
    fontSize: 14,
    color: "#fff",
  },
})
