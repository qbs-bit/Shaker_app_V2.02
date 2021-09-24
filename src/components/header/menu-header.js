import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity
}
    from "react-native";
import IconsFromIonicons from "react-native-vector-icons/Ionicons";

const HomeHeader = (props) => {
        

    // Note: Function to open drawer...!
    const drawerOpening = () => {
        props.navParams.openDrawer();
        console.log('Drawer opened successfully!!!')
        // console.log(navParams)
    }

    return (
        <React.Fragment>
            <View style={styles.headerContainer}>
                <TouchableOpacity
                onPress={drawerOpening}
                >
                    <IconsFromIonicons name="menu" style={styles.iconStyles} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <IconsFromIonicons name="notifications" style={styles.iconStyles} />
                </TouchableOpacity>
            </View>
        </React.Fragment>
    );
}

// Note: Handeling styling here...!
const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#299371',
        // backgroundColor: 'yellow',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 8
    },

    iconStyles: {
        fontSize: 22,
        color: "white",
        paddingVertical: 5
    }
});

export default HomeHeader;