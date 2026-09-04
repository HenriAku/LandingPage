import { useContainer } from "../../context/contenaire";

export const BtnNavDemo = ({ texte }: { texte: string }) => {
	const { video, setvideo } = useContainer();

	return (
		<button
			className={`hover_bleu ${video === texte ? "underline" : ""}`}
			onClick={() => setvideo(texte)}
		>
			{texte}
		</button>
	);
};
