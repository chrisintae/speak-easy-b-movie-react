import React, { useState } from 'react';
import { SectionTitle as Title, Modal } from './Elements';
import Photo1 from '../static/speak_easy_b-photo-1.jpg';
import Photo2 from '../static/speak_easy_b-photo-2.jpg';
import Photo3 from '../static/speak_easy_b-photo-3.jpg';
import Photo4 from '../static/speak_easy_b-photo-4.jpg';
import Photo5 from '../static/speak_easy_b-photo-5.jpg';
import Photo6 from '../static/speak_easy_b-photo-6.jpg';
import Photo7 from '../static/speak_easy_b-photo-7.jpg';
import Photo8 from '../static/speak_easy_b-photo-8.jpg';
import Photo9 from '../static/speak_easy_b-photo-9.jpg';
import Photo10 from '../static/speak_easy_b-photo-10.jpg';

const Gallery = () => {
	let imgUrls = [ Photo1, Photo2, Photo3, Photo4, Photo5, Photo6, Photo7, Photo8, Photo9, Photo10 ];

	const [ isOpen, setIsOpen ] = useState(false);
	const [ imgSrc, setimgSrc ] = useState(undefined);

	const toggleGalleryModal = (src) => {
		setIsOpen(!isOpen);
		setimgSrc(src);
	};

	return (
		<section id='gallery' className='gallery'>
			<div className='container'>
				<Title title='The Gallery' />
				<div className='flex'>
					{imgUrls.map((src, key) => (
						<div className='flex-col gallery-img-col'>
							<div className='gallery-img-container' onClick={(e) => toggleGalleryModal(src)}>
								<GalleryImage key={key} src={src} />
							</div>
						</div>
					))}
				</div>
			</div>

			<Modal isOpen={isOpen} onClick={toggleGalleryModal} src={imgSrc}>
				<GalleryImage src={imgSrc} />
			</Modal>
		</section>
	);
};

const GalleryImage = ({ src, key }) => (
	<figure>
		<img key={key} src={src} alt={`Speak Easy B Film Still: ${key}`} />
	</figure>
);

export default Gallery;
