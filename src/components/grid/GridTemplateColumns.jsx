const shapeClasses =
	'bg-rose-600 h-14 grid justify-center items-center rounded-lg text-white';
const itemClasses =
	'grid grid-cols-1 md:grid-cols-3 hover:grid-cols-4 w-full border p-3 rounded-lg gap-4 text-center';
const tagClasses = 'bg-slate-100 px-2 py-1 rounded-md';
const tagContainerClasses = 'my-3 text-rose-500';

export default function GridTemplateColumns() {
	return (
		<div className="border-2 border-rose-300 h-full p-3 rounded-lg">
			<h1 className="w-full text-rose-500 font-bold text-2xl">
				Specifying the columns in a grid
			</h1>
			<pre className={tagContainerClasses}>
				<span className={tagClasses}>grid-cols-[number]</span>
			</pre>
			<div className={itemClasses}>
				<div className={shapeClasses}>01</div>
				<div className={shapeClasses}>02</div>
				<div className={shapeClasses}>03</div>
				<div className={shapeClasses}>04</div>
				<div className={shapeClasses}>05</div>
				<div className={shapeClasses}>06</div>
				<div className={shapeClasses}>07</div>
				<div className={shapeClasses}>08</div>
				<div className={shapeClasses}>09</div>
			</div>
		</div>
	);
}
