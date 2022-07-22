import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Browse from '../screens/BrowseScreen'
import UserProfile from '../screens/UserProfileScreen'
import NewPost from '../screens/NewPostScreen'
import Map from '../screens/MapScreen'
import DrawerToggler from '../components/DrawerToggler';
import { CommonActions, DrawerActions } from '@react-navigation/native';
import UserProfileHeaderButton from '../components/UserProfileHeaderButton';
import BackArrow from '../components/BackArrow';
import Post from '../screens/PostScreen';
import Profile from '../screens/ProfileScreen';
import Notification from '../../NotificationRegister';
import { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';
import { storeNotificationToken } from '../controllers/userController';
import { useTheme } from '../context/ThemeContext';

export function MainStack() {
    const { user } = useUser()
    const { theme } = useTheme()
    const Stack = createStackNavigator();
    const [expoPushToken, setExpoPushToken] = useState(null)


    const handleSendNotificationToken = async () => {
        if (expoPushToken)
            await storeNotificationToken(user._id, expoPushToken)
    }

    // useEffect(() => {
    //     handleSendNotificationToken()
    // })

    return (
        <>
            <Stack.Navigator screenOptions={({ navigation }) => ({
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                headerRight: () => (
                    <DrawerToggler action={() => navigation.dispatch(DrawerActions.openDrawer())} />), headerMode: 'float', headerStyle: { elevation: 0 },
                headerTintColor: theme.text, headerStyle: { backgroundColor: theme.bg }
            })
            }>
                <Stack.Screen name="Browse" component={Browse} options={({ navigation }) => ({
                    headerTitle: 'Browse', headerTitleAlign: 'center', headerLeft: () => (
                        <UserProfileHeaderButton action={() => { navigation.navigate('UserProfile') }} />),

                })
                } />
                <Stack.Group screenOptions={({ navigation }) => ({
                    headerLeft: () => (
                        <BackArrow action={() => { navigation.dispatch(CommonActions.goBack()) }} />), headerTitleAlign: 'center'
                })}>
                    <Stack.Screen name="UserProfile" component={UserProfile} options={{
                        headerTitle: 'My Profile'
                    }} />
                    <Stack.Screen name="NewPost" component={NewPost} options={{
                        headerTitle: 'New Post'
                    }} />
                    <Stack.Screen name="Post" component={Post} />
                    <Stack.Screen name="Profile" component={Profile} options={({ route }) => ({ title: route.params.username })} />
                    <Stack.Screen name="Map" component={Map} />
                </Stack.Group>

            </Stack.Navigator>
            <Notification setExpoPushToken={setExpoPushToken} expoPushToken={expoPushToken} />
        </>
    );
}