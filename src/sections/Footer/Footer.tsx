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
			{ link: "#services1", label: "Front-End Apps", target: "_self" },
			{ link: "#services2", label: "Back-End Apps", target: "_self" },
			{ link: "#services3", label: "Mobile Apps", target: "_self" },
			{ link: "#services4", label: "Cross-Platform Apps", target: "_self" },
		],
	},
	{
		header: "PROJECTS",
		links: [
			{
				link: "https://www.instagram.com/p/CsZptdLyFkk/?img_index=1",
				label: "Admin Panel",
				target: "_blank",
			},
			{
				link: "https://www.instagram.com/p/CsVddjDupMw/?img_index=1",
				label: "Sozluk",
				target: "_blank",
			},
			{
				link: "https://www.instagram.com/p/CsY7aKcP5d0/",
				label: "Landing Page",
				target: "_blank",
			},
		],
	},
	{
		header: "COMPANY",
		links: [
			{ link: "/", label: "Home", target: "_self" },
			{
				link: "https://www.instagram.com/agajansahatov/",
				label: "Founder",
				target: "_blank",
			},
			{ link: "#section-showcase", label: "Why Choose Us?", target: "_self" },
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
										<a href={link.link} target={link.target}>
											{link.label}
										</a>
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
