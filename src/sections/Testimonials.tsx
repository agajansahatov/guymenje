import Block from "../components/Block";
import BlockHeader from "../components/Block/BlockHeader";
import Testimonial from "../components/Testimonial";
import { ICustomer } from "../interfaces";
interface Props {
	heading: string;
	headingBody: string;
	customers: ICustomer[];
	useAOS: boolean;
	id?: string;
}

const Testimonials = ({
	heading,
	headingBody,
	customers,
	useAOS,
	id,
}: Props) => {
	return (
		<Block id={id}>
			<BlockHeader dataAos={useAOS ? "fade-up" : ""}>
				<h2>{heading}</h2>
				<p>{headingBody}</p>
			</BlockHeader>
			<Testimonial customers={customers} dataAos={useAOS ? "fade-up" : ""} />
		</Block>
	);
};

export default Testimonials;
