<script lang="ts">
	import Button from '$lib/Button.svelte'
	import Input from '$lib/Input.svelte'
	import QrCode from '$lib/QRCode.svelte'

	let identifier = ''
	let amount = ''
</script>

<main class="flex flex-col p-6 sm:p-20 gap-8">
	<h1 class="text-3xl font-bold text-center">Promptpay Builder</h1>
	<div class="flex justify-center w-full gap-6 sm:gap-12 flex-wrap">
		<form on:submit|preventDefault={null} class="flex flex-col gap-4" title="Promptpay Builder">
			<Input
				bind:value={identifier}
				id="identifier"
				label="Telephone number"
				placeholder="0888888888"
				required
			/>
			<Input
				bind:value={amount}
				id="amount"
				type="number"
				label="Amount of money"
				placeholder="500"
				postfix="THB"
				required
				selectOnFocus
			/>
			<Button type="submit" class="w-full">Generate</Button>
		</form>
		<QrCode {identifier} {amount} size={300} />
	</div>
</main>
