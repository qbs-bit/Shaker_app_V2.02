// Note: DrawerNavigationHandler component...!

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
const { Navigator, Screen } = Drawer;
import { CustomDrawer } from './custom-drawer';

// Note: Authenticated components...!
import HomeScreen from '../home/home-screen';
import RaiseComplaintForm from '../complain-form/raise-complaint-form';
import RequestInstallationForm from '../complain-form/request-installation-form';
import RequestServiceForm from '../complain-form/request-service-form';
import SalesInquiryForm from '../complain-form/sales-inquiry-form';
import ChangePassword from '../change-password/change-password';
import EditProfile from '../edit-profile/edit-profile';
import PendingCases from '../complaint-cases/pending-cases';
import CompletedCases from '../complaint-cases/completed-cases';
import Complain from '../complain/complain';
import SalesNum from '../complain/sales-num';
import ServiceNum from '../complain/service-num';
import InstallNum from '../complain/installation-num';

const DrawerNavigationHandler = () => {
    return (
        <React.Fragment>
            <Navigator
                drawerContent={props => <CustomDrawer {...props} />}
                drawerStyle={{
                    backgroundColor: "blue",
                }}
                screenOptions={{ headerShown: false }}
            >
                <Screen name='Home' component={HomeScreen} />
                <Screen name='Edit Profile' component={EditProfile} />
                <Screen name='Change Password' component={ChangePassword} />
                <Screen name='Raise Complaint' component={RaiseComplaintForm} />
                <Screen name='Request Installation' component={RequestInstallationForm} />
                <Screen name='Request Service' component={RequestServiceForm} />
                <Screen name='Sales Inquiry' component={SalesInquiryForm} />
                <Screen name='Pending Cases' component={PendingCases} />
                <Screen name='Completed Cases' component={CompletedCases} />
                <Screen name='Complain' component={Complain} />
                <Screen name='Sales Num' component={SalesNum} />
                <Screen name='Service Num' component={ServiceNum} />
                <Screen name='Install Num' component={InstallNum} />
            </Navigator>
        </React.Fragment>
    );
}

export default DrawerNavigationHandler;