export default async function Page({
  params,
}: {
  params: Promise<{ id: string}>
}) {
  const id = (await params).id
  return <div>My Product: {id}</div>
}