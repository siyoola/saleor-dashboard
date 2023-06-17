import { GetV2SiyoolAppsResponse } from "@dashboard/apps/marketplace.types";
import {
  AppInstallationFragment,
  AppListItemFragment,
} from "@dashboard/graphql";

export interface AppListPageSections {
  appsInstallations?: AppInstallationFragment[];
  installedApps?: AppListItemFragment[];
  installableMarketplaceApps?: GetV2SiyoolAppsResponse.ReleasedSiyoolApp[];
  comingSoonMarketplaceApps?: GetV2SiyoolAppsResponse.ComingSoonSiyoolApp[];
}
