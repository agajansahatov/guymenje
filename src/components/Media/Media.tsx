import styles from "./Media.module.css";
import Icons from "../../assets/icons.svg";

const Media = () => {
	return (
		<div className={styles["media"]}>
			<div className={styles["media__image"]}>
				<svg className={[styles["icon"], styles["icon--primary"]].join(" ")}>
					<use xlinkHref={Icons + "#clock"}></use>
				</svg>
			</div>
			<div className={styles["media__body"]}>
				<h3 className={styles["media__title"]}>The Media Component</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, id ab!
					Iusto error eius laboriosam modi provident corrupti, culpa eos?
				</p>
			</div>
		</div>
	);
};

export default Media;
