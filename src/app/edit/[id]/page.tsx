export default function EditPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Edit Page</h1>
      <p>This is the Edit page for ID: {params.id}</p>
    </div>
  );
}
