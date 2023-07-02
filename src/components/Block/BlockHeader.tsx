import { ReactNode } from "react";
import styles from "./Block.module.css";

interface Props {
	className?: string;
	children: ReactNode;
}

const BlockHeader = ({ className, children }: Props) => {
	// If you want to remove the centered property, just remove this header.block__header
	let classNames = [styles["block__header"]];

	if (className) classNames.push(className);

	return <header className={classNames.join(" ")}>{children}</header>;
};

export default BlockHeader;
