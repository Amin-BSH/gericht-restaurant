import { images } from "../../constants";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const SubHeading = ({ title }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <p className="p__cormorant">{title}</p>
      <img src={images.spoon} alt="spoon" className="spoon__img" />
    </div>
  );
};

SubHeading.prototype = {
  title: PropTypes.string.isRequired,
};

export default SubHeading;
