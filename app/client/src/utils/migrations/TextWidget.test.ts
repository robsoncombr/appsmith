import {
  migrateTextStyleFromTextWidget,
  migrateScrollTruncateProperties,
} from "utils/migrations/TextWidget";
import { FontStyleTypes, TextSizes } from "constants/WidgetConstants";
import type { DSLWidget } from "widgets/constants";
import { OverflowTypes } from "widgets/TextWidget/constants";

const inputDsl1: DSLWidget = {
  widgetName: "MainContainer",
  backgroundColor: "none",
  rightColumn: 1118,
  snapColumns: 16,
  detachFromLayout: true,
  widgetId: "0",
  topRow: 0,
  bottomRow: 1280,
  containerStyle: "none",
  snapRows: 33,
  parentRowSpace: 1,
  type: "CANVAS_WIDGET",
  canExtend: true,
  version: 15,
  minHeight: 1292,
  parentColumnSpace: 1,
  dynamicTriggerPathList: [],
  dynamicBindingPathList: [],
  leftColumn: 0,
  isLoading: false,
  parentId: "",
  renderMode: "CANVAS",
  mainCanvasWidth: 900,
  children: [
    {
      isVisible: true,
      text: "Label",
      textStyle: "LABEL",
      textAlign: "LEFT",
      widgetName: "Text1",
      version: 1,
      type: "TEXT_WIDGET",
      isLoading: false,
      parentColumnSpace: 67.375,
      parentRowSpace: 40,
      leftColumn: 3,
      rightColumn: 7,
      topRow: 1,
      bottomRow: 2,
      parentId: "0",
      widgetId: "yf8bhokz7d",
      dynamicBindingPathList: [],
      renderMode: "CANVAS",
      mainCanvasWidth: 900,
    },
  ],
};

const inputDsl2: DSLWidget = {
  widgetName: "MainContainer",
  backgroundColor: "none",
  rightColumn: 1118,
  snapColumns: 16,
  detachFromLayout: true,
  widgetId: "0",
  topRow: 0,
  bottomRow: 1280,
  containerStyle: "none",
  snapRows: 33,
  parentRowSpace: 1,
  type: "CANVAS_WIDGET",
  canExtend: true,
  version: 15,
  minHeight: 1292,
  parentColumnSpace: 1,
  dynamicTriggerPathList: [],
  dynamicBindingPathList: [],
  leftColumn: 0,
  isLoading: false,
  parentId: "",
  renderMode: "CANVAS",
  mainCanvasWidth: 900,
  children: [
    {
      isVisible: true,
      text: "Label",
      textStyle: "HEADING",
      textAlign: "LEFT",
      widgetName: "Text1",
      version: 1,
      type: "TEXT_WIDGET",
      isLoading: false,
      parentColumnSpace: 67.375,
      parentRowSpace: 40,
      leftColumn: 3,
      rightColumn: 7,
      topRow: 1,
      bottomRow: 2,
      parentId: "0",
      widgetId: "yf8bhokz7d",
      dynamicBindingPathList: [],
      renderMode: "CANVAS",
      mainCanvasWidth: 900,
    },
  ],
};

const inputDsl3: DSLWidget = {
  widgetName: "MainContainer",
  backgroundColor: "none",
  rightColumn: 1118,
  snapColumns: 16,
  detachFromLayout: true,
  widgetId: "0",
  topRow: 0,
  bottomRow: 1280,
  containerStyle: "none",
  snapRows: 33,
  parentRowSpace: 1,
  type: "CANVAS_WIDGET",
  canExtend: true,
  version: 15,
  minHeight: 1292,
  parentColumnSpace: 1,
  dynamicTriggerPathList: [],
  dynamicBindingPathList: [],
  leftColumn: 0,
  isLoading: false,
  parentId: "",
  renderMode: "CANVAS",
  mainCanvasWidth: 900,
  children: [
    {
      isVisible: true,
      text: "Label",
      textStyle: "BODY",
      textAlign: "LEFT",
      widgetName: "Text1",
      version: 1,
      type: "TEXT_WIDGET",
      isLoading: false,
      parentColumnSpace: 67.375,
      parentRowSpace: 40,
      leftColumn: 3,
      rightColumn: 7,
      topRow: 1,
      bottomRow: 2,
      parentId: "0",
      widgetId: "yf8bhokz7d",
      dynamicBindingPathList: [],
      renderMode: "CANVAS",
      mainCanvasWidth: 900,
    },
  ],
};

