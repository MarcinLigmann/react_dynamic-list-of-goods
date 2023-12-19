import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll } from './api/goods';
// or , get5First, getRed
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const handleAllGoodsClick = () => {
    return getAll().then(setVisibleGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleAllGoodsClick}
      >
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button">
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
