import { Titre } from "../composants/titre";
import { SousTitre} from "../composants/sous-titre";
import { Question } from "../composants/question";

export const Faq = () => {
	return (
		<div id="faq" className="bg_faq pb-10 py-16">
			<div className="container mx-auto pb-5">
				<Titre texte="FAQ" />
				<SousTitre texte="Des questions ? On a les réponses." />
				<p className="text-center text-lg font">
					Tout ce que tu dois savoir sur le kit et son installation avant de démarrer.
				</p>

				<div className="mt-8 space-y-4">
					<Question
						question="Comment installer le kit ?"
						reponse="Réponse : C'est très simple : télécharge l'archive ZIP, copie le contenu du fichier 
								settings.json dans tes paramètres VS Code (Ctrl+Shift+P -> Open User Settings JSON), 
								et glisse le fichier de snippets dans ton dossier utilisateur. Tout est expliqué pas-à-pas dans le guide inclus."	
					/>
					<Question
						question="Est-ce que le kit est compatible sur Windows, Mac et Linux ?"
						reponse="Réponse : Oui, à 100 %. Les paramètres settings.json, les extensions et les snippets 
						fonctionnent exactement de la même manière sur tous les systèmes d'exploitation. 
						La cheat-sheet des raccourcis inclut même les équivalences Ctrl / Cmd"
					/>
					<Question
						question="Le kit risque-t-il de ralentir mon VS Code ?"
						reponse="Réponse : Non, au contraire ! Le fichier settings.json est optimisé pour 
						désactiver les fonctionnalités lourdes inutiles de VS Code. La sélection d'extensions 
						a été pensée pour rester légère et réactive."
					/>
					<Question
						question="Puis-je modifier le thème ou personnaliser les configurations ?"
						reponse="Réponse : Tout à fait. Le kit te donne une base saine et clé en main, 
						mais chaque option du settings.json est commentée. Tu peux adapter les couleurs, 
						la police ou les raccourcis à tes préférences à tout moment."
					/>
					<Question
						question="Le kit est-il adapté aux débutants ?"
						reponse="Réponse : Oui, il a été conçu spécialement pour éviter 
						aux développeurs débutants et étudiants de passer des heures à 
						configurer leur environnement avant de pouvoir coder sereinement."
					/>
				</div>
			</div>
		</div>
	);
};