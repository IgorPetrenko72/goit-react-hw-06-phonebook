import './Filter.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/slice';
import { getVisibleContacts } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector (getVisibleContacts);

  const onChange = e => {
    const changeValue = e.target.value;
    dispatch(changeFilter(changeValue));
  };

    return (    
    <label className='filter'>
    <p>Find contacts by name</p>
      <input
      className='filter__input'
      type="text"
      value={filter}
      onChange={onChange}
      />
    </label>

    );
};
