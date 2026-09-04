export const Titre = ({ texte }: { texte: string }) => {
	return (
		<h2 className="text_bleu text-4xl font font-bold text-center pt-10">
			{"</"}{texte}{">"}
		</h2>
	);
};