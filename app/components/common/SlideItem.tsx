import { View, Text, ScrollView } from "react-native";
import React from "react";
interface props {
  children: React.ReactNode | undefined;
}
const SlideItem = ({ children }: props) => {
  return (
    <ScrollView
      alwaysBounceVertical={false}
      bounces={false}
      className="flex-1 p-3 pb-0"
    >
      {children}
    </ScrollView>
  );
};

export default SlideItem;
