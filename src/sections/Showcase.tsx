import { IFeature } from "../interfaces";
import Features from "./Features";

interface Props {
	heading: string;
	headingBody: string;
	showCases: IFeature[];
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
