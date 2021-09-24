import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { SimpleAccordion } from 'react-native-simple-accordion';
import ModalDropdown from 'react-native-modal-dropdown';

let name = ['empty'];


const Accordion = () => {
    return (
        <>
            
                <View style={styles.mainContainer}>
                    <View style={styles.subContainer}>
                    <SimpleAccordion viewInside={
                        <View>
                        <Text style={styles.text}>Brand</Text>
                        <ModalDropdown
                            defaultValue="Select Brand"
                            isFullWidth={true}
                            options={name}
                            dropdownTextStyle={{ color: "black", fontSize: 15 }}
                            textStyle={{
                                color: 'gray',
                                borderWidth: 1,
                                borderColor: '#299371',
                                width: '100%',
                                borderRadius: 5,
                                padding: 3,
                                fontSize: 15,
                                marginVertical: 5,
                            }}
                        />
                        <Text style={styles.text}>Category</Text>
                        <ModalDropdown
                            defaultValue="Select Category"
                            isFullWidth={true}
                            options={name}
                            dropdownTextStyle={{ color: "black", fontSize: 15 }}
                            textStyle={{
                                color: 'gray',
                                borderWidth: 1,
                                borderColor: '#299371',
                                width: '100%',
                                borderRadius: 5,
                                padding: 3,
                                fontSize: 15,
                                marginVertical: 5,
                            }}
                        />
                        <Text style={styles.text}>Serial No</Text>
                        <TextInput
                            placeholder='Enter Serial No.'
                            style={styles.input}>

                        </TextInput>
                        <Text style={styles.text}>Issue Type</Text>
                        <ModalDropdown
                            defaultValue="Select issue type"
                            isFullWidth={true}
                            options={name}
                            dropdownTextStyle={{ color: "black", fontSize: 15 }}
                            textStyle={{
                                color: 'gray',
                                borderWidth: 1,
                                borderColor: '#299371',
                                width: '100%',
                                borderRadius: 5,
                                padding: 3,
                                fontSize: 15,
                                marginVertical: 5,
                            }}
                        />
                        <Text style={styles.text}>Remarks*</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Type Remarks"
                            multiline
                            numberOfLines={4}
                        ></TextInput>
                        </View>
                        }
                        title={"Product Info"}
                        bannerStyle={{backgroundColor : '#299371'}}
                        titleStyle={{color: 'white'}}
                        arrowColor = "white"
                         />
                         
                    </View>
                    <View style={styles.subContainer}>
                        
                    <SimpleAccordion viewInside={
                        <View>
                        <Text style={styles.text}>City</Text>
                        <ModalDropdown
                            defaultValue="Select City"
                            isFullWidth={true}
                            options={name}
                            dropdownTextStyle={{ color: "black", fontSize: 15 }}
                            textStyle={{
                                color: 'gray',
                                borderWidth: 1,
                                borderColor: '#299371',
                                width: '100%',
                                borderRadius: 5,
                                padding: 3,
                                fontSize: 15,
                                marginVertical: 5,
                            }}
                        />
                        <Text style={styles.text}>District</Text>
                        <ModalDropdown
                            defaultValue="Select District"
                            isFullWidth={true}
                            options={name}
                            dropdownTextStyle={{ color: "black", fontSize: 15 }}
                            textStyle={{
                                color: 'gray',
                                borderWidth: 1,
                                borderColor: '#299371',
                                width: '100%',
                                borderRadius: 5,
                                padding: 3,
                                fontSize: 15,
                                marginVertical: 5,
                            }}
                        />
                        </View>
                        }
                        title={"Address Info"}
                        bannerStyle={{backgroundColor : '#299371'}}
                        titleStyle={{color: 'white'}}
                        arrowColor = "white"
                         />
                    </View>
                    <View style={styles.subContainer}>
                        
                    <SimpleAccordion viewInside={
                        <View>
                        <Text style={styles.text}>Booking Date</Text>
                        <ModalDropdown
                            defaultValue="Select Date"
                            isFullWidth={true}
                            options={name}
                            dropdownTextStyle={{ color: "black", fontSize: 15 }}
                            textStyle={{
                                color: 'gray',
                                borderWidth: 1,
                                borderColor: '#299371',
                                width: '100%',
                                borderRadius: 5,
                                padding: 3,
                                fontSize: 15,
                                marginVertical: 5,
                            }}
                        />
                        <Text style={styles.text}>Booking Time</Text>
                        <ModalDropdown
                            defaultValue="Select Time"
                            isFullWidth={true}
                            options={name}
                            dropdownTextStyle={{ color: "black", fontSize: 15 }}
                            textStyle={{
                                color: 'gray',
                                borderWidth: 1,
                                borderColor: '#299371',
                                width: '100%',
                                borderRadius: 5,
                                padding: 3,
                                fontSize: 15,
                                marginVertical: 5,
                            }}
                        />
                        <TouchableOpacity style={styles.btnContainer} >
                            <Text style={styles.btnText}>Check Availability</Text>
                        </TouchableOpacity>
                        </View>
                        }
                        title={"Scheduling"}
                        bannerStyle={{backgroundColor : '#299371'}}
                        titleStyle={{color: 'white'}}
                        arrowColor = "white"
                         />
                    </View>
                    <View style={styles.subContainer}>
                    <TouchableOpacity style={styles.btnContainer} >
                            <Text style={styles.btnText}>Done</Text>
                        </TouchableOpacity>
                        </View>
                </View>
                       

        </>
    )
}

const styles = StyleSheet.create({
    bgImg: {
        flex: 1,
    },
    mainContainer: {
        // height: deviceHeight,
        display: 'flex',
        alignItems: 'center',
        paddingVertical: 20
    },
    subContainer: {
        borderColor: '#299371',
        // borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
        width: '95%',
        // padding: 15,
        marginVertical: 10
    },
    label: {
        fontFamily: 'NotoSans-Bold',
        marginVertical: 10,

    },
    input: {
        borderColor: '#299371',
        borderWidth: 1,
        borderRadius: 7,
        marginVertical: 3,
    },
    text: {
        fontFamily: 'NoboSans-Regular',
        marginVertical: 4,
        color: '#299371'
    },
    userImg: {
        marginHorizontal: '36%'
    },
    iconStyle: {
        fontSize: 70,
        textAlign: 'center',
        color: '#299371',
    },
    dropdownContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#299371',
        padding: 10,
    },
    iconContainer: {
        color: '#299371',
        fontSize: 15,
    },
    btnContainer: {
        backgroundColor: '#299371',
        padding: 10,
        borderRadius: 7,
        justifyContent: 'center',
        width: '80%',
        marginLeft: 30,
        alignItems: 'center',
        marginVertical: '10%'
    },
    btnText: {
        color: 'white',
        fontFamily: 'NotoSans-Regular'
    },
    img: {
        marginVertical: '10%', 
        marginHorizontal: '40%'

    },

})

export default Accordion