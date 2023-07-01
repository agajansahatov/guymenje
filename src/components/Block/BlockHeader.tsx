import { ReactNode } from "react";
import styles from "./Block.module.css";

interface Props {
	heading: string;
	children: ReactNode;
}

const BlockHeader = ({ heading, children }: Props) => {
	return (
		<header className={styles["block__header"]}>
			{/* If you want to remove the centered property, just remove this header.block__header */}
			<h2 className={styles["block__heading"]}>{heading}</h2>
			{children}
		</header>
	);
};

export default BlockHeader;
