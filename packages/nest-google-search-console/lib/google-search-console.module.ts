import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Module } from '@nestjs/common';
import { searchconsole, auth } from '@googleapis/searchconsole';
import { SearchConsole } from './search-console';
import { SitesClient, UrlInspectionClient } from './clients';

export interface SearchConsoleModuleOptions {
  clientId: string;
  clientSecret: string;
  redirectUrl: string;
}

@Module({
  imports: [HttpModule],
  providers: [
    {
      provide: SearchConsole,
      useFactory: (options: SearchConsoleModuleOptions) => {
        const oauth2Client = new auth.OAuth2(
          options.clientId,
          options.clientSecret,
          options.redirectUrl,
        );

        return searchconsole({ version: 'v1', auth: oauth2Client });
      },
    },
    UrlInspectionClient,
  ],
  exports: [SearchConsole, UrlInspectionClient],
})
export class SearchConsoleModule {
  static forRoot(options: SearchConsoleModuleOptions): DynamicModule {
    return {
      module: SearchConsoleModule,
      imports: [HttpModule],
      providers: [
        {
          provide: SearchConsole,
          useFactory: () => {
            const oauth2Client = new auth.OAuth2(
              options.clientId,
              options.clientSecret,
              options.redirectUrl,
            );

            return searchconsole({ version: 'v1', auth: oauth2Client });
          },
        },
        SitesClient,
        UrlInspectionClient,
      ],
      exports: [SearchConsole, UrlInspectionClient],
    };
  }
}
