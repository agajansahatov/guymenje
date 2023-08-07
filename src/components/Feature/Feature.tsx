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
	dataAos?: string;
	id?: string;
}

const Feature = ({
	children,
	heading,
	iconName,
	imageUrl,
	link,
	dataAos = "",
	id,
}: Props) => {
	const imageExtensionIndex = imageUrl.lastIndexOf(".") + 1;
	const imageExtension = imageUrl.substring(imageExtensionIndex);

	const AOSAttributes1 = dataAos ? { "data-aos": dataAos } : {};
	const AOSAttributes2 = dataAos
		? {
				"data-aos":
					dataAos === "fade-up-right" ? "fade-up-left" : "fade-up-right",
		  }
		: {};
	const idAtrr = id ? { id: id } : {};

	return (
		<article className={"grid grid--1x2 " + styles["feature"]} {...idAtrr}>
			<div className={styles["feature__content"]} {...AOSAttributes1}>
				<IconContainer>
					<Icon color="primary" name={iconName} />
				</IconContainer>
				<h3 className={styles["feature__heading"]}>{heading}</h3>
				<p>{children}</p>
				<ArrowLink href={link}>Learn More</ArrowLink>
			</div>
			{/* Image Size: 1140x725 */}
			<div {...AOSAttributes2}>
				<Picture
					className={styles["feature__image"]}
					type={imageExtension === "svg" ? "regular" : "multi-source"}
					src={imageUrl}
				/>
			</div>
		</article>
	);
};

export default Feature;
