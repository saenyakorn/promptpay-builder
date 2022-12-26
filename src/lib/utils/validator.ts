export function validateTelephoneNumber(input: string) {
	// const regex = /((\+66|0)(\d{1,2}-?\d{3}-?\d{3,4}))/;
	const regex = /(0(\d{1,2}-?\d{3}-?\d{3,4}))/;
	return regex.test(input);
}
