import React from 'react';

export default function FlexWrap() {
	return (
		<div className="flex flex-wrap gap-3 border-2 border-indigo-300 h-full p-3 rounded-lg">
			<h1 className="w-full text-indigo-500 font-bold text-2xl">Flex Wrap</h1>

			<pre className="flex gap-2 text-indigo-500">
				1.
				<span className="bg-slate-100 px-2 rounded-md">flex-nowrap</span>
			</pre>
			<div className="flex flex-nowrap w-full border p-3 rounded-lg gap-3 text-center overflow-x-scroll">
				<div className="bg-indigo-600 p-5 rounded-lg text-white w-4/12">01</div>
				<div className="bg-indigo-600 p-5 rounded-lg text-white w-4/12">02</div>
				<div className="bg-indigo-600 p-5 rounded-lg text-white w-4/12">03</div>
			</div>

			<pre className="flex gap-2 text-indigo-500">
				2.
				<span className="bg-slate-100 px-2 rounded-md">flex-wrap</span>
			</pre>
			<div className="flex flex-wrap w-full border p-3 rounded-lg gap-3 text-center overflow-x-scroll">
				<div className="bg-indigo-600 p-5 rounded-lg text-white w-4/12">01</div>
				<div className="bg-indigo-600 p-5 rounded-lg text-white w-4/12">02</div>
				<div className="bg-indigo-600 p-5 rounded-lg text-white w-4/12">03</div>
			</div>

			<pre className="flex gap-2 text-indigo-500">
				3.
				<span className="bg-slate-100 px-2 rounded-md">flex-wrap-reverse</span>
			</pre>
			<div className="flex flex-wrap-reverse w-full border p-3 rounded-lg gap-3 text-center overflow-x-scroll">
				<div className="bg-indigo-600 p-5 rounded-lg text-white w-4/12">01</div>
				<div className="bg-indigo-600 p-5 rounded-lg text-white w-4/12">02</div>
				<div className="bg-indigo-600 p-5 rounded-lg text-white w-4/12">03</div>
			</div>
		</div>
	);
}
