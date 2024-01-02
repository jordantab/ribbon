import React from 'react';
import { Button, Row, Col, Container, Form } from 'react-bootstrap';
import * as formik from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

type GiftProps = {
  gift: string;
};
function Gift(props: GiftProps): JSX.Element {
  const { gift } = props;
  const navigate = useNavigate();

  const { Formik } = formik;

  const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
  });

  const redirectToTemplates = (): void => {
    navigate('/ribbons/templates');
  };

  return (
    <Container>
      {gift}
      <Formik
        validationSchema={schema}
        onSubmit={redirectToTemplates}
        initialValues={{
          email: '',
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                md="4"
                controlId="email-input"
                className="position-relative"
              >
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  isValid={touched.email && !errors.email}
                  isInvalid={touched.email && !!errors.email}
                />
                <Form.Control.Feedback tooltip>
                  Looks good!
                </Form.Control.Feedback>
                <Form.Control.Feedback tooltip type="invalid">
                  Incorrect email format
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button type="submit">Submit form</Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default Gift;
