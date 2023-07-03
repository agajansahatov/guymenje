import styles from "./Icon.module.css";
import Icons from "../../assets/icons.svg";

interface Props {
	backgroundColor?: "accent" | "dark";
	color: "primary" | "accent" | "white";
	container?: true;
	size?: "small";
	name: string;
	className?: string;
	containerClassName?: string;
}

const Icon = ({
	backgroundColor,
	color,
	container,
	containerClassName,
	size,
	name,
}: Props) => {
	let classNames = [styles["icon"], styles[`icon--${color}`]];
	if (size) classNames.push(styles["icon--small"]);

	const icon = (
		<svg className={classNames.join(" ")}>
			<use xlinkHref={`${Icons}#${name}`}></use>
		</svg>
	);

	if (!container) return icon;
	classNames = [styles["icon-container"]];
	if (backgroundColor)
		classNames.push(styles["icon-container--" + backgroundColor]);
	if (containerClassName) classNames.push(containerClassName);
	return <span className={classNames.join(" ")}>{icon}</span>;
};

export default Icon;
