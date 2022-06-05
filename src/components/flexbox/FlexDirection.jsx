const shapeClasses =
	'bg-indigo-600 h-14 w-14 flex justify-center items-center rounded-lg text-white';
const itemClasses = 'w-full border p-3 rounded-lg gap-3 text-center';
const tagClasses = 'bg-slate-100 px-2 rounded-md';
const tagContainerClasses = 'flex gap-2 text-indigo-500';

export default function FlexDirection() {
	return (
		<div className="flex flex-wrap gap-3 border-2 border-indigo-300 h-full p-3 rounded-lg">
			<h1 className="w-full text-indigo-500 font-bold text-2xl">
				Flex Direction
			</h1>
			<pre className={tagContainerClasses}>
				1.
				<span className={tagClasses}>flex-row</span>
			</pre>
			<div className={`flex flex-row ${itemClasses}`}>
				<div className={shapeClasses}>01</div>
				<div className={shapeClasses}>02</div>
				<div className={shapeClasses}>03</div>
			</div>

			<pre className={tagContainerClasses}>
				2.
				<span className={tagClasses}>flex-row-reverse</span>
			</pre>
			<div className={`flex flex-row-reverse ${itemClasses}`}>
				<div className={shapeClasses}>01</div>
				<div className={shapeClasses}>02</div>
				<div className={shapeClasses}>03</div>
			</div>

			<pre className={tagContainerClasses}>
				3.
				<span className={tagClasses}>flex-col</span>
			</pre>
			<div className={`flex flex-col ${itemClasses}`}>
				<div className={shapeClasses}>01</div>
				<div className={shapeClasses}>02</div>
				<div className={shapeClasses}>03</div>
			</div>

			<pre className={tagContainerClasses}>
				4.
				<span className={tagClasses}>flex-col-reverse</span>
			</pre>
			<div className={`flex flex-col-reverse ${itemClasses}`}>
				<div className={shapeClasses}>01</div>
				<div className={shapeClasses}>02</div>
				<div className={shapeClasses}>03</div>
			</div>
		</div>
	);
}
