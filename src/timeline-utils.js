'use strict';

export function getTimelineDateLimits() {
	return {
		topDate: getTopDate(),
		bottomDate: new Date("06/01/2019")
	};
}

export function getTopDate() {
	var topDate;

	topDate = new Date();
	topDate.setMonth(2);
	topDate.setFullYear(topDate.getFullYear() + 1);
	return (topDate);
}

export function getDateDiffInMonths(date1, date2) {
	var months;

	months = Math.abs((date1.getFullYear() - date2.getFullYear()) * 12);
	if (date1 < date2) {
		months -= date1.getMonth();
		months += date2.getMonth();
	}
	else {
		months -= date2.getMonth();
		months += date1.getMonth();
	}
	return (months);
}

export function getMilestoneDimensions() {
	let milestoneHeight;
	let milestoneIndicatorHeight;

	milestoneHeight = parseInt(
		getComputedStyle(
			document.querySelector('.time-milestone')
		).height
	);
	milestoneIndicatorHeight = parseInt(
		getComputedStyle(
			document.querySelector('.time-milestone-indicator')
		).height
	);
	return {
		milestoneHeight,
		milestoneIndicatorHeight,
		milestoneOffset: (milestoneHeight / 2) - (milestoneIndicatorHeight / 2)
	};
}
