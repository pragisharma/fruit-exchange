<script>
    import { push } from "svelte-spa-router";
    import { isloggedin } from "./stores";
    import { first_name } from "./stores.js"
    import Nav from "./Nav.svelte";

let username="Hugo Steemers"
let password="ghijkl"
let email="abc@gmail.com"

function testfunc(){
    console.log("HI KIDS")
}

function userLogin(){
    console.log("userlogin function has been called!")
        const user = fetch('http://127.0.0.1:5000/login', {
            method: 'POST',
             body: JSON.stringify({'username': username, 'password': password, 'email':email}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resp => resp.json().then(res => {
            let userFound = res['success'];
            if (userFound === true){
                username='';
                password='';
                email='';
                isloggedin.set(true)
                first_name.set(res["firstname"])
                push('/fruits');
            } else{
                if (res['error'] == 'USER NOT FOUND'){
                    push('/error')
                }
                //showHint=true;
            }
        }));
        push('/')
    }
</script>
<div>
    <Nav />
    <br>
    <br>
    <h5>Username:</h5><br>
    <input name="username" type="text" placeholder="Type here" bind:value={username} class="mx-0 input input-bordered input-primary" />
    <br><br>
    <h5>Email:</h5><br>
    <input name="email" type="text" placeholder="Email" bind:value={email} class="mx-0 input input-bordered input-primary" /><br><br>
    <h5>Password:</h5><br>
    <input name="passwd" type="password" placeholder="Type here" bind:value={password} class="input input-bordered input-primary " /><br><br>
    <input type="submit" value="Log In" class="btn btn-neutral" on:click={() => {userLogin()}} />
</div>