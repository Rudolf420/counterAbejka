import "./App.css"
import Countdown from "react-countdown"

function App() {
  const Completionist = () => (
    <span
      style={{
        color: "white",
        fontWeight: "bold",
        fontSize: 30,
        margin: "10%",
      }}
    >
      Už sme spolu láska
    </span>
  )

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />
    } else {
      // Render a countdown
      return (
        <>
          <label
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 30,
              margin: "10%",
            }}
          >
            Ešte {days} d {hours} hod {minutes} min a {seconds} sek a vidíme sa.
            <div
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 30,
              }}
            >
              Milujem ťa láska.
            </div>
          </label>
        </>
      )
    }
  }
  return (
    <>
      <div
        style={{
          height: "100%",
          backgroundColor: "#FF99CC",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Countdown date={"2022-05-22T12:08:00+00:00"} renderer={renderer} />,
      </div>
    </>
  )
}

export default App
