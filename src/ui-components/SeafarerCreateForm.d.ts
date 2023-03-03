/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SeafarerCreateFormInputValues = {
    name?: string;
    surname?: string;
    fiscal_code?: string;
    date_of_birth?: string;
    city_of_residence?: string;
    address?: string;
    zip_code?: string;
    profile_image?: string;
    nationality?: string;
    gender?: string;
    date_of_registration?: string;
    preccint?: string;
    username?: string;
    payment_method?: string;
    maritime_compartment?: string;
    birth_place?: string;
    passport_number?: string;
    registration_number?: string;
    telephone_number?: string;
    id_role?: number;
    subscription_type?: string;
};
export declare type SeafarerCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    surname?: ValidationFunction<string>;
    fiscal_code?: ValidationFunction<string>;
    date_of_birth?: ValidationFunction<string>;
    city_of_residence?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    zip_code?: ValidationFunction<string>;
    profile_image?: ValidationFunction<string>;
    nationality?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
    date_of_registration?: ValidationFunction<string>;
    preccint?: ValidationFunction<string>;
    username?: ValidationFunction<string>;
    payment_method?: ValidationFunction<string>;
    maritime_compartment?: ValidationFunction<string>;
    birth_place?: ValidationFunction<string>;
    passport_number?: ValidationFunction<string>;
    registration_number?: ValidationFunction<string>;
    telephone_number?: ValidationFunction<string>;
    id_role?: ValidationFunction<number>;
    subscription_type?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SeafarerCreateFormOverridesProps = {
    SeafarerCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    surname?: PrimitiveOverrideProps<TextFieldProps>;
    fiscal_code?: PrimitiveOverrideProps<TextFieldProps>;
    date_of_birth?: PrimitiveOverrideProps<TextFieldProps>;
    city_of_residence?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    zip_code?: PrimitiveOverrideProps<TextFieldProps>;
    profile_image?: PrimitiveOverrideProps<TextFieldProps>;
    nationality?: PrimitiveOverrideProps<TextFieldProps>;
    gender?: PrimitiveOverrideProps<TextFieldProps>;
    date_of_registration?: PrimitiveOverrideProps<TextFieldProps>;
    preccint?: PrimitiveOverrideProps<TextFieldProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    payment_method?: PrimitiveOverrideProps<TextFieldProps>;
    maritime_compartment?: PrimitiveOverrideProps<TextFieldProps>;
    birth_place?: PrimitiveOverrideProps<TextFieldProps>;
    passport_number?: PrimitiveOverrideProps<TextFieldProps>;
    registration_number?: PrimitiveOverrideProps<TextFieldProps>;
    telephone_number?: PrimitiveOverrideProps<TextFieldProps>;
    id_role?: PrimitiveOverrideProps<TextFieldProps>;
    subscription_type?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SeafarerCreateFormProps = React.PropsWithChildren<{
    overrides?: SeafarerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SeafarerCreateFormInputValues) => SeafarerCreateFormInputValues;
    onSuccess?: (fields: SeafarerCreateFormInputValues) => void;
    onError?: (fields: SeafarerCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SeafarerCreateFormInputValues) => SeafarerCreateFormInputValues;
    onValidate?: SeafarerCreateFormValidationValues;
} & React.CSSProperties>;
export default function SeafarerCreateForm(props: SeafarerCreateFormProps): React.ReactElement;
