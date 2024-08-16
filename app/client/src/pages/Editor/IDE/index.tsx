import React from "react";
import { useSelector } from "react-redux";

import BottomBar from "components/BottomBar";
import {
  combinedPreviewModeSelector,
  previewModeSelector,
} from "selectors/editorSelectors";
import EditorWrapperContainer from "../commons/EditorWrapperContainer";
import Sidebar from "pages/Editor/IDE/Sidebar";
import LeftPane from "./LeftPane";
import MainPane from "./MainPane";
import RightPane from "./RightPane";
import classNames from "classnames";
import { tailwindLayers } from "constants/Layers";
import { protectedModeSelector } from "selectors/gitSyncSelectors";
import ProtectedCallout from "./ProtectedCallout";
import FloatingPane from "./FloatingPane";

/**
 * OldName: MainContainer
 */
function IDE() {
  const isPreviewMode = useSelector(previewModeSelector);
  const isCombinedPreviewMode = useSelector(combinedPreviewModeSelector);
  const isProtectedMode = useSelector(protectedModeSelector);

  return (
    <>
      {isProtectedMode && <ProtectedCallout />}
      <EditorWrapperContainer>
        <div
          className={classNames({
            [`transition-transform transform duration-400 flex h-full ${tailwindLayers.entityExplorer}`]:
              true,
            relative: !isCombinedPreviewMode,
            "-translate-x-full fixed": isCombinedPreviewMode,
          })}
        >
          <Sidebar />
          <LeftPane />
        </div>
        <MainPane id="app-body" />
        <div
          className={classNames({
            [`transition-transform transform duration-400 h-full ${tailwindLayers.propertyPane}`]:
              true,
            relative: !isCombinedPreviewMode,
            "translate-x-full fixed right-0": isCombinedPreviewMode,
          })}
        >
          <RightPane />
        </div>
        <FloatingPane />
      </EditorWrapperContainer>
      <BottomBar viewMode={isPreviewMode} />
    </>
  );
}

IDE.displayName = "AppsmithIDE";

export default React.memo(IDE);
