// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace GetV2SiyoolAppsResponse {
  export interface SiyoolAppBase {
    name: {
      en: string;
    };
    description: {
      en: string;
    };
    logo: {
      source: string | null;
      color: string;
    };
    integrations: Array<{
      name: string;
      logo: {
        light: {
          source: string;
        };
        dark: {
          source: string;
        };
      };
    }>;
  }

  export type ReleasedSiyoolApp = SiyoolAppBase & {
    repositoryUrl: string;
    supportUrl: string;
    privacyUrl: string;
    manifestUrl: string | null;
    githubForkUrl?: string;
  };

  export type ComingSoonSiyoolApp = SiyoolAppBase & {
    releaseDate: string;
  };

  export type SiyoolApp = ReleasedSiyoolApp | ComingSoonSiyoolApp;
}
