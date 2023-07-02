import Icon from "../Icon";
import styles from "./Quote.module.css";
import Media from "./../Media/index";

interface Props {
	author: string;
	children: string;
	company: string;
}

const Quote = ({ author, children, company }: Props) => {
	const mediaImage = (
		<Icon name="line" color="primary" className={styles["quote__line"]} />
	);

	return (
		<blockquote className={styles["quote"]}>
			<p className={styles["quote__text"]}>{children}</p>
			<div>
				<Media
					image={mediaImage}
					title={author}
					titleStyles={styles["quote__author"]}>
					<p className={styles["quote__company"]}>{company}</p>
				</Media>
			</div>
		</blockquote>
	);
};

export default Quote;
