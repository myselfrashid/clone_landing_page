import react, { useState } from "react";
import Table from "./Table";

export default function App() {
  const initialFormState = {
    count: 0,
    startDate: new Date(),
    endDate: new Date(),
    excludedDates: [],
    leadCount: 0,
    lastUpdated: new Date(),
  };

  const [state, setState] = useState(initialFormState)

  const [data, setData] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'excludedDates') {
      const newExcludedDates = [...state.excludedDates, value];
      setState({ ...state, excludedDates: newExcludedDates })
    }
    else {
      setState({ ...state, [name]: value });
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    setData((prevData) => [...prevData, state]);
    const updatedItem = { ...state, lastUpdated: new Date() }
    setState((prevState) => ({ ...prevState, count: prevState.count + 1, excludedDates: [], updatedItem }));
  };

  return (
    <div className="flex flex-col w-full min-h-screen max-h-full bg-[#121212] items-center p-10 gap-10">
      <form onSubmit={handleForm} className="flex w-[30%] h-auto flex-col gap-10 p-10 bg-[#3498db] rounded-md">
        <h3 className="text-2xl text-center uppercase font-semibold">Daily Run Rate</h3>
        <div className="flex flex-row w-full justify-between">
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            onChange={handleChange}
            className="w-40 px-4 rounded-sm"
          ></input>
        </div>
        <div className="flex flex-row w-full justify-between">
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            onChange={handleChange}
            className="w-40 px-4 rounded-sm"
          ></input>
        </div>
        <div className="flex flex-row w-full justify-between">
          <label htmlFor="excludedDates">Excluded Dates:</label>
          <input
            type="date"
            id="excludedDates"
            name="excludedDates"
            onChange={handleChange}
            min={state.startDate}
            max={state.endDate}
            className="w-40 px-4 rounded-sm"
          ></input>
        </div>
        <div className="flex flex-row w-full justify-between">
          <label htmlFor="leadCount">Lead Count</label>
          <input
            type="number"
            min="0"
            id="leadCount"
            name="leadCount"
            placeholder="0"
            className="w-40 px-4 rounded-sm"
            onChange={handleChange}>
          </input>
        </div>
        <button type="submit" className="bg-[#F1C40F] py-3 rounded-sm uppercase font-semibold hover:bg-[#27AE60] transition-all">Submit</button>
      </form>
      <Table data={data} />
    </div>
  );
}
