import { NavDemo } from "../composants/navDemo";
import { Video } from "../composants/video";

export const Demo = () => {
	return (
		<div id="extensions" className="bg_video py-16 pb-16 px-4 bg-[radial-gradient(#191919_1px,transparent_1px)] [background-size:16px_16px]">
			<NavDemo />
			<Video />
		</div>
	);
};
