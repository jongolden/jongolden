import { Injectable } from '@nestjs/common';
import { SearchConsole } from '../search-console';
import { GaxiosError } from 'gaxios';
import { searchconsole_v1 } from '@googleapis/searchconsole';

export type Site = searchconsole_v1.Schema$WmxSite;

@Injectable()
export class SitesClient {
  constructor(private readonly searchConsole: SearchConsole) {}
  /**
   * Adds a site to the set of the user's sites in Search Console.
   * @param siteUrl The URL of the property to add. Examples: http://www.example.com/ (for a URL-prefix property) or sc-domain:example.com (for a Domain property)
   */
  async add(siteUrl: string): Promise<void> {
    try {
      await this.searchConsole.sites.add({ siteUrl });
    } catch (error) {
      if (error instanceof GaxiosError) {
        throw new Error(error.message);
      }

      throw error;
    }
  }

  async delete(siteUrl: string) {
    try {
      await this.searchConsole.sites.delete({ siteUrl });
    } catch (error) {
      if (error instanceof GaxiosError) {
        throw new Error(error.message);
      }

      throw error;
    }
  }

  async get(siteUrl: string): Promise<Site> {
    try {
      const response = await this.searchConsole.sites.get({ siteUrl });

      return response.data;
    } catch (error) {
      if (error instanceof GaxiosError) {
        throw new Error(error.message);
      }

      throw error;
    }
  }

  async list(): Promise<Site[]> {
    try {
      const response = await this.searchConsole.sites.list();

      return response.data.siteEntry || [];
    } catch (error) {
      if (error instanceof GaxiosError) {
        throw new Error(error.message);
      }

      throw error;
    }
  }
}
