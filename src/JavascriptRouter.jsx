import { Route, Routes } from "react-router-dom";
import WhatJAvascript, {
  RunningJS,
  WhyJavascript,
} from "./Javascript/GlimpsIntro";
import JavascriptVsECMAScript from "./Javascript/JavascriptVsECMAScript";
import VariablesDataTypes, {
  DataTypes,
  NamingVariable,
} from "./Javascript/Variables&DataTypes";
import Arrays from "./Javascript/Arrays";
import Objects from "./Javascript/Objects";
import Operators from "./Javascript/Operators";
import ControlFlow from "./Javascript/else&Switch";
import Loops from "./Javascript/Loops";
import DefiningCallingFunc, {
  ArrowFunc,
  FuncScope,
  ParameterArgument,
  ReturnValues,
} from "./Javascript/Functions";
import StringMethods from "./Javascript/StringMethods";
import DOMintro, {
  EventHandling,
  ModifyingElements,
  SelectingElementsINDom,
} from "./Javascript/DOM";
import UnderstandingAsynchronousProgramming, {
  AsyncAwait,
  CallBacks,
  EventLoop,
  Promises,
} from "./Javascript/Asynhronous";
import TryCatch, {
  DebuggingTech,
  ThrowingErro,
} from "./Javascript/ErrorHandling";
import Modules, {
  Classes,
  Prototypes,
  ThisKeyWord,
} from "./Javascript/Modules";
import IntroAPI, { FetchingDataFromApis } from "./Javascript/API";
import JSOn from "./Javascript/JSOn";
import DateObject, { MathObject } from "./Javascript/DateObject";
import ForEachMethod, {
  MapMethod,
  SetTimeOutSetInterval,
} from "./Javascript/Methods";
import IntroductionBOM, {
  BOMApplication,
  HistoryObject,
  LocationObject,
  NavigationObject,
  ScreenObject,
  WindowObject,
} from "./Javascript/BOM";
import Comments, { Hoisting, ScopeJS } from "./Javascript/Comments";

const JavascriptRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="WhatJAvascript" element={<WhatJAvascript />} />
        <Route path="WhyJavascript" element={<WhyJavascript />} />
        <Route path="RunningJS" element={<RunningJS />} />
        <Route
          path="JavascriptVsECMAScript"
          element={<JavascriptVsECMAScript />}
        />
        <Route path="VariablesDataTypes" element={<VariablesDataTypes />} />
        <Route path="namingVariable" element={<NamingVariable />} />
        <Route path="DataTypes" element={<DataTypes />} />
        <Route path="operator" element={<Operators />} />
        <Route path="comments" element={<Comments />} />
        <Route path="ControlFlow" element={<ControlFlow />} />
        <Route path="loops" element={<Loops />} />
        <Route path="DefiningCallingFunc" element={<DefiningCallingFunc />} />
        <Route path="ParameterArgument" element={<ParameterArgument />} />
        <Route path="ReturnValues" element={<ReturnValues />} />
        <Route path="FuncScope" element={<FuncScope />} />
        <Route path="ArrowFunc" element={<ArrowFunc />} />
        <Route path="StringMethod" element={<StringMethods />} />
        <Route path="arrays" element={<Arrays />} />
        <Route path="objects" element={<Objects />} />
        <Route path="scope" element={<ScopeJS />} />
        <Route path="hoisting" element={<Hoisting />} />

        <Route path="DomIntro" element={<DOMintro />} />
        <Route
          path="SelectingElementsINDom"
          element={<SelectingElementsINDom />}
        />
        <Route path="ModifyingElements" element={<ModifyingElements />} />
        <Route path="EventHandling" element={<EventHandling />} />
        <Route path="introBOM" element={<IntroductionBOM />} />
        <Route path="windowObject" element={<WindowObject />} />
        <Route path="LocationObject" element={<LocationObject />} />
        <Route path="navigationObject" element={<NavigationObject />} />
        <Route path="historyObject" element={<HistoryObject />} />
        <Route path="screenObject" element={<ScreenObject />} />
        <Route path="BOMApplication" element={<BOMApplication />} />

        <Route
          path="UnderstandingAsynchronousProgramming"
          element={<UnderstandingAsynchronousProgramming />}
        />
        <Route path="EventLoop" element={<EventLoop />} />
        <Route path="CallBacks" element={<CallBacks />} />
        <Route path="promises" element={<Promises />} />
        <Route path="asyncAwait" element={<AsyncAwait />} />
        <Route path="tryCatch" element={<TryCatch />} />
        <Route path="throwingErr" element={<ThrowingErro />} />
        <Route path="debuggingTec" element={<DebuggingTech />} />
        <Route path="Modules" element={<Modules />} />
        <Route path="Classes" element={<Classes />} />
        <Route path="prototypes" element={<Prototypes />} />
        <Route path="thisKeyWord" element={<ThisKeyWord />} />
        <Route path="json" element={<JSOn />} />
        <Route path="dates" element={<DateObject />} />
        <Route path="mathObject" element={<MathObject />} />
        <Route path="forEach" element={<ForEachMethod />} />
        <Route path="mapMethod" element={<MapMethod />} />
        <Route path="setTimeSetinterval" element={<SetTimeOutSetInterval />} />

        <Route path="IntroAPI" element={<IntroAPI />} />
        <Route path="FetchingDataFromApis" element={<FetchingDataFromApis />} />
      </Routes>
    </div>
  );
};

export default JavascriptRouter;
