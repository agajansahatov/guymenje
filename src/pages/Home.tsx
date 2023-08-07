import Navbar from "../components/Navbar";
import Banner from "../sections/Banner";
import Contact from "../sections/Contact/Contact";
import Expertise from "../sections/Expertise";
import Features from "../sections/Features";
import Footer from "../sections/Footer";
import Testimonials from "../sections/Testimonials";
import ScrollToTopBtn from "./../components/ScrollToTopBtn/index";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { getFeatures } from "../services/features";
import { getShowCases } from "../services/showCases";
import { getExpertises } from "../services/expertises";
import { getCustomers } from "../services/customers";

const Home = () => {
	useEffect(() => {
		AOS.init({ duration: 850 });
	}, []);

	return (
		<>
			<header>
				<Navbar />
				<Banner />
			</header>
			<main>
				<Features
					label="Services"
					heading="Get your apps built for any device"
					headingBody="You've got the idea, we've got the expertise. From a wide variety of frameworks and technologies, our company can help turn your idea into a reality. With constant changes happening in the digital world, it is vital to stay on top of developing technologies. We can make it happen for you."
					features={getFeatures()}
					useAOS={true}
					id="section-services"
				/>
				<Expertise
					heading="Common Technologies We Use"
					expertises={getExpertises()}
					id="section-expertise"
				/>
				<Features
					label="Showcase"
					heading="Why People Choose Us?"
					headingBody="Our clients love how we always strive to fulfill their core needs. Here is what differentiates us from the rest"
					features={getShowCases()}
					useAOS={true}
					id="section-showcase"
				/>
				<Testimonials
					heading="What our Customers are Saying"
					headingBody="We are delighted to have such happy and satisfied customers."
					customers={getCustomers()}
					useAOS={true}
				/>
				<Contact />
			</main>
			<footer>
				<ScrollToTopBtn />
				<Footer />
			</footer>
		</>
	);
};

export default Home;
