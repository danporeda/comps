import { produce } from 'immer';
import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment-count';
const DECREMENT_COUNT = 'decrement-count';
const SET_VALUE_TO_ADD = 'change-value';
const SUBMIT_VALUE = 'submit-value';

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      return;
      // return {
      //   ...state,
      // count: state.count + action.payload
      // };
    case DECREMENT_COUNT:
      state.count = state.count - 1;
      return;
    case SET_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;
      // return {
      //   ...state,
      //   valueToAdd: action.payload
      // };
    case SUBMIT_VALUE:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
      // return {
      //   ...state,
      //   count: state.count + state.valueToAdd,
      //   valueToAdd: 0
      // };
    default: return state;
  }

  // if (action.type === INCREMENT_COUNT) {
  //   return {
  //     ...state,
  //     count: state.count + action.payload
  //   };
  // } else if (action.type === SET_VALUE_TO_ADD) {
  //   return {
  //     ...state,
  //     valueToAdd: action.payload
  //   }
  // } else if (action.type === SUBMIT_VALUE) {
  //   return {
  //     ...state,
  //     count: state.count + state.valueToAdd,
  //     valueToAdd: 0
  //   }
  // }

  // return state;
}

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0
  });

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
      // payload: 1
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
      // payload: -1
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