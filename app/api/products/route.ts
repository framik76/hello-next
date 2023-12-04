export async function GET() {
    const response = await fetch('https://fakestoreapi.com/products', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    const data = await response.json()
    return Response.json({data})
}