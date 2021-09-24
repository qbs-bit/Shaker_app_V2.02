import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, StyleSheet, ImageBackground, Dimensions, Image, ActivityIndicator } from 'react-native';
import Header from '../header/header'
import Icon from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5';


const CompletedCases = ({ navigation }) => {


    const toHome = () => {
        navigation.navigate('Home')
    }

    const [isPending, setIsPending] = useState(true)

    let dataArr = [
        {
            imageComplaint: require('../../../assets/images/complaint.png'),
            complainNo: '00123',
            complainText: 'lorem ipsum',
            circleIcon: '',
            statusText: 'Pending',
        },
        {
            imageComplaint: require('../../../assets/images/complaint.png'),
            complainNo: '00124',
            complainText: 'lorem ipsum',
            circleIcon: '',
            statusText: 'Pending'
        },
        {
            imageComplaint: require('../../../assets/images/complaint.png'),
            complainNo: '00125',
            complainText: 'lorem ipsum',
            circleIcon: '',
            statusText: 'Pending'
        },
        {
            imageComplaint: require('../../../assets/images/complaint.png'),
            complainNo: '00126',
            complainText: 'lorem ipsum',
            circleIcon: '',
            statusText: 'Pending'
        },
        {
            imageComplaint: require('../../../assets/images/complaint.png'),
            complainNo: '00127',
            complainText: 'lorem ipsum',
            circleIcon: '',
            statusText: 'In Progress',
        },
        {
            imageComplaint: require('../../../assets/images/complaint.png'),
            complainNo: '00128',
            complainText: 'lorem ipsum',
            circleIcon: '',
            statusText: 'In Progress',
        },
        {
            imageComplaint: require('../../../assets/images/complaint.png'),
            complainNo: '00129',
            complainText: 'lorem ipsum',
            circleIcon: '',
            statusText: 'In Progress',
        },
    ]

    return (
        <>

            <ImageBackground source={require('../../../assets/images/homebg.png')} style={styles.bgImg} >


                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity
                            onPress={toHome}
                        >
                            <IconFontAwesome
                                name="arrow-left"
                                size={20}
                                color="white"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <IconFontAwesome
                                name="bell"
                                size={20}
                                color="white"
                            />
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={styles.mainContainer}>
                    <View style={styles.horizontalContainer}>
                        <TouchableOpacity style={styles.textContainer}>
                            <Text style={styles.textStyle}>Complaint</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.textContainer}>
                            <Text style={styles.textStyle}>Service Request</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.textContainer}>
                            <Text style={styles.textStyle}>Installation</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contentHead}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {
                                (dataArr && dataArr.length > 0)
                                    ?
                                    (
                                        dataArr.map((item, index) => {
                                            return (
                                                <View style={styles.verticalContainer} key={index}>
                                                    <View style={styles.subContainer}      >
                                                        <Image source={item.imageComplaint} />
                                                        <View style={styles.text}>
                                                            <Text style={styles.complainNo}>Complaint No: 
                                                            <Text style={{ color: '#299371' }}>{item.complainNo}
                                                            </Text>
                                                            </Text>
                                                            <Text style={{ fontSize: 12, fontFamily: 'NotoSans-Regular' }}>{item.complainText} </Text>
                                                        </View>
                                                    </View>
                                                    {/* <View style={styles.mainStatusContainer}>
                                                        <View style={styles.statusContainer}>
                                                            <Icon name='circle' style={styles.iconStyles} />
                                                            <Text style={{ color: 'white' }}>{item.statusText}</Text>
                                                        </View>
                                                        <TouchableOpacity>
                                                            <Icon name='dots-three-vertical' size={20} color='#299371' />
                                                        </TouchableOpacity>
                                                    </View> */}
                                                </View>
                                            )
                                        })

                                    )
                                    :
                                    (
                                        <View style={styles.loadingContainer}>
                                            <ActivityIndicator size="large" color="#299371" />
                                            <Text style={styles.notFoundText}> Loading... </Text>
                                        </View>
                                    )
                            }
                            <View>

                            </View>
                        </ScrollView>
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
        // backgroundColor: "yellow",
        flex: 1,
        // display: "flex",
        // justifyContent: "center",
        // marginHorizontal: 10,
        // marginVertical: 10,
    },
    headingContainer: {
        backgroundColor: '#299371',
        width: '95%',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginHorizontal: '1.5%',
        marginVertical: '2%',

    },
    mainHeading: {
        fontFamily: 'NotoSans-Regular',
        fontSize: 21,
        color: 'white',
    },
    subHeading: {
        fontFamily: 'NotoSans-Bold',
        fontSize: 21,
        color: 'white',
    },
    horizontalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginVertical: 10,
    },
    textContainer: {
        backgroundColor: '#299371',
        width: '33.5%',
        borderRadius: 10,
        paddingVertical: 10,
        // paddingHorizontal: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: '1.5%',
        marginVertical: '3%'
    },

    textStyle: {
        color: "white",
        fontSize: 14,
        fontFamily: 'NotoSans-Regular',
        textAlign: 'center'
    },
    singleText: {
        color: '#299371',
        fontFamily: 'NotoSans-Regular',
        fontSize: 18,
        marginHorizontal: '2%',
        marginVertical: '2%'
    },
    verticalContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#299371',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        marginVertical: 5
    },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        flexDirection: 'column',
        marginHorizontal: 5,
    },
    mainStatusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statusContainer: {
        display: 'flex',
        backgroundColor: '#299371',
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 3,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconStyles: {
        color: 'yellow',
        backgroundColor: 'yellow',
        borderRadius: 10,
        marginHorizontal: 2,
    },
    iconsStyles: {
        color: '#31ff00',
        backgroundColor: '#31ff00',
        borderRadius: 10,
        marginHorizontal: 2,
    },

    contentHead: {
        // backgroundColor: "lightblue",
        // flex: 1,
        paddingHorizontal: 5,
        paddingVertical: 5
    },
    ComplainText: {
        fontSize: 13,
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
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '50%'
    },
    notFoundText:{
        color:'#299371',
        fontSize: 20,
        fontFamily: 'NotoSans-Regular',
    }
})


export default CompletedCases;