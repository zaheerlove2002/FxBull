function Journal() {

  return (
    <main>

      <h1>Trading Journal</h1>


      <div className="card">

        <h2>Today's Journal Entry</h2>

        <br />

        <label>
          Date
        </label>

        <input 
          type="date"
        />


        <br /><br />


        <label>
          Market Condition
        </label>

        <textarea
          placeholder="Example: Market was trending, high volatility..."
        />


        <br /><br />


        <label>
          Trading Emotion
        </label>

        <textarea
          placeholder="How did you feel before and after trading?"
        />


        <br /><br />


        <label>
          Trade Reason
        </label>

        <textarea
          placeholder="Why did you take this trade?"
        />


        <br /><br />


        <label>
          Mistakes
        </label>

        <textarea
          placeholder="What mistakes did you make?"
        />


        <br /><br />


        <label>
          Lesson Learned
        </label>

        <textarea
          placeholder="What did you learn today?"
        />


        <br /><br />


        <button>
          Save Journal
        </button>


      </div>


    </main>
  );

}


export default Journal;
