import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

// Components
import Header from "../components/Header.js";
import Products from "../components/Products.js";

export default function MaisInfo() {
  const [search, setSearch] = useState("");
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../assets/backgroudBlue.png")}
        style={styles.backgroundImage}
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Header User="Dev Master" />

        <View style={styles.SearchContainer}>
          <View style={styles.LogoContainer}>
            <Image
              source={require("../assets/logo.png")}
              style={styles.logoImage}
            />
          </View>
          <View style={styles.TextWelcome}>Bem vindo de volta!</View>
          <View style={styles.TextPresentation}>
            Aqui você encontra as melhores ofertas de moda infantil do Brasil.
          </View>
          <View style={styles.Search}>
            <TextInput
              style={styles.searchInput}
              placeholder="Pesquisar produtos..."
              value={search}
              onChangeText={setSearch}
              placeholderTextColor="#9999"
            />
          </View>
        </View>

        <View style={styles.ProductsContainer}>
          <Text style={styles.title}>Produtos em Destaque</Text>
          
          <ScrollView
            style={styles.productWrapper}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.productWrapper}
          > 
            
        <Products 
            url="https://i.pinimg.com/736x/ce/30/5c/ce305c0738a69e8002707369e554bc8a.jpg"
            item="Vestido"
            preco="R$149"
            tempo="2 a 5 dias"
            frete="Grátis"
        />
        <Products 
            url="https://i.pinimg.com/1200x/d0/1a/7b/d01a7b5568e8f93144e9246f39c06adb.jpg"
            item="Vestido"
            preco="R$14-"
            tempo="2 a 5 dias"
            frete="Grátis"
        />
        <Products 
            url="https://i.pinimg.com/1200x/b7/45/0b/b7450bf109175f2ad6dd5300496d111e.jpg"
            item="Vestido"
            preco="R$1-"
            tempo="2 a 5 dias"
            frete="Grátis"
        />
      
          </ScrollView>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    zIndex: -1,
    opacity: 0.6,
  },

  logoImage: {
    width: 80,
    height: 80,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 0,
    fontFamily: "Roboto, sans-serif",
  },

  SearchContainer: {
    borderRadius: 10,
    margin: 20,
    marginTop: 100,
  },

  TextWelcome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#14223A",
    marginBottom: 10,
  },
  TextPresentation: {
    fontSize: 13,
    fontWeight: "500",
    color: "#14223A",
    marginBottom: 10,
  },

  Search: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
  },

  title: {
    fontSize: 20,
    padding: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#14223A",
  },

  productWrapper: {
    padding:10,
    paddingVertical: 5,
  },

  Item: {
    width: 350,
    height: 170,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    borderRadius: 10,
    marginRight: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

    promocaoImg: {
        width: 100,
        height: 150,
        borderRadius: 10,
    },

    promocaoInfo: {
        flex: 1,
        paddingLeft: 10,
        marginLeft: 10,
        justifyContent: "center",
    },

    promocaoTitulo: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#14223A",
    },

    promocaoPreco:{
        fontSize: 14,
        fontWeight: "500",
        marginTop: 10,
        color: "#14223A",
    },

    promocaoEntrega: {
        fontSize: 12,
        color: "#999",
        marginTop: 10,

    },
    
});
