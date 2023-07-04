import { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
	children: ReactNode;
	className?: string;
	color?: "primary" | "secondary" | "accent" | "outline";
	style?: "normal" | "block" | "stretched";
	type: "button" | "link";
	onClick?: () => void;
	href?: string;
	target?: "_self" | "_blank" | "_parent" | "_top";
}

const Button = ({
	children,
	className,
	color = "primary",
	style,
	type,
	onClick,
	href,
	target = "_self",
}: Props) => {
	let classNames = [styles["btn"], styles["btn--" + color]];
	if (style && style !== "normal") classNames.push(styles["btn--" + style]);
	if (className) classNames.push(className);

	if (type === "link") {
		return (
			<a href={href} className={classNames.join(" ")} target={target}>
				{children}
			</a>
		);
	}

	return (
		<button type="button" className={classNames.join(" ")} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
