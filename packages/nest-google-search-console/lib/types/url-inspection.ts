/* URL inspection result, including all inspection results. */
export interface UrlInspectionResult {
  /* Link to Search Console URL inspection. */
  inspectionResultLink: string;
  /* Result of the index status analysis. */
  indexStatusResult: IndexStatusInspectionResult;
  /* Result of the AMP analysis. Absent if the page is not an AMP page. */
  ampResult: AmpInspectionResult;
  /* Result of the Mobile usability analysis. */
  mobileUsabilityResult: MobileUsabilityInspectionResult;
  /* Result of the Rich Results analysis. Absent if there are no rich results found. */
  richResultsResult: RichResultsInspectionResult;
}

/* Results of index status inspection for either the live page or the version in Google's index, depending on whether you requested a live inspection or not. For more information, see the Index coverage report documentation. */
export interface IndexStatusInspectionResult {
  /* Any sitemaps that this URL was listed in, as known by Google. Not guaranteed to be an exhaustive list, especially if Google did not discover this URL through a sitemap. Absent if no sitemaps were found. */
  sitemap: string[];
  /* URLs that link to the inspected URL, directly and indirectly. */
  referringUrls: string[];
  /* High-level verdict about whether the URL is indexed. */
  verdict: Verdict;
  /* Could Google find and index the page. More details about page indexing appear in 'indexingState'. */
  coverageState: string;
  /* Whether or not the page is blocked to Google by a robots.txt rule. */
  robotsTxtState: RobotsTxtState;
  /* Whether or not the page blocks indexing through a noindex rule. */
  indexingState: IndexingState;
  /* Last time this URL was crawled by Google using the primary crawler. Absent if the URL was never crawled successfully.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z". */
  lastCrawlTime: string;
  /* Whether or not Google could retrieve the page from your server. Equivalent to "page fetch" in the URL inspection report. */
  pageFetchState: PageFetchState;
  /* The URL of the page that Google selected as canonical. If the page was not indexed, this field is absent. */
  googleCanonical: string;
  /* The URL that your page or site declares as canonical. If you did not declare a canonical URL, this field is absent. */
  userCanonical: string;
  /* Primary crawler that was used by Google to crawl your site. */
  crawledAs: CrawlingUserAgent;
}

/* Verdict for an analysis. */
export enum Verdict {
  /* Unknown verdict. */
  VERDICT_UNSPECIFIED,
  /* Equivalent to "Valid" for the page or item in Search Console. */
  PASS,
  /* Reserved, no longer in use. */
  PARTIAL,
  /* Equivalent to "Error" or "Invalid" for the page or item in Search Console. */
  FAIL,
  /* Equivalent to "Excluded" for the page or item in Search Console. */
  NEUTRAL,
}

/* The result of the robots.txt check. */
export enum RobotsTxtState {
  /* Unknown robots.txt state, typically because the page wasn't fetched or found, or because robots.txt itself couldn't be reached. */
  ROBOTS_TXT_STATE_UNSPECIFIED,
  /* Crawl allowed by robots.txt. */
  ALLOWED,
  /* Crawl blocked by robots.txt. */
  DISALLOWED,
}

/* Indexing status of the URL. */
export enum IndexingState {
  /* Unknown indexing status. */
  INDEXING_STATE_UNSPECIFIED,
  /* Indexing allowed. */
  INDEXING_ALLOWED,
  /* Indexing not allowed, 'noindex' detected in 'robots' meta tag. */
  BLOCKED_BY_META_TAG,
  /* Indexing not allowed, 'noindex' detected in 'X-Robots-Tag' http header. */
  BLOCKED_BY_HTTP_HEADER,
  /* Reserved, no longer in use. */
  BLOCKED_BY_ROBOTS_TXT,
}

/* Page fetch state. */
export enum PageFetchState {
  /* Unknown fetch state. */
  PAGE_FETCH_STATE_UNSPECIFIED,
  /* Successful fetch. */
  SUCCESSFUL,
  /* Soft 404. */
  SOFT_404,
  /* Blocked by robots.txt. */
  BLOCKED_ROBOTS_TXT,
  /* Not found (404). */
  NOT_FOUND,
  /* Blocked due to unauthorized request (401). */
  ACCESS_DENIED,
  /* Server error (5xx). */
  SERVER_ERROR,
  /* Redirection error. */
  REDIRECT_ERROR,
  /* Blocked due to access forbidden (403). */
  ACCESS_FORBIDDEN,
  /* Blocked due to other 4xx issue (not 403, 404). */
  BLOCKED_4XX,
  /* Internal error. */
  INTERNAL_CRAWL_ERROR,
  /* Invalid URL. */
  INVALID_URL,
}

/* The user agent type used for the crawl. Absent if your site was not crawled successfully. */
export enum CrawlingUserAgent {
  /* Unknown user agent. */
  CRAWLING_USER_AGENT_UNSPECIFIED,
  /* Desktop user agent. */
  DESKTOP,
  /* Mobile user agent. */
  MOBILE,
}

