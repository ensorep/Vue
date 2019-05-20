<template>
    <div class="contact">
        <h2 class="contact-title">Contact</h2>
        <p class="contact-text"><span class="contact-textra">Want to learn more about FIBRotools™ Technology?</span> Sign up for our mailing list to receive product information, case studies, and updates.</p>
        <form class="contact_form-email">
            <input type="text" placeholder="Enter your email"/>
						<button class="CTA_contact-submit">Submit</button>
        </form>
    </div>
</template>

<script>
  export default {
    name: 'contact',
  }
</script>

<style lang="scss" scoped>
$logo-blue: #3a95f9;
.contact {
    background: rgba(255,255,255,1);
    &-title {
        margin: 0;
				padding: 1rem 0 0 0;
        color: $logo-blue;
    }
    &-text{
        color: black;
        font-size: 1.1rem;
        font-weight: bold;
    }
    &-textra {
        display:none;
    }
  &_form {
    &-email {
			margin: auto;
			input[type="text"]{
				border: 1px solid black;
				border-radius: 5px;
				padding: .5rem;
				font-size:1rem;
				width:50%;
				color: black;
				font-weight: bold;
				margin: auto;
				&:focus{
					outline: $logo-blue auto 2px;
				}
			}
    }
  }
}
.CTA {
	&_contact {
		&-submit {
			padding: .5rem;
			margin: 1rem;
			background-color: $logo-blue;
			color: #fff;
			font-size: 1rem;
			font-weight:bold;
			border:$logo-blue 1px solid;
			width: 25%;
			border-radius: 7px;
			transition: all .5s;
			&:hover{
				width: 30%;
			}
		}
	}
}
</style>
