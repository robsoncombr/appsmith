import React from "react";

import * as Sentry from "@sentry/react";
import store from "store";

import BaseWidget from "widgets/BaseWidget";
import WidgetFactory from "./WidgetFactory";

import { ReduxActionTypes } from "@appsmith/constants/ReduxActionConstants";
import withMeta from "widgets/MetaHOC";
import { generateReactKey } from "./generators";
import { memoize } from "lodash";
import { WidgetFeatureProps } from "./WidgetFeatures";
import { WidgetConfiguration } from "widgets/constants";
import withWidgetProps from "widgets/withWidgetProps";

const generateWidget = memoize(function getWidgetComponent(
  Widget: typeof BaseWidget,
  needsMeta: boolean,
) {
  let widget = needsMeta ? withMeta(Widget) : Widget;
  //@ts-expect-error: type mismatch
  widget = withWidgetProps(widget);
  return Sentry.withProfiler(
    // @ts-expect-error: Types are not available
    widget,
  );
});

export const registerWidget = (Widget: any, config: WidgetConfiguration) => {
  const ProfiledWidget = generateWidget(Widget, !!config.needsMeta);

  WidgetFactory.registerWidgetBuilder(
    config.type,
    {
      buildWidget(widgetData: any): JSX.Element {
        return <ProfiledWidget {...widgetData} key={widgetData.widgetId} />;
      },
    },
    config.properties.derived,
    config.properties.default,
    config.properties.meta,
    config.properties.config,
    config.properties.contentConfig,
    config.properties.styleConfig,
    config.features,
    config.properties.loadingProperties,
  );
  configureWidget(config);
};

export const configureWidget = (config: WidgetConfiguration) => {
  let features: Record<string, unknown> = {};
  if (config.features && config.features.dynamicHeight) {
    features = Object.assign({}, WidgetFeatureProps.DYNAMIC_HEIGHT);
  }
  if (config.isCanvas) {
    features["shouldScrollContents"] = false;
  }
  const _config = {
    ...features,
    ...config.defaults,
    searchTags: config.searchTags,
    type: config.type,
    hideCard: !!config.hideCard || !config.iconSVG,
    isDeprecated: !!config.isDeprecated,
    replacement: config.replacement,
    displayName: config.name,
    key: generateReactKey(),
    iconSVG: config.iconSVG,
    isCanvas: config.isCanvas,
    canvasHeightOffset: config.canvasHeightOffset,
  };

  store.dispatch({
    type: ReduxActionTypes.ADD_WIDGET_CONFIG,
    payload: _config,
  });

  const factoryConfig = { ..._config, canvasHeightOffset: undefined };

  WidgetFactory.storeWidgetConfig(config.type, factoryConfig);
};
