import ArrowLink from "./../ArrowLink";
import Icon from "./../Icon/index";

interface Props {
	content: string;
	heading: string;
	iconName: string;
	imageUrl: string;
	link: string;
}

const Feature = ({ content, heading, iconName, imageUrl, link }: Props) => {
	return (
		<article className="grid grid--1x2 feature">
			<div className="feature__content">
				<span className="icon-container">
					<svg className="icon icon--primary">
						<use xlinkHref="assets/sprite.svg#i-mobile"></use>
					</svg>
				</span>
				<Icon name={iconName} container={true} color="primary" />
				<h3 className="feature__heading">{heading}</h3>
				<p>{content}</p>
				<ArrowLink href={link}>Learn More</ArrowLink>
			</div>
			<img className="feature__image" src={imageUrl} alt="" />
		</article>
	);
};

export default Feature;
