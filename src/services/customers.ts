import Meylis from "../assets/images/meylis.png";

export interface ICustomer {
	comment: string;
	company: string;
	name: string;
	photo: string;
}

let customers: ICustomer[] = [
	{
		name: "Meylis Sahetmammedov",
		photo: Meylis,
		company: "Entrepreneur",
		comment:
			"I am so happy to recommend Agajan Sahatov and his company. They delivered an excellent website (a landing page), which is very beautiful, responsive and blazingly fast. The team is very professional, easy to work with and has good results.",
	},
];

export function getCustomers() {
	return customers;
}
