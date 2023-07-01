import styles from "./Card.module.css";
import { ReactNode } from "react";

interface Props {
	type: "primary" | "secondary";
	header: string;
	children: ReactNode;
}

const Card = ({ type, header, children }: Props) => {
	return (
		<div className={[styles["card"], styles[`card--${type}`]].join(" ")}>
			<header className={styles["card__header"]}>{header}</header>
			<div className={styles["card__body"]}>{children}</div>
		</div>
	);
};

export default Card;
