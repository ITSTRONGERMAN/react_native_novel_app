import { Tabs } from "expo-router";
import { Ionicons as Icon } from "@expo/vector-icons";
import { Text } from "react-native";
import props from "../../props/tabbar";
import React from "react";

const _layout = () => {
  const selectedColor = "#000";
  const defaultColor = "gray";
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#FAFAFA",
        },
      }}
    >
      {props.map((item, index) => {
        return (
          <Tabs.Screen
            key={index}
            name={item.name}
            options={{
              title: item.title,
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <Icon
                  name={item.icon}
                  size={20}
                  color={focused ? selectedColor : defaultColor}
                />
              ),
              tabBarLabel: ({ focused }) => (
                <Text style={{ color: focused ? selectedColor : defaultColor }}>
                  {item.title}
                </Text>
              ),
            }}
          />
        );
      })}
    </Tabs>
  );
};
export default _layout;
