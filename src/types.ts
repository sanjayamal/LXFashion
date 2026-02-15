import type { ReactNode } from "react";

export type FeaturedWatch = {
  name: string;
  price: string;
  tag: string;
  img: string;
  desc: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Feature = {
  icon: ReactNode;
  title: string;
  desc: string;
};

export type Testimonial = {
  name: string;
  role: string;
  text: string;
  stars: number;
};

export type Watch = {
  name: string;
  price: string;
  tag: string;
  img: string;
  desc: string;
  category: string;
  movement: string;
  caseMaterial: string;
  waterResistance: string;
};
