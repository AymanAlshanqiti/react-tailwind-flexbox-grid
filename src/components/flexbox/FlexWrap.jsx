const shapeClasses =
	'bg-indigo-600 h-14 w-3/12 flex justify-center items-center rounded-lg text-white';
const itemClasses = 'w-full border p-3 rounded-lg gap-3 text-center';
const tagClasses = 'bg-slate-100 px-2 rounded-md';
const tagContainerClasses = 'flex gap-2 text-indigo-500';

export default function FlexWrap() {
	return (
		<div className="flex flex-wrap gap-3 border-2 border-indigo-300 h-full p-3 rounded-lg">
			<h1 className="w-full text-indigo-500 font-bold text-2xl">Flex Wrap</h1>

			<pre className={tagContainerClasses}>
				1.
				<span className={tagClasses}>flex-nowrap</span>
			</pre>
			<div className={`flex flex-nowrap ${itemClasses}`}>
				<div className={shapeClasses}>01</div>
				<div className={shapeClasses}>02</div>
				<div className={shapeClasses}>03</div>
				<div className={shapeClasses}>04</div>
				<div className={shapeClasses}>05</div>
			</div>

			<pre className={tagContainerClasses}>
				2.
				<span className={tagClasses}>flex-wrap</span>
			</pre>
			<div className={`flex flex-wrap ${itemClasses}`}>
				<div className={shapeClasses}>01</div>
				<div className={shapeClasses}>02</div>
				<div className={shapeClasses}>03</div>
				<div className={shapeClasses}>04</div>
				<div className={shapeClasses}>05</div>
			</div>

			<pre className={tagContainerClasses}>
				3.
				<span className={tagClasses}>flex-wrap-reverse</span>
			</pre>
			<div className={`flex flex-wrap-reverse ${itemClasses}`}>
				<div className={shapeClasses}>01</div>
				<div className={shapeClasses}>02</div>
				<div className={shapeClasses}>03</div>
				<div className={shapeClasses}>04</div>
				<div className={shapeClasses}>05</div>
			</div>
		</div>
	);
}
