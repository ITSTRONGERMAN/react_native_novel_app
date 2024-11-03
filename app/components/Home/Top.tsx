import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Animated,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useRef } from "react";
interface props {
  activeTab: number;
  setActiveTab: (n: number) => void;
  tabBarList: string[];
}

const Top = ({ activeTab, setActiveTab, tabBarList }: props) => {
  // 创建每个标签的缩放动画值
  const scaleAnimation = useRef(
    tabBarList.map((_, index) => new Animated.Value(index == 0 ? 1.2 : 1))
  ).current;

  // 标签点击事件
  const handleTabPress = (index: number) => {
    // 动画缩放之前选中的标签回到正常大小
    Animated.timing(scaleAnimation[activeTab], {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();

    // 更新选中的索引
    setActiveTab(index);
    // 动画缩放新选中的标签
    Animated.timing(scaleAnimation[index], {
      toValue: 1.2, // 放大比例
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <LinearGradient
      colors={["rgba(250, 223, 209,0.3)", "rgba(205, 254, 209,0.3)"]}
      start={{ x: 0, y: 0 }} // 渐变开始点
      end={{ x: 1, y: 0 }} // 渐变结束点
      className="p-4"
      style={{
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <View>
        {/* 搜索框 */}
        <View className="p-3 pl-5 flex-row gap-x-2 w-full bg-white rounded-3xl items-center">
          <Ionicons name="search" color={"#94a3b8"} size={14} />
          <Text className="text-base text-slate-400">请输入关键字</Text>
        </View>
        <View className="mt-3">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            bounces={false}
          >
            {tabBarList.map((item, index) => (
              <TouchableOpacity
                onPress={() => handleTabPress(index)}
                key={index}
                activeOpacity={0.7}
                className="mr-4 pl-2 pr-2"
              >
                <Animated.Text
                  style={{
                    fontSize: 18,
                    transform: [{ scale: scaleAnimation[index] }],
                    color: activeTab === index ? "#000" : "#999896",
                  }}
                >
                  {item}
                </Animated.Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Top;
