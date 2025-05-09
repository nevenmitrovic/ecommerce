import "./subscribe.,style.css";

import Input from "@/components/common/input/Input";
import Button from "@/components/common/buttons/Button";

const Subscribe = () => {
  return (
    <form className="subscribe-form">
      <Input
        type="text"
        required={true}
        color="white"
        label="We give you a 10% discount for subscription"
        placeholder="Enter your email"
        onChange={() => {}}
      />
      <Button
        classNam="main-button"
        onClick={() => {}}
        type="submit"
        text="Subscribe"
      />
    </form>
  );
};

export default Subscribe;
