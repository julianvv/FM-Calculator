import React, { memo } from 'react';
import "./Key.css";

function Key({ text, type }) {
	return (
		<button className={`key ${type}-key`}>
			<p className='key-content '>{text}</p>
		</button>
	)
}

export default memo(Key);