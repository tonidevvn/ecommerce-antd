import { useParams } from "react-router-dom";
import Products from "../../components/Products";

function Category(props) {
  // returned from `useParams`
  const params = useParams();
  const key = params.categoryId;

  return (
    <>
      <div>Category {key}</div>
      <div>
        <Products category={key} />
      </div>
    </>
  );
}

export default Category;
