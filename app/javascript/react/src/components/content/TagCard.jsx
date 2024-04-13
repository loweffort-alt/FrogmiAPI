// eslint-disable-next-line no-unused-vars
import * as React from "react";

const TagsCard = ({ magType, tsunami }) => {
  let tags;
  let tsunamiAlert = tsunami ? "blue" : "purple";

  switch (magType) {
    case "mw":
      tags = ["red", "High"];
      break;
    case "md":
      tags = ["orange", "Medium"];
      break;
    case "ml":
      tags = ["orange", "Medium"];
      break;
    case "ms":
      tags = ["orange", "Medium"];
      break;
    case "me":
      tags = ["green", "Low"];
      break;
    case "mi":
      tags = ["green", "Low"];
      break;
    case "mb":
      tags = ["green", "Low"];
      break;
    case "mlg":
      tags = ["green", "Low"];
      break;

    default:
      tags = ["res", "high"];
      break;
  }

  return (
    <>
      <span
        className={`bg-${tags[0]}-100 text-${tags[0]}-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded`}
      >
        Danger level: {tags[1]}
      </span>
      <span
        className={`bg-${tsunamiAlert}-100 text-${tsunamiAlert}-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded`}
      >
        Tsunami Potencial: {tsunami ? "Yes" : "No"}
      </span>
    </>
  );
};

export default TagsCard;
