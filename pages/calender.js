import Calender from "../components/calender/index.tsx";
import Seo from "../components/Seo";

export default function Home() {
	return (
		<div>
			<Seo title="Calender"></Seo>
			<Calender></Calender>
		</div>
	);
}
