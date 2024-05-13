import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const reducer = (state, action) => {
  if (action.type === 'increment-count') {
    return {
      ...state,
      count: state.count + action.payload
    };
  } else if (action.type === 'change-value') {
    return {
      ...state,
      valueToAdd: action.payload
    }
  } else if (action.type === 'submit-value') {
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
      type: 'increment-count',
      payload: 1
    });
  };

  const decrement = () => {
    dispatch({
      type: 'increment-count',
      payload: -1
    });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: 'change-value',
      payload: value
    })
    // setValueToAdd(value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'submit-value',
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