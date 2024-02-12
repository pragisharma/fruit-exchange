<script>
    import Nav from './Nav.svelte'
    import { push } from 'svelte-spa-router'
</script>

<main>
    <!--<meta name="viewport" content="width=device-width, initial-scale=1.0">-->
    <Nav/>
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content text-center">
            <div class="max-w-md">
            <h1 class="text-5xl font-bold">About this Website</h1>
            <p class="py-6">Do you need fruits, but don't have them at home? Check if any of your neighbors has some? Or, do you have surplus that you don't know what to do with? List them here for one of your neighbors to get!</p>
            <button class="btn btn-primary"><button on:click={()=>{push('/')}}>Get Started</button></button>
        </div>
    </div>
</div></main>