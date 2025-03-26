import React, { useState } from "react";
import styled from "styled-components";

const GetInTouchForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
    console.log(formData);
  };

  return (
    <MainContainer>
      <Heading>Get in Touch</Heading>

      <FormContainer>
        <form onSubmit={handleSubmit}>
          {/* <Select name="service" value={formData.service} onChange={handleChange} required>
            <option value="">Select a Service</option>
            <option value="Ceramic Coating">Ceramic Coating</option>
            <option value="Interior Detailing">Interior Detailing</option>
            <option value="Paint Protection">Paint Protection</option>
            <option value="Car Wash">Car Wash</option>
          </Select> */}

       

          {/* <FlexRow>
            <Input name="paintColor" placeholder="Paint Color" value={formData.paintColor} onChange={handleChange} required />
            <Input type="date" name="bookingDate" value={formData.bookingDate} onChange={handleChange} required />
          </FlexRow> */}

          <FlexRow>
            <Input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
            <Input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
          </FlexRow>

          <FlexRow>
            <Input type="tel" name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} required />
            <Input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          </FlexRow>

          <TextArea name="additionalInfo" placeholder="Additional Info (Optional)" value={formData.additionalInfo} onChange={handleChange} />

          <Button type="submit">Submit</Button>
        </form>
      </FormContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 50px 20px;
  background: #191B21;
  color: #fff;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: bold;
  text-transform: uppercase;
 color: #ffc107
`;

const FormContainer = styled.div`
  width: 90%;
  max-width: 600px;
  margin: auto;
  background: #191B21;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  margin-bottom: 15px;
  border: none;
  border-radius: 5px;
  background: #343A45;
  color: #fff;
`;

const FlexRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background: #343A45;
  color: #fff;
  outline: none;
  &:focus {
    background: #343A45;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background: #343A45;
  color: #fff;
  min-height: 100px;
  margin-bottom: 15px;
  &:focus {
    background:#343A45;
  }
`;

const Button = styled.button`
  width: 30%;
  padding: 12px;
  background: #ffc107;
  color: #343A45;
  border: none;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

`;

export default GetInTouchForm;
