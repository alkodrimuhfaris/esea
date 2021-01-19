/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Container,
  Input,
  Form,
  FormGroup,
  Label,
  Col,
  FormFeedback,
  Button,
} from 'reactstrap';
import {Formik, Field} from 'formik';
import * as Yup from 'yup';
import leftBackground from '../../Assets/Photos/leftBackground.png';
import rightBackground from '../../Assets/Photos/rightBackground.png';
import useWindowDimensions from '../../Helpers/useWindowDimension';

const schema = Yup.object().shape({
  name: Yup.string()
    .required('Nama dibutuhkan!')
    .min(1, 'Nama terlalu singkat!'),
  email: Yup.string()
    .email('Masukkan format email yang benar!')
    .required('Email dibutuhkan!'),
  phone: Yup.string()
    .required('Masukkan Nomor Telepon!')
    .matches(
      // eslint-disable-next-line no-useless-escape
      /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i,
      'Masukkan Nomor Telepon yang benar!',
    ),
  partner: Yup.string('Pilih jenis mitra!').test(
    'partner-test',
    'Pilih jenis mitra yang benar!',
    (value) => {
      value = value === 'Nelayan' || value === 'Penjual';
      return value;
    },
  ),
});

export default function WorkingTogether() {
  const {width, xs, sm, md, lg, xl} = useWindowDimensions();
  const [sideLength, setSideLength] = React.useState(0);

  React.useEffect(() => {
    let side = sideLength;
    if (xs) {
      side = 0;
    } else if (sm) {
      side = (width - 576) / 2;
    } else if (md) {
      side = (width - 768) / 2;
    } else if (lg) {
      side = (width - 992) / 2;
    } else if (xl) {
      side = (width - 1200) / 2;
    }
    setSideLength(side);
  }, [width]);

  const submit = (values) => {
    console.log(values);
  };

  const initialValue = {
    name: '',
    email: '',
    phone: '',
  };

  return (
    <div className="parent position-relative">
      {/* left background image */}
      <div
        className="left-background position-absolute"
        style={{width: sideLength}}
      >
        <div className="d-flex justify-content-center align-items-center background-wrapper position-relative">
          <div
            style={{width: sideLength + 2}}
            className="background-left-cover position-absolute"
          >
            &nbsp;
          </div>
          <img
            src={leftBackground}
            className="image-cover"
            alt="left-background"
          />
        </div>
      </div>
      {/* right background image */}
      <div
        className="right-background position-absolute"
        style={{width: sideLength}}
      >
        <div className="d-flex justify-content-center align-items-center background-wrapper position-relative">
          <div
            style={{width: sideLength + 2}}
            className="background-right-cover position-absolute"
          >
            &nbsp;
          </div>
          <img
            src={rightBackground}
            className="image-cover"
            alt="right-background"
          />
        </div>
      </div>
      <Container className="pt-5 d-flex container-partner flex-column justify-content-center align-items-center">
        {/* <div className="d-flex my-5 align-items-center partner-title justify-content-center">
          <h4 className="kumbh-sans text-center">Our Partners</h4>
        </div> */}

        <h2 className="kumbh-sans text-center">Mulai Kerja Sama Dengan Kami</h2>
        <Formik
          initialValues={initialValue}
          validationSchema={schema}
          validateOnBlur
          onSubmit={(values) => {
            submit(values);
          }}
        >
          {(props) => {
            const {
              touched,
              errors,
              handleSubmit,
              values,
              handleChange,
              handleBlur,
              setFieldValue,
            } = props;
            return (
              <Form
                onSubmit={handleSubmit}
                className={`montserrat partner-form ${md ? 'w-100' : 'w-60'}`}
              >
                <FormGroup className="mt-1">
                  <Label for="name">Nama</Label>
                  <Input
                    tag={Field}
                    value={values.name}
                    onChange={handleChange}
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Nama"
                    onBlur={handleBlur}
                  />
                  {errors.name || touched.name ? (
                    <text color="danger" className="error-form">
                      {errors.name}
                    </text>
                  ) : null}
                </FormGroup>

                <FormGroup className="mt-1">
                  <Label for="email">E-mail</Label>
                  <Input
                    tag={Field}
                    value={values.email}
                    onChange={handleChange}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="E-mail"
                    onBlur={handleBlur}
                  />
                  {errors.email || touched.email ? (
                    <text color="danger" className="error-form">
                      {errors.email}
                    </text>
                  ) : null}
                </FormGroup>

                <FormGroup className="mt-1">
                  <Label for="phone">Telepon</Label>
                  <Input
                    tag={Field}
                    value={values.phone}
                    onChange={handleChange}
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Telepon"
                    onBlur={handleBlur}
                  />
                  {errors.phone || touched.phone ? (
                    <text color="danger" className="error-form">
                      {errors.phone}
                    </text>
                  ) : null}
                </FormGroup>

                <Col sm={12} className="d-flex">
                  {['Penjual', 'Nelayan'].map((item, i) => (
                    <FormGroup className={i > 0 && 'ml-4'} check>
                      <Label check>
                        <Input
                          type="radio"
                          name="partner"
                          id={`partner-${item}`}
                          value={item}
                          checked={item === values.partner}
                          onChange={(e) =>
                            setFieldValue('partner', e.target.value)
                          }
                        />
                        <span>{`Mitra ${item}`}</span>
                      </Label>
                    </FormGroup>
                  ))}
                </Col>
                <Col sm={12}>
                  {errors.partner || touched.partner ? (
                    <text color="danger" className="error-form">
                      {errors.partner}
                    </text>
                  ) : null}
                </Col>

                <div className="my-3 d-flex justify-content-center">
                  <Button className="font-bold btn-esea-main" type="submit">
                    Kirim
                  </Button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </Container>
    </div>
  );
}
