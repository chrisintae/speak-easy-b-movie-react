import React from 'react';

// const Button = ({ className, children }) => <button className={className}>{children}</button>;

const ButtonWatch = ({ click }) => {
	return (
		<div className='watch-container'>
			<div className='btn-container'>
				<span onClick={click}>Watch Trailer</span>
			</div>
		</div>
	);
};

export default ButtonWatch;
