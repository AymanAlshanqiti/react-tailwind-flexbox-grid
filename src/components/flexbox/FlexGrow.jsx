import React from 'react';

export default function FlexGrow() {
	return (
		<div className="flex flex-row flex-wrap gap-3 border-2 border-indigo-300 h-full p-3 rounded-lg">
			<h1 className="w-full text-indigo-500 font-bold text-2xl">Flex Grow</h1>
			<pre className="flex gap-2 text-indigo-500">
				1.
				<span className="bg-slate-100 px-2 rounded-md">grow</span>
			</pre>
			<div className="flex flex-row w-full border p-3 rounded-lg gap-3 text-center">
				<div className="bg-indigo-600 rounded-lg text-white w-14 h-14 flex flex-none items-center justify-center">
					01
				</div>
				<div className="bg-indigo-600 rounded-lg text-white h-14 flex grow items-center justify-center">
					02
				</div>
				<div className="bg-indigo-600 rounded-lg text-white w-14 h-14 flex flex-none items-center justify-center">
					03
				</div>
			</div>

			<pre className="flex gap-2 text-indigo-500">
				2.
				<span className="bg-slate-100 px-2 rounded-md">grow-0</span>
			</pre>
			<div className="flex flex-row w-full border p-3 rounded-lg gap-3 text-center">
				<div className="bg-indigo-600 rounded-lg text-white w-14 h-14 flex grow flex-none items-center justify-center">
					01
				</div>
				<div className="bg-indigo-600 rounded-lg text-white w-14 h-14 flex grow-0 items-center justify-center">
					02
				</div>
				<div className="bg-indigo-600 rounded-lg text-white w-14 h-14 flex grow flex-none items-center justify-center">
					03
				</div>
			</div>
		</div>
	);
}
