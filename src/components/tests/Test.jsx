import React from 'react';

export default function Test() {
	return (
		<div className="border-2 border-teal-300 h-full p-3 rounded-lg">
			<div className="grid grid-cols-3 gap-4 place-content-stretch h-48">
				<div className="bg-teal-500 p-4 rounded-lg text-white">01</div>
				<div className="bg-teal-500 p-4 rounded-lg text-white place-self-end">
					02
				</div>
				<div className="bg-teal-500 p-4 rounded-lg text-white">03</div>
				<div className="bg-teal-500 p-4 rounded-lg text-white">03</div>
				<div className="bg-teal-500 p-4 rounded-lg text-white">03</div>
				<div className="bg-teal-500 p-4 rounded-lg text-white">03</div>
			</div>
		</div>
	);
}
