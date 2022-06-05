const shapeClasses = 'h-14 justify-center items-center rounded-lg text-white';
const itemClasses =
	'flex flex-row w-full border p-3 rounded-lg gap-3 text-center';
const tagClasses = 'bg-slate-100 px-2 rounded-md';
const tagContainerClasses = 'flex gap-2 text-indigo-500';

export default function FlexShrink() {
	return (
		<div className="flex flex-row flex-wrap gap-3 border-2 border-indigo-300 h-full p-3 rounded-lg">
			<h1 className="w-full text-indigo-500 font-bold text-2xl">Flex Shrink</h1>
			<pre className={tagContainerClasses}>
				1.
				<span className={tagClasses}>shrink</span>
			</pre>
			<div className={itemClasses}>
				<div className={`${shapeClasses} bg-indigo-300 w-14 flex flex-none`}>
					01
				</div>
				<div className={`${shapeClasses} bg-indigo-600 w-64 flex shrink`}>
					02
				</div>
				<div className={`${shapeClasses} bg-indigo-300 w-32 flex flex-none`}>
					03
				</div>
			</div>

			<pre className={tagContainerClasses}>
				2.
				<span className={tagClasses}>shrink-0</span>
			</pre>
			<div className={itemClasses}>
				<div className={`${shapeClasses} bg-indigo-300 w-14 flex flex-none`}>
					01
				</div>
				<div className={`${shapeClasses} bg-indigo-600 w-28 flex shrink-0`}>
					02
				</div>
				<div className={`${shapeClasses} bg-indigo-300 w-20 flex flex-none`}>
					03
				</div>
			</div>
		</div>
	);
}
