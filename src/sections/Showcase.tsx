import { IShowcase } from "../interfaces";
import Features from "./Features";

interface Props {
	heading: string;
	headingBody: string;
	showCases: IShowcase[];
	useAOS: boolean;
}

const Showcase = ({ heading, headingBody, showCases, useAOS }: Props) => {
	return (
		<Features
			heading={heading}
			headingBody={headingBody}
			features={showCases}
			useAOS={useAOS}
		/>
	);
};

export default Showcase;
