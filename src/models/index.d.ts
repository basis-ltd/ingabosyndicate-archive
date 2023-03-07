import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerIngabo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ingabo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fullname?: string | null;
  readonly dateofbirth?: string | null;
  readonly nationalID?: number | null;
  readonly cooperative?: string | null;
  readonly telephone?: string | null;
  readonly cell?: string | null;
  readonly sector?: string | null;
  readonly district?: string | null;
  readonly gender?: string | null;
  readonly signature?: string | null;
  readonly aroroye?: string | null;
  readonly arahinga?: string | null;
  readonly imyumbati?: string | null;
  readonly umuceri?: string | null;
  readonly ibigori?: string | null;
  readonly ibinyamisogwe?: string | null;
  readonly imboga_imbuto?: string | null;
  readonly inkoko?: string | null;
  readonly ingurube?: string | null;
  readonly inka?: string | null;
  readonly ibirayi?: string | null;
  readonly ihene?: string | null;
  readonly intama?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyIngabo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ingabo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fullname?: string | null;
  readonly dateofbirth?: string | null;
  readonly nationalID?: number | null;
  readonly cooperative?: string | null;
  readonly telephone?: string | null;
  readonly cell?: string | null;
  readonly sector?: string | null;
  readonly district?: string | null;
  readonly gender?: string | null;
  readonly signature?: string | null;
  readonly aroroye?: string | null;
  readonly arahinga?: string | null;
  readonly imyumbati?: string | null;
  readonly umuceri?: string | null;
  readonly ibigori?: string | null;
  readonly ibinyamisogwe?: string | null;
  readonly imboga_imbuto?: string | null;
  readonly inkoko?: string | null;
  readonly ingurube?: string | null;
  readonly inka?: string | null;
  readonly ibirayi?: string | null;
  readonly ihene?: string | null;
  readonly intama?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Ingabo = LazyLoading extends LazyLoadingDisabled ? EagerIngabo : LazyIngabo

export declare const Ingabo: (new (init: ModelInit<Ingabo>) => Ingabo) & {
  copyOf(source: Ingabo, mutator: (draft: MutableModel<Ingabo>) => MutableModel<Ingabo> | void): Ingabo;
}