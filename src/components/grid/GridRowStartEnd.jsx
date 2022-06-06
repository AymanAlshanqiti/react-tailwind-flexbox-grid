const itemClasses =
	'grid grid-rows-3 grid-flow-col w-full border p-3 rounded-lg gap-4 text-center';
const tagClasses = 'bg-slate-100 px-2 py-1 m-2 rounded-md';
const tagContainerClasses = 'my-3 text-rose-500';

export default function GridRowStartEnd() {
	return (
		<div className="border-2 border-rose-300 h-full p-3 rounded-lg">
			<h1 className="w-full text-rose-500 font-bold text-2xl">
				Grid Row Start/End
			</h1>
			<pre className={tagContainerClasses}>
				<span className={tagClasses}>row-span-[number(1-6)]|[auto]|[full]</span>
			</pre>
			<div className={itemClasses}>
				<div className="bg-rose-600 grid row-span-3 justify-center items-center rounded-lg text-white">
					01
				</div>
				<div className="bg-rose-300 h-14 grid col-span-2 justify-center items-center rounded-lg text-white">
					02
				</div>
				<div className="bg-rose-600 grid row-span-2 col-span-2 justify-center items-center rounded-lg text-white">
					03
				</div>
			</div>

			<pre className={tagContainerClasses}>
				<span className={tagClasses}>row-[start|end]-[number(1-7)]|[auto]</span>
			</pre>
			<div className={itemClasses}>
				<div className="bg-rose-600 grid row-start-2 row-span-2 hover:row-span-3 justify-center items-center rounded-lg text-white">
					01
				</div>
				<div className="bg-rose-300 h-14 grid row-end-3 row-span-2 justify-center items-center rounded-lg text-white">
					02
				</div>
				<div className="bg-rose-600 grid row-start-1 row-end-4 col-span-2 justify-center items-center rounded-lg text-white">
					03
				</div>
			</div>
		</div>
	);
}
