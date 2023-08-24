import { useRouteError } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayout";
import PageContent from "../../components/PageContent";

function ErrorPage() {
  const error = useRouteError();

  return (
    <DefaultLayout>
      <PageContent>
        <div id="error-page">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </PageContent>
    </DefaultLayout>
  );
}

export default ErrorPage;
