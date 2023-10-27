'use strict';

import { getTimelineDateLimits } from './timeline-utils.js';
import *  as structureGUIBuilder from './timeline-structure-gui-builder.js';

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

	timeMilestone = structureGUIBuilder.newTimeMilestone();
	timeMilestoneIndicator = structureGUIBuilder.newTimeMilestoneIndicator();
	timeMilestone.appendChild(timeMilestoneIndicator);
	return (timeMilestone);
}

function createTimeMilestoneBig() {
	var timeMilestoneBig;
	var timeMilestoneIndicator;

	timeMilestoneBig = structureGUIBuilder.newTimeMilestoneBig();
	timeMilestoneIndicator = structureGUIBuilder.newTimeMilestoneIndicator();
	timeMilestoneBig.appendChild(timeMilestoneIndicator);
	return (timeMilestoneBig);
}

function createTimeMilestoneBigForYear(year) {
	var timeMilestoneBig;
	var timeMilestoneBigImg;
	var timeMilestoneBigYear;

	timeMilestoneBig = createTimeMilestoneBig();
	timeMilestoneBigImg = structureGUIBuilder.newTimeMilestoneBigImage();
	timeMilestoneBig.insertBefore(
		timeMilestoneBigImg, timeMilestoneBig.childNodes[0]);
	timeMilestoneBigYear = structureGUIBuilder.newTimeMilestoneBigYear(year);
	timeMilestoneBig.insertBefore(
		timeMilestoneBigYear, timeMilestoneBig.childNodes[1]);
	return (timeMilestoneBig);
}
