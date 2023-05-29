import { type NextPage } from "next";

import { api } from "~/utils/api";
import DrawerAppBar from "../appBar/appBar";
import { Card } from "@mui/material";
const Home: NextPage = () => {

  const { data, isLoading } = api.posts.getAll.useQuery();

  if (!data) { return <div>Something went wrong</div> }
  if (isLoading) { return <div>Loading.....</div> }
  return (

    <>

      <DrawerAppBar />


      <main className="flex justify-center h-screen items-start pt-12 px-4">
        <div className="flex flex-col w-full max-w-2xl">

          {data?.map((post) => (
            <Card variant="outlined" key={post.id} className="border-b border-slate-400 p-8 mb-4">
              <h2 className="mb-4 font-bold">
                {post.authorID}
              </h2>
              <div>
                {post.createdAt.toString()}
              </div>
              <div>
                {post.content}
              </div>
            </Card>
          ))}
        </div>
      </main>


    </>
  );
};

export default Home;
