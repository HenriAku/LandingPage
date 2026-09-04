import { MiseEnPage } from "./composants/essentiel/miseEnPage";
import { Hero } from "./composants/section/hero";
import { Bandeau } from "./composants/section/bandeau";
import { Fonctionnalite } from "./composants/section/fonctionnalite";
import { Demo } from "./composants/section/demo";
import { Faq } from "./composants/section/faq";

export default function Home() {
	return (
		<MiseEnPage>
			<Hero />
			<Bandeau />
			<Fonctionnalite />
			<Demo />
			<Faq />
		</MiseEnPage>
	);
};
