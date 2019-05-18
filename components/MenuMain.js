import React from "react";
import { StyleSheet, View, Text } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import ListItem from "nb/components/ListItem";

const menuItems = [
  {
    text: "Me ajuda",
    icon: <Feather name="help-circle" size={22} color="#fff" />
  },
  { text: "Perfil", icon: "help-circle" },
  { text: "Configurar NoConta", icon: "help-circle" },
  { text: "Configurar Cartão", icon: "help-circle" },
  { text: "Configurações do app", icon: "help-circle" }
];

const MenuMain = () => {
  return (
    <React.Fragment>
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
          <ListItem icon={icon} text={text} />
        ))}
      </View>
    </React.Fragment>
  );
};

export default MenuMain;

const styles = StyleSheet.create({
  qrCodeWrapper: {
    backgroundColor: "#ffffff",
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
  menuList: {
    marginTop: 18
  },
  menuItem: {
    flexDirection: "row"
  },
  menuText: {
    color: "#ffffff"
  }
});
