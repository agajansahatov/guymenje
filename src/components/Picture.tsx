//Sizes attribute of img element can be added
interface Props {
	alt?: string;
	className?: string;
	src: string;
	type?: "regular" | "multi-source";
}

const Picture = ({ alt = "", className = "", src, type }: Props) => {
	const extensionIndex = src.lastIndexOf(".") + 1;
	const extension = src.substring(extensionIndex);
	const url = src.substring(0, extensionIndex - 1);

	if (type !== "multi-source") {
		return <img src={src} alt={alt} className={className} />;
	}

	return (
		<picture>
			<source
				type="image/webp"
				srcSet={`${url}.webp   1x,
                        ${url}@2x.webp 2x`}
			/>
			<source
				type={`image/` + extension}
				srcSet={`${src} 1x, ${url}@2x.${extension} 2x`}
			/>
			<img src={`${url}@2x.${extension}`} alt={alt} className={className} />
		</picture>
	);
};

export default Picture;