const outputDsl1: DSLWidget = {
  widgetName: "MainContainer",
  backgroundColor: "none",
  rightColumn: 1118,
  snapColumns: 16,
  detachFromLayout: true,
  widgetId: "0",
  topRow: 0,
  bottomRow: 1280,
  containerStyle: "none",
  snapRows: 33,
  parentRowSpace: 1,
  type: "CANVAS_WIDGET",
  canExtend: true,
  version: 15,
  minHeight: 1292,
  parentColumnSpace: 1,
  dynamicTriggerPathList: [],
  dynamicBindingPathList: [],
  leftColumn: 0,
  isLoading: false,
  parentId: "",
  renderMode: "CANVAS",
  mainCanvasWidth: 900,
  children: [
    {
      isVisible: true,
      text: "Label",
      textAlign: "LEFT",
      widgetName: "Text1",
      version: 1,
      type: "TEXT_WIDGET",
      isLoading: false,
      parentColumnSpace: 67.375,
      parentRowSpace: 40,
      leftColumn: 3,
      rightColumn: 7,
      topRow: 1,
      bottomRow: 2,
      parentId: "0",
      widgetId: "yf8bhokz7d",
      dynamicBindingPathList: [],
      fontSize: TextSizes.PARAGRAPH,
      fontStyle: FontStyleTypes.BOLD,
      renderMode: "CANVAS",
      mainCanvasWidth: 900,
    },
  ],
};

const outputDsl2: DSLWidget = {
  widgetName: "MainContainer",
  backgroundColor: "none",
  rightColumn: 1118,
  snapColumns: 16,
  detachFromLayout: true,
  widgetId: "0",
  topRow: 0,
  bottomRow: 1280,
  containerStyle: "none",
  snapRows: 33,
  parentRowSpace: 1,
  type: "CANVAS_WIDGET",
  canExtend: true,
  version: 15,
  minHeight: 1292,
  parentColumnSpace: 1,
  dynamicTriggerPathList: [],
  dynamicBindingPathList: [],
  leftColumn: 0,
  isLoading: false,
  parentId: "",
  renderMode: "CANVAS",
  mainCanvasWidth: 900,
  children: [
    {
      isVisible: true,
      text: "Label",
      textAlign: "LEFT",
      widgetName: "Text1",
      version: 1,
      type: "TEXT_WIDGET",
      isLoading: false,
      parentColumnSpace: 67.375,
      parentRowSpace: 40,
      leftColumn: 3,
      rightColumn: 7,
      topRow: 1,
      bottomRow: 2,
      parentId: "0",
      widgetId: "yf8bhokz7d",
      dynamicBindingPathList: [],
      fontSize: TextSizes.HEADING1,
      fontStyle: FontStyleTypes.BOLD,
      renderMode: "CANVAS",
      mainCanvasWidth: 900,
    },
  ],
};

const outputDsl3: DSLWidget = {
  widgetName: "MainContainer",
  backgroundColor: "none",
  rightColumn: 1118,
  snapColumns: 16,
  detachFromLayout: true,
  widgetId: "0",
  topRow: 0,
  bottomRow: 1280,
  containerStyle: "none",
  snapRows: 33,
  parentRowSpace: 1,
  type: "CANVAS_WIDGET",
  canExtend: true,
  version: 15,
  minHeight: 1292,
  parentColumnSpace: 1,
  dynamicTriggerPathList: [],
  dynamicBindingPathList: [],
  leftColumn: 0,
  isLoading: false,
  parentId: "",
  renderMode: "CANVAS",
  mainCanvasWidth: 900,
  children: [
    {
      isVisible: true,
      text: "Label",
      textAlign: "LEFT",
      widgetName: "Text1",
      version: 1,
      type: "TEXT_WIDGET",
      isLoading: false,
      parentColumnSpace: 67.375,
      parentRowSpace: 40,
      leftColumn: 3,
      rightColumn: 7,
      topRow: 1,
      bottomRow: 2,
      parentId: "0",
      widgetId: "yf8bhokz7d",
      dynamicBindingPathList: [],
      fontSize: TextSizes.PARAGRAPH,
      renderMode: "CANVAS",
      mainCanvasWidth: 900,
    },
  ],
};

describe("Text Widget Property Pane Upgrade", () => {
  it("To test text widget textStyle property is migrated", () => {
    const newDsl = migrateTextStyleFromTextWidget(inputDsl1);
    expect(JSON.stringify(newDsl) === JSON.stringify(outputDsl1));
  });
  it("To test text widget textStyle property is migrated", () => {
    const newDsl = migrateTextStyleFromTextWidget(inputDsl2);
    expect(JSON.stringify(newDsl) === JSON.stringify(outputDsl2));
  });
  it("To test text widget textStyle property is migrated", () => {
    const newDsl = migrateTextStyleFromTextWidget(inputDsl3);
    expect(JSON.stringify(newDsl) === JSON.stringify(outputDsl3));
  });
});

