import React from 'react';
import "./Key.css";

export default function Key({ text, type }) {
	return (
		<button className={`key ${type}-key`}>
			<p className='key-content '>{text}</p>
		</button>
	)
}
