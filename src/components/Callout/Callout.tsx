import styles from "./Callout.module.css";
import Collapsible from "./../Collapsible/index";
import Icon from "./../Icon/index";
import Button from "./../Button/Button";

function showContactInfo(label: string, strCopy: string) {
	window.alert(`${label}: ${strCopy}`);
}

const Callout = () => {
	return (
		<div className={[styles["callout"], styles["callout--primary"]].join(" ")}>
			<Collapsible isHidden={true} className="grid grid--1x2">
				<div className={styles["callout__content"]}>
					<h2 className={styles["callout__heading"]}>Have a project for us?</h2>
					<p>
						Our dedicated support team works 24/7 to resolve all of your queries
						over the phone or email, no matter where you are located. So, feel
						free to contact us and ask any questions.
					</p>
				</div>
				<Button
					color="secondary"
					style="stretched"
					className={styles["callout__toggler"]}
					type="button">
					Contact Us
				</Button>
				<div className={styles["contact-info"]}>
					<header className={styles["contact-info__header"]}>
						<Icon name="line" color="primary" />
						<p className={styles["contact-info__heading"]}>
							Let's build something great together!
						</p>
						<Icon name="line" color="primary" />
					</header>
					<a
						className={styles["contact-type"]}
						href="mailto:agajansahatov@hotmail.com">
						<Icon name="email" color="white" className={styles["icon"]} />
					</a>
					<button
						className={styles["contact-type"]}
						onClick={() => showContactInfo("Phone", "+86 132 5940 0802")}>
						<Icon name="call" color="white" className={styles["icon"]} />
					</button>
					<a
						className={styles["contact-type"]}
						href="https://www.instagram.com/guymenje.code"
						target="_blank">
						<Icon name="instagram" color="white" className={styles["icon"]} />
					</a>
					<a
						className={styles["contact-type"]}
						href="https://www.facebook.com/agajansahatov"
						target="_blank">
						<Icon name="facebook" color="white" className={styles["icon"]} />
					</a>
					<a
						className={styles["contact-type"]}
						href="https://twitter.com/AgajanSahatov"
						target="_blank">
						<Icon name="twitter" color="white" className={styles["icon"]} />
					</a>
					<a
						className={styles["contact-type"]}
						href="https://www.linkedin.com/in/agajansahatov"
						target="_blank">
						<Icon name="linkedin" color="white" className={styles["icon"]} />
					</a>
					<button
						className={styles["contact-type"]}
						onClick={() => showContactInfo("Whatsapp", "+86 132 5940 0802")}>
						<Icon name="whatsapp" color="white" className={styles["icon"]} />
					</button>
					<button
						className={styles["contact-type"]}
						onClick={() => showContactInfo("Wechat ID", "agajansahatov")}>
						<Icon name="wechat" color="white" className={styles["icon"]} />
					</button>
				</div>
			</Collapsible>
		</div>
	);
};

export default Callout;
