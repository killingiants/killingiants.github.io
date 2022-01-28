<template>
	<section id="contact" class="flex justify-between h-full">
		<div class="texts flex flex-1  flex-col h-full">
			<div class="flex flex-col my-auto items-start">
				<p class="sm with-indicator">Contact</p>
				<h1 class="title font-bold">Get in touch with us</h1>
				<p class="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus amet voluptatum voluptates reiciendis quasi, recusandae vero eaque et fuga similique facilis nesciunt accusamus aliquid, inventore labore quaerat earum fugiat enim!
				Maxime veniam eaque quos sapiente beatae sit. Reprehenderit praesentium, doloremque quisquam similique eligendi laboriosam sit perferendis voluptate nihil, eum quibusdam rerum laudantium provident laborum eaque dolorum ratione est a incidunt?</p>
			</div>
			<div class="socials flex items-center h-[50px]">
				<a href=""><FacebookIcon></FacebookIcon></a>
				<a href=""><InstagramIcon></InstagramIcon></a>
				<a href=""><WhatsappIcon></WhatsappIcon></a>
				<a href=""><TelegramIcon></TelegramIcon></a>
			</div>
		</div>
		<div class="form flex flex-col justify-between items-end h-full">
			<form class="my-auto">
				<div class="input-row">
					<div class="input">
						<p class="label">First name</p>
						<input type="text" placeholder="eg. John">
					</div>
					<div class="input">
						<p class="label">Last name</p>
						<input type="text" placeholder="eg. doe">
					</div>
				</div>
				<div class="input-row">
					<div class="input">
						<p class="label">First name</p>
						<input type="text" placeholder="eg. John">
					</div>
				</div>
				<div class="input-row">
					<div class="input">
						<p class="label">First name</p>
						<input type="text" placeholder="eg. John">
					</div>
				</div>
				<div class="input-row">
					<div class="input">
						<p class="label">First name</p>
						<textarea></textarea>
					</div>
				</div>
			</form>
			<td-button class="main-btn td-button--dark">Send your message</td-button>
		</div>
	</section>
</template>