const inputDsl4: DSLWidget = {
  widgetName: "MainContainer",
  backgroundColor: "none",
  rightColumn: 1118,
  snapColumns: 16,
  detachFromLayout: true,
  widgetId: "0",
  topRow: 0,
  bottomRow: 1280,
  containerStyle: "none",
  snapRows: 33,
  parentRowSpace: 1,
  type: "CANVAS_WIDGET",
  canExtend: true,
  version: 15,
  minHeight: 1292,
  parentColumnSpace: 1,
  dynamicTriggerPathList: [],
  dynamicBindingPathList: [],
  leftColumn: 0,
  isLoading: false,
  parentId: "",
  renderMode: "CANVAS",
  mainCanvasWidth: 900,
  children: [
    {
      isVisible: true,
      text: "Label",
      textAlign: "LEFT",
      widgetName: "Text1",
      version: 1,
      type: "TEXT_WIDGET",
      isLoading: false,
      parentColumnSpace: 67.375,
      parentRowSpace: 40,
      leftColumn: 3,
      rightColumn: 7,
      topRow: 1,
      bottomRow: 2,
      parentId: "0",
      widgetId: "yf8bhokz7d",
      dynamicBindingPathList: [],
      fontSize: TextSizes.PARAGRAPH,
      fontStyle: FontStyleTypes.BOLD,
      renderMode: "CANVAS",
      shouldScroll: true,
      shouldTruncate: false,
      mainCanvasWidth: 900,
    },
  ],
};

const outputDsl4: DSLWidget = {
  widgetName: "MainContainer",
  backgroundColor: "none",
  rightColumn: 1118,
  snapColumns: 16,
  detachFromLayout: true,
  widgetId: "0",
  topRow: 0,
  bottomRow: 1280,
  containerStyle: "none",
  snapRows: 33,
  parentRowSpace: 1,
  type: "CANVAS_WIDGET",
  canExtend: true,
  version: 15,
  minHeight: 1292,
  parentColumnSpace: 1,
  dynamicTriggerPathList: [],
  dynamicBindingPathList: [],
  leftColumn: 0,
  isLoading: false,
  parentId: "",
  renderMode: "CANVAS",
  mainCanvasWidth: 900,
  children: [
    {
      isVisible: true,
      text: "Label",
      textAlign: "LEFT",
      widgetName: "Text1",
      version: 1,
      type: "TEXT_WIDGET",
      isLoading: false,
      parentColumnSpace: 67.375,
      parentRowSpace: 40,
      leftColumn: 3,
      rightColumn: 7,
      topRow: 1,
      bottomRow: 2,
      parentId: "0",
      widgetId: "yf8bhokz7d",
      dynamicBindingPathList: [],
      fontSize: TextSizes.PARAGRAPH,
      fontStyle: FontStyleTypes.BOLD,
      renderMode: "CANVAS",
      overflow: OverflowTypes.SCROLL,
      mainCanvasWidth: 900,
    },
  ],
};

const inputDsl5: DSLWidget = {
  widgetName: "MainContainer",
  backgroundColor: "none",
  rightColumn: 1118,
  snapColumns: 16,
  detachFromLayout: true,
  widgetId: "0",
  topRow: 0,
  bottomRow: 1280,
  containerStyle: "none",
  snapRows: 33,
  parentRowSpace: 1,
  type: "CANVAS_WIDGET",
  canExtend: true,
  version: 15,
  minHeight: 1292,
  parentColumnSpace: 1,
  dynamicTriggerPathList: [],
  dynamicBindingPathList: [],
  leftColumn: 0,
  isLoading: false,
  parentId: "",
  renderMode: "CANVAS",
  mainCanvasWidth: 900,
  children: [
    {
      isVisible: true,
      text: "Label",
      textAlign: "LEFT",
      widgetName: "Text1",
      version: 1,
      type: "TEXT_WIDGET",
      isLoading: false,
      parentColumnSpace: 67.375,
      parentRowSpace: 40,
      leftColumn: 3,
      rightColumn: 7,
      topRow: 1,
      bottomRow: 2,
      parentId: "0",
      widgetId: "yf8bhokz7d",
      dynamicBindingPathList: [],
      fontSize: TextSizes.PARAGRAPH,
      fontStyle: FontStyleTypes.BOLD,
      renderMode: "CANVAS",
      shouldScroll: true,
      shouldTruncate: true,
      mainCanvasWidth: 900,
    },
  ],
};

