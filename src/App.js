import Flex from './components/flexbox/Flex';
import FlexBasis from './components/flexbox/FlexBasis';
import FlexDirection from './components/flexbox/FlexDirection';
import FlexGrow from './components/flexbox/FlexGrow';
import FlexShrink from './components/flexbox/FlexShrink';
import FlexWrap from './components/flexbox/FlexWrap';
import Order from './components/flexbox/Order';
import GridColumnsStartEnd from './components/grid/GridColumnsStartEnd';
import GridTemplateColumns from './components/grid/GridTemplateColumns';
import GridTemplateRows from './components/grid/GridTemplateRows';

function App() {
	return (
		<div className="m-5 space-y-5">
			<h1 className="text-indigo-700 font-bold text-4xl">Flexbox</h1>
			<FlexBasis />
			<FlexDirection />
			<FlexWrap />
			<Flex />
			<FlexGrow />
			<FlexShrink />
			<Order />

			<div className="border-y-2" />
			<h1 className="text-rose-700 font-bold text-4xl">Grid</h1>

			<GridTemplateColumns />
			<GridColumnsStartEnd />
			<GridTemplateRows />
		</div>
	);
}

export default App;
