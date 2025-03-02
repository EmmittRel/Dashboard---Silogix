import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

// Animation of Button

export default function AnimateButton({ children, type }) {
  switch (type) {
    default:
      return (
        <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }}>
          {children}
        </motion.div>
      );
  }
}

AnimateButton.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['slide', 'scale', 'rotate'])
};

AnimateButton.defaultProps = {
  type: 'scale'
};
