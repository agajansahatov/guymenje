import Block from "../components/Block";
import BlockHeader from "../components/Block/BlockHeader";
import Testimonial from "../components/Testimonial";
import { ICustomer } from "../interfaces";
interface Props {
	heading: string;
	headingBody: string;
	customers: ICustomer[];
	useAOS: boolean;
}

const Testimonials = ({ heading, headingBody, customers, useAOS }: Props) => {
	return (
		<Block>
			<BlockHeader dataAos={useAOS ? "fade-up" : ""}>
				<h2>{heading}</h2>
				<p>{headingBody}</p>
			</BlockHeader>
			<Testimonial customers={customers} dataAos={useAOS ? "fade-up" : ""} />
		</Block>
	);
};

export default Testimonials;
