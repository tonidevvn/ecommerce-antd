import { Typography } from "antd";

function AppFooter() {
  return (
    <div className="appFooter">
      Made with ❤️ by
      <Typography.Link href="https://github.com/tonidevvn" target="_blank">
        {" Toni"}
      </Typography.Link>
    </div>
  );
}

export default AppFooter;
