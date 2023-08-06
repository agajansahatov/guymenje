import Navbar from "../components/Navbar";
import Banner from "../sections/Banner";
import Contact from "../sections/Contact/Contact";
import Expertise from "../sections/Expertise";
import Features from "../sections/Features";
import Footer from "../sections/Footer";
import Showcase from "../sections/Showcase";
import Testimonials from "../sections/Testimonials";
import ScrollToTopBtn from "./../components/ScrollToTopBtn/index";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
				<Features useAOS={true} />
				<Expertise />
				<Showcase useAOS={true} />
				<Testimonials useAOS={true} />
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
