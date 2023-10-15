'use strict';

window.onload = () => {
	initTimeline();
};

function initTimeline() {
	var hTimeline;
	var limits;

	hTimeline = document.querySelector('.h-timeline');
	limits = getTimelineDateLimits();
	while (!sameYearAndMonth(limits.startDate, limits.endDate))
	{
		let month = limits.endDate.getMonth();
		let year = limits.endDate.getFullYear();

		if (month == 0)
			hTimeline.appendChild(createTimeMilestoneBigForYear(year));
		else if (month == 6)
			hTimeline.appendChild(createTimeMilestoneBig());
		else
			hTimeline.appendChild(createTimeMilestone());
		limits.endDate.setMonth(month - 1);	
	}
	document.dispatchEvent(new CustomEvent("OnTimelineStructureInitialized", {}));
}

function getTimelineDateLimits() {
	var timelineDateLimits = {
		startDate: new Date("06/01/2019"),
		endDate: new Date()
	};

	timelineDateLimits.endDate.setMonth(2);
	timelineDateLimits.endDate.setFullYear(
		timelineDateLimits.endDate.getFullYear() + 1);
	return (timelineDateLimits);
}

function sameYearAndMonth(date1, date2) {
	return (date1.getFullYear() == date2.getFullYear()
		&& date1.getMonth() == date2.getMonth());
}

function createTimeMilestone() {
	var timeMilestone;
	var timeMilestoneIndicator;

	timeMilestone = document.createElement('div');
	timeMilestone.classList.add('time-milestone');
	timeMilestone.classList.add('row');
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
	timeMilestoneBig.insertBefore(timeMilestoneBigImg, timeMilestoneBig.childNodes[0]);
	timeMilestoneBigYear = document.createElement('span');
	timeMilestoneBigYear.innerHTML = year;
	timeMilestoneBig.insertBefore(timeMilestoneBigYear, timeMilestoneBig.childNodes[1]);
	return (timeMilestoneBig);
}
