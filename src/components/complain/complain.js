import React from 'react';
import { Text, Dimensions, View, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

let deviceHeight = Dimensions.get('screen').height;

const Complain = ({ navigation, route }) => {

    // Note: Recieving required parameters...!
    let requiredParams = route.params.notificationParams;
    console.log(requiredParams, 'Parameters recieved!');

    return (
        <>
            <ImageBackground source={require('../../../assets/images/homebg.png')} style={styles.bgImg}>

                <View style={styles.container}>
                    <View style={styles.headerContainer}>
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
                        <Text style={styles.heading}>Your Complain Number</Text>
                        <Text style={styles.complainNum}>{requiredParams}</Text>
                        <Text style={styles.tyText}>Thanks for your complaint</Text>
                        <Text style={styles.responseText}>Our Technician team will contact you soon</Text>
                        <TouchableOpacity style={styles.btnContainer} onPress={() => navigation.navigate('Home')}>
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
        fontSize: 22
    },
    responseText: {
        fontFamily: 'NotoSans-Regular',
        fontSize: 15,
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

export default Complain;