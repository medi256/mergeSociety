import PropTypes from "prop-types";

const LazyIframe = ({ src, title }) => {
  return (
    <iframe
      width="560"
      height="315"
      src={src}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};

LazyIframe.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default LazyIframe;
