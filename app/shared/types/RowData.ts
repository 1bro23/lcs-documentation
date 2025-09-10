import type { MetaPagination } from "./MetaPagination";

export interface RowData<T> {
  rowData: T[];
  metaPagination: MetaPagination;
}
