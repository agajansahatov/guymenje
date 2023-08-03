import BlockHeader from "../../components/Block/BlockHeader";
import Block from "../../components/Block";
import Button from "./../../components/Button/Button";
import styles from "./Banner.module.css";

const Banner = () => {
	return (
		<Block color="dark" direction="left" className={styles["banner"]}>
			<article className="grid grid--1x2">
				<BlockHeader>
					<div className={styles["banner__content"]}>
						<h1 style={{ marginTop: "0" }}>Application Development Company</h1>
						<p className={styles["banner__tagline"]}>
							Go from idea, wireframe, or technical specs to fully-functional
							applications incredibly fast.
						</p>
						<Button
							type="link"
							href="#section-services"
							color="accent"
							style="stretched">
							Get Started
						</Button>
					</div>
				</BlockHeader>
				<img
					className={styles["banner__image"]}
					src="/images/banner.svg"
					alt=""
				/>
			</article>
		</Block>
	);
};

export default Banner;
