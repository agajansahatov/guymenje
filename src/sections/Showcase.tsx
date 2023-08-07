import { IShowcase } from "../interfaces";
import Features from "./Features";

interface Props {
	heading: string;
	headingBody: string;
	showCases: IShowcase[];
	useAOS: boolean;
	id?: string;
}

const Showcase = ({ heading, headingBody, showCases, useAOS, id }: Props) => {
	return (
		<Features
			heading={heading}
			headingBody={headingBody}
			features={showCases}
			useAOS={useAOS}
			id={id}
		/>
	);
};

export default Showcase;
