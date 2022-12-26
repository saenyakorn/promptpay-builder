export function cleanTelephoneNumber(value: string): string {
	return value.replace(/-/g, '');
}
