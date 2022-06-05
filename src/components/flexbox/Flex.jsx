import React from 'react';

export default function Flex() {
	return (
		<div className="flex flex-row flex-wrap gap-3 border-2 border-indigo-300 h-full p-3 rounded-lg">
			<h1 className="w-full text-indigo-500 font-bold text-2xl">Flex</h1>
			<pre className="flex gap-2 text-indigo-500">
				1.
				<span className="bg-slate-100 px-2 rounded-md">flex-initial</span>
			</pre>
			<span className="text-gray-400">grow until you fit your size</span>
			<div className="flex flex-row w-full border p-3 rounded-lg gap-3 text-center">
				<div className="bg-indigo-600 rounded-lg text-white w-14 h-14 flex flex-none items-center justify-center">
					01
				</div>
				<div className="bg-indigo-600 rounded-lg text-white w-64 h-14 flex flex-initial items-center justify-center">
					02
				</div>
				<div className="bg-indigo-600 rounded-lg text-white w-32 h-14 flex flex-initial items-center justify-center">
					03
				</div>
			</div>

			<pre className="flex gap-2 text-indigo-500">
				2.
				<span className="bg-slate-100 px-2 rounded-md">flex-1</span>
			</pre>
			<span className="text-gray-400">
				grow as you need and just ignore your size
			</span>
			<div className="flex flex-row w-full border p-3 rounded-lg gap-3 text-center">
				<div className="bg-indigo-600 rounded-lg text-white w-14 h-14 flex flex-none items-center justify-center">
					01
				</div>
				<div className="bg-indigo-600 rounded-lg text-white w-64 h-14 flex flex-1 items-center justify-center">
					02
				</div>
				<div className="bg-indigo-600 rounded-lg text-white w-32 h-14 flex flex-1 items-center justify-center">
					03
				</div>
			</div>

			<pre className="flex gap-2 text-indigo-500">
				3.
				<span className="bg-slate-100 px-2 rounded-md">flex-auto</span>
			</pre>
			<span className="text-gray-400">same as flex-1</span>
			<div className="flex flex-row w-full border p-3 rounded-lg gap-3 text-center">
				<div className="bg-indigo-600 rounded-lg text-white w-14 h-14 flex flex-none items-center justify-center">
					01
				</div>
				<div className="bg-indigo-600 rounded-lg text-white w-64 h-14 flex flex-1 items-center justify-center">
					02
				</div>
				<div className="bg-indigo-600 rounded-lg text-white w-32 h-14 flex flex-1 items-center justify-center">
					03
				</div>
			</div>

			<pre className="flex gap-2 text-indigo-500">
				4.
				<span className="bg-slate-100 px-2 rounded-md">flex-none</span>
			</pre>
			<span className="text-gray-400">
				don't grow ever just be as your size even when the window is smaller
				than your size
			</span>
			<div className="flex flex-row w-full border p-3 rounded-lg gap-3 text-center">
				<div className="bg-indigo-600 rounded-lg text-white w-14 h-14 flex flex-none items-center justify-center">
					01
				</div>
				<div className="bg-indigo-600 rounded-lg text-white w-64 h-14 flex flex-none items-center justify-center">
					02
				</div>
				<div className="bg-indigo-600 rounded-lg text-white w-32 h-14 flex flex-1 items-center justify-center">
					03
				</div>
				<div className="bg-indigo-600 rounded-lg text-white w-32 h-14 flex flex-[2_2_0%] items-center justify-center">
					04
				</div>
			</div>
		</div>
	);
}
