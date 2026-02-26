import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto, fill } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage, AdvancedVideo } from "@cloudinary/react";
import { contains } from "@cloudinary/url-gen/backwards/utils/legacyBaseUtil";

const App = () => {
  const cld = new Cloudinary({ cloud: { cloudName: "dm4350bif" } });

  const img = cld

    .image("batman_3840x2160_xtrafondos.com_tdllmy")
    .format("auto")
    .quality("auto")
    .resize(fill().width(500).height(500));

  return <AdvancedVideo cldVid={img} />;
};

export default App;
