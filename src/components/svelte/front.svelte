<script>
  import * as m from "../../paraglide/messages.js";
  import { languageTag, setLanguageTag } from "../../paraglide/runtime"
import { onMount } from 'svelte'

  export let lang = "en"

  let email = ""
  let email_invalid = false
  let email_success = false
  onMount(()=>{

  })
  $:{
      setLanguageTag(lang)
  }
  function validateEmail(e){
    // console.log(email)
    email = e
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    email_invalid = !re.test(String(email).toLowerCase())
    
  }

  function sendEmail(){
        email_invalid = false
    
    const host = document.location.origin
    fetch(host + '/api/mailinglist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email }),
    })
      .then(response => response.json())
      .then(data => { 
        if(data.message == "success"){
          email_success = true
        }else if(data.message == "reject"){
          email_success = true
        }
      })
      .catch((error) => console.error('Error:', error));

  }
</script>

<div class="container">
  <div class="smalltitle" style="margin-bottom:8px;">{m.learn_more()}</div>
    <div style="">
      <input type="email" id="email" name="email" placeholder={m.email()}  class="css-input" on:input={(e)=>{validateEmail(e.target.value)}}>
      <br/>
      <div style="margin:16px 0">
        <button type="submit" value="Submit" style="cursor:pointer;" disabled={email_invalid} on:click={()=>{sendEmail()}}>{m.submit()}</button>
      </div>
      {#if email_invalid }
        <div style="color:red;">{m.valid_email_please()}</div>
        {:else if email_success}
        <div style="color:#4f94f8;">{m.thank_you_for_joining()}</div>
        <div style="color:#4f94f8">{m.keep_you_posted()}</div>
      {/if}
      <br>
    </div>
  <!-- </form> -->
</div>


<style>

</style>
