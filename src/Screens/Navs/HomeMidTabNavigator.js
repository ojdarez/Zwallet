import React from "react";

import Matches from '../HomeHeaderTabs/Matches';
import Featured from '../HomeHeaderTabs/Featured';
import Popular from '../HomeHeaderTabs/Popular';
import Views from '../HomeHeaderTabs/Views';
import Header from "../Components/HeaderTab";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";

const HomeMidTabNavigator = createMaterialTopTabNavigator({
        Matches: {
            screen: Matches
        },
        Featured: {
            screen: Featured
        },
        Popular: {
            screen: Popular
        },
        Views: {
            screen: Views
        }
    },
    {
        tabBarComponent: Header,
        tabBarOptions: {
            activeTintColor: "#1BA1F3",
            inactiveTintColor: "#000"
        },
        initialRouteName: "Matches"
    }
);

const HomeTabNav = createAppContainer(HomeMidTabNavigator);

export default HomeTabNav;
