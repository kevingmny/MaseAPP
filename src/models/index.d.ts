import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerSeafarer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Seafarer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly surname?: string | null;
  readonly fiscal_code?: string | null;
  readonly date_of_birth?: string | null;
  readonly city_of_residence?: string | null;
  readonly address?: string | null;
  readonly zip_code?: string | null;
  readonly profile_image?: string | null;
  readonly nationality?: string | null;
  readonly gender?: string | null;
  readonly date_of_registration?: string | null;
  readonly preccint?: string | null;
  readonly username?: string | null;
  readonly payment_method?: string | null;
  readonly maritime_compartment?: string | null;
  readonly birth_place?: string | null;
  readonly passport_number?: string | null;
  readonly registration_number?: string | null;
  readonly telephone_number?: string | null;
  readonly id_role?: number | null;
  readonly subscription_type?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySeafarer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Seafarer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly surname?: string | null;
  readonly fiscal_code?: string | null;
  readonly date_of_birth?: string | null;
  readonly city_of_residence?: string | null;
  readonly address?: string | null;
  readonly zip_code?: string | null;
  readonly profile_image?: string | null;
  readonly nationality?: string | null;
  readonly gender?: string | null;
  readonly date_of_registration?: string | null;
  readonly preccint?: string | null;
  readonly username?: string | null;
  readonly payment_method?: string | null;
  readonly maritime_compartment?: string | null;
  readonly birth_place?: string | null;
  readonly passport_number?: string | null;
  readonly registration_number?: string | null;
  readonly telephone_number?: string | null;
  readonly id_role?: number | null;
  readonly subscription_type?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Seafarer = LazyLoading extends LazyLoadingDisabled ? EagerSeafarer : LazySeafarer

export declare const Seafarer: (new (init: ModelInit<Seafarer>) => Seafarer) & {
  copyOf(source: Seafarer, mutator: (draft: MutableModel<Seafarer>) => MutableModel<Seafarer> | void): Seafarer;
}