import React, { useState } from "react";
import { PlanData } from "../Plan.types";

type SelectProps = {
  data: PlanData,
  onChange: (day: string) => void
};

const Select = ({data, onChange}: SelectProps) => {


  return (
    <>
    <select onChange={event => onChange(event.target.value)}>
      {
        data.map((item) => {
          return <option value={item.day}>{`Day ${item.day}`}</option>
        })
      }
    </select>
    </>
  );
};

export default Select;
