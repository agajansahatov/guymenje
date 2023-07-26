import Block from "../../components/Block";
import BlockHeader from "../../components/Block/BlockHeader";
import Icon from "../../components/Icon";
import IconContainer from "../../components/Icon/IconContainer";
import Media from "../../components/Media";
import { getExpertises } from "../../services/expertises";

const Expertise = () => {
	const expertises = getExpertises();
	return (
		<Block color="dark" direction="right">
			<BlockHeader>
				<h2>Common Technologies We Use</h2>
			</BlockHeader>
			<ul className="list">
				<div className="container grid grid--1x2">
					{expertises.map((expertise, index) => (
						<li key={index}>
							<Media
								image={
									<IconContainer color="dark">
										<Icon color="primary" name={expertise.icon} />
									</IconContainer>
								}
								title={expertise.title}>
								<p>{expertise.body}</p>
							</Media>
						</li>
					))}
				</div>
			</ul>
		</Block>
	);
};

export default Expertise;
