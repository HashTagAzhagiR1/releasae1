import React from 'react';
import { NavLink } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import { themeSettings, text } from '../lib/settings';
import * as helper from '../lib/helper';

const renderItem = item => (
	<div className="image-gallery-image">
		<img src={item.original} alt={item.title} />
		<div
			className="caption"
			style={{ color: themeSettings.home_slider_color || '#abb' }}
		>
			<div className="caption-title">{item.title}</div>
			<div className="caption-description">{item.description}</div>
			<span className="carousel-Button">VIEW COLLECTIONS</span>
		</div>
	</div>
);

const HomeSlider = ({ images }) => {
	if (images && images.length > 0) {
		const items = images.map(item => ({
			original: `/assets/images/${item.image}`,
			title: item.title,
			description: item.description,
			path: item.path || '',
			button: item.button
		}));

		return (
			<section className="section" style={{ padding: 0 }}>
				<div>
					<div className="home-slider">
						<ImageGallery
							items={items}
							lazyLoad
							showThumbnails={false}
							slideInterval={2000}
							showNav={true}
							showBullets={images.length > 1}
							showPlayButton={true}
							showFullscreenButton
							slideOnThumbnailHover={false}
							renderItem={renderItem}
						/>
					</div>
				</div>
			</section>
		);
	}
	return null;
};

export default HomeSlider;