/* AMP inspection result of the page. */
export interface AmpInspectionResult {
  /* A list of zero or more AMP issues found for the inspected URL. */
  issues: AmpIssue[];
  /* The status of the most severe error on the page. If a page has both warnings and errors, the page status is error. Error status means the page cannot be shown in Search results. */
  verdict: Verdict;
  /* URL of the AMP that was inspected. If the submitted URL is a desktop page that refers to an AMP version, the AMP version will be inspected. */
  ampUrl: string;
  /* Whether or not the page is blocked to Google by a robots.txt rule. */
  robotsTxtState: RobotsTxtState;
  /* Whether or not the page blocks indexing through a noindex rule. */
  indexingState: AmpIndexingState;
  /* Index status of the AMP URL. */
  ampIndexStatusVerdict: Verdict;
  /* Last time this AMP version was crawled by Google. Absent if the URL was never crawled successfully.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z". */
  lastCrawlTime: string;
  /* Whether or not Google could fetch the AMP. */
  pageFetchState: PageFetchState;
}

/* AMP inspection result of the page. */
export interface AmpInspectionResult {
  /* A list of zero or more AMP issues found for the inspected URL. */
  issues: AmpIssue[];
  /* The status of the most severe error on the page. If a page has both warnings and errors, the page status is error. Error status means the page cannot be shown in Search results. */
  verdict: Verdict;
  /* URL of the AMP that was inspected. If the submitted URL is a desktop page that refers to an AMP version, the AMP version will be inspected. */
  ampUrl: string;
  /* Whether or not the page is blocked to Google by a robots.txt rule. */
  robotsTxtState: RobotsTxtState;
  /* Whether or not the page blocks indexing through a noindex rule. */
  indexingState: AmpIndexingState;
  /* Index status of the AMP URL. */
  ampIndexStatusVerdict: Verdict;
  /* Last time this AMP version was crawled by Google. Absent if the URL was never crawled successfully.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z". */
  lastCrawlTime: string;
  /* Whether or not Google could fetch the AMP. */
  pageFetchState: PageFetchState;
}

/* Indexing status of the AMP URL. */
export enum AmpIndexingState {
  /* Unknown indexing status. */
  AMP_INDEXING_STATE_UNSPECIFIED,
  /* Indexing allowed. */
  AMP_INDEXING_ALLOWED,
  /* Indexing not allowed, 'noindex' detected. */
  BLOCKED_DUE_TO_NOINDEX,
  /* Indexing not allowed, 'unavailable_after' date expired. */
  BLOCKED_DUE_TO_EXPIRED_UNAVAILABLE_AFTER,
}

/* AMP issue. */
export interface AmpIssue {
  /* Brief description of this issue. */
  issueMessage: string;
  /* Severity of this issue: WARNING, or ERROR. */
  severity: Severity;
}

/* Common template for issue severity. */
export enum Severity {
  /* Unknown severity. */
  SEVERITY_UNSPECIFIED,
  /* Warning. */
  WARNING,
  /* Error. */
  ERROR,
}

/* Mobile-usability inspection results. */
export interface MobileUsabilityInspectionResult {
  /* A list of zero or more mobile-usability issues detected for this URL. */
  issues: MobileUsabilityIssue[];
  /* High-level mobile-usability inspection result for this URL. */
  verdict: Verdict;
}

/* Mobile-usability issue. */
export interface MobileUsabilityIssue {
  /* Mobile-usability issue type. */
  issueType: MobileUsabilityIssueType;
  /* Not returned; reserved for future use. */
  severity: Severity;
  /* Additional information regarding the issue. */
  message: string;
}

/* The mobile usability issue type that was encountered. */
export enum MobileUsabilityIssueType {
  /* Unknown issue. Sorry, we don't have any description for the rule that was broken. */
  MOBILE_USABILITY_ISSUE_TYPE_UNSPECIFIED,
  /* Plugins incompatible with mobile devices are being used. Learn more. */
  USES_INCOMPATIBLE_PLUGINS,
  /* Viewport is not specified using the meta viewport tag. Learn more. */
  CONFIGURE_VIEWPORT,
  /* Viewport defined to a fixed width. Learn more. */
  FIXED_WIDTH_VIEWPORT,
  /* Content not sized to viewport. Learn more. */
  SIZE_CONTENT_TO_VIEWPORT,
  /* Font size is too small for easy reading on a small screen. Learn More. */
  USE_LEGIBLE_FONT_SIZES,
  /* Touch elements are too close to each other. Learn more. */
  TAP_TARGETS_TOO_CLOSE,
}

/* Rich-Results inspection result, including any rich results found at this URL. */
export interface RichResultsInspectionResult {
  /* List of Rich Results items. */
  detectedItems: Item[];
  /* Rich Results type */
  richResultType: string;
}

/* Rich Results items grouped by type. */
export interface DetectedItems {
  /* List of Rich Results items. */
  items: Item[];
  /* Rich Results type */
  richResultType: string;
}

/* A specific rich result found on the page. */
export interface Item {
  /* A list of zero or more rich result issues found for this instance. */
  issues: RichResultsIssue[];
  /* The user-provided name of this item. */
  name: string;
}

/* Severity and status of a single issue affecting a single rich result instance on a page. */
export interface RichResultsIssue {
  /* Rich Results issue type. */
  issueMessage: string;
  /* Severity of this issue: WARNING, or ERROR. Items with an issue of status ERROR cannot appear with rich result features in Google Search results. */
  severity: Severity;
}
