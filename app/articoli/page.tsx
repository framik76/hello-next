import Link from "next/link";

async function getData () {
    const response = await fetch('https://fakestoreapi.com/products', {
        next: {
            revalidate: 60
        }
    });
    const data = await response.json()
    return data
}
export default async function Articoli() {
    const data = await getData();
    console.log(data);
    const productList = data.map((product: any) => {
      return (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.body}</p>
          <Link href={`/articoli/${product.id}`}>Dettaglio</Link>
        </div>
      )
    })
    return (
      <main className="">
        <h1>Articoli</h1>
        {productList}
      </main>
    )
  }