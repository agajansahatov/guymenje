import { useEffect, useState } from "react";
import Icon from "../Icon";
import IconContainer from "../Icon/IconContainer";
import styles from "./ScrollToTopBtn.module.css";

const ScrollToTopBtn = () => {
	const [display, setDisplay] = useState("none");
	const [scrollValue, setScrollValue] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			let pos =
				window.pageYOffset !== undefined
					? window.pageYOffset
					: (
							document.documentElement ||
							document.body.parentNode ||
							document.body
					  ).scrollTop;
			let height =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight;

			setScrollValue(Math.round((pos * 100) / height));

			if (pos > 100) {
				setDisplay("grid");
			} else {
				setDisplay("none");
			}
		};

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("onload", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const progress = `conic-gradient(#21f405 ${
		scrollValue + 1
	}%, #fff ${scrollValue}%)`;

	const handleClick = () => {
		window.scrollTo(0, 0);
		document.documentElement.scrollTop = 0;
		document.body.scrollTop = 0;
	};

	return (
		<button
			id="scroll-progress"
			className={styles["scroll-to-top"]}
			style={{ display: display, background: progress }}
			onClick={handleClick}>
			<IconContainer className={styles["scroll-to-top-icon"]}>
				<Icon color="white" name="arrow-up" />
			</IconContainer>
		</button>
	);
};

export default ScrollToTopBtn;
