import styles from "./Icon.module.css";
import Icons from "../../assets/icons.svg";

interface Props {
	className?: string;
	color: "primary" | "accent" | "white";
	size?: "small";
	name: string;
}

const Icon = ({ className, color = "primary", size, name }: Props) => {
	let classNames = [styles["icon"], styles[`icon--${color}`]];
	if (size) classNames.push(styles["icon--small"]);
	if (className) classNames.push(className);

	return (
		<svg className={classNames.join(" ")}>
			<use xlinkHref={`${Icons}#${name}`}></use>
		</svg>
	);
};

export default Icon;
