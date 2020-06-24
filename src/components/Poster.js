import React from 'react';

import Poster1 from '../static/speak_easy_b-poster-1.jpg';
import Poster2 from '../static/speak_easy_b-poster-2.jpg';

const Poster = () => {
	return (
		<section id='Posters' className='posters'>
			<div className='container'>
				<div className='posters-col'>
					<div className='posters-col-left'>
						<figure className='poster-one'>
							<img alt='Speak Easy B Poster 1' src={Poster1} />
						</figure>
						<figure className='poster-two'>
							<img alt='Speak Easy B Poster 2' src={Poster2} />
						</figure>
					</div>
					<div className='posters-col-right'>
						<h4 className='title'>Ipsum Lorem</h4>
						<p>
							Minim sit quis esse commodo do deserunt velit occaecat irure nisi voluptate culpa. Laboris
							ea incididunt mollit deserunt labore do consequat occaecat. In velit amet in reprehenderit
							amet enim aute ut.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Poster;
