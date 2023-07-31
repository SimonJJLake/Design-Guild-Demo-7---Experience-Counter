import { useState } from "react";
import "./App.css";

interface ExperienceValue {
  name: string;
  years: number;
}

const experienceValues: ExperienceValue[] = [
  { name: "Javascript", years: 4.8 },
  { name: "Typescript", years: 1.5 },
  { name: "Python", years: 8.4 },
  { name: "NextJS", years: 2.3 },
];

function App() {
  const [selected, setSelected] = useState(experienceValues[0]);

  return (
    <>
      <div
        style={{
          display: "flex",
          cursor: "default",
          padding: "1rem",
          gap: "2rem",
        }}
      >
        <div>
          <div style={{ textAlign: "start" }}>Experience</div>
          <hr />
          <div style={{ display: "flex", fontWeight: 600, gap: "0.5rem" }}>
            <div
              style={{
                position: "relative",
                width: "11.6rem",
                height: "8rem",
                overflow: "hidden",
                fontSize: "8rem",
                lineHeight: "8rem",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                .
              </div>
              {experienceValues.map((experienceValue) => (
                <>
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      animationName:
                        experienceValue === selected ? "moveIn" : "moveOut",
                      animationDuration: "0.2s",
                      animationFillMode: "both",
                      animationTimingFunction: "ease-out",
                    }}
                  >
                    {Math.floor(experienceValue.years)}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      animationName:
                        experienceValue === selected ? "moveIn" : "moveOut",
                      animationDuration: "0.2s",
                      animationFillMode: "both",
                      animationDelay: "0.2s",
                      animationTimingFunction: "ease-out",
                    }}
                  >
                    {(experienceValue.years * 10) % 10}
                  </div>
                </>
              ))}
            </div>
            <div
              style={{
                fontSize: "1rem",
                display: "flex",
                justifyContent: "end",
                alignItems: "end",
              }}
            >
              <div>years.</div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {experienceValues.map((experienceValue) => (
            <div
              onMouseEnter={() => setSelected(experienceValue)}
              style={{
                textDecoration:
                  selected === experienceValue ? "underline" : "none",
              }}
            >
              {experienceValue.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
