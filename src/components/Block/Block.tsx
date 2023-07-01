import { ReactNode } from "react";
import styles from "./Block.module.css";

interface Props {
	color?: "light" | "dark";
	direction?: "left" | "right";
	children: ReactNode;
}

const Block = ({ color = "light", direction, children }: Props) => {
	let classNames = [styles["block"]];
	if (color === "dark") {
		classNames.push(styles["block--dark"]);
		classNames.push(styles[`block--skewed-${direction}`]);
	}

	return (
		<section className={classNames.join(" ")}>
			<div className={styles["container"]}>
				{/* Should include a BlockHeader */}
				{children}
			</div>
		</section>
	);
};

export default Block;
