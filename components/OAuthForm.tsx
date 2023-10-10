import React, { useState } from 'react';
import styles from './OAuthForm.module.css';

function OAuthForm() {
  const [clientId, setClientId] = useState<string>('');
  const [clientSecret, setClientSecret] = useState<string>('');
  const [grantType, setGrantType] = useState<string>('authorization_code');
  const [authCode, setAuthCode] = useState<string>('');

  function handleRequestToken() {
    // Handle OAuth 2.0 token request here
    console.log('Requesting OAuth 2.0 Access Token with:', {
      clientId,
      clientSecret,
      grantType,
      authCode,
    });
  }

  return (
    <div className={styles.form}>
      <label>
        Client ID:
        <input
          type="text"
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
          className={styles.input}
        />
      </label>
      <br />
      <label>
        Client Secret:
        <input
          type="text"
          value={clientSecret}
          onChange={(e) => setClientSecret(e.target.value)}
          className={styles.input}
        />
      </label>
      <br />
      <label>
        Grant Type:
        <select
          value={grantType}
          onChange={(e) => setGrantType(e.target.value)}
          className={styles.select}
        >
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
          className={styles.input}
        />
      </label>
      <br />
      <button onClick={handleRequestToken} className={styles.button}>
        Request OAuth 2 Access Token
      </button>
    </div>
  );
}

export default function MyApp() {
  return <OAuthForm />;
}
