/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Seafarer } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function SeafarerUpdateForm(props) {
  const {
    id: idProp,
    seafarer,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    surname: "",
    fiscal_code: "",
    date_of_birth: "",
    city_of_residence: "",
    address: "",
    zip_code: "",
    profile_image: "",
    nationality: "",
    gender: "",
    date_of_registration: "",
    preccint: "",
    username: "",
    payment_method: "",
    maritime_compartment: "",
    birth_place: "",
    passport_number: "",
    registration_number: "",
    telephone_number: "",
    id_role: "",
    subscription_type: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [surname, setSurname] = React.useState(initialValues.surname);
  const [fiscal_code, setFiscal_code] = React.useState(
    initialValues.fiscal_code
  );
  const [date_of_birth, setDate_of_birth] = React.useState(
    initialValues.date_of_birth
  );
  const [city_of_residence, setCity_of_residence] = React.useState(
    initialValues.city_of_residence
  );
  const [address, setAddress] = React.useState(initialValues.address);
  const [zip_code, setZip_code] = React.useState(initialValues.zip_code);
  const [profile_image, setProfile_image] = React.useState(
    initialValues.profile_image
  );
  const [nationality, setNationality] = React.useState(
    initialValues.nationality
  );
  const [gender, setGender] = React.useState(initialValues.gender);
  const [date_of_registration, setDate_of_registration] = React.useState(
    initialValues.date_of_registration
  );
  const [preccint, setPreccint] = React.useState(initialValues.preccint);
  const [username, setUsername] = React.useState(initialValues.username);
  const [payment_method, setPayment_method] = React.useState(
    initialValues.payment_method
  );
  const [maritime_compartment, setMaritime_compartment] = React.useState(
    initialValues.maritime_compartment
  );
  const [birth_place, setBirth_place] = React.useState(
    initialValues.birth_place
  );
  const [passport_number, setPassport_number] = React.useState(
    initialValues.passport_number
  );
  const [registration_number, setRegistration_number] = React.useState(
    initialValues.registration_number
  );
  const [telephone_number, setTelephone_number] = React.useState(
    initialValues.telephone_number
  );
  const [id_role, setId_role] = React.useState(initialValues.id_role);
  const [subscription_type, setSubscription_type] = React.useState(
    initialValues.subscription_type
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = seafarerRecord
      ? { ...initialValues, ...seafarerRecord }
      : initialValues;
    setName(cleanValues.name);
    setSurname(cleanValues.surname);
    setFiscal_code(cleanValues.fiscal_code);
    setDate_of_birth(cleanValues.date_of_birth);
    setCity_of_residence(cleanValues.city_of_residence);
    setAddress(cleanValues.address);
    setZip_code(cleanValues.zip_code);
    setProfile_image(cleanValues.profile_image);
    setNationality(cleanValues.nationality);
    setGender(cleanValues.gender);
    setDate_of_registration(cleanValues.date_of_registration);
    setPreccint(cleanValues.preccint);
    setUsername(cleanValues.username);
    setPayment_method(cleanValues.payment_method);
    setMaritime_compartment(cleanValues.maritime_compartment);
    setBirth_place(cleanValues.birth_place);
    setPassport_number(cleanValues.passport_number);
    setRegistration_number(cleanValues.registration_number);
    setTelephone_number(cleanValues.telephone_number);
    setId_role(cleanValues.id_role);
    setSubscription_type(cleanValues.subscription_type);
    setErrors({});
  };
  const [seafarerRecord, setSeafarerRecord] = React.useState(seafarer);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Seafarer, idProp)
        : seafarer;
      setSeafarerRecord(record);
    };
    queryData();
  }, [idProp, seafarer]);
  React.useEffect(resetStateValues, [seafarerRecord]);
  const validations = {
    name: [],
    surname: [],
    fiscal_code: [],
    date_of_birth: [],
    city_of_residence: [],
    address: [],
    zip_code: [],
    profile_image: [{ type: "URL" }],
    nationality: [],
    gender: [],
    date_of_registration: [],
    preccint: [],
    username: [],
    payment_method: [],
    maritime_compartment: [],
    birth_place: [],
    passport_number: [],
    registration_number: [],
    telephone_number: [],
    id_role: [],
    subscription_type: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          surname,
          fiscal_code,
          date_of_birth,
          city_of_residence,
          address,
          zip_code,
          profile_image,
          nationality,
          gender,
          date_of_registration,
          preccint,
          username,
          payment_method,
          maritime_compartment,
          birth_place,
          passport_number,
          registration_number,
          telephone_number,
          id_role,
          subscription_type,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Seafarer.copyOf(seafarerRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "SeafarerUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              surname,
              fiscal_code,
              date_of_birth,
              city_of_residence,
              address,
              zip_code,
              profile_image,
              nationality,
              gender,
              date_of_registration,
              preccint,
              username,
              payment_method,
              maritime_compartment,
              birth_place,
              passport_number,
              registration_number,
              telephone_number,
              id_role,
              subscription_type,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Surname"
        isRequired={false}
        isReadOnly={false}
        value={surname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              surname: value,
              fiscal_code,
              date_of_birth,
              city_of_residence,
              address,
              zip_code,
              profile_image,
              nationality,
              gender,
              date_of_registration,
              preccint,
              username,
              payment_method,
              maritime_compartment,
              birth_place,
              passport_number,
              registration_number,
              telephone_number,
              id_role,
              subscription_type,
            };
            const result = onChange(modelFields);
            value = result?.surname ?? value;
          }
          if (errors.surname?.hasError) {
            runValidationTasks("surname", value);
          }
          setSurname(value);
        }}
        onBlur={() => runValidationTasks("surname", surname)}
        errorMessage={errors.surname?.errorMessage}
        hasError={errors.surname?.hasError}
        {...getOverrideProps(overrides, "surname")}
      ></TextField>
      <TextField
        label="Fiscal code"
        isRequired={false}
        isReadOnly={false}
        value={fiscal_code}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              surname,
              fiscal_code: value,
              date_of_birth,
              city_of_residence,
              address,
              zip_code,
              profile_image,
              nationality,
              gender,
              date_of_registration,
              preccint,
              username,
              payment_method,
              maritime_compartment,
              birth_place,
              passport_number,
              registration_number,
              telephone_number,
              id_role,
              subscription_type,
            };
            const result = onChange(modelFields);
            value = result?.fiscal_code ?? value;
          }
          if (errors.fiscal_code?.hasError) {
            runValidationTasks("fiscal_code", value);
          }
          setFiscal_code(value);
        }}
        onBlur={() => runValidationTasks("fiscal_code", fiscal_code)}
        errorMessage={errors.fiscal_code?.errorMessage}
        hasError={errors.fiscal_code?.hasError}
        {...getOverrideProps(overrides, "fiscal_code")}
      ></TextField>
      <TextField
        label="Date of birth"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={date_of_birth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              surname,
              fiscal_code,
              date_of_birth: value,
              city_of_residence,
              address,
              zip_code,
              profile_image,
              nationality,
              gender,
              date_of_registration,
              preccint,
              username,
              payment_method,
              maritime_compartment,
              birth_place,
              passport_number,
              registration_number,
              telephone_number,
              id_role,
              subscription_type,
            };
            const result = onChange(modelFields);
            value = result?.date_of_birth ?? value;
          }
          if (errors.date_of_birth?.hasError) {
            runValidationTasks("date_of_birth", value);
          }
          setDate_of_birth(value);
        }}
        onBlur={() => runValidationTasks("date_of_birth", date_of_birth)}
        errorMessage={errors.date_of_birth?.errorMessage}
        hasError={errors.date_of_birth?.hasError}
        {...getOverrideProps(overrides, "date_of_birth")}
      ></TextField>
      <TextField
        label="City of residence"
        isRequired={false}
        isReadOnly={false}
        value={city_of_residence}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              surname,
              fiscal_code,
              date_of_birth,
              city_of_residence: value,
              address,
              zip_code,
              profile_image,
              nationality,
              gender,
              date_of_registration,
              preccint,
              username,
              payment_method,
              maritime_compartment,
              birth_place,
              passport_number,
              registration_number,
              telephone_number,
              id_role,
              subscription_type,
            };
            const result = onChange(modelFields);
            value = result?.city_of_residence ?? value;
          }
          if (errors.city_of_residence?.hasError) {
            runValidationTasks("city_of_residence", value);
          }
          setCity_of_residence(value);
        }}
        onBlur={() =>
          runValidationTasks("city_of_residence", city_of_residence)
        }
        errorMessage={errors.city_of_residence?.errorMessage}
        hasError={errors.city_of_residence?.hasError}
        {...getOverrideProps(overrides, "city_of_residence")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              surname,
              fiscal_code,
              date_of_birth,
              city_of_residence,
              address: value,
              zip_code,
              profile_image,
              nationality,
              gender,
              date_of_registration,
              preccint,
              username,
              payment_method,
              maritime_compartment,
              birth_place,
              passport_number,
              registration_number,
              telephone_number,
              id_role,
              subscription_type,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="Zip code"
        isRequired={false}
        isReadOnly={false}
        value={zip_code}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              surname,
              fiscal_code,
              date_of_birth,
              city_of_residence,
              address,
              zip_code: value,
              profile_image,
              nationality,
              gender,
              date_of_registration,
              preccint,
              username,
              payment_method,
              maritime_compartment,
              birth_place,
              passport_number,
              registration_number,
              telephone_number,
              id_role,
              subscription_type,
            };
            const result = onChange(modelFields);
            value = result?.zip_code ?? value;
          }
          if (errors.zip_code?.hasError) {
            runValidationTasks("zip_code", value);
          }
          setZip_code(value);
        }}
        onBlur={() => runValidationTasks("zip_code", zip_code)}
        errorMessage={errors.zip_code?.errorMessage}
        hasError={errors.zip_code?.hasError}
        {...getOverrideProps(overrides, "zip_code")}
      ></TextField>
      <TextField
        label="Profile image"
        isRequired={false}
        isReadOnly={false}
        value={profile_image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              surname,
              fiscal_code,
              date_of_birth,
              city_of_residence,
              address,
              zip_code,
              profile_image: value,
              nationality,
              gender,
              date_of_registration,
              preccint,
              username,
              payment_method,
              maritime_compartment,
              birth_place,
              passport_number,
              registration_number,
              telephone_number,
              id_role,
              subscription_type,
            };
            const result = onChange(modelFields);
            value = result?.profile_image ?? value;
          }
          if (errors.profile_image?.hasError) {
            runValidationTasks("profile_image", value);
          }
          setProfile_image(value);
        }}
        onBlur={() => runValidationTasks("profile_image", profile_image)}
        errorMessage={errors.profile_image?.errorMessage}
        hasError={errors.profile_image?.hasError}
        {...getOverrideProps(overrides, "profile_image")}
      ></TextField>
      <TextField
        label="Nationality"
        isRequired={false}
        isReadOnly={false}
        value={nationality}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              surname,
              fiscal_code,
              date_of_birth,
              city_of_residence,
              address,
              zip_code,
              profile_image,
              nationality: value,
              gender,
              date_of_registration,
              preccint,
              username,
              payment_method,
              maritime_compartment,
              birth_place,
              passport_number,
              registration_number,
              telephone_number,
              id_role,
              subscription_type,
            };
            const result = onChange(modelFields);
            value = result?.nationality ?? value;
          }
          if (errors.nationality?.hasError) {
            runValidationTasks("nationality", value);
          }
          setNationality(value);
        }}
        onBlur={() => runValidationTasks("nationality", nationality)}
        errorMessage={errors.nationality?.errorMessage}
        hasError={errors.nationality?.hasError}
        {...getOverrideProps(overrides, "nationality")}
      ></TextField>
      <TextField
        label="Gender"
        isRequired={false}
        isReadOnly={false}
        value={gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              surname,
              fiscal_code,
              date_of_birth,
              city_of_residence,
              address,
              zip_code,
              profile_image,
              nationality,
              gender: value,
              date_of_registration,
              preccint,
              username,
              payment_method,
              maritime_compartment,
              birth_place,
              passport_number,
              registration_number,
              telephone_number,
              id_role,
              subscription_type,
            };
            const result = onChange(modelFields);
            value = result?.gender ?? value;
          }
          if (errors.gender?.hasError) {
            runValidationTasks("gender", value);
          }
          setGender(value);
        }}
        onBlur={() => runValidationTasks("gender", gender)}
        errorMessage={errors.gender?.errorMessage}
        hasError={errors.gender?.hasError}
        {...getOverrideProps(overrides, "gender")}
      ></TextField>
      <TextField
        label="Date of registration"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={date_of_registration}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              surname,
              fiscal_code,
              date_of_birth,
              city_of_residence,
              address,
              zip_code,
              profile_image,
              nationality,
              gender,
              date_of_registration: value,
              preccint,
              username,
              payment_method,
              maritime_compartment,
              birth_place,
              passport_number,
              registration_number,
              telephone_number,
              id_role,
              subscription_type,
            };
            const result = onChange(modelFields);
            value = result?.date_of_registration ?? value;
          }
          if (errors.date_of_registration?.hasError) {
            runValidationTasks("date_of_registration", value);
          }
          setDate_of_registration(value);
        }}
        onBlur={() =>
          runValidationTasks("date_of_registration", date_of_registration)
        }
        errorMessage={errors.date_of_registration?.errorMessage}
        hasError={errors.date_of_registration?.hasError}
        {...getOverrideProps(overrides, "date_of_registration")}
      ></TextField>
      <TextField
        label="Preccint"
        isRequired={false}
        isReadOnly={false}
        value={preccint}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              surname,
              fiscal_code,
              date_of_birth,
              city_of_residence,
              address,
              zip_code,
              profile_image,
              nationality,
              gender,
              date_of_registration,
              preccint: value,
              username,
              payment_method,
              maritime_compartment,
              birth_place,
              passport_number,
              registration_number,
              telephone_number,
              id_role,
              subscription_type,
            };
            const result = onChange(modelFields);
            value = result?.preccint ?? value;
          }
          if (errors.preccint?.hasError) {
            runValidationTasks("preccint", value);
          }
          setPreccint(value);
        }}
        onBlur={() => runValidationTasks("preccint", preccint)}
        errorMessage={errors.preccint?.errorMessage}
        hasError={errors.preccint?.hasError}
        {...getOverrideProps(overrides, "preccint")}
      ></TextField>
      <TextField
        label="Username"
        isRequired={false}
        isReadOnly={false}
        value={username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              surname,
              fiscal_code,
              date_of_birth,
              city_of_residence,
              address,
              zip_code,
              profile_image,
              nationality,
              gender,
              date_of_registration,
              preccint,
              username: value,
              payment_method,
              maritime_compartment,
              birth_place,
              passport_number,
              registration_number,
              telephone_number,
              id_role,
              subscription_type,
            };
            const result = onChange(modelFields);
            value = result?.username ?? value;
          }
          if (errors.username?.hasError) {
            runValidationTasks("username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
      ></TextField>
      <TextField
        label="Payment method"
        isRequired={false}
        isReadOnly={false}
        value={payment_method}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              surname,
              fiscal_code,
              date_of_birth,
              city_of_residence,
              address,
              zip_code,
              profile_image,
              nationality,
              gender,
              date_of_registration,
              preccint,
              username,
              payment_method: value,
              maritime_compartment,
              birth_place,
              passport_number,
              registration_number,
              telephone_number,
              id_role,
              subscription_type,
            };
            const result = onChange(modelFields);
            value = result?.payment_method ?? value;
          }
          if (errors.payment_method?.hasError) {
            runValidationTasks("payment_method", value);
          }
          setPayment_method(value);
        }}
        onBlur={() => runValidationTasks("payment_method", payment_method)}
        errorMessage={errors.payment_method?.errorMessage}
        hasError={errors.payment_method?.hasError}
        {...getOverrideProps(overrides, "payment_method")}
      ></TextField>
      <TextField
        label="Maritime compartment"
        isRequired={false}
        isReadOnly={false}
        value={maritime_compartment}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              surname,
              fiscal_code,
              date_of_birth,
              city_of_residence,
              address,
              zip_code,
              profile_image,
              nationality,
              gender,
              date_of_registration,
              preccint,
              username,
              payment_method,
              maritime_compartment: value,
              birth_place,
              passport_number,
              registration_number,
              telephone_number,
              id_role,
              subscription_type,
            };
            const result = onChange(modelFields);
            value = result?.maritime_compartment ?? value;
          }
          if (errors.maritime_compartment?.hasError) {
            runValidationTasks("maritime_compartment", value);
          }
          setMaritime_compartment(value);
        }}
        onBlur={() =>
          runValidationTasks("maritime_compartment", maritime_compartment)
        }
        errorMessage={errors.maritime_compartment?.errorMessage}
        hasError={errors.maritime_compartment?.hasError}
        {...getOverrideProps(overrides, "maritime_compartment")}
      ></TextField>
      <TextField
        label="Birth place"
        isRequired={false}
        isReadOnly={false}
        value={birth_place}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              surname,
              fiscal_code,
              date_of_birth,
              city_of_residence,
              address,
              zip_code,
              profile_image,
              nationality,
              gender,
              date_of_registration,
              preccint,
              username,
              payment_method,
              maritime_compartment,
              birth_place: value,
              passport_number,
              registration_number,
              telephone_number,
              id_role,
              subscription_type,
            };
            const result = onChange(modelFields);
            value = result?.birth_place ?? value;
          }
          if (errors.birth_place?.hasError) {
            runValidationTasks("birth_place", value);
          }
          setBirth_place(value);
        }}
        onBlur={() => runValidationTasks("birth_place", birth_place)}
        errorMessage={errors.birth_place?.errorMessage}
        hasError={errors.birth_place?.hasError}
        {...getOverrideProps(overrides, "birth_place")}
      ></TextField>
      <TextField
        label="Passport number"
        isRequired={false}
        isReadOnly={false}
        value={passport_number}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              surname,
              fiscal_code,
              date_of_birth,
              city_of_residence,
              address,
              zip_code,
              profile_image,
              nationality,
              gender,
              date_of_registration,
              preccint,
              username,
              payment_method,
              maritime_compartment,
              birth_place,
              passport_number: value,
              registration_number,
              telephone_number,
              id_role,
              subscription_type,
            };
            const result = onChange(modelFields);
            value = result?.passport_number ?? value;
          }
          if (errors.passport_number?.hasError) {
            runValidationTasks("passport_number", value);
          }
          setPassport_number(value);
        }}
        onBlur={() => runValidationTasks("passport_number", passport_number)}
        errorMessage={errors.passport_number?.errorMessage}
        hasError={errors.passport_number?.hasError}
        {...getOverrideProps(overrides, "passport_number")}
      ></TextField>
      <TextField
        label="Registration number"
        isRequired={false}
        isReadOnly={false}
        value={registration_number}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              surname,
              fiscal_code,
              date_of_birth,
              city_of_residence,
              address,
              zip_code,
              profile_image,
              nationality,
              gender,
              date_of_registration,
              preccint,
              username,
              payment_method,
              maritime_compartment,
              birth_place,
              passport_number,
              registration_number: value,
              telephone_number,
              id_role,
              subscription_type,
            };
            const result = onChange(modelFields);
            value = result?.registration_number ?? value;
          }
          if (errors.registration_number?.hasError) {
            runValidationTasks("registration_number", value);
          }
          setRegistration_number(value);
        }}
        onBlur={() =>
          runValidationTasks("registration_number", registration_number)
        }
        errorMessage={errors.registration_number?.errorMessage}
        hasError={errors.registration_number?.hasError}
        {...getOverrideProps(overrides, "registration_number")}
      ></TextField>
      <TextField
        label="Telephone number"
        isRequired={false}
        isReadOnly={false}
        value={telephone_number}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              surname,
              fiscal_code,
              date_of_birth,
              city_of_residence,
              address,
              zip_code,
              profile_image,
              nationality,
              gender,
              date_of_registration,
              preccint,
              username,
              payment_method,
              maritime_compartment,
              birth_place,
              passport_number,
              registration_number,
              telephone_number: value,
              id_role,
              subscription_type,
            };
            const result = onChange(modelFields);
            value = result?.telephone_number ?? value;
          }
          if (errors.telephone_number?.hasError) {
            runValidationTasks("telephone_number", value);
          }
          setTelephone_number(value);
        }}
        onBlur={() => runValidationTasks("telephone_number", telephone_number)}
        errorMessage={errors.telephone_number?.errorMessage}
        hasError={errors.telephone_number?.hasError}
        {...getOverrideProps(overrides, "telephone_number")}
      ></TextField>
      <TextField
        label="Id role"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={id_role}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              surname,
              fiscal_code,
              date_of_birth,
              city_of_residence,
              address,
              zip_code,
              profile_image,
              nationality,
              gender,
              date_of_registration,
              preccint,
              username,
              payment_method,
              maritime_compartment,
              birth_place,
              passport_number,
              registration_number,
              telephone_number,
              id_role: value,
              subscription_type,
            };
            const result = onChange(modelFields);
            value = result?.id_role ?? value;
          }
          if (errors.id_role?.hasError) {
            runValidationTasks("id_role", value);
          }
          setId_role(value);
        }}
        onBlur={() => runValidationTasks("id_role", id_role)}
        errorMessage={errors.id_role?.errorMessage}
        hasError={errors.id_role?.hasError}
        {...getOverrideProps(overrides, "id_role")}
      ></TextField>
      <TextField
        label="Subscription type"
        isRequired={false}
        isReadOnly={false}
        value={subscription_type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              surname,
              fiscal_code,
              date_of_birth,
              city_of_residence,
              address,
              zip_code,
              profile_image,
              nationality,
              gender,
              date_of_registration,
              preccint,
              username,
              payment_method,
              maritime_compartment,
              birth_place,
              passport_number,
              registration_number,
              telephone_number,
              id_role,
              subscription_type: value,
            };
            const result = onChange(modelFields);
            value = result?.subscription_type ?? value;
          }
          if (errors.subscription_type?.hasError) {
            runValidationTasks("subscription_type", value);
          }
          setSubscription_type(value);
        }}
        onBlur={() =>
          runValidationTasks("subscription_type", subscription_type)
        }
        errorMessage={errors.subscription_type?.errorMessage}
        hasError={errors.subscription_type?.hasError}
        {...getOverrideProps(overrides, "subscription_type")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || seafarer)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || seafarer) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
