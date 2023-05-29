import { type NextPage } from "next";

import { api } from "~/utils/api";
import DrawerAppBar from "../appBar/appBar";
import { Card } from "@mui/material";
import { UserProfile } from "@clerk/nextjs";
const Home: NextPage = () => {

    const { data, isLoading } = api.posts.getAll.useQuery();

    if (!data) { return <div>Something went wrong</div> }
    if (isLoading) { return <div>Loading.....</div> }
    return (

        <>

            <DrawerAppBar />
            <UserProfile />


        </>
    );
};

export default Home;
