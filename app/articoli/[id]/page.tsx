export async function generateStaticParams() {
    const products = await fetch(`https://fakestoreapi.com/products`).then((res) => res.json())
    return products.map((product: any) => {
        id: product.id.toString();
    })
}

async function getDetail (id:number) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        next: {
            revalidate: 60
        }
    });
    return response.json();
}

export default async function Article({params }: any) {
    const details = await getDetail(params.id);

    return (
        <div>
            <h3>{details.title}</h3>
            <p>{details.description}</p>
        </div>
    )
  }