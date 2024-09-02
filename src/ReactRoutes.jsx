import { Routes, Route } from "react-router-dom";
import OverviewReact, {
  BenefitReact,
  HistoryReact,
} from "./ReactCourse/OverviewReact";
import InstallingNode, {
  CreateReactApp,
  SettingCodeEditor,
  UnderstandingStructure,
} from "./ReactCourse/InstallingNode";
import IntroJSX, { JSXAttributes, JSXSyntax } from "./ReactCourse/IntroJSX";
import FuncComponet, {
  ClassCompoent,
  CompHierarchNest,
  JSXStructure,
  Property,
} from "./ReactCourse/FuncComponet";
import RenderingDifComponent from "./ReactCourse/RenderingDifComponent";
import List, { UnderstandKe } from "./ReactCourse/List";
import Handleform, { FormControlVsUncontrol } from "./ReactCourse/Handleform";
import IntroHooks, {
  UseContextReducer,
  UseStateEffext,
} from "./ReactCourse/IntroHooks";
import PassingDataComponent from "./ReactCourse/PassingDataComponent";

import SettingRouter, {
  NavigPage,
  RouteParamNestRoute,
} from "./ReactCourse/SettingRouter";

import UsingStyleModule, {
  InlineStyleReact,
} from "./ReactCourse/UsingStyleModule";
import FetchAPI from "./ReactCourse/FetchAPI";
import AsycAwaitSytax, { ErrorHandl } from "./ReactCourse/AsycAwaitSytax";
import { DeployNetVerGit } from "./ReactCourse/OptimizeReact";
import ConditionIF from "./ReactCourse/ConditionIF";
import AddingEvants, { EventFuncVsClass } from "./ReactCourse/AddingEvants";

const ReactRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="overViewReact" element={<OverviewReact />} />
        <Route path="historyReact" element={<HistoryReact />} />
        <Route path="benefitReact" element={<BenefitReact />} />
        <Route path="installNode" element={<InstallingNode />} />
        <Route path="settingCodeEditor" element={<SettingCodeEditor />} />
        <Route path="createReactApp" element={<CreateReactApp />} />
        <Route
          path="underStandingProjectStructure"
          element={<UnderstandingStructure />}
        />
        <Route path="introJsx" element={<IntroJSX />} />
        <Route path="jsxSyntax" element={<JSXSyntax />} />
        <Route path="JSXAttributes" element={<JSXAttributes />} />
        <Route path="RenderingComp" element={<RenderingDifComponent />} />
        <Route path="funcComp" element={<FuncComponet />} />
        <Route path="JSXStructure" element={<JSXStructure />} />
        <Route path="ReactConditionalRendering" element={<ConditionIF />} />
        <Route path="classComponent" element={<ClassCompoent />} />
        <Route path="CompHierarchNest" element={<CompHierarchNest />} />
        <Route path="Props" element={<Property />} />
        <Route path="eventHdle" element={<AddingEvants />} />
        <Route path="differentTypes" element={<EventFuncVsClass />} />

        <Route path="list" element={<List />} />
        <Route path="UseKey" element={<UnderstandKe />} />
        <Route path="HandleForm" element={<Handleform />} />
        <Route
          path="FormControlVsUnControl"
          element={<FormControlVsUncontrol />}
        />
        <Route path="introHook" element={<IntroHooks />} />
        <Route path="useStateEffect" element={<UseStateEffext />} />

        <Route path="useRedContext" element={<UseContextReducer />} />
        <Route path="PassData" element={<PassingDataComponent />} />

        <Route path="SettingRoute" element={<SettingRouter />} />
        <Route path="NavigatePage" element={<NavigPage />} />
        <Route path="RouteParamNest" element={<RouteParamNestRoute />} />

        <Route path="cssModules" element={<UsingStyleModule />} />
        <Route path="inline" element={<InlineStyleReact />} />
        <Route path="FetchAPI" element={<FetchAPI />} />
        <Route path="AsyncAwaitReact" element={<AsycAwaitSytax />} />
        <Route path="ErrorHand" element={<ErrorHandl />} />

        <Route path="DeployGitNetVer" element={<DeployNetVerGit />} />
      </Routes>
    </div>
  );
};

export default ReactRoutes;
