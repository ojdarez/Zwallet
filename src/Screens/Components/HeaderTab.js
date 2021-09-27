import React from "react";

import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

const Header = props => {
    const {
        navigationState,
        navigation,
        activeTintColor,
        inactiveTintColor
    } = props;
    const activeTabIndex = navigation.state.index;

    return (
        <View style={styles.containerHeader}>
            <View style={styles.tabContainer}>
                {navigationState.routes.map((route, index) => {
                const isRouteActive = index === activeTabIndex;
                const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

                return (
                    <TouchableWithoutFeedback
                    onPress={() => navigation.navigate(route.routeName)}
                    key={route.routeName}
                    >
                    <View>
                        <Text
                        style={{
                            marginHorizontal: 5,
                            fontSize: 17,
                            textTransform: "uppercase",
                            color: `${tintColor}`,
                            fontWeight: `${isRouteActive ? "bold" : "normal"}`
                        }}
                        >
                        {route.routeName}
                        </Text>
                    </View>
                    </TouchableWithoutFeedback>
                );
                })}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerHeader: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "blue",
        height: 30
    },
    tabContainer: {
        backgroundColor: "white",
        width: "100%",
        flexDirection: "row",
        justifyContent: 'flex-start',
        paddingHorizontal: 10,
        alignItems: "center",
        height: 40,
        borderRadius: 8,
        alignContent: 'space-between'
    }
});

export default Header;
