import { Routes, Route } from "react-router-dom";
import HwInternetWorks, {
  DomainNames,
  WebHosting,
} from "./SKills&Knowledge/HwInternetWorks";
import SEOBasics, {
  ContentMarketing,
  GoogleIndexing,
} from "./SKills&Knowledge/SEOBasics";
import WebAnalytics, { UserBehavior } from "./SKills&Knowledge/WebAnalytics";
import Protection, { SSLSecurity } from "./SKills&Knowledge/Protection";
import ImportanceMobile, {
  ProgressiveWebApps,
} from "./SKills&Knowledge/ImportanceMobile";
import GettingStartedFreelance from "./SKills&Knowledge/GettingStartedFreelance";
import ProductIdeas, {
  MarketingPromotion,
  PlatformsSelling,
} from "./SKills&Knowledge/ProductIdeas";
import OnlineCourse, {
  WebinarWorkShop,
  YoutubeChannel,
} from "./SKills&Knowledge/OnlineCourse";
import MonetizeWebsite, {
  CodingSkills,
} from "./SKills&Knowledge/MonetizeWebsite";
import LegalConsiderations from "./SKills&Knowledge/LegalConsiderations";
import FollowTrends, { LearnNewSkills } from "./SKills&Knowledge/FollowTrends";
import JoinStartUP, { BuildingStartup } from "./SKills&Knowledge/JoinStartUP";
import UsingAIs from "./SKills&Knowledge/UsingAIs";
import Scams from "./SKills&Knowledge/Scams";

const SkillsRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="HwInternetWks" element={<HwInternetWorks />} />
        <Route path="WebHosting" element={<WebHosting />} />
        <Route path="DomainNames" element={<DomainNames />} />
        <Route path="SEOBsc" element={<SEOBasics />} />
        <Route path="GoogleIndex" element={<GoogleIndexing />} />
        <Route path="ContentMarketing" element={<ContentMarketing />} />
        <Route path="WebAnalytics" element={<WebAnalytics />} />
        <Route path="UserBehavior" element={<UserBehavior />} />
        <Route path="Protection" element={<Protection />} />
        <Route path="SSLCertificate" element={<SSLSecurity />} />
        <Route path="ImportanceMobile" element={<ImportanceMobile />} />
        <Route path="ProgressiveWebApp" element={<ProgressiveWebApps />} />
        <Route
          path="GettingStartedFreelance"
          element={<GettingStartedFreelance />}
        />
        <Route path="ProductIdeas" element={<ProductIdeas />} />
        <Route path="PlatformsSelling" element={<PlatformsSelling />} />
        <Route path="MarketingPromotion" element={<MarketingPromotion />} />
        <Route path="OnlineCourses" element={<OnlineCourse />} />
        <Route path="Youtube" element={<YoutubeChannel />} />
        <Route path="WebNarWorkShop" element={<WebinarWorkShop />} />
        <Route path="BuildingMonetize" element={<MonetizeWebsite />} />
        <Route path="CodingSkills" element={<CodingSkills />} />
        <Route path="LegalConsiderations" element={<LegalConsiderations />} />
        <Route path="FollowTrend" element={<FollowTrends />} />
        <Route path="LearnNewSkills" element={<LearnNewSkills />} />
        <Route path="JoinStartUps" element={<JoinStartUP />} />
        <Route path="BuildingStartups" element={<BuildingStartup />} />
        <Route path="UsingAI" element={<UsingAIs />} />
        <Route path="Scams" element={<Scams />} />
      </Routes>
    </div>
  );
};

export default SkillsRoutes;
