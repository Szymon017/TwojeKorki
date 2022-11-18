import { useParams } from 'react-router-dom';

export default function Annouce() {
  const params = useParams();
  const { title } = params;

  return (
    <div>
      <h1>{title}adsdsa</h1>
    </div>
  );
}
