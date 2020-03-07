export interface IWebResult {
	data: Buffer | unknown;
	cookie?: { [name: string]: string } | null;
	content_type?: string;
	headers?: {
		[key: string]: string[];
	};
	attachment?: string;
	redirect?: string;
	status_code?: number;
}
