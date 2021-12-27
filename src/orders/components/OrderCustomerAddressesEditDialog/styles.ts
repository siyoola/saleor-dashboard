import { makeStyles } from "@saleor/macaw-ui";

export const useStyles = makeStyles(
  theme => ({
    dialogContent: {
      maxHeight: `calc(100vh - 250px)`,
      overflowY: "scroll",
      overflowX: "hidden"
    },
    overflowVisible: {
      overflow: "visible"
    },
    scrollableWrapper: {
      maxHeight: 400,
      overflowY: "scroll"
    },
    container: {
      display: "block"
    },
    optionLabel: {
      display: "block"
    },
    searchInput: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    }
  }),
  { name: "OrderCustomerAddressesEditDialog" }
);
