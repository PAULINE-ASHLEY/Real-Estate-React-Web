import React from 'react';
import { google } from 'assets/icons';
import SocialMediaButton from './SocialMediaButton';

function GoogleButton(props) {
	return <SocialMediaButton imageUrl={google} {...props} to='' />;
}

export default GoogleButton;
