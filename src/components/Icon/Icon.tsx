import styles from "./Icon.module.css";
import Icons from "../../assets/icons.svg";

interface Props {
	color: "primary" | "accent" | "white";
	size?: "small";
	name: string;
}

const Icon = ({ color = "primary", size, name }: Props) => {
	let classNames = [styles["icon"], styles[`icon--${color}`]];
	if (size) classNames.push(styles["icon--small"]);

	return (
		<svg className={classNames.join(" ")}>
			<use xlinkHref={`${Icons}#${name}`}></use>
		</svg>
	);
};

export default Icon;
