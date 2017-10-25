import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export interface IDataProps {
  name: string;
  enthusiasmLevel?: number;
}

const Hello = (props: IDataProps): JSX.Element => {
  if (props.enthusiasmLevel && props.enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <View style={styles.root}>
        <Text style={styles.greeting}>
        Hello {name + getExclamationMarks(props.enthusiasmLevel)}
        </Text>
    </View>
  );
};

// styles
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttons: {
        flexDirection: 'row',
        minHeight: 70,
        alignItems: 'stretch',
        alignSelf: 'center',
        borderWidth: 1,
    },
    button: {
        flex: 1,
        paddingVertical: 0,
    },
    greeting: {
        color: '#999',
        fontWeight: 'bold',
    },
});

// helpers
function getExclamationMarks(numChars?: number) {
  if (typeof numChars !== 'undefined') {
    return Array(numChars + 1).join('!');
  }
  return null;
}

export default Hello;
