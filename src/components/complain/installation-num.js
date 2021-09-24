import { BackgroundColor } from 'chalk';
import React from 'react';
import { Text, Dimensions, View, StyleSheet, TouchableOpacity, Image, ImageBackground, TouchableHighlight } from 'react-native';
import Header from '../header/header';
import Icon from 'react-native-vector-icons/FontAwesome5';

let deviceHeight = Dimensions.get('screen').height;

const InstallNum = ({ navigation }) => {

    const toRequestInstalltion = () => {
        navigation.navigate('Request Installation')
    }


    const toHome = () => {
        navigation.navigate('Home')
    };

    return (
        <>
            <ImageBackground source={require('../../../assets/images/homebg.png')} style={styles.bgImg}>

                {/* <Header navParams={ navigation }/> */}

                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity
                            onPress={toRequestInstalltion}
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
                <View style={styles.mainContainer}>
                    <View style={styles.boxContainer}>
                        <Image style={styles.img} source={require('../../../assets/images/screwimg.png')} />
                        <Text style={styles.heading}>Your Installation Number</Text>
                        <Text style={styles.complainNum}>012345</Text>
                        <Text style={styles.tyText}>Thanks for your installation request</Text>
                        <Text style={styles.responseText}>Our Technician team will contact you soon</Text>
                        <TouchableOpacity style={styles.btnContainer} onPress={toHome}>
                            <Text style={styles.btnText}>Back to Home</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </>
    )

}

const styles = StyleSheet.create({

    bgImg: {
        flex: 1,
    },
    mainContainer: {
        // backgroundColor: 'yellow',
        height: deviceHeight,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '20%'
    },
    boxContainer: {
        borderColor: '#299371',
        borderRadius: 7,
        borderWidth: 1,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    img: {
        marginVertical: '10%',

    },
    heading: {
        fontFamily: 'NotoSans-Bold',
        fontSize: 22,
        marginVertical: 5,
    },
    complainNum: {
        fontFamily: 'NotoSans-Bold',
        fontSize: 33,
        color: '#299371',
        marginVertical: 15,

    },
    tyText: {
        fontSize: 'NotoSans-Regular',
        fontSize: 18
    },
    responseText: {
        fontFamily: 'NotoSans-Regular',
        fontSize: 15,
        marginVertical: 10,
        paddingVertical: 5,
    },
    btnContainer: {
        backgroundColor: '#299371',
        padding: 10,
        borderRadius: 7,
        width: '90%',
        alignItems: 'center',
        marginVertical: '10%'
    },
    btnText: {
        color: 'white',
        fontFamily: 'NotoSans-Regular'
    },
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

export default InstallNum;