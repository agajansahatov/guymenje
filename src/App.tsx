import Block from "./components/Block/index";
import BlockHeader from "./components/Block/BlockHeader";

const App = () => {
	return (
		<>
			<Block color="dark" direction="right">
				<BlockHeader heading="Heading">
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
						odit voluptatibus commodi similique dolor molestiae nostrum in
						perspiciatis est quis.
					</p>
				</BlockHeader>
				<p>Body</p>
			</Block>
			<Block>
				<BlockHeader heading="Heading">
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
						odit voluptatibus commodi similique dolor molestiae nostrum in
						perspiciatis est quis.
					</p>
				</BlockHeader>
				<p>Body</p>
			</Block>
			<Block color="dark" direction="left">
				<BlockHeader heading="Heading">
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
						odit voluptatibus commodi similique dolor molestiae nostrum in
						perspiciatis est quis.
					</p>
				</BlockHeader>
				<p>Body</p>
			</Block>
			<Block>
				<BlockHeader heading="Heading">
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
						odit voluptatibus commodi similique dolor molestiae nostrum in
						perspiciatis est quis.
					</p>
				</BlockHeader>
				<p>Body</p>
			</Block>
		</>
	);
};

export default App;
