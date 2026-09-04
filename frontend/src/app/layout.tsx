import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ContenaireProvider } from "./context/contenaire";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "Dev Kit Web",
		template: "%s | Dev Kit Web",
	},
	description:
		"Dev Kit Web est une collection de ressources pour développer des applications web modernes.",
	keywords: [
		"Dev Kit Web",
		"Kit de développement web",
		"Web development kit",
		"Development web",
		"VS Code",
		"Visual Studio Code",
		"extensions",
		"extensions vscode",
		"extensions VS Code",
		"Themes",
		"Code vite",
		"2x plus rapide",
		"Performance",
		"IA",
		"Intelligence artificielle",
		"Icones",
		"rock",
	],
	authors: [{ name: "Henri" }],
	creator: "Henri",
	publisher: "Henri",

	robots: {
		index: true,
		follow: true,
	},

	openGraph: {
		type: "website",
		locale: "fr_FR",
		url: "https://dev-kit-web.netlify.app",
		siteName: "Dev Kit Web",
		title: "Dev Kit Web | Kit de développement web",
		description:
			"Dev Kit Web est une collection de ressources pour développer des applications web modernes.",
		images: [
			{
				url: "https://dev-kit-web.netlify.app",
				width: 1200,
				height: 630,
				alt: "Dev Kit Web | Kit de développement web",
			},
		],
	},

	twitter: {
		card: "summary_large_image",
		title: "Dev Kit Web | Kit de développement web",
		description:
			"Dev Kit Web est une collection de ressources pour développer des applications web modernes.",
		images: ["https://dev-kit-web.netlify.app"],
	},

	alternates: {
		canonical: "https://dev-kit-web.netlify.app",
	},
};


export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en fr"
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col">
				<ContenaireProvider>
					{children}
				</ContenaireProvider>
			</body>
		</html>
	);
}
