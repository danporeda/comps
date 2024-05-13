import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment-count';
const SET_VALUE_TO_ADD = 'change-value';
const SUBMIT_VALUE = 'submit-value';

const reducer = (state, action) => {
  if (action.type === INCREMENT_COUNT) {
    return {
      ...state,
      count: state.count + action.payload
    };
  } else if (action.type === SET_VALUE_TO_ADD) {
    return {
      ...state,
      valueToAdd: action.payload
    }
  } else if (action.type === SUBMIT_VALUE) {
    return {
      ...state,
      count: state.count + state.valueToAdd,
      valueToAdd: 0
    }
  }

  return state;
}

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0
  });

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
      payload: 1
    });
  };

  const decrement = () => {
    dispatch({
      type: INCREMENT_COUNT,
      payload: -1
    });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value
    })
    // setValueToAdd(value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: SUBMIT_VALUE,
    })
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  }

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button primary onClick={increment}>
          increment
        </Button>
        <Button danger onClick={decrement}>
          decrement
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a Lot!</label>
        <input 
          value={state.valueToAdd || ''}
          onChange={handleChange}
          type="number" 
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button warning>Add it!</Button>
      </form>
    </Panel>
  )
};

export default CounterPage;