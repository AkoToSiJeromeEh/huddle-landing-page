import PropTypes from 'prop-types';
export const Figure = ({children}) => {
  return (
	<figure>{children}</figure>
  )
}

Figure.propTypes = {
	children: PropTypes.node
};