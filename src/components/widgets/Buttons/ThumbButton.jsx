import React from 'react';
import { thumb } from 'assets/images';
import SocialMediaButton from './SocialMediaButton';

function ThumbButton(props) {
	return <SocialMediaButton imageUrl={thumb} {...props} to='' />;
}

export default ThumbButton;
