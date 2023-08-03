import Block from "../components/Block";
import BlockHeader from "../components/Block/BlockHeader";
import Testimonial from "../components/Testimonial";
import { getCustomers } from "../services/customers";

const Testimonials = () => {
	return (
		<Block>
			<BlockHeader>
				<h2>What our Customers are Saying</h2>
				<p>We are delighted to have such happy and satisfied customers.</p>
			</BlockHeader>
			<Testimonial customers={getCustomers()} />
		</Block>
	);
};

export default Testimonials;
