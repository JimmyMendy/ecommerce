import Link from 'next/link'
import Image from 'next/image'

export default function ProductCard({ product }: {product: { id: number, name: string, price: number, image: string } }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <Image src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-600">${product.price.toFixed(2)}</p>
          <Link href={`/product/${product.id}`}>
            View Details
          </Link>
        </div>
    </div>
  )
}