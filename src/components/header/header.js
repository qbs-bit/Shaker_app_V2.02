import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Header = (props) => {
  let recieveParams = props.navParams;
  console.log(recieveParams);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => recieveParams.goBack()}
          >
            <Icon
              name="arrow-left"
              size={20}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon 
            name="bell" 
            size={20} 
            color="white" 
            />
          </TouchableOpacity>

        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#299371',
    borderRadius: 2,
    padding: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //textAlign: 'center',
    fontSize: 10,
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
export default Header;
