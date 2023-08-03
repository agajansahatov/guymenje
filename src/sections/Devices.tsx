import Block from "../components/Block";
import BlockHeader from "../components/Block/BlockHeader";
import Picture from "../components/Picture";

const Devices = () => {
	return (
		<Block>
			<BlockHeader className="block__header">
				<h2>Get your apps built for any device</h2>
				<p>
					Tired or Confused hiring different developers for each platform out
					there? Then you are in the right place. Our company offers you
					building WEB and CROSS-PLATFORM applications.
				</p>
			</BlockHeader>
			<Picture
				type="multi-source"
				src="images/devices.png"
				className="block__image"
				alt=""
			/>
		</Block>
	);
};

export default Devices;
