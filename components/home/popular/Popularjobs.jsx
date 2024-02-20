import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'

import styles from './popularjobs.style'
import {useRouter} from "expo-router";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import {COLORS, SIZES} from "../../../constants";

const Popularjobs = () => {
    const router = useRouter()
    const isLoading = false
    const error = false

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.headerTitle}>Popular Jobs</Text>
          <TouchableOpacity>
              <Text style={styles.headerBtn}>Show All</Text>
          </TouchableOpacity>
      </View>

        <View style={styles.cardsContainer}>
            {isLoading ? (
                <ActivityIndicator size={"large"} color={COLORS.primary} />
            ) : error ? (
                <Text>Somthing error</Text>
            ) : (
                <FlatList
                    data={[1, 2, 3, 4, 5, 6]}
                    renderItem={(item) => (
                        <PopularJobCard
                            item={item}
                        />
                    )}
                    keyExtractor={item => item?.job_id}
                    contentContainerStyle={{columnGap: SIZES.medium}}
                    horizontal
                />
            )}
        </View>
    </View>
  )
}

export default Popularjobs
