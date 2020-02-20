<?php  include 'template/header.php'; ?>

		<section class="hero heroProducts">
			<h2>Merchandising</h2>
			<i class="fa fa-angle-down downArrow"></i>
		</section>

		<div class="lightBox">
			<i id="galleryArrowLeft" class="fa fa-angle-left galleryArrow"></i>
			<div class="lightBoxImagesCon active">
				<ul class="lightBoxImages">
					<li><img class="lightBoxImg currentImage" src="images/products_lightbox_reel.jpg" alt="Reel Decal Sticker"></li>
					<li><img class="lightBoxImg" src="images/products_lightbox_rod.jpg" alt="rod Decal Sticker"></li>
					<li><img class="lightBoxImg" src="images/products_lightbox_notepad.jpg" alt="Notepad"></li>
				</ul>
			</div>
			<i id="galleryArrowRight" class="fa fa-angle-right galleryArrow"></i>
			<div id="closeLightBox">x</div>
		</div>
			
		<div id="merchMainCon">
			<section id="merchGallery">
				<div class="textZoomCon"><p>Click image for large view</p><i class="fa fa-search-plus zoomIcon"></i></div>
				<h3 class="hidden">Merchandising Gallery</h3>
				
				<!-- <div class="galleryImagesCon"> 
					<div class="galleryArrows">
						<i class="fa fa-angle-left galleryArrow"></i>
						<i class="fa fa-angle-right galleryArrow"></i> 
					</div>
				</div> --> 

				<div class="galleryImageCon">
					<img class="galleryImage" src="images/products_gallery_reel.jpg" alt="Reel Sticker Decal Merch">	
				</div>
				
				<div class="galleryThumbnails">	
					<img data-ref="products_gallery_reel.jpg" data-count="0" class="thumbnail" src="images/products_thumbnail_reel.jpg" alt="Reel Sticker Merch Thumbnail">	
					<img data-ref="products_gallery_rod.jpg" data-count="1" class="thumbnail" src="images/products_thumbnail_rod.jpg" alt="Reel Sticker Merch Thumbnail">
					<img data-ref="products_gallery_notepad.jpg" data-count="2" class="thumbnail" src="images/products_thumbnail_notepad.jpg" alt="Notepad Merch Thumbnail">
					<!-- <img data-ref="3" class="thumbnail" src="images/products_thumbnail_keychain.jpg" alt="Keychain Merch Thumbnail"> -->
				</div>
			</section>

			<section id="merchDesc">
				<h3>Reel Decal Sticker Merch</h3>
				<h4>TRAA Logo On Reel Decal Sticker</h4>
				<p>Decorate your rod reel with this decal sticker bearing our logo. The sticker is circular with a 30cm radius. A great gift idea for your kid's fishing rods as well. All purchases help fund our projects</p>
				<div class="priceFormCon">
					<h5>Price: $5.00</h5>
					<form id="merchForm" action="merch-form.php" method="post">
						<input type="number" name="quantity" min="1" max="10" value="1">
					<div class="btnAnimateCon">
						<input type="submit" value="ADD TO CART" class="btnSmall light">
						<a href="#" class="btnAnimateOverlay"></a>
						<a href="#" class="btnAnimateOverlay btnAnimateOverlay2"></a>
					</div>

					</form>
				</div>
			</section>
		</div>

	<?php  include 'template/footer.php'; ?>
	
	<!-- JavaScript -->
	<script src="js/products.js"></script>
	<script src="js/nav.js"></script>
	<script src="js/skipHero.js"></script>
	<script src="js/subNav_mobile.js"></script>
	<script src="js/merchLightbox.js"></script>
</body>
</html>