'use strict';

import {
	getTopDate,
	getDateDiffInMonths,
	getTimelineContent,
	getMilestoneDimensions
} from './timeline-utils.js';

export async function initTimelineItems() {
	await fillTimelineItemContainer(
		document.querySelector('.timeline-item-container'));
}

async function fillTimelineItemContainer(timelineItemContainer) {
	var timelineItems;
	var milestoneDimensions;
	var topDate;

	timelineItems = await getTimelineContent();
	milestoneDimensions = getMilestoneDimensions();
	topDate = getTopDate();
	timelineItems.forEach((item) => {
		timelineItemContainer.appendChild(
			createTimelineItem(
				getTimelineItemDimensions(
					item,
					topDate,
					milestoneDimensions.milestoneHeight
				)
			)
		);
		topDate = new Date(item.startDate);
	});
	handleMilestoneOffset(
		timelineItemContainer, milestoneDimensions.milestoneOffset);
}

// TODO: Add content to timeline item
function createTimelineItem(timelineItemDimensions) {
	var timelineItem;

	timelineItem = document.createElement('div');
	timelineItem.classList.add('timeline-item', 'job');
	timelineItem.style.height = timelineItemDimensions.height;
	timelineItem.style.marginTop = timelineItemDimensions.marginTop;
	return (timelineItem);
}

function getTimelineItemDimensions(itemData, topDate, milestoneHeight) {
	var monthsDiff;
	var endDate;
	var startDate;
	var timelineItemDimensions;

	timelineItemDimensions = {};
	startDate = new Date(itemData.startDate);
	if (itemData.endDate !== undefined)
		endDate = new Date(itemData.endDate);
	else
		endDate = new Date();
	monthsDiff = getDateDiffInMonths(startDate, endDate);
	timelineItemDimensions.height = monthsDiff * milestoneHeight;
	monthsDiff = getDateDiffInMonths(topDate, endDate);
	timelineItemDimensions.marginTop = monthsDiff * milestoneHeight;
	timelineItemDimensions.height += 'px';
	timelineItemDimensions.marginTop += 'px';
	return (timelineItemDimensions);
}

function handleMilestoneOffset(timelineItemContainer, offset) {
	var firstTimelineItem;
	
	firstTimelineItem = timelineItemContainer.firstElementChild;
	firstTimelineItem.style.marginTop = 
		parseInt(firstTimelineItem.style.marginTop) + 
		offset + 
		'px';
}
