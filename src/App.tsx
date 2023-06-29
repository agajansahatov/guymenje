import Button from "./components/Button";
import ArrowLink from "./components/ArrowLink";

const App = () => {
	return (
		<>
			<Button type="button" color="primary" style="stretched">
				Click Me
			</Button>
			<Button
				type="link"
				color="accent"
				style="stretched"
				href="https://www.guymenje.com"
				target="_blank">
				Guymenje
			</Button>
			<ArrowLink href="https://guymenje.com" target="_blank">
				Learn More
			</ArrowLink>
		</>
	);
};

export default App;
