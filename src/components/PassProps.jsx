import PropTypes from "prop-types";

function PassProps(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
    </div>
  );
}

PassProps.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PassProps;
