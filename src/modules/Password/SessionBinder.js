import Expo from 'expo';
import Granter from '../JWT/Granter.js'
import { APP_URL } from 'react-native-dotenv';

/*
 * #TODO: Procedures for chain cycle
 */
class SessionBinder {

  constructor () {

    this._KEY_USER_CREDENTIALS_ = "_CREDENTIALS_USERCLIENT";

  }

  _registerNewUser (name, email, password, password_confirmation) {

    return fetch(APP_URL+'/api/register', {

      method: 'POST',
      headers: {
      Accept: 'application/json',
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        name : name,
        email : email,
        password : password,
        password_confirmation: password_confirmation,
        scope : ''
      }),

    }).then(response => {

      return response.json().then(jsonresponse => {

        return jsonresponse;

      });

    });

  }

  _retrieveActiveUser () {

    //return Keychain.getGenericPassword();

  }

  _storeActiveUser (username, password) {

    return Expo.SecureStore.setItemAsync(this._KEY_USER_CREDENTIALS_, JSON.stringify({username, password}));

  }

  clearActiveUser () {

    //return Keychain.resetGenericPassword()

  }

  /*
   * Registers user, stores user locally, binds new token to active user.
   */
  chainUser (name, email, password, password_confirmation) {

    return this._registerNewUser(name, email, password, password_confirmation).then( user => {
      
      console.log(JSON.stringify(email));
      return this._storeActiveUser(email, password).then( () => {

        return Granter.bundleToken(email, password);

      });

    });

  }

}

export default Object.freeze(new SessionBinder());