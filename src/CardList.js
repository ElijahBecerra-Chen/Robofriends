import react from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div className="tc">
      {robots.map((robot) => (
        <Card id={robot.id} name={robot.name} email={robot.email} />
      ))}
    </div>
  );
};

export default CardList;
