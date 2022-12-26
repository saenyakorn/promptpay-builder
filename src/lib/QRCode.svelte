<script lang="ts">
	import { onMount } from 'svelte'
	import QRCode from 'qrcode'
	import { cleanTelephoneNumber } from './utils/cleaner'
	import { validateTelephoneNumber } from './utils/validator'
	import generatePayload from 'promptpay-qr'
	import type { QRCodeRenderersOptions } from 'qrcode'

	export let identifier: string = ''
	export let amount: string = ''
	export let size: number = 200

	interface $$Props {
		identifier?: string
		amount?: string
		size?: number
	}

	let canvas: HTMLCanvasElement

	function drawQRCode(identifier: string, amount: string) {
		if (!canvas) return

		if (!validateTelephoneNumber(identifier) || amount === null) return null

		const telephone = cleanTelephoneNumber(identifier)
		const payload = generatePayload(telephone, { amount: Number(amount) })

		const options: QRCodeRenderersOptions = {
			color: {
				dark: '#000',
				light: '#fff'
			},
			margin: 0,
			width: size
		}
		QRCode.toCanvas(canvas, payload, options)
	}

	onMount(() => {
		drawQRCode(identifier, amount)
	})

	$: drawQRCode(identifier, amount)
</script>

<div
	class="border-2 border-zinc-200 overflow-hidden rounded-md text-center flex items-center flex-col"
>
	<h2 class="bg-primary px-4 pt-4 w-full font-bold text-lg">Thai Promptpay QR Code</h2>
	{#if validateTelephoneNumber(identifier) && amount !== null}
		<div class="self-stretch">
			<canvas bind:this={canvas} class="w-full p-4" />
		</div>
		<p class="text-sm text-zinc-400">หมายเลขพร้อมเพย์ {identifier}</p>
		<p class="text-2xl font-bold pb-4">{amount === '' ? 0 : amount} THB</p>
	{:else}
		<div class="w-[300px] h-[300px] p-4">
			<div class="bg-zinc-200 h-full w-full" />
		</div>
		<p class="pb-4 px-4 text-zinc-500 text-sm">Please fill the information</p>
	{/if}
</div>
