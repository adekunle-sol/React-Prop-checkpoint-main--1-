import Fifa from "./Component/Fifa";
import product from "./Player";
import Card from "react-bootstrap/esm/CardHeader";

const App = () => {
  const style = {
    display: "flex",
    justifyContent: "center",
  };
  return (
    <>
      <h1>Fifa Card</h1>
      <div style={style}>
        {product?.map((Player, index) => (
          <Fifa 
          key={index}
          image={Player.image} 
          name={Player.name}
          age={Player.age}
          team={Player.team}
          number={Player.jerseyNumber}
          nationality={Player.nationality}
          
          />
        ))}
      </div>
    </>  
      );
};


export default App;