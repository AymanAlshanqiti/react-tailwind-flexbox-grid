const shapeClasses =
	'h-14 grid justify-center items-center rounded-lg text-white';
const itemClasses =
	'grid grid-cols-3 w-full border p-3 rounded-lg gap-4 text-center';
const tagClasses = 'bg-slate-100 px-2 py-1 m-2 rounded-md';
const tagContainerClasses = 'my-3 text-rose-500';

export default function GridColumnsStartEnd() {
	return (
		<div className="border-2 border-rose-300 h-full p-3 rounded-lg">
			<h1 className="w-full text-rose-500 font-bold text-2xl">
				Grid Column Start / End
			</h1>
			<pre className={tagContainerClasses}>
				<span className={tagClasses}>col-span-[number]|[full]</span>
			</pre>
			<div className={itemClasses}>
				<div className={`${shapeClasses} bg-rose-300`}>01</div>
				<div className={`${shapeClasses} bg-rose-300`}>02</div>
				<div className={`${shapeClasses} bg-rose-300`}>03</div>
				<div className={`${shapeClasses} bg-rose-600 col-span-2 md:col-span-1`}>
					04
				</div>
				<div className={`${shapeClasses} bg-rose-300`}>05</div>
				<div className={`${shapeClasses} bg-rose-300`}>06</div>
				<div className={`${shapeClasses} bg-rose-600 col-span-2`}>07</div>
			</div>

			<pre className={tagContainerClasses}>
				<span className={tagClasses}>col-start-[number]</span>
				<span className={tagClasses}>col-end-[number]</span>
			</pre>
			<div className="grid grid-cols-6 w-full border p-3 rounded-lg gap-4 text-center">
				<div
					className={`${shapeClasses} bg-rose-600 col-start-2 hover:col-end-7 col-span-4`}
				>
					01
				</div>
				<div className={`${shapeClasses} bg-rose-600 col-start-1 col-end-3`}>
					02
				</div>
				<div className={`${shapeClasses} bg-rose-600 col-end-7 col-span-2`}>
					03
				</div>
				<div className={`${shapeClasses} bg-rose-600 col-start-1 col-end-7`}>
					04
				</div>
				<div className={`${shapeClasses} bg-rose-300`}>05</div>
				<div className={`${shapeClasses} bg-rose-300`}>06</div>
				<div className={`${shapeClasses} bg-rose-300`}>07</div>
				<div className={`${shapeClasses} bg-rose-300`}>08</div>
				<div className={`${shapeClasses} bg-rose-300`}>09</div>
				<div className={`${shapeClasses} bg-rose-300`}>10</div>
			</div>
		</div>
	);
}
