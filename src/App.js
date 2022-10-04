// Här är en kommentar, något som inte kommer med i koden och
// som dessutom fungerar som ett sätt att skriva ner tankar och
// idéer som kan vara bra att ha kvar. Typiskt bra är förklaringar
// kring kodsnuttar och hur de fungerar.

// Detta är loggan på sidan
import logo from "./images/kf-logo.png";
// Detta är konfigurationen för hur sidan ska se ut
import "./App.css";
// Detta är ett bibliotek som används för att skapa en reaktiv sida
import React from "react";

// Denna funktionen skapar applikationen man ser på hemsidan
const App = () => {
  // Här skapas en variabel och också en funktion man kan använda
  // för att ändra värdet på variabeln. Detta är en reaktivitet.
  const [count, setCount] = React.useState(0);

  // Här skapas en funktion som slumpar ett värde och sätter det.
  const randomise = () => {
    setCount(Math.floor(Math.random() * 100));
  };

  const person = {
    firstName: "Al",
    lastName: "Bundy",
  };

  const formatName = (person) => {
    return person.firstName + " " + person.lastName;
  };

  // Allt i return är det som visas på sidan. Det uttrycks
  // i klassisk HTML med vissa modifikationer, så kallade
  // JSX.
  return (
    <div className="App">
      <header className="App-header">
        <img id="img" src={logo} className="App-logo" alt="logo" />
        <p>Något är fel, hur kan vi lösa det?</p>
        <p>{count}</p>
        <p>
          <button onClick={() => setCount(randomise)}>Öka</button>
        </p>

        <button onClick={() => setCount(count)}>Återställ</button>

        <p>
          Ditt namn:
          {formatName(person)}
        </p>
      </header>
    </div>
  );
};

export { App };
