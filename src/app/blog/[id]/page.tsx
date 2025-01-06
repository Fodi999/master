interface BlogPostProps {
  params: {
    id: string;
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { id } = params;

  return (
    <div>
      <h1>Статья с ID: {id}</h1>
      <p>Добро пожаловать на страницу статьи с ID: {id}.</p>
    </div>
  );
}
