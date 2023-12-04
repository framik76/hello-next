export async function GET(request : any, {params}:any) {
    const response = await fetch(`https://fakestoreapi.com/products/${params.id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    const data = await response.json()
    return Response.json({data})
}