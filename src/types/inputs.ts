export type InputBasicElements = HTMLInputElement | HTMLTextAreaElement;

export interface DefaultInputProps {
  label?: string;
  labelClassName?: string;
  inputClassName?: string;
  rightLabelElement?: React.ReactNode;
  rightElement?: React.ReactNode;
}
