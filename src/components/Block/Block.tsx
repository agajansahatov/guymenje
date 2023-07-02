import { ReactNode } from "react";
import styles from "./Block.module.css";

interface Props {
	color?: "light" | "dark";
	direction?: "left" | "right";
	children: ReactNode;
	className?: string;
}

// When Block component is used, it's better to pass BlockHeader as its child.
const Block = ({ color = "light", direction, children, className }: Props) => {
	let classNames = [styles["block"]];
	if (color === "dark") {
		classNames.push(styles["block--dark"]);
		classNames.push(styles[`block--skewed-${direction}`]);
	}
	if (className) classNames.push(className);
	return (
		<section className={classNames.join(" ")}>
			<div className={styles["container"]}>{children}</div>
		</section>
	);
};

export default Block;
