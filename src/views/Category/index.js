import { useParams } from "react-router-dom";

function Category(props) {
  // returned from `useParams`
  const params = useParams();
  const key = params.categoryId;

  return <div>Category {key}</div>;
}

export default Category;
