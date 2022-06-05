const shapeClasses =
	'text-white transition-all duration-500 bg-indigo-600 rounded-lg h-14 flex justify-center items-center';

export default function FlexBasis() {
	return (
		<div className="flex flex-row flex-wrap gap-3 border-2 border-indigo-300 h-full p-3 rounded-lg">
			<h1 className="w-full text-indigo-500 font-bold text-2xl">Flex Basis</h1>

			<div
				className={`basis-[70%] lg:basis-1/4 hover:basis-5/12 ${shapeClasses}`}
			>
				01
			</div>
			<div
				className={`basis-full lg:basis-1/4 hover:basis-4/12 ${shapeClasses}`}
			>
				02
			</div>
			<div className={`basis-32 lg:basis-20 hover:basis-20 ${shapeClasses}`}>
				03
			</div>
			<div
				className={`basis-full lg:basis-1/5 hover:basis-4/12 ${shapeClasses}`}
			>
				04
			</div>
		</div>
	);
}
