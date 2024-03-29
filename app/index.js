import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from "react-native";

import {COLORS, icons, images, SIZES} from '../constants'
import {Stack, useRouter} from "expo-router";
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from "../components";

const Home = () => {
    const router = useRouter()

    return (
        <SafeAreaView style={{ fles: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                    ),
                    headerTitle: 'Home'
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, padding: SIZES.medium}}>
                    <Welcome

                        />
                </View>

                <Popularjobs />
                <Nearbyjobs />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
