import Testimonial from "./components/Testimonial";
import { getCustomers } from "./services/customers";

const App = () => {
	return <Testimonial customers={getCustomers()} />;
};

export default App;
