export default function PersonPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Person Page</h1>
      <p>This is the Person page for ID: {params.id}</p>
    </div>
  );
}
