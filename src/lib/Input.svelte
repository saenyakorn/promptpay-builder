<script lang="ts">
	import clsx from 'clsx'
	import type { HTMLInputAttributes } from 'svelte/elements'

	export let id: string
	export let value: string
	export let label: string = ''
	export let helperText: string = ''
	export let postfix: string = ''
	export let selectOnFocus: boolean = false

	interface $$Props extends HTMLInputAttributes {
		id: string
		value: string
		label?: string
		helperText?: string
		postfix?: string
		selectOnFocus?: boolean
	}

	let input: HTMLInputElement

	function focusInput() {
		input.focus()
		if (selectOnFocus) input.select()
	}
</script>

<div>
	<div class="flex flex-col w-full gap-1">
		{#if label}
			<label
				for={id}
				class={clsx(
					$$restProps.required && "after:content-['*'] after:text-red-500 after:ml-1 align-middle"
				)}>{label}</label
			>
		{/if}
		<div
			class={clsx(
				'w-full border-2 border-solid border-gray-300 rounded-md flex items-center',
				'hover:border-blue-400',
				'focus-within:border-blue-400',
				'transition-colors'
			)}
		>
			<input
				{id}
				name={id}
				type="text"
				class="focus:outline-none p-2 rounded-md w-full"
				{...$$restProps}
				on:focus={focusInput}
				bind:value
				bind:this={input}
			/>
			{#if postfix}
				<button
					type="button"
					class="text-gray-400 pr-2 bg-none cursor-default"
					on:click={focusInput}>{postfix}</button
				>
			{/if}
		</div>
	</div>
	{#if helperText}
		<span class="text-xs text-gray-400">{helperText}</span>
	{/if}
</div>

<style></style>
