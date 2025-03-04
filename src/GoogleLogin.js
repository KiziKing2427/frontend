import React from 'react';

const GoogleLogin = ({ onLoginSuccess }) => {
  const handleLogin = () => {
    const clientId = 'YOUR_CLIENT_ID'; // Replace with your client ID
    const redirectUri = 'http://localhost:3000'; // Your redirect URI
    const scope = 'profile email';
    const responseType = 'token';

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}`;
    window.location.href = authUrl;
  };

  return <button onClick={handleLogin}>Sign in with Google</button>;
};

export default GoogleLogin;
