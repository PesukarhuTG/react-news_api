import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import FormProps from '../types/Form';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Context } from 'store/Context';

interface LoginFormProps {
  onSubmit: (data: FormProps) => void;
}

const Form: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const {
    formName,
    setFormName,
    formDate,
    setFormDate,
    formCity,
    setFormCity,
    formGender,
    setFormGender,
    formAccept,
    setFormAccept,
  } = useContext(Context);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const getDataSubmit: SubmitHandler<FormProps> = (data) => {
    let file = null;

    if (selectedFile !== null) {
      const blob = new Blob([selectedFile]);
      file = URL.createObjectURL(blob);
    }

    onSubmit({ ...data, file });

    reset();
    setFormName('');
    setFormDate('');
    setFormCity('');
    setFormGender('man');
    setSelectedFile(null);
    setFormAccept(false);
    setDisabled(true);
  };

  useEffect(() => {
    if (formName !== '' || formDate !== '' || formCity !== '') {
      setDisabled(false);
    }
  }, [formName, formDate, formCity]);

  return (
    <form onSubmit={handleSubmit(getDataSubmit)} data-testid="form">
      <div className="form-wrapper">
        <label className="input-wrapper">
          <span className="input-name">Name</span>
          <input
            className="input-field"
            {...register('name', {
              required: 'Name is required',
              minLength: { value: 2, message: 'Name should be more 2 letters' },
            })}
            name="name"
            type="text"
            data-testid="input-fname"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
          />
          {errors.name && <ErrMessage>{errors.name.message}</ErrMessage>}
        </label>
        <label className="input-wrapper">
          <span className="input-name">Birthday</span>
          <input
            className="input-field"
            {...register('birthday', { required: 'Birthday is required' })}
            name="birthday"
            type="date"
            data-testid="input-fdate"
            value={formDate}
            onChange={(e) => setFormDate(e.target.value)}
          />
          {errors.birthday && <ErrMessage>{errors.birthday.message}</ErrMessage>}
        </label>
      </div>

      <div className="form-wrapper">
        <label className="input-wrapper">
          <span className="input-name">Choose a city</span>
          <select
            className="input-city"
            {...register('city', { required: 'City is required' })}
            name="city"
            data-testid="input-fcity"
            value={formCity}
            onChange={(e) => setFormCity(e.target.value)}
          >
            <option value="" />
            <option value="Saint-Petersburg">Saint-Petersburg</option>
            <option value="Moscow">Moscow</option>
            <option value="Voronezh">Voronezh</option>
            <option value="Petrozavodsk">Petrozavodsk</option>
            <option value="other city">...other city</option>
          </select>
          {errors.city && <ErrMessage>{errors.city.message}</ErrMessage>}
        </label>
        <label className="input-wrapper">
          <span className="input-name">Gender</span>
          <div className="genders-wrapper">
            <input
              type="radio"
              id="man"
              {...register('gender')}
              name="gender"
              value="man"
              data-testid="input-fgender-man"
              defaultChecked={formGender === 'man' ? true : false}
              onChange={(e) => setFormGender(e.target.value)}
            />
            <label className="gender-name" htmlFor="man">
              man
            </label>

            <input
              type="radio"
              id="woman"
              {...register('gender')}
              name="gender"
              value="woman"
              data-testid="input-fgender-woman"
              defaultChecked={formGender === 'woman' ? true : false}
              onChange={(e) => setFormGender(e.target.value)}
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
          {...register('file')}
          name="file"
          type="file"
          accept="image/*, .png, .jpg"
          data-testid="input-file"
          onChange={handleChange}
        />
      </label>

      <label className="input-wrapper-gorizont">
        <input
          type="checkbox"
          {...register('remember')}
          name="remember"
          data-testid="input-faccept"
          defaultChecked={formAccept}
          onChange={(e) => setFormAccept(e.target.checked)}
        />
        <span className="remember-name">I consent to use my personal data</span>
      </label>

      <button
        className="btn-submit"
        type="submit"
        disabled={disabled}
        data-testid="btn-submit"
        value="btnSubmit"
      >
        Save my data
      </button>
    </form>
  );
};

const ErrMessage = styled.p`
  padding-top: 7px;
  font-size: 9px;
  color: var(--accent);
`;

export default Form;
