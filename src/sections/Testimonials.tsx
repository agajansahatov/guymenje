import Block from "../components/Block";
import BlockHeader from "../components/Block/BlockHeader";
import Testimonial from "../components/Testimonial";
import { getCustomers } from "../services/customers";
interface Props {
	useAOS: boolean;
}

const Testimonials = ({ useAOS }: Props) => {
	return (
		<Block>
			<BlockHeader dataAos={useAOS ? "fade-up" : ""}>
				<h2>What our Customers are Saying</h2>
				<p>We are delighted to have such happy and satisfied customers.</p>
			</BlockHeader>
			<Testimonial
				customers={getCustomers()}
				dataAos={useAOS ? "fade-up" : ""}
			/>
		</Block>
	);
};

export default Testimonials;
