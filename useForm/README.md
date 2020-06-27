#useForm

## Example

```javascript
import { useForm } from '../../hooks/useForm';

...
  const [formValues, handleInputChange, handleReset] = useForm({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = formValues;

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formValues);
    handleReset();
  }
...
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Your name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Your email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
        />
      </div>
...
```

