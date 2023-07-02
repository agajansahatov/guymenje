import { ReactNode } from "react";
import styles from "./Media.module.css";

interface Props {
	image: ReactNode;
	title: ReactNode;
	titleStyles?: string;
	children: ReactNode;
}

const Media = ({ children, image, title, titleStyles }: Props) => {
	let titleClassNames = [styles["media__title"]];
	if (titleStyles) titleClassNames.push(titleStyles);

	return (
		<div className={styles["media"]}>
			<div className={styles["media__image"]}>{image}</div>
			<div className={styles["media__body"]}>
				<h3 className={titleClassNames.join(" ")}>{title}</h3>
				{children}
			</div>
		</div>
	);
};

export default Media;
