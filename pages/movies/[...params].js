import {useRouter} from "next/router";
import Seo from "../../components/Seo";

export default function Detail({params}) {
	const router = useRouter();
	const [title, id] = params || [];

	return (
		<>
			<Seo title={title} />
			<h2>{title || "Movie can not show"}</h2>
		</>
	);
}
export function getServerSideProps({params: {params}}) {
	return {
		props: {params},
	};
}
