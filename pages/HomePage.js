import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation();
    
    return (
        <ScrollView style={styles.container}>
            <ImageBackground
                source={require('../assets/logo.png')}
                style={styles.logo}
            >
            </ImageBackground>
            <ImageBackground
                source={require('../assets/criança.png')}
                style={styles.backgroundImage}
            ></ImageBackground>
                <View>
                    <Text style={styles.title}>Ninos Styles</Text>
                    <Text style={styles.subtitle}>A moda cresce com eles</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('About')}>
                        <Text style={styles.buttonText}>Confira nossos produtos </Text>
                    </TouchableOpacity>
                </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d7ebf4',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        padding: 20,
        marginTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#437f97',
        marginBottom: 10,
        textAlign: 'center',
        marginTop: 20,
    },
    subtitle: {
        fontSize: 16,
        color: '#629bb6',
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    buttonText: {
        width: 200,
        fontSize: 16,
        color: '#437f97',
        textAlign: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 15,
        padding: 8,
        marginTop: 440, 
        top: 20,
        marginHorizontal: 300,
        alignContent: 'center',
        
    },
    logo: {
        width: 90,
        height: 90,
        position: 'absolute', 
        left: 10, 
    },
});
