function TradeHistory() {
  const trades = [
    {
      id: 1,
      pair: "XAUUSD",
      type: "BUY",
      entry: "0.00",
      exit: "0.00",
      profit: "$0.00",
      status: "No Trade"
    }
  ];

  return (
    <main>
      <h1>Trade History</h1>

      <div className="card">

        <div className="trade-header">
          <h2>All Trades</h2>

          <button className="add-btn">
            + Add Trade
          </button>
        </div>


        <table className="trade-table">

          <thead>
            <tr>
              <th>#</th>
              <th>Pair</th>
              <th>Type</th>
              <th>Entry</th>
              <th>Exit</th>
              <th>P&L</th>
              <th>Status</th>
            </tr>
          </thead>


          <tbody>

            {trades.map((trade) => (
              <tr key={trade.id}>
                <td>{trade.id}</td>
                <td>{trade.pair}</td>
                <td>{trade.type}</td>
                <td>{trade.entry}</td>
                <td>{trade.exit}</td>
                <td>{trade.profit}</td>
                <td>{trade.status}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </main>
  );
}

export default TradeHistory;
