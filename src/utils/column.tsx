export interface TableColumn {
  Header: string;
  accessor: string;
}
export interface TableColumns {
  Header: string;
  columns: TableColumn[];
}
export interface TableData {
  id: number;
  title: string;
  price: number;
}
