import React from 'react';

export default function FlexBasis() {
	return (
		<div className="flex flex-row flex-wrap gap-3 border-2 border-indigo-300 h-full p-3 rounded-lg">
			<h1 className="w-full text-indigo-500 font-bold text-2xl">Flex Basis</h1>
			<div className="basis-[40%] lg:basis-1/4 text-white hover:basis-5/12 transition-all duration-500 bg-indigo-600 rounded-lg p-5 text-center">
				01
			</div>
			<div className="basis-full lg:basis-1/4 text-white hover:basis-4/12 transition-all duration-500 bg-indigo-600 rounded-lg p-5 text-center">
				02
			</div>
			<div className="basis-4 lg:basis-1 text-white hover:basis-28 transition-all duration-500 bg-indigo-600 rounded-lg p-5 text-center">
				03
			</div>
			<input
				className="basis-full lg:basis-1/4 border-2 border-indigo-500 text-indigo-500 px-2 p-5 rounded-lg hover:basis-4/12 transition-all duration-500"
				placeholder="your_eamil@example.com"
				type="text"
			/>
		</div>
	);
}
