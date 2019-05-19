import React from "react";
import { StyleSheet, View, Text, ScrollView, Button } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import ListItem from "nb/components/ListItem";

const menuItems = [
  {
    text: "Me ajuda",
    icon: <Feather name="help-circle" size={20} color="#fff" />
  },
  { text: "Perfil", icon: <Feather name="user" size={20} color="#fff" /> },
  {
    text: "Configurar NoConta",
    icon: <Feather name="dollar-sign" size={18} color="#fff" />
  },
  {
    text: "Configurar Cartão",
    icon: <Feather name="credit-card" size={18} color="#fff" />
  },
  {
    text: "Configurações do app",
    icon: <Feather name="smartphone" size={20} color="#fff" />
  }
];

const MenuMain = () => {
  return (
    <ScrollView style={styles.menuList} showsVerticalScrollIndicator={false}>
      <View style={styles.qrCodeWrapper}>
        <QRCode
          size={90}
          color="#6D2177"
          backgroundColor="transparent"
          value="https://rsmelo92.github.io/portfolio"
        />
      </View>
      <View style={styles.textsWrapper}>
        <Text style={styles.bankText}>
          Banco{" "}
          <Text style={{ fontWeight: "bold" }}>260 - No Pagamentos S.A.</Text>
        </Text>
        <Text style={styles.bankText}>
          Agência <Text style={{ fontWeight: "bold" }}>0001</Text>
        </Text>
        <Text style={styles.bankText}>
          Conta <Text style={{ fontWeight: "bold" }}>6687657-5</Text>
        </Text>
      </View>
      <View style={styles.menuList}>
        {menuItems.map(({ text, icon }) => (
          <ListItem key={`${text}_key`} icon={icon} text={text} />
        ))}
        <Button onPress={() => {}} title="Sair da conta" color="#841584" />
      </View>
    </ScrollView>
  );
};

export default MenuMain;

const styles = StyleSheet.create({
  menuList: {
    marginBottom: 18,
    paddingTop: 30,
    paddingBottom: 30
  },
  qrCodeWrapper: {
    backgroundColor: "#ffffff",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: 105,
    height: 105
  },
  textsWrapper: {
    marginTop: 10,
    alignItems: "center"
  },
  bankText: {
    color: "#ffffff",
    marginBottom: 4
  },
  menuItem: {
    flexDirection: "row"
  },
  menuText: {
    color: "#ffffff"
  }
});
