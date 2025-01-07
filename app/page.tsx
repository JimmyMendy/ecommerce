import ProductCard from "./components/ProductCard";

const products = [
  { id: 1, name: 'Product1', price: 29.99, image: ''},
  { id: 2, name: 'Product2', price: 19.99, image: ''},
  { id: 3, name: 'Product3', price: 39.99, image: ''},
]

export default function Home() {
  return (
    <div>
      <section className="hero bg-gray-100 py-24 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to your Store</h1>
        <p className="text-lg text-gray-600">Discover minimalist design</p>
      </section>
      <section>
        {products.map(product => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </section>
    </div>
  );
}
