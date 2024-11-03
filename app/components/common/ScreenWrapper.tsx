import { View, Text } from "react-native";
import React, { useMemo } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
interface props {
  children: React.ReactNode;
}
const ScreenWrapper: React.FC<props> = ({ children }) => {
  const { top } = useSafeAreaInsets();
  const paddingTop = useMemo(() => (top > 0 ? top + 5 : 30), []);
  return (
    <View className="flex-1" style={{ paddingTop }}>
      {children}
    </View>
  );
};

export default ScreenWrapper;
