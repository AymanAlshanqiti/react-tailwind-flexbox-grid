import Flex from './components/flexbox/Flex';
import FlexBasis from './components/flexbox/FlexBasis';
import FlexDirection from './components/flexbox/FlexDirection';
import FlexGrow from './components/flexbox/FlexGrow';
import FlexShrink from './components/flexbox/FlexShrink';
import FlexWrap from './components/flexbox/FlexWrap';

function App() {
	return (
		<div className="m-5 space-y-5">
			<FlexBasis />
			<FlexDirection />
			<FlexWrap />
			<Flex />
			<FlexGrow />
			<FlexShrink />
		</div>
	);
}

export default App;
