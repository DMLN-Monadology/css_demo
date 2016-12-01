# CSS Demo

## [Live Link] [link]

[link]: https://dmln-monadology.github.io/css_demo/

## Background

Mastery of CSS is the cornerstone of front-end developing. It is the essence of "form" in "form and functionality". This project will demonstrate my CSS proficiency and serve as a platform to share information about one of my favorite academic subject: Russia.

This will be a one-page website demonstrating all of the major CSS functionalities, serving to display basic facts and trivia about Russia.

### MVP

## Functionality & MVP

The website users will be able to see the implementation of the following CSS features:

- [ ] 2D rotation
- [ ] 3D rotation.
- [ ] Modals.
- [ ] Flip cards.   
- [ ] Carousel.
- [ ] TBD



## Architecture and Technologies

- CSS
- JavaScript
- jQuery

## Technical Implementation

  * Earth rotation is a pseudo 3D animation, achieved by using an
  equirectangular world map along with box shadowing.

  * Matryoshka dolls rotated using a CSS animation and @keyframes specifications for rotations.

  * Flip Cards swings like doors because of two innovations: Setting the rotational origin outside of the picture, and perspective. Flip Cards are executed using jQuery and jQuery's classToggle.

  * Modals are similarly achieved using jQuery's classToggle.

  * Carousel is achieved by setting perspective on the carousel container, and for each individual image one specifies the transformation of the Y and Z axis. Y axis transformation is determined simply by the number of images, given a circle of 360 degrees (360/n = Y axis transformation).

  For the Z-axis transformation, some elementary trigonometry is required. In my carousel, the container sets each present image to a width of 210px. Each image occupies 40 degrees (360/9 images). If we drew a line from the centre of the carousel to the center of the base of the present image, we will have achieved a right triangle with the base of length 105px (half of 210px allocated) and the top angle of 20 degrees. To find the length of the Z-transformation, we simply take 105px and divide by the tangent of 20 degrees, resolving to ~288px.

  The rotational logic is handled with jQuery.
