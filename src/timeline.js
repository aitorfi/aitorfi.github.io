'use strict';

import { initTimelineStructure } from "./timeline-structure.js";
import { initTimelineItems } from "./timeline-item.js";

window.onload = () => {
	initTimelineStructure("#career-timeline");
	initTimelineItems("#career-timeline");
	initTimelineStructure("#studies-timeline");
	initTimelineItems("#studies-timeline");
}
