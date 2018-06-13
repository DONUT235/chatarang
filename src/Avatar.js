import React from 'react';

function Avatar(props) {
	const AvatarStyle = {
			marginRight: '0.5rem',
			height: '40px',
			width: '40px',
			fontSize: '1rem',
			borderRadius: '20px',
			background: `url(${props.avatarURL})`
	}
	return (
		<div
			className="Avatar"
			style={AvatarStyle}
		></div>
	);
}

export default Avatar;
