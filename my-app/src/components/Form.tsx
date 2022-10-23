import React, { useState } from 'react';
import FormProps from '../types/Form';

interface LoginFormProps {
  onSubmit: (data: FormProps) => void;
}

interface FormFields {
  name: HTMLInputElement;
  birthday: HTMLInputElement;
  city: HTMLInputElement;
  gender: HTMLInputElement;
  file: HTMLInputElement;
  remember: HTMLInputElement;
}

const Form: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [selectedFile, setSelectedFile] = useState<any>(null); //eslint-disable-line

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const clearForm = (prop: Array<HTMLInputElement>) => {
    prop.forEach((item) => {
      if (item && item.type === 'checkbox') {
        item.checked = false;
      } else if (
        item &&
        (item.type === 'text' ||
          item.type === 'date' ||
          item.type === 'file' ||
          item.name === 'city')
      ) {
        item.value = '';
      }
    });

    setDisabled(true);
    setSelectedFile(null);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement & FormFields> = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const { name, birthday, city, gender, file, remember } = form;

    const blob = new Blob([selectedFile]);
    const url = URL.createObjectURL(blob);

    onSubmit({
      name: name?.value,
      birthday: birthday?.value,
      city: city?.value,
      gender: gender?.value,
      file: url,
      remember: remember?.checked,
    });

    clearForm([name, birthday, city, file, remember]);
  };

  const setDisabledVal = (value: string) => {
    value.length !== 0 ? setDisabled(false) : setDisabled(true);
  };

  return (
    <form onSubmit={handleSubmit} data-testid="form">
      <div className="form-wrapper">
        <label className="input-wrapper">
          <span className="input-name">Name</span>
          <input
            className="input-field"
            name="name"
            type="text"
            data-testid="input-fname"
            onChange={(e) => setDisabledVal(e.target.value)}
            required
          />
        </label>
        <label className="input-wrapper">
          <span className="input-name">Birthday</span>
          <input
            className="input-field"
            name="birthday"
            type="date"
            data-testid="input-fdate"
            onChange={(e) => setDisabledVal(e.target.value)}
            required
          />
        </label>
      </div>

      <div className="form-wrapper">
        <label className="input-wrapper">
          <span className="input-name">Choose a city</span>
          <select
            className="input-city"
            name="city"
            data-testid="input-fcity"
            onChange={(e) => setDisabledVal(e.target.value)}
            required
          >
            <option value="" />
            <option value="Saint-Petersburg">Saint-Petersburg</option>
            <option value="Moscow">Moscow</option>
            <option value="Voronezh">Voronezh</option>
            <option value="Petrozavodsk">Petrozavodsk</option>
            <option value="other city">...other city</option>
          </select>
        </label>
        <label className="input-wrapper">
          <span className="input-name">Gender</span>
          <div className="genders-wrapper">
            <input
              type="radio"
              id="man"
              name="gender"
              value="man"
              data-testid="input-fgender-man"
              defaultChecked
            />
            <label className="gender-name" htmlFor="man">
              man
            </label>

            <input
              type="radio"
              id="woman"
              name="gender"
              value="woman"
              data-testid="input-fgender-woman"
            />
            <label className="gender-name" htmlFor="woman">
              woman
            </label>
          </div>
        </label>
      </div>

      <label className="input-wrapper">
        <span className="input-name">Upload a file</span>
        <input
          className="input-file"
          name="file"
          type="file"
          accept="image/*, .png, .jpg"
          data-testid="input-file"
          onChange={handleChange}
        />
      </label>

      <label className="input-wrapper-gorizont">
        <input name="remember" type="checkbox" data-testid="input-faccept" />
        <span className="remember-name">I consent to use my personal data</span>
      </label>

      <button
        className="btn-submit"
        type="submit"
        disabled={disabled}
        data-testid="btn-submit"
        value="btnSubmit"
      >
        Send my data
      </button>
    </form>
  );
};

export default Form;
