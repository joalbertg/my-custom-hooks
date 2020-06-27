#useCounter

## Example

```javascript
import { useCounter } from '../../hooks/useCounter';

...
const { counter, increment, decrement, reset } = useCounter(1);

if(counter <= 0) reset();
const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
...
  { !loading &&
    <div className="wraper-buttons">
      { counter > 1 &&
        <button
          className="btn btn-info"
          onClick={() => decrement()}
        >
          Back quote
        </button>
      }
      <button
        className="btn btn-warning"
        onClick={() => increment()}
      >
        Next quote
      </button>
    </div>
  }
...

```

