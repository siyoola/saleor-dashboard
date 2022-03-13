import { defineMessages } from "react-intl";

const messages = defineMessages({
  newVersionTitle: {
    defaultMessage: "System update required",
    description: "notification title"
  },
  newVersionContent: {
    defaultMessage:
      "You need to update Siyool to the newest version. Before doing so - save all changes to prevent loss of data. To update use the button below.",
    description: "new version notification content"
  },
  refresh: {
    defaultMessage: "Refresh",
    description: "button"
  }
});

export default messages;
