<script>
    import Nav from './Nav.svelte'
    import Day from './Day.svelte'
    import { onMount } from 'svelte';
    import { push } from 'svelte-spa-router'
    //import {first_name} from './stores.js'
    let produce_arr = [];

    let urlbase = 'http://127.0.0.1:5000';
    let users = [];

    onMount(async () => {
        console.log("hello")
        const res = await fetch(urlbase + '/get_all_produce');
        console.log("RES IS")
        console.log(res)
        const resp = await res.json();
        produce_arr = resp;
        //console.log(resp)
        console.log("VALUE OF FIRST NAME STORE VAR")
        
        
        console.log("produce_arr:")
        console.log(produce_arr)
    });
</script>

<main class="w-max">
    <!--<meta name="viewport" content="width=device-width, initial-scale=1.0">-->
    <Nav/>
    <!--search up something like gutter or margin or something so that the cards don't overlap-->
    <div class="" style="flex:10; display:flex; flex-wrap:wrap">
        {#each produce_arr as product}
            <Day name={product.fruit_type} num={product.num_fruits} description={product.description}/>
        {/each}
    </div>
</main>
