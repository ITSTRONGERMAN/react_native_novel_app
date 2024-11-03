import { View, Text, Animated } from "react-native";
import React, { useEffect, useMemo, useRef } from "react";
interface props {
  width: number; // 当前设备屏幕宽度
  pages: number; // 页数
  activeTab: number; // 激活的tabItem
  children?: React.ReactNode | undefined;
}

const SlideView = ({ width, pages, activeTab, children }: props) => {
  const translateX = useRef(new Animated.Value(0)).current;
  // 观察activeTab变化，完成页面切换
  useEffect(() => {
    Animated.timing(translateX, {
      toValue: -activeTab * (width / pages),
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [activeTab]);
  return (
    <Animated.View
      className="flex-row flex-1"
      style={{
        width,
        transform: [{ translateX }],
        backgroundColor: "#F6F6F6",
      }}
    >
      {children}
    </Animated.View>
  );
};

export default SlideView;
