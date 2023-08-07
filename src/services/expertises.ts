import { IExpertise } from "../interfaces";

const expertises: IExpertise[] = [
	{
		title: "HTML & CSS",
		icon: "htmlcss",
		body: "HTML and CSS are two of the core technologies for building Web pages. HTML provides the page's structure, and CSS the layout for various devices.",
	},
	{
		title: "JavaScript",
		icon: "javascript",
		body: "JavaScript is the world's most popular programming language. It is used to build web/mobile apps, real-time networking apps, command line tools and sometimes games. That's why we choose JavaScript as our main programming language.",
	},
	{
		title: "TypeScript",
		icon: "typescript",
		body: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. We use it to build large-scale applications.",
	},
	{
		title: "React & React Native",
		icon: "react",
		body: "Both of these two technologies are JavaScript frameworks developed by Facebook. We use Reactjs to build websites (front-end applications) and React Native to build mobile applications.",
	},
	{
		title: "Node.js",
		icon: "node",
		body: "Node.js is a free, open-sourced, cross-platform JavaScript run-time environment that lets developers write command line tools and server-side scripts outside of a browser. We use it to build fast and scalable back-end applications.",
	},
	{
		title: "MySQL",
		icon: "mysql",
		body: "MySQL is an open-source relational database management system. We use it to add, access, and process data stored in the server computer.",
	},
];

export function getExpertises() {
	return expertises;
}