const outputDsl5: DSLWidget = {
  widgetName: "MainContainer",
  backgroundColor: "none",
  rightColumn: 1118,
  snapColumns: 16,
  detachFromLayout: true,
  widgetId: "0",
  topRow: 0,
  bottomRow: 1280,
  containerStyle: "none",
  snapRows: 33,
  parentRowSpace: 1,
  type: "CANVAS_WIDGET",
  canExtend: true,
  version: 15,
  minHeight: 1292,
  parentColumnSpace: 1,
  dynamicTriggerPathList: [],
  dynamicBindingPathList: [],
  leftColumn: 0,
  isLoading: false,
  parentId: "",
  renderMode: "CANVAS",
  mainCanvasWidth: 900,
  children: [
    {
      isVisible: true,
      text: "Label",
      textAlign: "LEFT",
      widgetName: "Text1",
      version: 1,
      type: "TEXT_WIDGET",
      isLoading: false,
      parentColumnSpace: 67.375,
      parentRowSpace: 40,
      leftColumn: 3,
      rightColumn: 7,
      topRow: 1,
      bottomRow: 2,
      parentId: "0",
      widgetId: "yf8bhokz7d",
      dynamicBindingPathList: [],
      fontSize: TextSizes.PARAGRAPH,
      fontStyle: FontStyleTypes.BOLD,
      renderMode: "CANVAS",
      overflow: OverflowTypes.TRUNCATE,
      mainCanvasWidth: 900,
    },
  ],
};

const inputDsl6: DSLWidget = {
  widgetName: "MainContainer",
  backgroundColor: "none",
  rightColumn: 1118,
  snapColumns: 16,
  detachFromLayout: true,
  widgetId: "0",
  topRow: 0,
  bottomRow: 1280,
  containerStyle: "none",
  snapRows: 33,
  parentRowSpace: 1,
  type: "CANVAS_WIDGET",
  canExtend: true,
  version: 15,
  minHeight: 1292,
  parentColumnSpace: 1,
  dynamicTriggerPathList: [],
  dynamicBindingPathList: [],
  leftColumn: 0,
  isLoading: false,
  parentId: "",
  renderMode: "CANVAS",
  mainCanvasWidth: 900,
  children: [
    {
      isVisible: true,
      text: "Label",
      textAlign: "LEFT",
      widgetName: "Text1",
      version: 1,
      type: "TEXT_WIDGET",
      isLoading: false,
      parentColumnSpace: 67.375,
      parentRowSpace: 40,
      leftColumn: 3,
      rightColumn: 7,
      topRow: 1,
      bottomRow: 2,
      parentId: "0",
      widgetId: "yf8bhokz7d",
      dynamicBindingPathList: [],
      fontSize: TextSizes.PARAGRAPH,
      fontStyle: FontStyleTypes.BOLD,
      renderMode: "CANVAS",
      shouldScroll: false,
      shouldTruncate: false,
      mainCanvasWidth: 900,
    },
  ],
};

const outputDsl6: DSLWidget = {
  widgetName: "MainContainer",
  backgroundColor: "none",
  rightColumn: 1118,
  snapColumns: 16,
  detachFromLayout: true,
  widgetId: "0",
  topRow: 0,
  bottomRow: 1280,
  containerStyle: "none",
  snapRows: 33,
  parentRowSpace: 1,
  type: "CANVAS_WIDGET",
  canExtend: true,
  version: 15,
  minHeight: 1292,
  parentColumnSpace: 1,
  dynamicTriggerPathList: [],
  dynamicBindingPathList: [],
  leftColumn: 0,
  isLoading: false,
  parentId: "",
  renderMode: "CANVAS",
  mainCanvasWidth: 900,
  children: [
    {
      isVisible: true,
      text: "Label",
      textAlign: "LEFT",
      widgetName: "Text1",
      version: 1,
      type: "TEXT_WIDGET",
      isLoading: false,
      parentColumnSpace: 67.375,
      parentRowSpace: 40,
      leftColumn: 3,
      rightColumn: 7,
      topRow: 1,
      bottomRow: 2,
      parentId: "0",
      widgetId: "yf8bhokz7d",
      dynamicBindingPathList: [],
      fontSize: TextSizes.PARAGRAPH,
      fontStyle: FontStyleTypes.BOLD,
      renderMode: "CANVAS",
      overflow: OverflowTypes.NONE,
      mainCanvasWidth: 900,
    },
  ],
};

describe("Text Widget Scroll and Truncate Property migrate", () => {
  it("Overflow value should be SCROLL instead of shouldScroll true", () => {
    const newDsl = migrateScrollTruncateProperties(inputDsl4);
    expect(newDsl).toEqual(outputDsl4);
  });
  it("Overflow value should be TRUNCATE instead of shouldTruncate true", () => {
    const newDsl = migrateScrollTruncateProperties(inputDsl5);
    expect(newDsl).toEqual(outputDsl5);
  });
  it("Overflow value should be NONE in case of shouldScroll and shouldTruncate are false", () => {
    const newDsl = migrateScrollTruncateProperties(inputDsl6);
    expect(newDsl).toEqual(outputDsl6);
  });
});
