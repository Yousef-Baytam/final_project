import { StyleSheet, Text, View } from 'react-native';
import TargetIcon from '../assets/icons/TargetIcon';

export default function LocationInput({ text, color }) {

    return (
        <View style={styles.inputContainer}>
            <View style={[styles.indicator, { backgroundColor: color ?? '#000' }]}></View>
            <Text style={[styles.textContainer, { color: text != 'From' && text != 'To' ? '#000' : 'rgba(0,0,0,0.2)' }]}>{text}</Text>
            <TargetIcon />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    indicator: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginRight: 15,
    },
    textContainer: {
        width: '100%',
        padding: 5,
        paddingLeft: 10,
        borderRadius: 10,
        backgroundColor: '#EAEAEA',
    }
});