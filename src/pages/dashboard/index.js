// material-ui
import { Grid, Typography } from "@mui/material";

// project import
import AnalyticEcommerce from "components/cards/AnalyticEcommerce";

// assets
import { GiftOutlined } from "@ant-design/icons";

// Home - Dashboard
const DashboardDefault = () => {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Dashboard</Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce
          icon={<GiftOutlined />}
          title="No. Of Contact Forms"
          count="10"
          isLoss
          color="warning"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce
          icon={<GiftOutlined />}
          title="No. of Blogs Added"
          count="562"
          isLoss
          color="warning"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce
          icon={<GiftOutlined />}
          title="No. of Edited Blogs"
          count="10"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce
          icon={<GiftOutlined />}
          title="No. of Job Available"
          count="12"
        />
      </Grid>

      <Grid
        item
        md={8}
        sx={{ display: { sm: "none", md: "block", lg: "none" } }}
      />
    </Grid>
  );
};

export default DashboardDefault;
