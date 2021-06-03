import { useSelector } from "react-redux";

export function AboutUs() {
  const state = useSelector((state) => state);

  return (
    <div className="bg-info" style={{ height: "100vh" }}>
      <h1 className="text-light">About Us</h1>

      {state.tweet.list.map((item, index) => (
        <h4 className="bg-success text-light p-1 px-3" key={index}>
          {item}
        </h4>
      ))}
    </div>
  );
}
