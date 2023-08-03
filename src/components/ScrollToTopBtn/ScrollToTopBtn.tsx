import Icon from "../Icon";
import IconContainer from "../Icon/IconContainer";
import styles from "./ScrollToTopBtn.module.css";

const ScrollToTopBtn = () => {
	return (
		<button id="scroll-progress" className={styles["scroll-to-top"]}>
			<IconContainer className={styles["scroll-to-top-icon"]}>
				<Icon color="white" name="arrow-up" />
			</IconContainer>
		</button>
	);
};

export default ScrollToTopBtn;
