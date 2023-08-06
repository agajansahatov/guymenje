import Block from "../components/Block";
import BlockHeader from "../components/Block/BlockHeader";
import Feature from "../components/Feature";

const features = [
	{
		heading: "WEB Development",
		iconName: "web",
		imageUrl: "/images/web.svg",
		link: "#",
		content:
			"We create beautiful, responsive and incredibly fast websites and web apps. From planning to design and development – our goal is to build high-performing and award-winning websites. Get a perfect website to start or to keep your business moving forward with our help.",
	},
	{
		heading: "Server-side Development",
		iconName: "server",
		imageUrl: "/images/server.svg",
		link: "#",
		content:
			"This type of programming (also called back-end development) is important because web browsers, or clients, interact with web servers to retrieve information. To create incredible user experiences, our company develops the perfect back-end solution for your business ambitions.",
	},
	{
		heading: "Mobile App Development",
		iconName: "mobile",
		imageUrl: "/images/mobile.svg",
		link: "#",
		content:
			"Growing with the times is a must for every company that wishes to stay up-to-date with the public, and mobile apps have taken the world by storm. You can reach out to clients on android and ios platforms with our fastest development process.",
	},
	{
		heading: "Cross-Platform Development",
		iconName: "devices",
		imageUrl: "/images/devices.png",
		link: "#",
		content:
			"Get a multi-device app faster with a single strike, because we build beautiful web, android and ios apps from a single codebase. The development of a cross-platform app is a perfect solution for companies that face budget or time constraints.",
	},
];

interface Props {
	useAOS: boolean;
}

const Features = ({ useAOS }: Props) => {
	return (
		<Block>
			<BlockHeader dataAos={useAOS ? "fade-up" : ""}>
				<h2>Get your apps built for any device</h2>
				<p>
					You've got the idea, we've got the expertise. From a wide variety of
					frameworks and technologies, our company can help turn your idea into
					a reality. With constant changes happening in the digital world, it is
					vital to stay on top of developing technologies. We can make it happen
					for you.
				</p>
			</BlockHeader>
			{features.map((feature, index) => (
				<Feature
					heading={feature.heading}
					iconName={feature.iconName}
					imageUrl={feature.imageUrl}
					link={feature.link}
					key={index}
					dataAos={
						useAOS ? (index % 2 === 0 ? "fade-up-right" : "fade-up-left") : ""
					}>
					{feature.content}
				</Feature>
			))}
		</Block>
	);
};

export default Features;
