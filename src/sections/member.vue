<template>
    <main id="member" class="mt-24">
        <section class="flex flex-wrap gap-x-16">
            <div class="space-y-5 flex-1">
                <p class="text-2xl font-semibold">About</p>
                <h2 class="text-5xl font-extrabold">Award winning UX team.</h2>
                <p class="text-2xl font-semibold">Our team is driven for your succes.</p>
                <p class="text-base">We are small , distributed team. With our headquarters located in Lomé, Togo. Our team has come together through the passion of solving complicated problems, through design and development. 
                We work closely with our clients and their customers to truly understand the values (et les attentes) of all parties. We help business bridge this connection and enhance customer experience.</p>
                <div class="all-members-link">
					<img src="/vectors/arrow-right.svg" alt="">
					<a>All members</a>
				</div>
            </div>
            <div class="member-images">
                <div class="pt-4 ">
                    <img src="./../assets/images/teams/alex.jpg" alt="">
                </div>
                <div class="pb-4">
                    <img src="./../assets/images/teams/anadi.jpg" alt="">
                </div>
                <div class="pt-4">
                    <img src="./../assets/images/teams/mathias.jpg" alt="">
                </div>
                <div class="pb-4">
                    <img src="./../assets/images/teams/samantha.jpg" alt="">
                </div>
            </div>
            
        </section>
    </main>
</template>

<style scoped>
    .member-images {
        flex: 1 1 0%;
        display: flex;
        column-gap: 10px
        
    }

    .member-images > div{
        position: relative;
    }

    .member-images > div:nth-child(2n-1)::before, .member-images > div:nth-child(2n-1)::after {
        content: '';
        display: block;
        height: 16px;
        position: absolute;
        top: -5px
    }

    .member-images > div:nth-child(2n-1):before {
        width: 28%;
        background-color: #f7a704;
    }

    .member-images > div:nth-child(2n-1):after {
        width: 65%;
        background-color: black;
        right: 0;
    }

    .member-images > div:nth-child(2n-2)::before, .member-images > div:nth-child(2n-2)::after {
        content: '';
        display: block;
        height: 16px;
        position: absolute;
        bottom: -5px
    }

    .member-images > div:nth-child(2n-2):before {
        width: 28%;
        background-color: #f7a704;
    }

    .member-images > div:nth-child(2n-2):after {
        width: 65%;
        background-color: black;
        right: 0;
    }

    .all-members-link {
        position: relative;
    }
    .all-members-link::before {
        content: '';
        height: 40px;
        width: 40px;
        background-color: #f7a704;
        position: absolute;
        top: 15px;
        left: 0;
        border-radius: 50%;
        z-index: 1;
    }

    .all-members-link > img {
        position: relative;
        display: inline;
        margin-left: 15px;
        z-index: 1;
    }

    .all-members-link a {
        color: black;
        font-weight: 600;
        font-size: 24px;
    }
</style>