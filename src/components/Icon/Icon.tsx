import styles from "./Icon.module.css";

import clock from "../../assets/icons.svg";

const Icon = () => {
	return (
		<span className={styles["icon-container"]}>
			<svg className={[styles["icon"], styles["icon--primary"]].join(" ")}>
				<use xlinkHref={`${clock}#clock`}></use>
			</svg>
		</span>
	);
};

export default Icon;
