import fontClasses from "./fonts.module.scss";

export const variantsMap = {
  "font-xl": fontClasses["font-xl"],
  "font-l": fontClasses["font-l"],
  "font-m": fontClasses["font-m"],
  "font-s": fontClasses["font-s"],
};

export type TypographyVariant = keyof typeof variantsMap;

type TextElement = "span" | "p";
export const elementMaps: Record<TypographyVariant, TextElement> = {
  "font-xl": "span",
  "font-l": "span",
  "font-m": "span",
  "font-s": "span",
};

export interface TypographyProps {
  variant: TypographyVariant;
  as?: string;
}
