import styles from "./ArrowLink.module.css";
import Icons from "../../assets/icons.svg";
import { ReactNode } from "react";

interface Props {
	href: string;
	children: ReactNode;
	target?: "_self" | "_blank" | "_parent" | "_top";
}
const ArrowLink = ({ href, children, target = "_self" }: Props) => {
	return (
		<a href={href} className={styles["link-arrow"]} target={target}>
			{children}
			<svg className={styles["icon"]}>
				<use xlinkHref={`${Icons}#arrow-right`}></use>
			</svg>
		</a>
	);
};

export default ArrowLink;
