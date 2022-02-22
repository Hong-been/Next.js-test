import React, {useState} from "react";
import * as dayjs from "dayjs";
import * as weekday from "dayjs/plugin/weekday";
import * as isoWeek from "dayjs/plugin/isoWeek";
import * as weekOfYear from "dayjs/plugin/weekOfYear";
import "dayjs/locale/ko";

const Calender = () => {
	const TODAY = dayjs();
	const [viewDate, setViewDate] = useState(dayjs());

	dayjs.extend(weekday);
	dayjs.extend(isoWeek);
	dayjs.extend(weekOfYear);

	dayjs.locale("ko");

	const onNextMonth = () => {
		setViewDate(viewDate.add(1, "month"));
	};
	const onPreMonth = () => {
		setViewDate(viewDate.subtract(1, "month"));
	};

	const createCalendar = () => {
		const startWeek = viewDate.startOf("month").week();
		const endWeek = viewDate.endOf("month").week();
		let calender: string[] = [];

		for (let week = startWeek; week <= endWeek; week++) {
			calender.push(
				<ul className="row" key={`${calender.length}`}>
					{Array(7)
						.fill(0)
						.map((n, i) => {
							const current = viewDate
								.startOf("week")
								.week(week)
								.add(n + i, "day");

							// 현재 날짜
							const isToday =
								TODAY.format("YYYYMMDD") === current.format("YYYYMMDD");

							return (
								<>
									<li key={`${week}_${i}`}>
										<div>
											<span className={isToday ? "highlight" : ""}>
												{current.format("DD")}
											</span>
										</div>
									</li>
								</>
							);
						})}
					<style jsx>{`
						.row {
							display: flex;
							justify-content: space-around;
							text-align: center;
						}
						.highlight {
							color: orange;
							font-weight: bold;
						}
						ul,
						li {
							list-style: none;
						}
					`}</style>
				</ul>
			);
		}
		return calender;
	};

	return (
		<>
			<header>
				<button onClick={onPreMonth}>{"<"}</button>
				<span>{`${viewDate.format("YYYY")}.${viewDate.format("MM")}`}</span>
				<button onClick={onNextMonth}>{">"}</button>
			</header>
			<main>
				<div className="row week">
					<div className="box">
						<span className="text">S</span>
					</div>
					<div className="box">
						<span className="text">M</span>
					</div>
					<div className="box">
						<span className="text">T</span>
					</div>
					<div className="box">
						<span className="text">W</span>
					</div>
					<div className="box">
						<span className="text">T</span>
					</div>
					<div className="box">
						<span className="text">F</span>
					</div>
					<div className="box">
						<span className="text">S</span>
					</div>
				</div>
				<div>{createCalendar()}</div>
			</main>
			<style jsx>{`
				* {
					text-align: center;
				}
				.row {
					display: flex;
					justify-content: space-evenly;
				}
			`}</style>
		</>
	);
};

export default Calender;
