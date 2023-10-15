'use strict';

document.addEventListener(
	"OnTimelineStructureInitialized",
	onTimelineStructureInitialized
);

async function onTimelineStructureInitialized() {
	var timelineItemContainer = document.querySelector('.timeline-item-container');
	var timelineItems = await getTimelineContent();

	// TODO: Build timeline items based on the content data.
	document.removeEventListener(
		"OnTimelineStructureInitialized",
		onTimelineStructureInitialized
	);
}

async function getTimelineContent() {
	var timelineItems = Array.from(
		await fetch("./content/timeline-content.json")
			.then((response) => response.json())
			.then((json) => json.timelineItems)
	);
		
	timelineItems.sort((a, b) => {
		let aDate = (a.endDate === undefined) ? new Date() : new Date(a.endDate);
		let bDate = (b.endDate === undefined) ? new Date() : new Date(b.endDate);
		return (bDate.getTime() - aDate.getTime());
	});
	return (timelineItems);
}
