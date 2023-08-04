import Collapsible from "../../components/Collapsible";
import Block from "./../../components/Block/index";
import styles from "./Footer.module.css";
import IconContainer from "./../../components/Icon/IconContainer";
import Icon from "../../components/Icon";
import logoDark from "./../../assets/logo-dark.svg";

const footerLinks = [
	{
		header: "SERVICES",
		links: [
			{ link: "#", label: "Front-End Apps" },
			{ link: "#", label: "Back-End Apps" },
			{ link: "#", label: "Mobile Apps" },
			{ link: "#", label: "Cross-Platform Apps" },
		],
	},
	{
		header: "PROJECTS",
		links: [
			{ link: "#", label: "Admin Panel" },
			{ link: "#", label: "Sozluk" },
			{ link: "#", label: "Landing Page" },
		],
	},
	{
		header: "COMPANY",
		links: [
			{ link: "#", label: "Home" },
			{ link: "#", label: "Founder" },
			{ link: "#", label: "Why Choose Us?" },
		],
	},
];

const Footer = () => {
	return (
		<Block color="dark" className={styles["footer"]}>
			<div className={"grid " + styles["footer__articles"]}>
				{footerLinks.map((footerLink, index) => (
					<article key={index}>
						<Collapsible isHidden={false} className={styles["footer__article"]}>
							<h2 className={styles["footer__heading"]}>{footerLink.header}</h2>
							<div>
								<IconContainer className={styles["footer__toggler-container"]}>
									<Icon
										color="white"
										name="angle-down"
										className={styles["footer__toggler"]}
									/>
								</IconContainer>
							</div>
							<ul className="list">
								{footerLink.links.map((link, i) => (
									<li key={i}>
										<a href={link.link}>{link.label}</a>
									</li>
								))}
							</ul>
						</Collapsible>
					</article>
				))}

				<article className={styles["footer__brand"]}>
					<img src={logoDark} alt="" />
					<p className={styles["footer__copyright"]}>
						Copyright &copy; 2023 Agajan&nbsp;Sahatov
					</p>
					<p className={styles["footer__copyright"]}>All Rights Reserved</p>
				</article>
			</div>
		</Block>
	);
};

export default Footer;
