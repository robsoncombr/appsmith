import type { Workflow } from "@appsmith/constants/WorkflowConstants";

export interface WorkflowCardListProps {
  isMobile: boolean;
  workspaceId: string;
  workflows?: Workflow[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function WorkflowCardList(props: WorkflowCardListProps) {
  return null;
}

export default WorkflowCardList;
