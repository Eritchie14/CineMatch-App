export default async function FetchData() {
  const data = await fetch('http://127.0.0.1:8000/test')
  const post = await data.json()
  return (
    <div>
      <p>{post.message}</p>
    </div>
  )
}