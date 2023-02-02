import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const MenuFilters = () => (
  <div id="filters">
    <p>Sort by</p>

    <p>Release Date</p>
    <p>
      <FontAwesomeIcon icon={faCaretDown} />
    </p>
  </div>
);

export default MenuFilters;
