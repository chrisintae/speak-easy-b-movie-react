import React from 'react';

const SectionTitle = ({ title }) => (
	<div className='title-container'>
		<h4 className='title'>{title}</h4>
	</div>
);

const Modal = ({ children, isOpen, onClick, className }) => {
	if (isOpen === false) return null;

	return (
		<div isOpen={isOpen} onClick={onClick} className={`modal ${className ? className : ''}`}>
			<div className='modal-container'>{children}</div>
		</div>
	);
};

export { SectionTitle, Modal };
