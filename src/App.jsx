import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const App = () => {
  const today = new Date();
  const oneMonthAgo = new Date(today);
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);


  const [value, setValue] = useState({
    startDate: today,
    endDate: today, // 今日の日付を終了日に設定
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <Datepicker
      minDate={oneMonthAgo}
      maxDate={today}
      useRange={false}
      asSingle={true}
      value={value}
      onChange={handleValueChange}
    />
  );
};
export default App;
