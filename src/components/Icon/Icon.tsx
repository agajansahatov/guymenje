import styles from "./Icon.module.css";
import icons from "../../assets/icons.svg";

interface Props {
	type: string;
	color: string;
	container: boolean;
	classes: string;
}

const Icon = ({ classes, type, color, container }: Props) => {
	const icon = (
		<svg
			className={[styles["icon"], styles[`icon--${color}`], classes].join(" ")}>
			<use xlinkHref={`${icons}#${type}`}></use>
		</svg>
	);

	if (!container) return icon;

	return <span className={styles["icon-container"]}>{icon}</span>;
};

export default Icon;
