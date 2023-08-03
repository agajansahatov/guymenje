import ArrowLink from "./../ArrowLink";
import Icon from "./../Icon/index";
import IconContainer from "./../Icon/IconContainer";
import { ReactNode } from "react";
import Picture from "../Picture";
import styles from "./Feature.module.css";

interface Props {
	children: ReactNode;
	heading: string;
	iconName: string;
	imageUrl: string;
	link: string;
}

const Feature = ({ children, heading, iconName, imageUrl, link }: Props) => {
	const imageExtensionIndex = imageUrl.lastIndexOf(".") + 1;
	const imageExtension = imageUrl.substring(imageExtensionIndex);

	return (
		<article className={"grid grid--1x2 " + styles["feature"]}>
			<div className={styles["feature__content"]}>
				<IconContainer>
					<Icon color="primary" name={iconName} />
				</IconContainer>
				<h3 className={styles["feature__heading"]}>{heading}</h3>
				<p>{children}</p>
				<ArrowLink href={link}>Learn More</ArrowLink>
			</div>
			{/* Image Size: 1140x725 */}
			<Picture
				className={styles["feature__image"]}
				type={imageExtension === "svg" ? "regular" : "multi-source"}
				src={imageUrl}
			/>
		</article>
	);
};

export default Feature;
