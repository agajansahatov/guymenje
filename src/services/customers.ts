import { ICustomer } from "../interfaces";

let customers: ICustomer[] = [
	{
		name: "Meylis Sahetmammedov",
		photo: "/images/meylis.png",
		company: "Entrepreneur",
		comment:
			"I am so happy to recommend Agajan Sahatov and his company. They delivered an excellent website (a landing page), which is very beautiful, responsive and blazingly fast. The team is very professional, easy to work with and has good results.",
	},
];

export function getCustomers() {
	return customers;
}
