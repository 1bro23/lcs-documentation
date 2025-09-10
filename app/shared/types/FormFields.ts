import type { ToRef } from "vue";

export interface FormFields {
  value: ToRef<any>;
  type: string;
  label: string;
  required: boolean;
}
