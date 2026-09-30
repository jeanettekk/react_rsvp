import PropTypes from 'prop-types';

function ResponsiveImage({ src, srcSet, sizes, width, height, alt = '', loading = 'lazy', fetchPriority = 'auto', ...props }) {
  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      loading={loading}
      decoding="async"
      {...{ fetchpriority: fetchPriority }}
      {...props}
    />
  );
}

ResponsiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string,
  sizes: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string,
  loading: PropTypes.oneOf(['eager', 'lazy']),
  fetchPriority: PropTypes.oneOf(['high', 'low', 'auto']),
};

export default ResponsiveImage;
