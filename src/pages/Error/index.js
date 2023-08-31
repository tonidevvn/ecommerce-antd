import { useRouteError } from "react-router-dom";
import PageContent from "../../components/PageContent";
import ErrorImg from "../../assets/images/404_error.svg";

function ErrorPage() {
  const error = useRouteError();

  return (
    <PageContent>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <img
          src={ErrorImg}
          style={{ width: "350px", maxWidth: "60%" }}
          alt="404 Error"
        />
      </div>
    </PageContent>
  );
}

export default ErrorPage;
