const shapeClasses =
	'h-14 w-14 justify-center items-center rounded-lg text-white';
const itemClasses =
	'flex flex-row w-full border p-3 rounded-lg gap-3 text-center';
const tagClasses = 'bg-slate-100 px-2 rounded-md';
const tagContainerClasses = 'flex gap-2 text-indigo-500';

export default function FlexGrow() {
	return (
		<div className="flex flex-row flex-wrap gap-3 border-2 border-indigo-300 h-full p-3 rounded-lg">
			<h1 className="w-full text-indigo-500 font-bold text-2xl">Flex Grow</h1>
			<pre className={tagContainerClasses}>
				1.
				<span className={tagClasses}>grow</span>
			</pre>
			<div className={itemClasses}>
				<div className={`${shapeClasses} bg-indigo-300 flex flex-none`}>01</div>
				<div className={`${shapeClasses} bg-indigo-600 flex grow`}>02</div>
				<div className={`${shapeClasses} bg-indigo-300 flex flex-none`}>03</div>
			</div>

			<pre className={tagContainerClasses}>
				2.
				<span className={tagClasses}>grow-0</span>
			</pre>
			<div className={itemClasses}>
				<div className={`${shapeClasses} bg-indigo-300 flex grow`}>01</div>
				<div className={`${shapeClasses} bg-indigo-600 flex grow-0`}>02</div>
				<div className={`${shapeClasses} bg-indigo-300 flex grow`}>03</div>
			</div>
		</div>
	);
}
