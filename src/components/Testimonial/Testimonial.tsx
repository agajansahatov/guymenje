import styles from "./Testimonial.module.css";
import Quote from "./../Quote";
import Icon from "./../Icon";
import Picture from "./../Picture";
import { ICustomer } from "../../services/customers";
import IconContainer from "./../Icon/IconContainer";

interface Props {
	customers: ICustomer[];
}

// Need to implement this component for multiple users
const Testimonial = ({ customers }: Props) => {
	const { name, photo, company, comment } = customers[0];
	return (
		<div className={[styles["card"], styles["testimonial"]].join(" ")}>
			<div className="grid grid--1x2">
				<div className={styles["testimonial__image-container"]}>
					<Picture src={photo} alt="A happy, smiling customer" />
					<IconContainer
						className={styles["testimonial__icon-container"]}
						color="accent">
						<Icon name="quotes" color="white" size="small" />
					</IconContainer>
				</div>
				<Quote author={name} company={company}>
					{comment}
				</Quote>
			</div>
		</div>
	);
};

export default Testimonial;
