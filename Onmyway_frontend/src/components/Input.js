import { StyleSheet, Text, View, TextInput } from 'react-native';
import HiddenIcon from '../assets/icons/HiddenIcon';

export default function Input({ placeholder, value, setValue, keyboard, secureTextEntry }) {
    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder={placeholder}
                style={[styles.input, secureTextEntry && { width: '76%' }]}
                value={value}
                onChangeText={setValue}
                keyboardType={keyboard}
                secureTextEntry={secureTextEntry} />
            {secureTextEntry && <HiddenIcon />}
        </View >
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '85%',
        alignItems: 'flex-start',
        flexDirection: "row"
    },
    input: {
        width: '85%',
        borderBottomWidth: 0.2,
        borderColor: 'rgba(0,0,0, 0.7)',
        paddingBottom: 10,
        marginBottom: 25,
        paddingLeft: 10
    }
});

Input.defaultProps = {
    keyboard: 'default',
    secureTextEntry: false,
}