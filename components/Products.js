import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";


const Products = ({ url, item, preco, tempo, frete }) => {
  return (
    <View style={styles.Item}>
                 <Image
                   style={styles.promocaoImg}
                   source={{
                     uri: {url},
                   }}
                 />
                 <View style={styles.promocaoInfo}>
                   <Text style={styles.promocaoTitulo}>{item}</Text>
                   <Text style={styles.promocaoPreco}>
                     {preco}
                   </Text>
                   <Text style={styles.promocaoEntrega}>
                     {tempo} • <Text style={styles.entregaGratis}> {frete}</Text>
                   </Text>
                 </View>
               </View>  
  );
};

const styles = StyleSheet.create({
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

export default Products;

