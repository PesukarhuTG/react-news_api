import React from 'react';
import FormProps from '../types/Form';

interface LoginFormProps {
  onSubmit: (data: FormProps) => void;
}

type FormFields = {
  name: HTMLInputElement;
  birthday: HTMLInputElement;
  city: HTMLInputElement;
  gender: HTMLInputElement;
  file: HTMLInputElement;
  remember: HTMLInputElement;
};

function LoginForm({ onSubmit }: LoginFormProps) {
  const handleSumbit: React.FormEventHandler<HTMLFormElement & FormFields> = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const { name, birthday, city, gender, file, remember } = form;

    onSubmit({
      name: name.value,
      birthday: birthday.value,
      city: city.value,
      gender: gender.value,
      file: file.value,
      remember: remember.checked,
    });
  };

  return (
    <form onSubmit={handleSumbit}>
      <div className="form-wrapper">
        <label className="input-wrapper">
          <span className="input-name">Name</span>
          <input className="input-field" name="name" type="text" required />
        </label>
        <label className="input-wrapper">
          <span className="input-name">Birthday</span>
          <input className="input-field" name="birthday" type="date" required />
        </label>
      </div>

      <div className="form-wrapper">
        <label className="input-wrapper">
          <span className="input-name">Choose a city</span>
          <select className="input-city" name="city">
            <option value="no city"> </option>
            <option value="Saint-Petersbutg">Saint-Petersbutg</option>
            <option value="Moscow">Moscow</option>
            <option value="Voronezh">Voronezh</option>
            <option value="Petrozavodsk">Petrozavodsk</option>
            <option value="-">...other city</option>
          </select>
        </label>
        <label className="input-wrapper">
          <span className="input-name">Gender</span>
          <div className="genders-wrapper">
            <input type="radio" id="man" name="gender" value="man" onChange={() => {}} checked />
            <label className="gender-name" htmlFor="man">
              man
            </label>

            <input type="radio" id="woman" name="gender" value="woman" />
            <label className="gender-name" htmlFor="woman">
              woman
            </label>
          </div>
        </label>
      </div>

      <label className="input-wrapper">
        <span className="input-name">Upload a file</span>
        <input className="input-file" name="file" type="file" />
      </label>

      <label className="input-wrapper-gorizont">
        <input name="remember" type="checkbox" />
        <span className="remember-name">I consent to use my personal data</span>
      </label>

      <button className="btn-submit" type="submit">
        Send my data
      </button>
    </form>
  );
}

export default LoginForm;
