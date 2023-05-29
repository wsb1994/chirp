import { type NextPage } from "next";

import { useUser } from "@clerk/clerk-react";
import { api } from "~/utils/api";
import TextField from "@mui/material/TextField";
import DrawerAppBar from "../appBar/appBar";
import { Button, Card } from "@mui/material";
import { useState } from "react";
import { useRouter } from 'next/router';

const Home: NextPage = () => {
    const router = useRouter();

    const [textFieldValue, setTextFieldValue] = useState('');
    const user = useUser();
    const theUser: string = user.user?.username || "username";
    const createChirpMutation = api.posts.createChirp.useMutation();
    const createChirps = (content: string, username: string) => {
        if (content != "") {
            createChirpMutation.mutate({
                content: content,
                authorID: username
            });
        }
    };



    return (

        <>
            <DrawerAppBar />
            <main className="flex justify-center h-screen">
                <div className="flex flex-col">
                    <Card variant="outlined" className="border-b  p-8 ">
                        <div>
                            <TextField
                                id="text-fill"
                                label="Chirp Content"
                                placeholder="Chirp Content"
                                multiline
                                value={textFieldValue}
                                onChange={(event) => setTextFieldValue(event.target.value)}
                            />
                        </div>
                        <div>
                            <Button onClick={() => {
                                createChirps(textFieldValue, theUser);
                                if (textFieldValue != "" && theUser != undefined && theUser != null) {
                                    void router.push('/');
                                }
                            }
                            }>Publish</Button>
                        </div>
                    </Card>
                </div>
            </main>
        </>
    );
};

export default Home;