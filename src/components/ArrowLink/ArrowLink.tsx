import styles from "./ArrowLink.module.css";
import sprite from "../../assets/icons.svg";

const ArrowLink = () => {
	return (
		<a href="#" className={styles["link-arrow"]}>
			Learn More
			<svg className={styles["icon"]}>
				<use xlinkHref={`${sprite}#arrow-right`}></use>
			</svg>
		</a>
	);
};

export default ArrowLink;
