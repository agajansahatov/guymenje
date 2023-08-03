import Block from "../components/Block";
import BlockHeader from "../components/Block/BlockHeader";
import Feature from "../components/Feature";

const showCases = [
	{
		heading: "One Code, Multiple Platforms",
		iconName: "web",
		imageUrl: "/images/cross-platform.svg",
		link: "#",
		content:
			"The benefit here is from sharing a unified app business logic and up to almost 100% code reuse to target several platforms simultaneously: web, mobile ios and android platforms.",
	},
	{
		heading: "Easy to Maintain and Simply Fast Applications",
		iconName: "easy",
		imageUrl: "/images/maintainable.svg",
		link: "#",
		content:
			"We design maintainable and extensible object-oriented softwares with reduced complexity. This helps us to develop the apps in a faster period, and give more focus on the speed of the applications.",
	},
	{
		heading: "Minimum Cost and Quicker Development Process",
		iconName: "efficiency",
		imageUrl: "/images/efficiency.svg",
		link: "#",
		content:
			"Cross-platform development cuts project costs without sacrificing app functionality or native-like interfaces. This method is 20-40% faster to create and deploy to app stores. Thus, we have the lowest fees in the industry, providing you with maximum value in the fastest time.",
	},
	{
		heading: "Flexibility and Trusted Delivery",
		iconName: "trust",
		imageUrl: "/images/trustworthy.svg",
		link: "#",
		content:
			"We provide multiple payment terms and flexible agreements to enable you to grow up your business the way you want. Also, we guarantee quality assurance by delivering bug-free applications to have your end user's most pleasant user experience.",
	},
	{
		heading: "24/7 Expert Support",
		iconName: "clock",
		imageUrl: "/images/support.svg",
		link: "#",
		content:
			"Our dedicated support team works 24/7 to resolve all of your queries over the phone or email, no matter where you are located. So, feel free to contact us and ask any questions.",
	},
];

const Showcase = () => {
	return (
		<Block>
			<BlockHeader>
				<h2>Why People Choose Us?</h2>
				<p>
					Our clients love how we always strive to fulfill their core needs.
					Here is what differentiates us from the rest
				</p>
			</BlockHeader>
			{showCases.map((sCase, index) => (
				<Feature
					heading={sCase.heading}
					iconName={sCase.iconName}
					imageUrl={sCase.imageUrl}
					link={sCase.link}
					key={index}>
					{sCase.content}
				</Feature>
			))}
		</Block>
	);
};

export default Showcase;
