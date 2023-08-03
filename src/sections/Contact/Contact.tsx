import Block from "../../components/Block";
import Callout from "../../components/Callout";
import styles from "./Contact.module.css";

const Contact = () => {
	return (
		<Block className={styles["section-contact"]}>
			<Callout />
		</Block>
	);
};

export default Contact;
