import React from "react";
import SurgicalTechniquesNew from "../../components/SurgicalTechniques/SurgicalTechniques";
import STVideos from "../../components/STVideos/STVideos";
// import CTANew from "../../components/CTANew/CTANew";

const SurgicalTechniques = () => {
  return (
    <div>
      <div>
        <SurgicalTechniquesNew />
      </div>
      {/* <div className="mb-20">
        <CTANew />
      </div> */}
      <div>
        <STVideos />
      </div>
    </div>
  );
};

export default SurgicalTechniques;
