import React from 'react';
import { SectionTitle as Title } from './Elements';
import Img from '../static/speak_easy_b-the_story.jpg';

const Story = () => (
	<section id='Story' className='story'>
		<div className='container'>
			<div className='story-title-img-container'>
				<div className='story-title-container'>
					<Title title='The Story' />
				</div>
				<div className='story-img-container'>
					<img src={Img} alt='Becca Park' />
				</div>
			</div>

			<div className='story-desc-col'>
				<div className='story-desc-col-left'>
					<p>
						During a therapy session, a young adult struggles to vocalize the source of their depression
						stemming from heartache. They embark on a tender journey inside the oasis of their mind, with
						the desert serving as the stage for poetic confrontation. Through dream-like vignettes, the film
						weaves together their struggle to balance gender, sexuality, and identity.
					</p>

					<p>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://www.seedandspark.com/fund/speakeasyb'
						>
							More on the making of Speak Easy, B
						</a>
					</p>
				</div>

				<div className='story-desc-col-right'>
					<div>
						<p>Written by</p>
						<h1>Becca Park</h1>
					</div>
					<div>
						<p>Directed by</p>
						<h1>Becca Park</h1>
						<h1>Jun Shimizu</h1>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Story;
