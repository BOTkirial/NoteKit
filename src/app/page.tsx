import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Home = async () => {

  const session = await getServerSession();

  if (!session) {
    redirect('/signin');
  }

  redirect("/notes");


  return (
    <div className="main" />
  );

}

export default Home;
