import React from 'react';
import styled from 'styled-components';
import FormProps from '../types/Form';

class FormCard extends React.Component<FormProps> {
  constructor(props: FormProps) {
    super(props);
  }

  render() {
    const { name, birthday, city, gender, file } = this.props;

    const blob = new Blob([file]);
    const url = URL.createObjectURL(blob);

    return (
      <Item data-testid="form-card">
        <CardImage
          style={{
            backgroundImage: `url(${url})`,
          }}
        />
        <Description>
          <Name>{name}</Name>
          <InfoWrapper>
            <BirthdayData>{birthday}</BirthdayData>
            <GenderData>{gender}</GenderData>
          </InfoWrapper>
          <CityData>{city}</CityData>
        </Description>
      </Item>
    );
  }
}

const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  background-image: url('../assets/img/no-poster.jpg');
  background-color: var(--second-contrast);
  border-radius: 10px;
  list-style: none;
  transition: 0.3s all;

  &:hover {
    box-shadow: 0 0 15px 0 var(--primary);
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
`;

const InfoWrapper = styled.div`
  display: flex;
`;

const BirthdayData = styled.span`
  display: block;
  min-width: 90px;
  width: 100%;
  font-size: 12px;
`;

const GenderData = styled.span`
  font-size: 12px;
`;

const CityData = styled.p`
  font-size: 16px;
`;

const CardImage = styled.div`
  display: block;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
`;

export default FormCard;
