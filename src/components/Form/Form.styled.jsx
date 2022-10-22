import styled from 'styled-components';

export const ContactForm = styled.form`
  padding: 20px;
`;

export const FormField = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
`;

export const Label = styled.label`
  margin-bottom: 4px;
`;

export const Input = styled.input`
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  padding: 10px;
`;

export const FormButton = styled.button`
  display: block;
  margin: 25px auto auto;
  width: 180px;
  height: 35px;
  border-radius: 4px;
  border: transparent;
  color: #fff;
  background-color: #4f8bba;
  font-weight: 700;
`;
