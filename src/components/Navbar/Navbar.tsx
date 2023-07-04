import styles from "./Navbar.module.css";
import logo from "../../assets/logo-dark.svg";
import Collapsible from "../Collapsible";
import Icon from "./../Icon";

const Navbar = () => {
	const navItems = ["Services", "Our Expertise", "Projects", "About Us"];

	return (
		<nav>
			<Collapsible className={styles["navbar"]} isHidden={true}>
				<a aria-label="Güýmenje" className={styles["nav__header"]} href="/">
					<img className={styles["nav__logo"]} src={logo} alt="" />
				</a>
				<span>
					<Icon
						name="toggler"
						color="white"
						className={styles["nav__toggler"]}
					/>
				</span>
				<ul className={"list " + styles["nav__list"]}>
					{navItems.map((item: string, index: number) => (
						<li className={styles["nav__item"]} key={"nav-item" + index}>
							<a href="#">{item}</a>
						</li>
					))}
				</ul>
			</Collapsible>
		</nav>
	);
};

export default Navbar;
