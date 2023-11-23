export class GoogleCloudError extends Error {
  public readonly code: number;
  public readonly details: Record<string, unknown>[];
  public readonly status: string;

  constructor(error: GoogleCloudError) {
    super(error.message);

    this.code = error.code;
    this.details = error.details;
    this.status = error.status;
  }
}
