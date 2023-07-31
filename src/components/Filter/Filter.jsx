
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/sliceFilter';
import { FilterLabel, Icon, InputSearch, SpanFilter } from './Filter.module';
import { svgGood } from './svg/icon';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <FilterLabel>Find contacts by name
      <SpanFilter>
        <InputSearch type="text" value={filter} onChange={evt => dispatch(filterContact(evt.currentTarget.value))} name="filter" />
        <Icon>{svgGood}</Icon>
      </SpanFilter>
    </FilterLabel>
  );
};
