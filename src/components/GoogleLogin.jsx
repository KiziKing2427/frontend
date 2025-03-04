import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleLogin = ({ onLoginSuccess }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    const clientId = '828709675168-3pd89dj9l1fgqtneahv850pqo5kj5t98.apps.googleusercontent.com'; // Replace with your client ID
    const redirectUri = 'http://localhost:5173'; // Your redirect URI
    const scope = 'profile email'; // Updated scope
    const responseType = 'token';

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}`;
    window.location.href = authUrl;
  };

  const handleRedirect = () => {
    const queryParams = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = queryParams.get('access_token');
    const sourceParam = queryParams.get('source');
    const totalPrice = queryParams.get('totalPrice');
    const dateParam = queryParams.get('selectedDate');
    const totalPeopleParam = queryParams.get('totalPeople');

    // Handle the access token and fetch user info if available
    if (accessToken) {
      fetch('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(response => response.json())
      .then(userInfo => {
        console.log('User Info:', userInfo);
        if (onLoginSuccess) {
          onLoginSuccess(userInfo); // Call onLoginSuccess if provided
        }
        
        // Navigate based on the source parameter
        if (sourceParam) {
          switch (sourceParam) {
            case 'BangkokMSW':
              navigate(`/bangkokMSWPay?totalPrice=${totalPrice}&selectedDate=${dateParam}&totalPeople=${totalPeopleParam}`);
              break;
            default:
              console.warn("No matching route for the source parameter.");
          }
        }
      })
      .catch(error => {
        console.error('Error fetching user info:', error);
      });
    }
  };

  React.useEffect(() => {
    handleRedirect();
  }, []);

  return <button onClick={handleLogin}>Sign in with Google</button>;
};

export default GoogleLogin;
