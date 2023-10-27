'use strict';

import * as contentGUIBuilder from './timeline-item-gui-builder.js';
import * as utils from './timeline-utils.js';

export async function initTimelineItems(timelineId) {
	var timelineItemContainer;
	var timelineItems;
	var milestoneDimensions;
	var topDate;

	timelineItemContainer = document.querySelector(timelineId + " > .timeline-item-container")
	timelineItems = await getTimelineContent(timelineId);
	milestoneDimensions = utils.getMilestoneDimensions();
	topDate = utils.getTopDate();
	timelineItems.forEach((item) => {
		timelineItemContainer.appendChild(
			createTimelineItem(
				getTimelineItemDimensions(
					item,
					topDate,
					milestoneDimensions.milestoneHeight
				),
				item
			)
		);
		topDate = new Date(item.startDate);
	});
	handleMilestoneOffset(
		timelineItemContainer, milestoneDimensions.milestoneOffset);
}

async function getTimelineContent(timelineId) {
	var timelineItems;
	
	timelineItems = Array.from(
		await fetch("./content/timeline-content.json")
			.then((response) => response.json())
			.then((json) => json[timelineId])
	);
	timelineItems.sort((a, b) => {
		let aDate = (a.endDate === undefined) ? new Date() : new Date(a.endDate);
		let bDate = (b.endDate === undefined) ? new Date() : new Date(b.endDate);
		return (bDate.getTime() - aDate.getTime());
	});
	return (timelineItems);
}

function createTimelineItem(timelineItemDimensions, itemData) {
	var timelineItem;
	var itemConnector;
	var itemCard;
	var cardSummary;
	var col;

	timelineItem = contentGUIBuilder.newTimelineItem(
		itemData.type, timelineItemDimensions);
	itemConnector = contentGUIBuilder.newTimelineItemConnector(
		itemData.type, (parseInt(timelineItem.style.height) / 2) - 4);
	itemCard = contentGUIBuilder.newTimelineItemCard(itemData.type);
	cardSummary = contentGUIBuilder.newCardSummary();
	col = contentGUIBuilder.newColumnContainer();
	col.appendChild(contentGUIBuilder.newCardTitle(itemData.title));
	col.appendChild(contentGUIBuilder.newCardSubtitle(itemData.subtitle));
	cardSummary.appendChild(contentGUIBuilder.newCardImage(
		"../img/" + itemData.img, itemData.imgAlt));
	cardSummary.appendChild(col);
	cardSummary.appendChild(contentGUIBuilder.newDetailsCollapsedMarker());
	cardSummary.appendChild(contentGUIBuilder.newDetailsExpandedMarker());
	itemCard.appendChild(cardSummary);
	itemCard.appendChild(contentGUIBuilder.newParagraph(itemData.description));
	itemConnector.appendChild(itemCard);
	timelineItem.appendChild(itemConnector);
	return (timelineItem);
}

function getTimelineItemDimensions(itemData, topDate, milestoneHeight) {
	var endDate;
	var startDate;
	var monthDiff;
	var dimensions;

	dimensions = {};
	startDate = new Date(itemData.startDate);
	if (itemData.endDate === undefined)
		endDate = new Date();
	else
		endDate = new Date(itemData.endDate);
	monthDiff = utils.getDateDiffInMonths(startDate, endDate);
	dimensions.height = monthDiff * milestoneHeight;
	monthDiff = utils.getDateDiffInMonths(topDate, endDate);
	dimensions.marginTop = monthDiff * milestoneHeight;
	return (dimensions);
}

function handleMilestoneOffset(timelineItemContainer, offset) {
	var firstTimelineItem;
	
	firstTimelineItem = timelineItemContainer.firstElementChild;
	firstTimelineItem.style.marginTop = 
		parseInt(firstTimelineItem.style.marginTop) + 
		offset + 
		'px';
}
