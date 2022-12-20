import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { useState, useEffect } from 'react';
import { addUser } from '../../../service/userService.js';
import { isEmail } from 'validator';

export default function Register() {
  const initialState = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    sex: 'Male',
    rating: 4,
    numReviews: 5,
    description: 'Twoj opis',
    telephone: '',
    lastSeen: Date.now(),
  };

  const [user, setUser] = useState(initialState);
  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user);
    setError(validate(user));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmit) {
      const result = addUser(user);
      result.then((res) => {
        console.log(res);
        if (res.error) {
          setError({ ...error, [res.name]: res.error });
        } else {
          window.location.assign('/');
        }
      });
    }
  }, [error]);

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email nie moze byc pusty';
    } else if (!isEmail(values.email)) {
      errors.email = 'Błędny adres email';
    }
    if (!values.password) {
      errors.password = 'Hasło nie może być puste';
    } else if (values.password.length <= 6) {
      errors.password = 'Hasło musi zawierać co najmniej 6 znaków';
    } else if (values.password !== values.password1)
      errors.password = 'Hasła muszą być takie same!';
    if (!values.firstName) {
      errors.firstName = 'Imię nie może być puste';
    }
    if (!values.lastName) {
      errors.lastName = 'Nazwisko nie może być puste';
    }
    if (!values.telephone) {
      errors.telephone = 'Numer telefonu nie może być pusty';
    } else if (values.telephone.length !== 9) {
      errors.telephone = 'Numer telefonu musi zawierać 9 cyfr';
    }

    return errors;
  };

  return (
    <div className="registerContainer my-5 text-center">
      <h1 className="row-md-3 text-center">Rejestracja</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="mt-4 fw-bold">Adres email</label>
          <p className="text-danger">{error.email}</p>
          <input
            name="email"
            type="email"
            required
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="mt-4 fw-bold">Hasło</label>
          <p className="text-danger">{error.password}</p>
          <input
            name="password"
            type="password"
            required
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="fw-bold">Powtórz hasło</label>
          <p className="text-danger"></p>
          <input
            name="password1"
            type="password"
            required
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="mt-4 fw-bold">Imię</label>
          <p className="text-danger">{error.firstName}</p>
          <input
            name="firstName"
            type="text"
            required
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="fw-bold">Nazwisko</label>
          <p className="text-danger">{error.lastName}</p>
          <input
            name="lastName"
            type="text"
            required
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <label className="fw-bold">Płeć</label>
        <div className="form-check">
          <label>Kobieta</label>
          <input
            type="radio"
            class="form-check-input"
            id="sex"
            name="sex"
            value="Female"
            onChange={handleChange}
          />
        </div>
        <div className="form-check">
          <label>Mężczyzna</label>
          <input
            type="radio"
            class="form-check-input"
            id="sex"
            name="sex"
            value="male"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="fw-bold">Numer telefonu</label>
          <p className="text-danger">{error.telephone}</p>
          <input
            name="telephone"
            type="number"
            required
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-4"
          onClick={handleSubmit}
        >
          Zarejestruj się
        </button>
      </form>
    </div>
  );
}
