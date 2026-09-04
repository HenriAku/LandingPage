"use client";

import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="bg_footer p-4">
			<div className="flex justify-center text-center md:text-left mb-4 font flex-col md:flex-row">
				<div className="pb-5 md:mt-5 text-lg">
					<p>
						VS Code Survival Kit <br />
						Optimise ton DX en 2 min.
					</p>
				</div>
				<div className="pb-5 md:ml-10">		
					<ul>
						<li>Liens rapides :</li>
						<li className="hover_bleu"><Link href="#fonctionnalites">&times; Fonctionnalites</Link></li>
						<li className="hover_bleu"><Link href="#extensions">&times; Extensions</Link></li>
						<li className="hover_bleu"><Link href="#faq">&times; FAQ</Link></li>
					</ul>
				</div>
				<div className="pb-5 md:ml-10">		
					<ul>
						<li>Réseaux :</li>
						<li className="hover_bleu"><Link href="https://github.com/HenriAku" target="_blank" rel="noopener noreferrer">&times; GitHub</Link></li>
						<li className="hover_bleu"><Link href="https://portfoliohenri.onrender.com/" target="_blank" rel="noopener noreferrer">&times; Portfolio</Link></li>
					</ul>
				</div>
			</div>

			<p className="text-center">&copy; 2026 Conçu par Henri— Tous droits réservés.</p>
		</footer>
	);
};