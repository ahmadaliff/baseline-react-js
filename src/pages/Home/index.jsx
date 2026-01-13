import { useEffect, useMemo, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';

import NoData from '@components/NoData';

import { selectData } from '@pages/Home/selectors';

import classes from '@pages/Home/style.module.scss';
import { getData, resetData } from './slice';

const Home = () => {
  const dispatch = useDispatch();
  const [filterSearch, setFilterSearch] = useState('');
  const dataApi = useSelector(selectData);

  useEffect(() => {
    if (dataApi.length === 0) dispatch(getData());
    return () => {
      dispatch(resetData());
    };
  }, [dispatch]);

  const filteredData = useMemo(() => {
    if (!dataApi.length) return [];

    const keyword = filterSearch.toLowerCase();
    return dataApi.filter(({ name }) => name.toLowerCase().includes(keyword));
  }, [dataApi, filterSearch]);

  return (
    <main className={classes.mainWrap} data-testid="home-wrap">
      <header className={classes.head}>
        <div className={classes.headerText}>
          <h2>
            <FormattedMessage id="app_tagline" />
          </h2>
          <div className={classes.searchInputWrap}>
            <input
              className={classes.searchInput}
              onChange={(e) => setFilterSearch(e.target.value)}
              data-testid="search-input"
            />
          </div>
        </div>
      </header>
      <div className={classes.content}>
        {filteredData.map((val) => (
          <>{val.name}</>
        ))}
      </div>
      {filteredData?.length === 0 && <NoData />}
    </main>
  );
};

export default Home;
