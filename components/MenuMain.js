import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Button,
  Dimensions
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import ListItem from "nb/components/ListItem";

const height = Dimensions.get("window").height;
const ITEM_HEIGHT_CALCULATION = height * 0.65; // 65% of screen height

const menuItems = [
  {
    text: "Me ajuda",
    icon: "help-circle"
  },
  {
    text: "Perfil",
    icon: "user"
  },
  {
    text: "Configurar NoConta",
    icon: "layers"
  },
  {
    text: "Configurar Cartão",
    icon: "credit-card"
  },
  {
    text: "Configurações do app",
    icon: "smartphone"
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
        <Button onPress={() => {}} title="Sair da conta" color="#6D2177" />
      </View>
    </ScrollView>
  );
};

export default MenuMain;

const styles = StyleSheet.create({
  menuList: {
    marginBottom: 18,
    paddingTop: 30,
    paddingBottom: 30,
    height: ITEM_HEIGHT_CALCULATION
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
