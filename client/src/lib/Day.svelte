<script>
    import Nav from './Nav.svelte'
    import Slot from './Slot.svelte'
    import AdminSlot from './AdminSlot.svelte';
    import { expoIn } from 'svelte/easing';
    export let name;
    export let num;
    export let description;
    let img_name="";
    let weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri"]
</script>
<main>
    <div class="card bg-orange-100 w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          {#if name==="Orange"}
            <img src="https://purepng.com/public/uploads/large/purepng.com-orange-orangeorangefruitbitter-orangeorangesclip-art-17015273374288pjtg.png" alt="Orange" class="rounded-xl" />
          {:else if name==="Banana"}
            <img src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Fruit-PNG/Large_Bananas_PNG_Clipart.png?m=1434276917" alt="Banana" class="rounded-xl" />
          {:else if name==="Apple"}
            <img src="https://static.vecteezy.com/system/resources/previews/009/887/176/non_2x/red-apples-free-png.png" alt="Apple" class="rounded-xl" />
          {:else if name==="Strawberry"}
          <img src="https://i.pinimg.com/originals/eb/d4/de/ebd4deb64c74e2f1246626d5a290274d.png" alt="Strawberry" class="rounded-xl" />
          {:else}
          <img src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4" alt="Fruit" class="rounded-xl" />
          {/if}
          
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>Number: {num}</p>
          <p>{description}</p>
          <!--<p>Email: {email}</p>-->
          <div class="card-actions">
            <button class="btn btn-primary">Press to Email</button>
          </div>
        </div>
      </div>
</main>