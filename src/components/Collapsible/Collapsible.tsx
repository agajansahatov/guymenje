import styles from "./Collapsible.module.css";

const Collapsible = () => {
	return (
		<div
			className={[styles["collapsible"], styles["collapsible--expanded"]].join(
				" "
			)}>
			{/* Anything you want to show in the hidden mode */}
			<h2 className={styles["collapsible__toggler"]}>Expand</h2>

			{/* Anything you want to show in the expanded mode */}
			<div className={styles["collapsible__content"]}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, nemo modi
				doloribus quos consequatur iure delectus explicabo aliquid id incidunt
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
				repellendus eos obcaecati quis laborum impedit alias magni itaque
				repudiandae sint
			</div>
		</div>
	);
};

export default Collapsible;
