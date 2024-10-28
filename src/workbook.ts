import type { WorkSheet, WorkBook as XLSXWorkBook } from "xlsx-republish";

export class WorkBook implements XLSXWorkBook {
  Sheets: Record<string, WorkSheet> = {};
  SheetNames: string[] = [];
}
