import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleSignIn = () => {
  const responseGoogle = (response) => {
    console.log(response);
    // Handle the response from Google Sign-In
    alert('Sign in successful!');
  };

  return (
    <div>
      <GoogleLogin
        clientId="346871269765-url6gpn3tubg9nhu4h43627rv5d1a79u.apps.googleusercontent.com"
        buttonText="Sign in with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default GoogleSignIn;
