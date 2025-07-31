import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";


const Header = ({ User }) => {
  return (
    <View style={styles.HeaderContainer}>
      <View style={styles.LogoContainer}>
        <Text style={styles.Logo}>Olá,</Text>
        <Text style={styles.User}>{User}</Text>
      </View>
      <View style={styles.IconContainer}>
        <Text style={styles.Icon}>🔔</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
      },
    
      HeaderContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 20,
        height: 80,
        width: "100%",
      },
    
      LogoContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      },
    
      Logo: {
        fontSize: 13,
        color: "#14223A",
      },
    
      User: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#14223A",
      },
    
      IconContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    
      Icon: {
        backgroundColor: "#fff",
        width: 30,
        height: 30,
        borderRadius: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
      },
});

export default Header;
