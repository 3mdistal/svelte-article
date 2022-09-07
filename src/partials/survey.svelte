<script>
    import {fade} from "svelte/transition"
    function handleSubmit() {
        return form = false
    }

    let form = true;
</script>

{#if form}
<form out:fade class="form" on:submit|preventDefault={handleSubmit}>
    <div class="option">
        <input type="radio" id="never" name="survey" required /><label for="never"
            >I've never used Svelte.</label
        >
    </div>
    <div class="option">
        <input type="radio" id="want" name="survey" /><label for="want"
            >I want to use Svelte.</label
        >
    </div>
    <div class="option">
        <input type="radio" id="learn" name="survey" /><label for="learn"
            >I'm going to learn Svelte now.</label
        >
    </div>
    <div class="option">
        <input type="radio" id="user" name="survey" /><label for="user"
            >I'm a current Svelte user.</label
        >
    </div>
    <input type="submit" class="button" />
</form>
{:else}
<div in:fade={{ delay: 500 }} class="form">
    <p style="font-size: 14px">Results would be displayed here. I chose not to hook this up to a database for now.</p>
</div>
{/if}

<style>
    .form {
        display: flex;
        flex-direction: column;
        row-gap: 6px;
        border: 1px solid #666666;
        max-width: 300px;
        padding: 2em;
        border-radius: 1em;
    }

    .option {
        display: flex;
        align-items: center;
        column-gap: 6px;
    }

    .button {
        width: 100px;
        height: 30px;
        border-radius: 10px;
        font-family: Inter, sans-serif;
        font-size: 14px;
        font-weight: 600;
        border: none;
        background-color: rgb(50, 145, 255);
        margin-top: 12px;
        cursor: pointer;
    }

    .button:hover, :focus {
        filter: brightness(.95)
    }
</style>
