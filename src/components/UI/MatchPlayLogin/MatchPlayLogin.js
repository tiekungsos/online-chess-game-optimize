import { useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./MatchPlayLogin.scss";
import { gameModes } from "../../../utils/constant";

const MatchPlayLogin = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const createAction = useCallback(() => {
    const trimmedName = name.trim();
    if (!trimmedName) {
      setError('Name is required');
      return;
    }

    setError(''); // Clear error if input is valid
    navigate('/friendPlay/rooms', { state: { mode: gameModes.P2P, username: trimmedName, friendMatch: false } });
  }, [name, navigate]);

  const handleInputChange = (e) => setName(e.target.value);
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') createAction();
  };

  return (
    <div className="MatchPlayLogin">
      <div className="u-container">
        <div className="u-ribbon">Match matching game</div>
        <div className="u-content">
          <div className="u-logo"></div>

          <div className="u-input-wrap">
            <input
              className="u-input"
              type="text"
              placeholder="Enter your name"
              aria-label="Enter your name"
              value={name}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
          </div>

          {error && <div className="u-error" role="alert">{error}</div>}

          <div className="u-buttongroup">
            <button className="u-button" onClick={createAction}>Play</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchPlayLogin;
