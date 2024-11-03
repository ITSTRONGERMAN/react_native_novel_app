import { View, Text, SafeAreaView, StatusBar, StyleSheet } from "react-native";

import React from "react";

const My = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 50 }}>个人中心</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight, // 处理状态栏高度
  },
});

export default My;
