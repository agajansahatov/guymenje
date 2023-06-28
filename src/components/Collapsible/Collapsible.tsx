import React, {
	ReactNode,
	useState,
	isValidElement,
	cloneElement,
	ReactElement,
} from "react";
import "./Collapsible.css";

interface Props {
	classes: string;
	isHidden: boolean;
	children: ReactNode[];
}
/*
	children[0] => Anything you want to show in the hidden mode
	children[1] => Toggler 
	children[2] => Anything you want to show in the expanded mode
*/

const Collapsible: React.FC<Props> = ({ classes, isHidden, children }) => {
	const [isExpanded, setExpanded] = useState(!isHidden);

	const handleToggle = () => {
		setExpanded(!isExpanded);
	};

	let style = [classes, "collapsible"];
	if (isExpanded) {
		style.push("collapsible--expanded");
	}

	const toggler = React.Children.map(children[1], (child) => {
		if (isValidElement(child)) {
			const existingClasses = child.props.className || "";

			return cloneElement(child as ReactElement, {
				className: [existingClasses, "collapsible__toggler"].join(" "),
				onClick: handleToggle,
			});
		}
		return child;
	});

	const collapsibleContent = React.Children.map(children[2], (child) => {
		if (isValidElement(child)) {
			const existingClasses = child.props.className || "";

			return cloneElement(child as ReactElement, {
				className: [existingClasses, "collapsible__content"].join(" "),
			});
		}
		return child;
	});

	return (
		<div className={style.join(" ")}>
			{children[0]}
			{toggler}
			{collapsibleContent}
		</div>
	);
};

export default Collapsible;
