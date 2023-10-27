'use strict';

export function newTimeMilestone() {
	var timeMilestone;

	timeMilestone = document.createElement('div');
	timeMilestone.classList.add('time-milestone', 'row');
	return (timeMilestone);
}

export function newTimeMilestoneBig() {
	var timeMilestoneBig;

	timeMilestoneBig = document.createElement('div');
	timeMilestoneBig.classList.add('time-milestone-big', 'row');
	return (timeMilestoneBig);
}

export function newTimeMilestoneIndicator() {
	var timeMilestoneIndicator;

	timeMilestoneIndicator = document.createElement('span');
	timeMilestoneIndicator.classList.add('time-milestone-indicator');
	return (timeMilestoneIndicator);
}

export function newTimeMilestoneBigImage() {
	var timeMilestoneBigImage;

	timeMilestoneBigImage = document.createElement('img');
	timeMilestoneBigImage.src = "./img/icons/arrow-90deg-up-black.svg";
	timeMilestoneBigImage.alt = "Arrow pointing upwards.";
	return (timeMilestoneBigImage);
}

export function newTimeMilestoneBigYear(year) {
	var timeMilestoneBigYear;
	
	timeMilestoneBigYear = document.createElement('span');
	timeMilestoneBigYear.innerHTML = year;
	return (timeMilestoneBigYear);
}
