import PropTypes from 'prop-types';
import './ButtonStyle.scss';

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  icon: null,
  onClick: undefined,
  className: '',
};

export default function Button({ text, icon: Icon, onClick, className = '' }) {
  return (
    <section className={`btn ${className}`}>
      <button className="button" onClick={onClick}>
        <div className="btn_border" />
        {Icon && <Icon className="btn-icon" />}
        <span className="text_button">{text}</span>
      </button>
    </section>
  );
}

