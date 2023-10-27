'use strict';

export function newTimelineItem(type, timelineItemDimensions) {
	var timelineItem;

	timelineItem = document.createElement('div');
	timelineItem.classList.add('timeline-item', type);
	timelineItem.style.height = timelineItemDimensions.height + 'px';
	timelineItem.style.marginTop = timelineItemDimensions.marginTop + 'px';
	return (timelineItem);
}

export function newTimelineItemConnector(type, top) {
	var itemConnector;

	itemConnector = document.createElement('div');
	itemConnector.classList.add('timeline-item-connector', type);
	itemConnector.style.top = top + 'px';
	return (itemConnector);
}

export function newTimelineItemCard(type) {
	var itemCard;

	itemCard = document.createElement('details');
	itemCard.classList.add('timeline-item-card', type);
	return (itemCard);
}

export function newCardSummary() {
	var cardSummary;

	cardSummary = document.createElement('summary');
	cardSummary.classList.add('row');
	return (cardSummary);
}

export function newCardImage(src, alt) {
	var cardImage;

	cardImage = document.createElement('img');
	cardImage.src = src;
	cardImage.alt = alt;
	return (cardImage);
}

export function newCardTitle(textContent) {
	var cardTitle;

	cardTitle = document.createElement('h3');
	cardTitle.textContent = textContent;
	return (cardTitle);
}

export function newCardSubtitle(textContent) {
	var cardSubtitle;

	cardSubtitle = document.createElement('h4');
	cardSubtitle.textContent = textContent;
	return (cardSubtitle);
}

export function newDetailsCollapsedMarker() {
	var collapsedMarker;

	collapsedMarker = document.createElement('img');
	collapsedMarker.classList.add('summary-marker-collapsed');
	collapsedMarker.src = "../img/icons/arrow-left-fill-white.svg";
	collapsedMarker.alt = "Collapsed container indicator.";
	return (collapsedMarker);
}

export function newDetailsExpandedMarker() {
	var expandedMarker;

	expandedMarker = document.createElement('img');
	expandedMarker.classList.add('summary-marker-expanded');
	expandedMarker.src = "../img/icons/arrow-down-fill-white.svg";
	expandedMarker.alt = "Expanded container indicator.";
	return (expandedMarker);
}

export function newParagraph(innerHTML) {
	var cardParagraph;

	cardParagraph = document.createElement('p');
	cardParagraph.innerHTML = innerHTML;
	return (cardParagraph);
}

export function newColumnContainer() {
	var columnContainer;
	
	columnContainer = document.createElement('div');
	columnContainer.classList.add('col');
	return (columnContainer);
}
