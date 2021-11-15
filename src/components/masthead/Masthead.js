import Logo from "./Logo";
import Clock from "./Clock";

const Masthead = () => {
  return (
    <div className="masthead">
      <Clock />
      <Logo />
    </div>
  );
};

export default Masthead;
