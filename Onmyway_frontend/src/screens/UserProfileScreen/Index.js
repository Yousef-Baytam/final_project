import { StyleSheet, View, Text } from 'react-native';

export default function UserProfile({ navigation }) {

    return (
        <View style={styles.container}>
            <Text>PROFILE YAAAYY!!!</Text>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});