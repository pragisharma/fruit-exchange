<script>
    import Nav from "./Nav.svelte"
    import { push } from "svelte-spa-router";
    import { isloggedin } from "./stores";
    import { first_name } from "./stores.js"

let fruit_type=""
let num_fruits=""
let description=""

function testfunc(){
    console.log("HI KIDS")
}

function add(){
    console.log("add function has been called!")
        const user = fetch('http://127.0.0.1:5000/add_produce_type', {
            method: 'POST',
             body: JSON.stringify({'fruit_type': fruit_type, 'num_fruits': num_fruits, 'description': description}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resp => resp.json().then(res => {
            let userFound = res['success'];
            console.log("GOT A RESPONSE")
            if (userFound === true){
                console.log("SUCCESSFULLLY ADDED")
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
    <h1>Do you want to get rid of extra fruit in your backyard? List it here for one of your neighbors to use!</h1> <!--change stuff accordingly-->
    <br>
    <h5>Fruit Name:</h5>
    <input name="name" type="text" placeholder="Type here" bind:value={fruit_type} class="mx-0 input input-bordered input-primary" />
    <br><br><h5>Number of Fruit:</h5>
    <input name="num" type="text" placeholder="Type here" bind:value={num_fruits} class="input input-bordered input-primary " />
    <br><br><h5>Description:</h5>
    <textarea name="desc" placeholder="Type here" bind:value={description} class="textarea input input-bordered input-primary "></textarea>
    <br><br><input type="submit" value="Add" class="btn btn-neutral" on:click={() => {add()}} />
</div>