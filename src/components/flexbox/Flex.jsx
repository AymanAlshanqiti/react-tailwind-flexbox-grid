const shapeClasses =
	'h-14 flex justify-center items-center rounded-lg text-white';
const itemClasses =
	'flex flex-row w-full border p-3 rounded-lg gap-3 text-center';
const tagClasses = 'bg-slate-100 px-2 rounded-md';
const tagContainerClasses = 'flex gap-2 text-indigo-500';

export default function Flex() {
	return (
		<div className="flex flex-row flex-wrap gap-3 border-2 border-indigo-300 h-full p-3 rounded-lg">
			<h1 className="w-full text-indigo-500 font-bold text-2xl">Flex</h1>
			<pre className={tagContainerClasses}>
				1.
				<span className={tagClasses}>flex-initial</span>
			</pre>
			<span className="text-gray-400">grow until you fit your size</span>
			<div className={itemClasses}>
				<div className={`${shapeClasses} bg-indigo-300 w-14 flex-none`}>01</div>
				<div className={`${shapeClasses} bg-indigo-600 w-64 flex-initial`}>
					02
				</div>
				<div className={`${shapeClasses} bg-indigo-600 w-32 flex-initial`}>
					03
				</div>
			</div>

			<pre className={tagContainerClasses}>
				2.
				<span className={tagClasses}>flex-1</span>
			</pre>
			<span className="text-gray-400">
				grow as you need and just ignore your size
			</span>
			<div className={itemClasses}>
				<div className={`${shapeClasses} bg-indigo-300 w-14 flex flex-none`}>
					01
				</div>
				<div className={`${shapeClasses} bg-indigo-600 w-64 flex flex-1`}>
					02
				</div>
				<div className={`${shapeClasses} bg-indigo-600 w-32 flex flex-1`}>
					03
				</div>
			</div>

			<pre className={tagContainerClasses}>
				3.
				<span className={tagClasses}>flex-auto</span>
			</pre>
			<span className="text-gray-400">same as flex-1</span>
			<div className={itemClasses}>
				<div className={`${shapeClasses} bg-indigo-300 w-14 flex flex-none`}>
					01
				</div>
				<div className={`${shapeClasses} bg-indigo-600 w-64 flex flex-auto`}>
					02
				</div>
				<div className={`${shapeClasses} bg-indigo-600 w-32 flex flex-auto`}>
					03
				</div>
			</div>

			<pre className={tagContainerClasses}>
				4.
				<span className={tagClasses}>flex-none</span>
			</pre>
			<span className="text-gray-400">
				don't grow ever just be as your size even when the window is smaller
				than your size
			</span>
			<div className={itemClasses}>
				<div className={`${shapeClasses} bg-indigo-600 w-14 flex flex-none`}>
					01
				</div>
				<div className={`${shapeClasses} bg-indigo-600 w-64 flex flex-none`}>
					02
				</div>
				<div className={`${shapeClasses} bg-indigo-300 w-32 flex flex-1`}>
					03
				</div>
				<div
					className={`${shapeClasses} bg-indigo-300 w-32 flex flex-[2_2_0%]`}
				>
					04
				</div>
			</div>
		</div>
	);
}
