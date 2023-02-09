import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCountries} from '../store/actions';
import {getCities} from '../store/actions';

export default function Home() {
  const dispatch = useDispatch();
  const {countries, cities} = useSelector(state => state.userReducer);
  const mergedData = countries.map(firstDatum => {
    const matchingSecondDatum = cities.find(
      secondDatum => firstDatum.id === secondDatum.id,
    );
    return {...firstDatum, ...matchingSecondDatum};
  });
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getCities());
  }, []);
  return (
    <SafeAreaView style={styles.parent_view}>
      <FlatList
        style={styles.list_view}
        keyExtractor={items => items.id}
        data={mergedData}
        renderItem={({item, index}) => {
          return (
            <View key={index} style={styles.parent_view}>
              <Text style={styles.country}>{item.country}</Text>
              <Text style={styles.cities}>{item.cirty}</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  parent_view: {
    flex: 1,
    backgroundColor: '#eee',
    marginBottom: 15,
  },
  country: {
    backgroundColor: '#fff',
    height: 50,
    width: '100%',
    color: '#000',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 25,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  cities: {
    color: 'coral',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
