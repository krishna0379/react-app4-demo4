import { useSelector } from "react-redux";

export function ContactUs() {
  const state = useSelector((state) => state);
  return (
    <div className="bg-warning" style={{ height: "100vh" }}>
      <h1 className="text-light">Contact Us Page</h1>
      <h2>{state.message}</h2>
      <h2>{state.counter}</h2>

      {state.tweet.list.map((item, index) => (
        <h3 className="bg-info text-light p-1 px-3" key={index}>
          {item}
        </h3>
      ))}
    </div>
  );
}
