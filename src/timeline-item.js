'use strict';

import {
	getTopDate,
	getDateDiffInMonths,
	getTimelineContent,
	getMilestoneDimensions
} from './timeline-utils.js';

export async function initTimelineItems(timelineId) {
	var timelineItemContainer;
	var timelineItems;
	var milestoneDimensions;
	var topDate;

	timelineItemContainer = document.querySelector(timelineId + " > .timeline-item-container")
	timelineItems = await getTimelineContent(timelineId);
	milestoneDimensions = getMilestoneDimensions();
	topDate = getTopDate();
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

// TODO: Refactor function
function createTimelineItem(timelineItemDimensions, itemData) {
	var timelineItem;
	var itemConnector;
	var itemCard;
	var row;
	var col;
	var cardImg;
	var cardTitle;
	var cardSubtitle;
	var collapsedMarker;
	var expandedMarker;
	var cardParagraph;

	timelineItem = document.createElement('div');
	timelineItem.classList.add('timeline-item', itemData.type);
	timelineItem.style.height = timelineItemDimensions.height;
	timelineItem.style.marginTop = timelineItemDimensions.marginTop;
	itemConnector = document.createElement('div');
	itemConnector.classList.add('timeline-item-connector', itemData.type);
	itemConnector.style.top = ((parseInt(timelineItem.style.height) / 2) - 4) + 'px';
	itemCard = document.createElement('details');
	itemCard.classList.add('timeline-item-card', itemData.type);
	row = document.createElement('summary');
	row.classList.add('row');
	cardImg = document.createElement('img');
	cardImg.src = "../img/" + itemData.img;
	cardImg.alt = itemData.imgAlt;
	col = document.createElement('div');
	col.classList.add('col');
	cardTitle = document.createElement('h3');
	cardTitle.textContent = itemData.title;
	cardSubtitle = document.createElement('h4');
	cardSubtitle.textContent = itemData.subtitle;
	collapsedMarker = document.createElement('img');
	collapsedMarker.classList.add('summary-marker-collapsed');
	collapsedMarker.src = "../img/icons/arrow-left-fill-white.svg";
	collapsedMarker.alt = "Collapsed container indicator.";
	expandedMarker = document.createElement('img');
	expandedMarker.classList.add('summary-marker-expanded');
	expandedMarker.src = "../img/icons/arrow-down-fill-white.svg";
	expandedMarker.alt = "Expanded container indicator.";
	cardParagraph = document.createElement('p');
	cardParagraph.textContent = itemData.description;
	col.appendChild(cardTitle);
	col.appendChild(cardSubtitle);
	row.appendChild(cardImg);
	row.appendChild(col);
	row.appendChild(collapsedMarker);
	row.appendChild(expandedMarker);
	itemCard.appendChild(row);
	itemCard.appendChild(cardParagraph);
	itemConnector.appendChild(itemCard);
	timelineItem.appendChild(itemConnector);
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
