import { useRoute } from '@react-navigation/native';
import { useCallback, useLayoutEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import ProfileOptions from '../../components/ProfileOptions';
import UserProfileHeaderButton from '../../components/UserProfileHeaderButton';

export default function Chat({ navigation }) {
    const route = useRoute()
    const chatRoom = route.params

    const [messages, setMessages] = useState([
        {
            _id: 0,
            text: 'New room created.',
            createdAt: new Date().getTime(),
            system: true
        },
        {
            _id: 1,
            text: 'Henlo!',
            createdAt: new Date().getTime(),
            user: {
                _id: 2,
                name: 'Test User'
            }
        }
    ]);

    const renderBubble = (props) => {
        return <Bubble
            {...props}
            wrapperStyle={{
                right: {
                    backgroundColor: '#A1CCE4'
                },
                left: {
                    backgroundColor: '#005A9C'
                }
            }}
            textStyle={{
                right: {
                    color: '#000'
                },
                left: {
                    color: '#fff'
                }
            }}
        />
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: `${ chatRoom.username }`, headerLeftContainerStyle: { marginTop: 20 },
            headerBackgroundContainerStyle: { height: 80 },
            headerRightContainerStyle: { marginTop: 20 },
            headerTitleContainerStyle: styles.headerStyle,
            headerStyle: { backgroundColor: '#A1CCE4' },
            headerTintColor: '#fff',
            headerRight: () => (<View style={styles.headerIcon}>
                <View style={styles.imageHeaderContainer}>
                    <UserProfileHeaderButton action={() => { navigation.navigate('Profile', chatRoom) }} image={chatRoom.hasOwnProperty('image') && Object.keys(chatRoom.image).length && chatRoom.image.url} />
                </View>
                <ProfileOptions custom={{ width: 8 }} />
            </View>)
        })

    }, [])


    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            renderBubble={renderBubble}
            showUserAvatar
            placeholder="Type your message here..."
            user={{
                _id: 1,
            }}
            alwaysShowSend
            textInputStyle={styles.input}
            minComposerHeight={50}
            minInputToolbarHeight={55}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerIcon: {
        flexDirection: 'row'
    },
    imageHeaderContainer: {
        marginRight: 8,
        marginLeft: 0
    },
    headerStyle: {
        textAlign: 'right',
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 60,
        paddingLeft: 30,
        marginTop: 20
    },
    input: {
        padding: 0,
    }
});