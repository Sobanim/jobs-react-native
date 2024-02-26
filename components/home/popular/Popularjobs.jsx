import React, {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'

import styles from './popularjobs.style'
import {useRouter} from "expo-router";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import {COLORS, SIZES} from "../../../constants";
import {useFetch} from "../../../hook/useFetch";
import useFetchTest from "../../../hook/useFetchTest";

const Popularjobs = () => {
    const router = useRouter()

    const {data, isLoading, error, temp} = useFetchTest('search', {
        query: 'React developer',
        num_pages: 1
    })

    console.log('popularJobs', data)

    console.log(isLoading, 'isLoading')

    const [selectedJob, setSelectedJob] = useState()

    const handleCardPress = (item) => {
        router.push(`/job-details/${item.job_id}`);
        setSelectedJob(item.job_id);
    };

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
                    data={data}
                    renderItem={(item) => (
                        <PopularJobCard
                            key={item.job_id}
                            selectedJob={selectedJob}
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
