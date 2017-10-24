import * as React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import Hello from './components/Hello';
import Actions from './actions';
import { RootState } from './reducers';
import { SignInActions } from './actions/auth/signIn';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\n Shake or press menu button for dev menu`,
});

interface IProps {
  setToken: (token: string) => any,
  token: string,
}

class App extends React.Component<IProps, {}> {
  constructor() {
    super();
    this.onItemPress = this.onItemPress.bind(this);
  }

  onItemPress() {
    this.props.setToken('fake-token');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native xDD
        </Text>
        <Text style={styles.instructions}>
          This is TypeScript Starter
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        {this.props.token !== '' && <TouchableOpacity style={{ padding: 10 }} onPress={this.onItemPress}>
          <Hello name="Carol" enthusiasmLevel={1} />
        </TouchableOpacity>}
        <Text>{this.props.token}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const mapStateToProps = (store: RootState) => ({
  token: Actions.getToken(store),
});

const mapDispatchToProps = {
  setToken: Actions.setToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
