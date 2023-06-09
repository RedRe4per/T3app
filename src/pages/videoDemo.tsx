import { type NextPage } from "next";
import { api } from "~/utils/api";

const VideoDemo: NextPage = () => {
    const helloQuery = api.example.hello.useQuery({text: "from trpc frontend"});
    console.log(helloQuery, helloQuery.data, "data")

    const handleFirstApiTest = () => {
        const a = 4.7*4.0 + 3.0*2.9 + 4.4*2.9 + 3.4*1.7
        console.log(a, "size")
        // const helloQuery = api.example.hello.useQuery({text: "from trpc frontend"});
        // console.log(helloQuery, helloQuery.data, "data")
        // const data = await api.example.getAll;
        // console.log(data, "data")
        // const { data: secretMessage } = api.example.getSecretMessage.useQuery(
        //     undefined, // no input
        //     { enabled: sessionData?.user !== undefined },
        //   );
    }

    return (
        <main>
            <section>TRPC video test</section>
            <button onClick={handleFirstApiTest}>TRPC API TEST</button>
        </main>
    )
}

export default VideoDemo;