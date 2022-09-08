import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      date: new Date(2022, 1, 1),
      title: "car expense",
      amount: 250,
    },
    {
      id: "e2",
      date: new Date(2022, 2, 1),
      title: "travel",
      amount: 2000,
    },
  ];

  return (
    <div className="App">
      <p> this is my app</p>
      <ExpenseItem
        date={new Date(2022, 1, 1)}
        title="abc"
        amount="250"
      ></ExpenseItem>
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}
      ></ExpenseItem>
    </div>
  );
}

export default App;
