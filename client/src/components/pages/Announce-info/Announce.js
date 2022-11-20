import { useParams } from 'react-router-dom';

export default function Annouce() {
  const params = useParams();
  const {  title } = params;

  return (
    <div>
      <h1>adsdsa {title}</h1>
    </div>
  );
}
