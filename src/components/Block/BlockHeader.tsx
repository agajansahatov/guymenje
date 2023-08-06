import { ReactNode } from "react";
import styles from "./Block.module.css";

interface Props {
	className?: string;
	children: ReactNode;
	dataAos?: string;
}

const BlockHeader = ({ className, children, dataAos = "" }: Props) => {
	// If you want to remove the centered property, just remove this header.block__header
	let classNames = [styles["block__header"]];

	if (className) classNames.push(className);

	const AosAttributes = dataAos ? { "data-aos": dataAos } : {};

	return (
		<header className={classNames.join(" ")} {...AosAttributes}>
			{children}
		</header>
	);
};

export default BlockHeader;
