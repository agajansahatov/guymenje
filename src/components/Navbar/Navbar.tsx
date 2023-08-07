import styles from "./Navbar.module.css";
import logo from "../../assets/logo-dark.svg";
import Collapsible from "../Collapsible";
import Icon from "./../Icon";

const Navbar = () => {
	const navItems = [
		{
			label: "Services",
			link: "#section-services",
			target: "_self",
		},
		{
			label: "Our Expertise",
			link: "#section-expertise",
			target: "_self",
		},
		{
			label: "Projects",
			link: "https://github.com/Agajan-Sahatov?tab=repositories",
			target: "_blank",
		},
		{
			label: "About Us",
			link: "#section-showcase",
			target: "_self",
		},
	];

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
					{navItems.map((item, index) => (
						<li className={styles["nav__item"]} key={"nav-item" + index}>
							<a href={item.link} target={item.target}>
								{item.label}
							</a>
						</li>
					))}
				</ul>
			</Collapsible>
		</nav>
	);
};

export default Navbar;
