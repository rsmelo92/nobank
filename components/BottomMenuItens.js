import React from "react";
import {
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome
} from "@expo/vector-icons";

const BottomItems = [
  {
    text: "Indicar amigos",
    icon: <AntDesign name="adduser" size={22} color="#fff" />
  },
  {
    text: "Depositar",
    icon: <Entypo name="cw" size={22} color="#fff" />
  },
  {
    text: "Transferir",
    icon: <Entypo name="cycle" size={22} color="#fff" />
  },
  {
    text: "Pagar",
    icon: <AntDesign name="barcode" size={22} color="#fff" />
  },
  {
    text: "Ajustar limite",
    icon: <Entypo name="sound-mix" size={22} color="#fff" />
  },
  {
    text: "Bloquear cartão",
    icon: <AntDesign name="unlock" size={22} color="#fff" />
  },
  {
    text: "Cartão virtual",
    icon: (
      <MaterialCommunityIcons
        name="credit-card-settings"
        size={22}
        color="#fff"
      />
    )
  },
  {
    text: "Organizar atalhos",
    icon: <MaterialIcons name="format-indent-increase" size={22} color="#fff" />
  }
];

export default BottomItems;
