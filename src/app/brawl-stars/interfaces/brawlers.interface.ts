export interface Brawler {
  list: List[];
}

export interface List {
  id: number;
  avatarId: number;
  name: string;
  hash: string;
  path: string;
  fankit: string;
  released: boolean;
  version: number;
  link: string;
  imageUrl: string;
  imageUrl2: string;
  imageUrl3: string;
  class: Class;
  rarity: Rarity;
  unlock: null;
  description: string;
  descriptionHtml: string;
  starPowers: Gadget[];
  gadgets: Gadget[];
  videos: any[];
}

export interface Class {
  id: number;
  name: ClassName;
}

export enum ClassName {
  Artillery = 'Artillery',
  Assassin = 'Assassin',
  Controller = 'Controller',
  DamageDealer = 'Damage Dealer',
  Marksman = 'Marksman',
  Support = 'Support',
  Tank = 'Tank',
  Unknown = 'Unknown',
}

export interface Gadget {
  id: number;
  name: string;
  path: string;
  version: number;
  description: string;
  descriptionHtml: string;
  imageUrl: string;
  released: boolean;
}

export interface Rarity {
  id: number;
  name: RarityName;
  color: Color;
}

export enum Color {
  B9Eaff = '#b9eaff',
  D850Ff = '#d850ff',
  Fe5E72 = '#fe5e72',
  Fff11E = '#fff11e',
  The5Ab3Ff = '#5ab3ff',
  The68Fd58 = '#68fd58',
}

export enum RarityName {
  Common = 'Common',
  Epic = 'Epic',
  Legendary = 'Legendary',
  Mythic = 'Mythic',
  Rare = 'Rare',
  SuperRare = 'Super Rare',
}
