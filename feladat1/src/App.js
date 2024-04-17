import React, { useState } from "react";

function ScoreForm() {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [nameError, setNameError] = useState("");
  const [scoreError, setScoreError] = useState("");
  const [scores, setScores] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setNameError("");
    setScoreError("");

    if (name.length < 3) {
      setNameError("A név nem lehet 3 karakternél rövidebb!");
      return;
    }

    const scoreNum = parseInt(score);
    if (isNaN(scoreNum) || scoreNum < 0 || scoreNum > 100) {
      setScoreError("A pont 0 és 100 közötti szám lehet!");
      return;
    }

    setScores([...scores, { name, score: scoreNum }]);

    setName("");
    setScore("");
  };

  return (
    <div className="container mt-5">
      <h2>Vizsga</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Név</label>
          <input
            type="text"
            className={`form-control ${nameError && "is-invalid"}`}
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {nameError && (
            <div className="alert alert-danger mt-2">{nameError}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="score">Pont</label>
          <input
            type="number"
            className={`form-control ${scoreError && "is-invalid"}`}
            id="score"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            min="1"
            max="100"
            required
          />
          {scoreError && (
            <div className="alert alert-danger mt-2">{scoreError}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Hozzáadás
        </button>
      </form>
      <div className="mt-3">
        <h3>Lista</h3>
        <ul className="list-group">
          {scores.map((item, index) => (
            <li
              key={index}
              className={`list-group-item ${
                item.score < 51 ? "text-danger" : ""
              }`}
            >
              {item.name}: {item.score}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ScoreForm;
