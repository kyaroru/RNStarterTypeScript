import * as React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';
import { connect } from 'react-redux';
import Hello from './Components/Common/Hello';
import { IRootState } from './Redux';
import { TokenStateActions } from './Redux/Persist/Token/TokenActions';
import { LoginStateActions } from './Redux/Auth/Login/LoginActions';
import { ILoginCredentials } from './Redux/Auth/Login/LoginTypes';
const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\n Shake or press menu button for dev menu`,
});

class App extends React.Component<IDataProps & IDispatchProps, any> {
  constructor() {
    super();
    this.onItemPress = this.onItemPress.bind(this);
    this.onLoginPress = this.onLoginPress.bind(this);
  }

  onItemPress() {
    this.props.setToken('fake-token');
  }

  onLoginPress() {
    this.props.login({ email: 'carol@mail.com', password: '123' });
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
        <Button title="Login" onPress={this.onLoginPress} />
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

interface IDataProps {
  token: string,
}

interface IDispatchProps {
  setToken: (token: string) => void,
  login: (credentials: ILoginCredentials) => void,
}

const mapStateToProps = (State: IRootState) => ({
  token: State.PERSIST.TokenState.token,
});

const mapDispatchToProps = (dispatch: (action: TokenStateActions | LoginStateActions) => void): IDispatchProps => {
  return {
    setToken: token => dispatch({ type: 'PERSIST/SET_TOKEN', token }),
    login: credentials => dispatch({ type: 'AUTH/LOGIN', credentials }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
