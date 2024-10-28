import css from "./Options.module.css";

const Options = ({
  updateFeedback,
  resetFeedback,
}) => {
  return (
    <ul className={css.list}>
      <li>
        <button
          onClick={() => updateFeedback("good")}
          className={css.button}
          type="button"
        >
          Good
        </button>
      </li>
      <li>
        <button
          onClick={() =>
            updateFeedback("neutral")
          }
          className={css.button}
          type="button"
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          onClick={() => updateFeedback("bad")}
          className={css.button}
          type="button"
        >
          Bad
        </button>
      </li>
      <li>
        {" "}
        <button
          onClick={() => resetFeedback()}
          className={css.button}
          type="button"
        >
          Reset
        </button>
      </li>
    </ul>
  );
};

export default Options;
