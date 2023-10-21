'use strict';

import { initTimelineStructure } from "./timeline-structure.js";
import { initTimelineItems } from "./timeline-item.js";

window.onload = () => {
	initTimelineStructure();
	initTimelineItems();
}
