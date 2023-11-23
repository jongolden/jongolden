import { GoogleCloudError } from '../google-cloud-error';

export interface InspectRequestBody {
  inspectionUrl: string;
  siteUrl: string;
  languageCode: string;
}

export interface ErrorResponse {
  error: GoogleCloudError;
}

export * from './url-inspection';
