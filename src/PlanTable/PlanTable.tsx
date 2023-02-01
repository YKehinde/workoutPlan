import React, { useMemo, useState } from "react";
import {
  Column,
  Table,
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  RowData,
  createColumnHelper,
} from '@tanstack/react-table'
import { useSticky } from 'react-table-sticky';

import { WorkoutPlan } from "../plan";
import { DayPlan } from "../Plan.types";

type PlanTableProps = {
  dayPlan: DayPlan | undefined;
};

const PlanTable = (dayPlan: PlanTableProps) => {
  console.log(dayPlan);
  const columnHelper = createColumnHelper<DayPlan>();



  return (
    <div>
      <h1>Plan Table</h1>
    </div>
  );
};

export default PlanTable;
