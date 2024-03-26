import Button from "@/components/button";
import User from "@/components/user";
const HomePage = () => {
  return (
    <div>
      <h1 className="text-4x1 text-pink-800">This is home page</h1>
      <p>Thid id a paragraph</p>
      <div className="mx-5">
        <Button />
        <User name="Tania August" age={27} />
      </div>
    </div>
  );
};

export default HomePage;
