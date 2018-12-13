import Expo from 'expo';
import { APP_URL, CLIENT_SECRET, CLIENT_ID } 
from 'react-native-dotenv';

/*
 * #TODO: JWT health check request middleware
 */
class Granter {

  constructor () {

    this._KEY_SINGLE_TOKEN = "OAUTH_SINGLE_TOKEN";

  }

  _requestBearerToken (username, password) {

    return fetch(APP_URL+'/oauth/token', {

      method: 'POST',
      headers: {
      Accept: 'application/json',
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        grant_type : 'password',
        client_id : CLIENT_ID,
        client_secret : CLIENT_SECRET,
        username : username,
        password : password,
        scope : ''
      }),

    }).then(response => {

      return response.json().then(jsonresponse => {
        return jsonresponse;
      })

    });

  }

  _storeActiveToken (bearerToken) {

    return Expo.SecureStore.setItemAsync(this._KEY_SINGLE_TOKEN, bearerToken);

  }

  /*
   * Fetch bearer token, store locally 
   */
  bundleToken (username, password) {

    return this._requestBearerToken(username, password).then(

      bearerToken => {
        return bearerToken;
        //return _storeActiveToken(tokenHash);
      }

    );

  }

}

export default Object.freeze(new Granter());