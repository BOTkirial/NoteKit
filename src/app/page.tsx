import API from "@services/client/API";

export default function Home() {

  API.Get("/user/").then(data => console.log(data));

  return (
    <p>home</p>
  );
}
