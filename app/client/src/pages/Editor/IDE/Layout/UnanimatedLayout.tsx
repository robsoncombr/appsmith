import React from "react";
import { useSelector } from "react-redux";

import BottomBar from "components/BottomBar";
import EditorWrapperContainer from "../../commons/EditorWrapperContainer";
import Sidebar from "pages/Editor/IDE/Sidebar";
import LeftPane from "../LeftPane";
import MainPane from "../MainPane";
import RightPane from "../RightPane";
import { protectedModeSelector } from "selectors/gitSyncSelectors";
import ProtectedCallout from "../ProtectedCallout";
import { useGridLayoutTemplate } from "./hooks/useGridLayoutTemplate";
import styled from "styled-components";
import { Areas } from "./constants";

const GridContainer = styled.div`
  display: grid;
  width: 100vw;
  height: 100%;
`;

const LayoutContainer = styled.div<{ name: string }>`
  position: relative;
  grid-area: ${(props) => props.name};
`;

function UnanimatedLayout() {
  const isProtectedMode = useSelector(protectedModeSelector);
  const { areas, columns, rows } = useGridLayoutTemplate();

  return (
    <>
      {isProtectedMode && <ProtectedCallout />}
      <EditorWrapperContainer>
        <GridContainer
          style={{
            gridTemplateAreas: areas
              .map((area) => `"${area.join(" ")}"`)
              .join("\n"),
            gridTemplateColumns: columns.join(" "),
            gridTemplateRows: rows.join(" "),
          }}
        >
          <LayoutContainer name={Areas.Sidebar}>
            <Sidebar />
          </LayoutContainer>
          <LayoutContainer name={Areas.Explorer}>
            <LeftPane />
          </LayoutContainer>
          <LayoutContainer name={Areas.WidgetEditor}>
            <MainPane id="app-body" />
          </LayoutContainer>
          <LayoutContainer name={Areas.PropertyPane}>
            <RightPane />
          </LayoutContainer>
        </GridContainer>
      </EditorWrapperContainer>
      <BottomBar />
    </>
  );
}

const MemoUanimatedLayout = React.memo(UnanimatedLayout);

export { MemoUanimatedLayout as UnanimatedLayout };