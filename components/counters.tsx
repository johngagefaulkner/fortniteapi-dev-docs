// Example from https://beta.reactjs.org/learn

/* Initial Source:
import { useState } from 'react'
import styles from './counters.module.css'

function MyButton() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <button onClick={handleClick} className={styles.counter}>
        Clicked {count} times
      </button>
    </div>
  )
}

export default function MyApp() {
  return <MyButton />
}
*/

//import React, { useState } from 'react';
import { useState } from 'react'

function MyOAuthForm() {
  const OAuthForm = () => {
  const [clientId, setClientId] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [grantType, setGrantType] = useState('');
  const [authCode, setAuthCode] = useState('');

  const handleRequestToken = () => {
    // Handle OAuth 2.0 token request here
    console.log('Requesting OAuth 2.0 Access Token with:', {
      clientId,
      clientSecret,
      grantType,
      authCode,
    });
  };

  return (
    <div>
      <label>
        Client ID:
        <input
          type="text"
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
        />
      </label>
      <br />
      <label>
        Client Secret:
        <input
          type="text"
          value={clientSecret}
          onChange={(e) => setClientSecret(e.target.value)}
        />
      </label>
      <br />
      <label>
        Grant Type:
        <select value={grantType} onChange={(e) => setGrantType(e.target.value)}>
          <option value="authorization_code">Authorization Code</option>
          <option value="password">Password</option>
          <option value="client_credentials">Client Credentials</option>
          <option value="refresh_token">Refresh Token</option>
        </select>
      </label>
      <br />
      <label>
        Auth Code:
        <input
          type="text"
          value={authCode}
          onChange={(e) => setAuthCode(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleRequestToken}>Request OAuth 2 Access Token</button>
    </div>
  );
};
}

export default function MyApp() {
  return <MyOAuthForm />
}
