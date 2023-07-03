import styles from "./Testimonial.module.css";
import Quote from "./../Quote";
import Icon from "./../Icon";
import Picture from "./../Picture";
import { ICustomer } from "../../services/customers";

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
					<Icon
						name="quotes"
						container={true}
						backgroundColor="accent"
						color="white"
						size="small"
						containerClassName={styles["testimonial__icon-container"]}
					/>
				</div>
				<Quote author={name} company={company}>
					{comment}
				</Quote>
			</div>
		</div>
	);
};

export default Testimonial;
