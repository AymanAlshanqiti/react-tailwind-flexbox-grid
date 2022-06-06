const itemClasses =
	'grid grid-rows-2 md:grid-rows-4 grid-flow-col w-full border p-3 rounded-lg gap-4 text-center';
const tagClasses = 'bg-slate-100 px-2 py-1 m-2 rounded-md';
const tagContainerClasses = 'my-3 text-rose-500';

export default function GridTemplateRows() {
	return (
		<div className="border-2 border-rose-300 h-full p-3 rounded-lg">
			<h1 className="w-full text-rose-500 font-bold text-2xl">
				Grid Template Rows
			</h1>
			<pre className={tagContainerClasses}>
				<span className={tagClasses}>grid-rows-[number]</span>
			</pre>
			<div className={itemClasses}>
				<div className="bg-rose-600 h-14 grid justify-center items-center rounded-lg text-white">
					01
				</div>
				<div className="bg-rose-600 h-14 grid justify-center items-center rounded-lg text-white">
					02
				</div>
				<div className="bg-rose-600 h-14 grid justify-center items-center rounded-lg text-white">
					03
				</div>
				<div className="bg-rose-600 h-14 grid justify-center items-center rounded-lg text-white">
					04
				</div>
				<div className="bg-rose-600 h-14 grid justify-center items-center rounded-lg text-white">
					05
				</div>
				<div className="bg-rose-600 h-14 grid justify-center items-center rounded-lg text-white">
					06
				</div>
				<div className="bg-rose-600 h-14 grid justify-center items-center rounded-lg text-white">
					07
				</div>
				<div className="bg-rose-600 h-14 grid justify-center items-center rounded-lg text-white">
					08
				</div>
				<div className="bg-rose-600 h-14 grid justify-center items-center rounded-lg text-white">
					09
				</div>
			</div>
		</div>
	);
}
