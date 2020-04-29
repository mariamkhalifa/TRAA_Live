export default {
    template: `
    <section id="productsCon">
			<picture>
				<source :srcset="'images/' + largeImg" media="(min-width: 600px)">
				<img class="productImg" :src="'images/' + smallImg" alt="Reel Decal Sticker Merch">
            </picture>
            
            <h2>{{ title }}</h2>
            
		    <p>{{ text }}</p>
            
            <div class="btnCon">
			<div class="btnAnimateCon">
				<a href="products.html" class="btnSmall dark">SEE PRODUCTS</a>
				<a href="products.html" class="btnAnimateOverlay"></a>
				<a href="products.html" class="btnAnimateOverlay btnAnimateOverlay2"></a>
			</div>
		</div>
	</section>
    `,

    data() {
        return {
            title: 'Our Products',
            text: 'Check out our merch. From stickers for your gear. to notepads and keychains. All profits help fund our projects.',
            smallImg: 'products_gallery_reel.jpg',
            largeImg: 'products_large_reel.jpg'
        }
    }
}