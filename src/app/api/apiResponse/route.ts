export async function GET(req:Request) {
    
    console.log("coucou")

    return new Response(JSON.stringify({
        reponse: "apiReponse;"
    }));
}