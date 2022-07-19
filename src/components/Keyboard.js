import React from 'react'
import "./Keyboard.css";

import Key from "./Key.js";

export default function Keyboard() {
	return (
		<div className='keyboard grid gap-4 grid-cols-4 grid-rows-5'>
			<Key text={7} type={"regular"} />
			<Key text={8} type={"regular"} />
			<Key text={9} type={"regular"} />
			<Key text={"DEL"} type={"special"} />
			<Key text={4} type={"regular"} />
			<Key text={5} type={"regular"} />
			<Key text={6} type={"regular"} />
			<Key text={"+"} type={"regular"} />
			<Key text={1} type={"regular"} />
			<Key text={2} type={"regular"} />
			<Key text={3} type={"regular"} />
			<Key text={"-"} type={"regular"} />
			<Key text={"."} type={"regular"} />
			<Key text={0} type={"regular"} />
			<Key text={"/"} type={"regular"} />
			<Key text={"x"} type={"regular"} />
			<Key text={"RESET"} type={"wide-key special"} />
			<Key text={"="} type={"wide-key equals"} />
		</div>
	)
}
