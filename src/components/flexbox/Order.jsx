const shapeClasses =
	'w-14 h-14 justify-center items-center rounded-lg text-white';
const itemClasses =
	'flex flex-row w-full border p-3 rounded-lg gap-3 text-center';
const tagClasses = 'bg-slate-100 px-2 rounded-md';
const tagContainerClasses = 'flex gap-2 text-indigo-500';

export default function Order() {
	return (
		<div className="flex flex-row flex-wrap gap-3 border-2 border-indigo-300 h-full p-3 rounded-lg">
			<h1 className="w-full text-indigo-500 font-bold text-2xl">Order</h1>
			<pre className={tagContainerClasses}>
				1.
				<span className={tagClasses}>order-last</span>
			</pre>
			<div className={itemClasses}>
				<div className={`${shapeClasses} bg-indigo-600 flex order-last`}>
					01
				</div>
				<div className={`${shapeClasses} bg-indigo-300 flex`}>02</div>
				<div className={`${shapeClasses} bg-indigo-300 flex`}>03</div>
			</div>

			<pre className={tagContainerClasses}>
				2.
				<span className={tagClasses}>order-first</span>
			</pre>
			<div className={itemClasses}>
				<div className={`${shapeClasses} bg-indigo-300 flex`}>01</div>
				<div className={`${shapeClasses} bg-indigo-300 flex`}>02</div>
				<div className={`${shapeClasses} bg-indigo-600 flex order-first`}>
					03
				</div>
			</div>

			<pre className={tagContainerClasses}>
				3.
				<span className={tagClasses}>order-[number]</span>
			</pre>
			<div className={itemClasses}>
				<div className={`${shapeClasses} bg-indigo-600 flex order-2`}>01</div>
				<div className={`${shapeClasses} bg-indigo-600 flex order-3`}>02</div>
				<div className={`${shapeClasses} bg-indigo-600 flex order-1`}>03</div>
			</div>
		</div>
	);
}
