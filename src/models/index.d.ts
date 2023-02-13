import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type IngaboMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerIngabo = {
  readonly id: string;
  readonly fullName?: string | null;
  readonly dateofbirth?: string | null;
  readonly nationalID?: string | null;
  readonly cooperative?: string | null;
  readonly telephone?: string | null;
  readonly activity1?: boolean | null;
  readonly activity2?: boolean | null;
  readonly activity3?: boolean | null;
  readonly activity4?: boolean | null;
  readonly activity5?: boolean | null;
  readonly activity6?: boolean | null;
  readonly activity7?: boolean | null;
  readonly activity8?: boolean | null;
  readonly activity9?: boolean | null;
  readonly activity10?: boolean | null;
  readonly activity11?: boolean | null;
  readonly no?: number | null;
  readonly cell?: string | null;
  readonly sector?: string | null;
  readonly district?: string | null;
  readonly gender?: string | null;
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
  readonly signature?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyIngabo = {
  readonly id: string;
  readonly fullName?: string | null;
  readonly dateofbirth?: string | null;
  readonly nationalID?: string | null;
  readonly cooperative?: string | null;
  readonly telephone?: string | null;
  readonly activity1?: boolean | null;
  readonly activity2?: boolean | null;
  readonly activity3?: boolean | null;
  readonly activity4?: boolean | null;
  readonly activity5?: boolean | null;
  readonly activity6?: boolean | null;
  readonly activity7?: boolean | null;
  readonly activity8?: boolean | null;
  readonly activity9?: boolean | null;
  readonly activity10?: boolean | null;
  readonly activity11?: boolean | null;
  readonly no?: number | null;
  readonly cell?: string | null;
  readonly sector?: string | null;
  readonly district?: string | null;
  readonly gender?: string | null;
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
  readonly signature?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Ingabo = LazyLoading extends LazyLoadingDisabled ? EagerIngabo : LazyIngabo

export declare const Ingabo: (new (init: ModelInit<Ingabo, IngaboMetaData>) => Ingabo) & {
  copyOf(source: Ingabo, mutator: (draft: MutableModel<Ingabo, IngaboMetaData>) => MutableModel<Ingabo, IngaboMetaData> | void): Ingabo;
}