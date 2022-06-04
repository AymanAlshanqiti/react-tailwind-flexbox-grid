import React from 'react';

export default function FlexDirection() {
	return (
		<div className="flex flex-wrap gap-3 border-2 border-indigo-300 h-full p-3 rounded-lg">
			<h1 className="w-full text-indigo-500 font-bold text-2xl">
				Flex Direction
			</h1>
			<pre className="flex gap-2 text-indigo-500">
				1.
				<span className="bg-slate-100 px-2 rounded-md">flex-row</span>
			</pre>
			<div className="flex flex-row w-full border p-3 rounded-lg gap-3 text-center">
				<div className="bg-indigo-600 p-5 rounded-lg text-white">01</div>
				<div className="bg-indigo-600 p-5 rounded-lg text-white">02</div>
				<div className="bg-indigo-600 p-5 rounded-lg text-white">03</div>
			</div>

			<pre className="flex gap-2 text-indigo-500">
				2.
				<span className="bg-slate-100 px-2 rounded-md">flex-row-reverse</span>
			</pre>
			<div className="flex flex-row-reverse w-full border p-3 rounded-lg gap-3 text-center">
				<div className="bg-indigo-600 p-5 rounded-lg text-white">01</div>
				<div className="bg-indigo-600 p-5 rounded-lg text-white">02</div>
				<div className="bg-indigo-600 p-5 rounded-lg text-white">03</div>
			</div>

			<pre className="flex gap-2 text-indigo-500">
				3.
				<span className="bg-slate-100 px-2 rounded-md">flex-col</span>
			</pre>
			<div className="flex flex-col w-full border p-3 rounded-lg gap-3 text-center">
				<div className="bg-indigo-600 p-5 rounded-lg text-white">01</div>
				<div className="bg-indigo-600 p-5 rounded-lg text-white">02</div>
				<div className="bg-indigo-600 p-5 rounded-lg text-white">03</div>
			</div>

			<pre className="flex gap-2 text-indigo-500">
				4.
				<span className="bg-slate-100 px-2 rounded-md">flex-col-reverse</span>
			</pre>
			<div className="flex flex-col-reverse w-full border p-3 rounded-lg gap-3 text-center">
				<div className="bg-indigo-600 p-5 rounded-lg text-white">01</div>
				<div className="bg-indigo-600 p-5 rounded-lg text-white">02</div>
				<div className="bg-indigo-600 p-5 rounded-lg text-white">03</div>
			</div>
		</div>
	);
}
