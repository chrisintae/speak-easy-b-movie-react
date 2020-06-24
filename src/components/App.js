import React, { useState } from 'react';

import Layout from './Layout';
import Awards from './awards';
import Story from './Story';
import PosterSimple from './PosterSimple';
import Gallery from './Gallery';
import Contact from './Contact';
import { Modal } from './Elements';
import Video from './Video';

import '../style/App.scss';
import Poster from '../static/speak_easy_b-bg-main.jpg';
import VideoMp4 from '../static/speak_easy_b-bg-video.mp4';

const App = () => {
	const [ videoModal, setVideoModal ] = useState(false);

	let toggleVideoModal = () => {
		setVideoModal(!videoModal);
	};

	return (
		<Layout onClickVideoModal={toggleVideoModal}>
			<main id='Main' className='main'>
				<div className='headline-overlay'>
					<div class='headline-container'>
						<h1 className='subtitle'>A film by Becca Park</h1>
						<h1 className='title'>Speak Easy, B</h1>
						<div className='video-btn-container'>
							Watch Trailer
							<span className='video-btn-circle' onClick={toggleVideoModal}>
								<span className='video-btn-arrow' />
							</span>
						</div>
					</div>
				</div>
				<div class='bg-video-container'>
					<video autoplay='' loop muted playsinline='' poster={Poster}>
						<source src={VideoMp4} type='video/mp4' />
					</video>
				</div>
			</main>

			<Awards />
			<Story />
			<PosterSimple />
			<Gallery />
			<Contact />

			<Modal isOpen={videoModal} onClick={toggleVideoModal} className='video'>
				<Video />
			</Modal>
		</Layout>
	);
};

export default App;
