import * as dayjs from "dayjs";

export default function Calender(): React.ReactNode {
	const TODAY = dayjs().format("DD/MM/YYYY");

	return <h4>{`Today is ${TODAY}`}</h4>;
}
