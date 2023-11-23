import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom, map } from 'rxjs';
import { GoogleCloudError } from '../google-cloud-error';
import {
  ErrorResponse,
  InspectRequestBody,
  UrlInspectionResult,
} from '../types';

@Injectable()
export class UrlInspectionClient {
  constructor(private readonly httpService: HttpService) {}
  /*
   * View the indexed, or indexable, status of the provided URL. Presently only the status of the
   * version in the Google index is available; you cannot test the indexability of a live URL.
   */
  async inspect(inspectionUrl: string, languageCode: string, siteUrl: string) {
    const requestBody: InspectRequestBody = {
      inspectionUrl,
      siteUrl,
      languageCode,
    };

    return firstValueFrom(
      this.httpService
        .post<UrlInspectionResult>(
          'https://searchconsole.googleapis.com/v1/urlInspection/index:inspect',
          requestBody,
        )
        .pipe(
          catchError((error: AxiosError<ErrorResponse>) => {
            if (error.response) {
              throw new GoogleCloudError(error.response.data.error);
            }

            throw new Error(error.message);
          }),
          map((response) => response.data),
        ),
    );
  }
}
