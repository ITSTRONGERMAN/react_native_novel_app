import { SafeAreaView, Dimensions,View } from "react-native";
import Top from "../components/Home/Top";
import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SlideView from "../components/common/SlideView";
import Novel from "../components/Home/Novel";
import Comic from "../components/Home/Comic";
import WallPaper from "../components/Home/WallPaper";

// 当前设备屏幕宽度
const winWidth = Dimensions.get("window").width;
// 顶部tab栏选项卡
const tabBarList = ["小说", "漫画", "壁纸"];

// Home首页
const index = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <View className="flex-1">
      {/* 顶部搜索区域 */}
      <Top
        tabBarList={tabBarList}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {/* 滑动tab区 */}
      <SlideView
        width={winWidth * tabBarList.length}
        pages={tabBarList.length}
        activeTab={activeTab}
      >
        {/* 小说页面 */}
        <Novel />
        {/* 漫画页面 */}
        <Comic />
        {/* 壁纸页面 */}
        <WallPaper />
      </SlideView>
    </View>
  );
};

export default index;
