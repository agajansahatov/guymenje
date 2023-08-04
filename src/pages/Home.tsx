import Navbar from "../components/Navbar";
import Banner from "../sections/Banner";
import Contact from "../sections/Contact/Contact";
import Expertise from "../sections/Expertise";
import Features from "../sections/Features";
import Footer from "../sections/Footer";
import Showcase from "../sections/Showcase";
import Testimonials from "../sections/Testimonials";
import ScrollToTopBtn from "./../components/ScrollToTopBtn/index";

const Home = () => {
	return (
		<>
			<header>
				<Navbar />
				<Banner />
			</header>
			<main>
				<Features />
				<Expertise />
				<Showcase />
				<Testimonials />
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
