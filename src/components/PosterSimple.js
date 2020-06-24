import React from 'react';

import Poster1 from '../static/speak_easy_b-poster-1.jpg';
import Poster2 from '../static/speak_easy_b-poster-2.jpg';

const PosterSimple = () => {
	return (
		<section id='Posters' className='poster-simple'>
			<div className='container'>
				<div className='poster-simple-col'>
					<div className='poster-simple-col-left'>
						<figure className='poster-one'>
							<img alt='Speak Easy B Poster 1' src={Poster1} />
						</figure>
					</div>
					<div className='poster-simple-col-right'>
						<figure className='poster-two'>
							<img alt='Speak Easy B Poster 2' src={Poster2} />
						</figure>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PosterSimple;
