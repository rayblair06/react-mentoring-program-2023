import { FC } from 'react';
import 'styles/app.scss';
import MenuFilters from './MenuFilters';
import MenuItem from './MenuItem';

interface MenuProps {
  menu: Array<string>;
}

const Menu: FC<MenuProps> = ({ menu }) => {
  const menuItems = Array.from(menu).map((_value) => ({
    name: _value,
    id: crypto.randomUUID(),
  }));

  return (
    <div id="menu">
      <ul>
        {menuItems.map((item) => (
          <MenuItem item={item.name} key={item.id} />
        ))}
      </ul>

      <MenuFilters />
    </div>
  );
};

export default Menu;
