import React, { Fragment } from 'react';

import '../style/components/_video.scss';

const Video = () => {
	return (
		<Fragment>
			<iframe
				title='vimeo-player'
				src='https://player.vimeo.com/video/267046000'
				frameborder='0'
				allowfullscreen
			/>
			<script src='https://player.vimeo.com/api/player.js' />
		</Fragment>
	);
};

export default Video;
