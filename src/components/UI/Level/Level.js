import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Level.scss";
import { gameModes } from "../../../utils/constant";

// Levels array
const levels = [
  { label: "AI MonKey", aiLevel: 0 },
  { label: "Beginner", aiLevel: 1 },
  { label: "Intermediate", aiLevel: 2 },
  { label: "Advanced", aiLevel: 3 },
];

// Helper function to chunk array into rows
const chunkArray = (array, size) =>
  array.reduce((result, item, index) => {
    const chunkIndex = Math.floor(index / size);
    if (!result[chunkIndex]) {
      result[chunkIndex] = [];
    }
    result[chunkIndex].push(item);
    return result;
  }, []);

const LevelButton = ({ label, aiLevel, onClick }) => (
  <div className="u-item-container">
    <button className="u-item" onClick={() => onClick(aiLevel)}>
      {label}
    </button>
  </div>
);

const Level = () => {
  const navigate = useNavigate();

  const machinePlayAction = useCallback(
    (aiLevel) => {
      navigate('/gameScene', { state: { mode: gameModes.P2E, aiLevel } });
    },
    [navigate]
  );

  // Chunk levels into rows of 2
  const levelRows = chunkArray(levels, 2);

  return (
    <div className="selectLevel">
      <div className="u-container">
        <div className="u-ribbon">Choose Level</div>
        <div className="u-content">
          <div className="u-content-container">
            <div className="u-table-wrap">
              {levelRows.map((row, rowIndex) => (
                <div className="u-row" key={rowIndex}>
                  {row.map((level) => (
                    <LevelButton
                      key={level.aiLevel}
                      label={level.label}
                      aiLevel={level.aiLevel}
                      onClick={machinePlayAction}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Level;
