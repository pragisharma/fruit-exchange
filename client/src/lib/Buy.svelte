<script>
    import Nav from "./Nav.svelte"
    import { push } from "svelte-spa-router";
    import { isloggedin } from "./stores";
    import { first_name } from "./stores.js"
    import { onMount } from 'svelte';

let fruit_type=""
let num_fruits=""
let description=""

function testfunc(){
    console.log("HI KIDS")
}


let produce_arr = []

let urlbase = 'http://127.0.0.1:5000';

onMount(async () => {
    console.log("hello")
    const res = await fetch(urlbase + '/get_all_produce');
    console.log("RES IS")
    console.log(res)
    const resp = await res.json();
    produce_arr = resp;
    console.log("RESP:")
    console.log(resp)
    console.log("VALUE OF FIRST NAME STORE VAR")
    //console.log(first_name)
});

function buy(){
    console.log("buy function has been called!")
        const user = fetch('http://127.0.0.1:5000/buy_produce', {
            method: 'PATCH',
             body: JSON.stringify({'fruit_type': fruit_type, 'num_fruits': num_fruits, 'description': description}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resp => resp.json().then(res => {
            let userFound = res['success'];
            console.log("GOT A RESPONSE")
            if (userFound === true){
                console.log("SUCCESSFULLLY BOUGHT")
                fruit_type='';
                num_fruits='';
                description='';
                isloggedin.set(true)
                first_name.set(res["firstname"])
                push('/');
            } else{
                if (res['error'] == 'USER NOT FOUND'){
                    push('/error')
                }
                //showHint=true;
            }
        }));
    }
</script>
<Nav />
<div style="display:flex flex-flow:column">
    <h1>Do you want to buy some fruit from your neighborhood? This is the place for you!</h1> <!--change stuff accordingly-->
    <br>
    
    <h5>Fruit Name:</h5>
    <select class="select select-accent w-full max-w-xs" bind:value={fruit_type}>
        <option disabled selected>Which fruit?</option>
        {#each produce_arr as product}
            <option>{product.fruit_type}</option>
        {/each}
      </select>
    <br><br><h5>Number of Fruit:</h5>
    <select class="select select-accent w-full max-w-xs" bind:value={num_fruits}>
        <option disabled selected>How many?</option>
        {#each produce_arr as product}
            {#if product.fruit_type === fruit_type}
                <option>{product.num_fruits}</option>
            {/if}
        {/each}
    </select>
    <br><br><h5>Description:</h5>
    <select class="select select-accent w-full max-w-xs" bind:value={description}>
        <option disabled selected>Description?</option>
        {#each produce_arr as product}
            {#if product.fruit_type === fruit_type && product.num_fruits === num_fruits}
                <option>{product.description}</option>
            {/if}
        {/each}
    </select>
    <br><br><input type="submit" value="Submit" class="btn btn-neutral" on:click={() => {buy()}} />
</div>