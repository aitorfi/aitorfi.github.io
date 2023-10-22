'use strict';

import { getTimelineDateLimits } from './timeline-utils.js';

export function initTimelineStructure(timelineId) {
	var hTimeline;
	var limits;

	hTimeline = document.querySelector(timelineId + " > .h-timeline");
	limits = getTimelineDateLimits();
	while (!sameYearAndMonth(limits.bottomDate, limits.topDate))
	{
		let month = limits.topDate.getMonth();
		let year = limits.topDate.getFullYear();

		if (month == 0)
			hTimeline.appendChild(createTimeMilestoneBigForYear(year));
		else if (month == 6)
			hTimeline.appendChild(createTimeMilestoneBig());
		else
			hTimeline.appendChild(createTimeMilestone());
		limits.topDate.setMonth(month - 1);	
	}
}

function sameYearAndMonth(date1, date2) {
	return (date1.getFullYear() == date2.getFullYear()
		&& date1.getMonth() == date2.getMonth());
}

function createTimeMilestone() {
	var timeMilestone;
	var timeMilestoneIndicator;

	timeMilestone = document.createElement('div');
	timeMilestone.classList.add('time-milestone', 'row');
	timeMilestoneIndicator = document.createElement('span');
	timeMilestoneIndicator.classList.add('time-milestone-indicator');
	timeMilestone.appendChild(timeMilestoneIndicator);
	return (timeMilestone);
}

function createTimeMilestoneBig() {
	var timeMilestoneBig;

	timeMilestoneBig = createTimeMilestone();
	timeMilestoneBig.classList.remove('time-milestone');
	timeMilestoneBig.classList.add('time-milestone-big');
	return (timeMilestoneBig);
}

function createTimeMilestoneBigForYear(year) {
	var timeMilestoneBig;
	var timeMilestoneBigImg;
	var timeMilestoneBigYear;

	timeMilestoneBig = createTimeMilestoneBig();
	timeMilestoneBigImg = document.createElement('img');
	timeMilestoneBigImg.src = "./img/icons/arrow-90deg-up-black.svg";
	timeMilestoneBigImg.alt = "Arrow pointing upwards.";
	timeMilestoneBig.insertBefore(
		timeMilestoneBigImg, timeMilestoneBig.childNodes[0]);
	timeMilestoneBigYear = document.createElement('span');
	timeMilestoneBigYear.innerHTML = year;
	timeMilestoneBig.insertBefore(
		timeMilestoneBigYear, timeMilestoneBig.childNodes[1]);
	return (timeMilestoneBig);
}
