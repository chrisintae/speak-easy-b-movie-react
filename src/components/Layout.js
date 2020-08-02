import React, { Fragment } from 'react';
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll';

const Layout = ({ children, onClickVideoModal }) => (
	<Fragment>
		<Header onClickVideoModal={onClickVideoModal} />
		{children}
		<Footer />
	</Fragment>
);

const Header = ({ onClickVideoModal }) => {
	let scrollTop = () => Scroll.animateScroll.scrollToTop();

	return (
		<header>
			<div className='header-container container'>
				<div className='logo'>
					<span onClick={scrollTop}>
						<h1>
							<span>Speak Easy, B </span>
							<span>Movie</span>
						</h1>
					</span>
				</div>
				<nav>
					<ul>
						<li>
							<span onClick={onClickVideoModal}>Watch Trailer</span>
						</li>
						<li>
							<Link to='story' spy={true} smooth={true} duration={500}>
								The Story
							</Link>
						</li>
						<li>
							<Link to='gallery' spy={true} smooth={true} duration={600}>
								The Gallery
							</Link>
						</li>
						<li>
							<a href='mailto:speakeasyb.film@gmail.com'>Contact</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

const Footer = () => (
	<footer>
		<div className='container'>
			<small>
				Copyright &copy; {new Date().getFullYear()} Speak Easy B Film.<span> All Rights Reserved. </span>
			</small>
		</div>
	</footer>
);

export default Layout;
