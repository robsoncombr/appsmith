import { WIDGET_TAGS } from "constants/WidgetConstants";
import type { WidgetBaseConfiguration } from "WidgetProvider/constants";
import { ZoneIcon, ZoneThumbnail } from "appsmith-icons";

export const baseConfig: WidgetBaseConfiguration = {
  name: "Zone",
  iconSVG: ZoneIcon,
  thumbnailSVG: ZoneThumbnail,
  tags: [WIDGET_TAGS.LAYOUT],
  isCanvas: true,
  searchTags: ["div", "parent", "group"],
  onCanvasUI: {
    selectionBGCSSVar: "--ads-zone-selection",
    focusBGCSSVar: "--ads-zone-focus",
    selectionColorCSSVar: "--ads-zone-focus",
    focusColorCSSVar: "--ads-zone-selection",
    disableParentSelection: false,
  },
};
