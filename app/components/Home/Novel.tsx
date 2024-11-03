import { View, Text, Animated, Image } from "react-native";
import React, { useState } from "react";
import SlideItem from "../common/SlideItem";
const Novel = () => {
  const [activeRank, setActiveRank] = useState<number>(0);
  return (
    <SlideItem>
      <View className="p-5  bg-white rounded-lg">
        <View className="flex-row gap-4">
          <Animated.Text className="text-lg">推荐榜</Animated.Text>
          <Animated.Text className="text-lg">点击榜</Animated.Text>
          <Animated.Text className="text-lg">完本榜</Animated.Text>
        </View>
        <View className="flex-wrap  mt-5 h-">
          <View className="flex-row gap-3 w-2/5">
            <Image
              source={{
                uri: "https://n.sinaimg.cn/translate/737/w584h953/20191013/c629-ifvwftk4688104.jpg",
              }}
              className="w-16 h-24 rounded-lg"
              resizeMode="cover"
            />
            <View className="justify-between">
              <View className="flex-row gap-2">
                <Text style={{ color: "#D4AB63" }}>1</Text>
                <Text className="text-base">我都元婴了，你给我说开学了？</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SlideItem>
  );
};

export default Novel;
