Reflections

## Required

🎯 What requirements did you achieve?
Implemented useState hook

Implemented useEffect to gather and apply fetch data to thumbnail variable, as well as create a fullscreenimage upon reload of the page.

Organised code with seperate components for the Thumbnail.jsx, and FullSCreenImage.jsx

Thumbnails displayed clearly on page for both mobile and desktop versions

Clicking thumbnail renders a full screen version to the page

Imagery has alt text (in console)

Stretch goals:

Added unsplash API (However API key is visible from code)

App looks pleasing with some simple design changes, such as CSS for the thumbnail container, hover effects, and the fulscreen image filling the whole page nicely!

I used flex for the design on this website, I initially went for a grid, however in the past I've had issues using a grid and large images as it would stretch the grid. I thought as this app is very simple, I only really needed to use flexbox as we aren't working with a lot of elements.

.env hidden in gitignore

🎯 Were there any requirements or goals that you were unable to achieve?

I had a lot of difficulty with the CSS this time around, I think as we are using different components this made things trickier, I mostly got there in the end, but due to time contrainsts the thumbnail images in the mobile versions are sometimes different sizes depending on the thumbnail img size.

I couldn't hide the API key from my code, I have a general idea on how to do this, but couldn't figure it out in react. I think i'd need to assign the key to a variable like "API_KEY" and add this to the api html instead of the key directly.

I did not add a search function: I know we would use media queries, which we were taught a few weeks ago, but I don't fully remember how to do this and ran out of time. 


🎯 If so, what was it that you found difficult about these tasks?

## Optional

🏹 Feel free to add any other reflections you would like to share about your submission, for example:

This task was quite challenging for me initially, and I think my biggest concern is that it takes me a while to learn the uses and definitions of the code we are using in react (useEffect, useState, conditional rendering) which meant that when writing much of this code, I felt like I truly didn't understand how it work. I spoke with Joe in a breakout room for some guidance and this helped a bit. I think I need to spend more time reading up on react feactures as although I can often make them work through using what i've learnt in our workshops, and copy/pasting our workshop code and editing to do what I want, I don't think I'd be able to use these if I didn't have previous examples to copy.

## references

CSS references:
https://www.w3schools.com/css/css_display_visibility.asp
https://www.w3schools.com/css/css3_object-fit.asp

JS React references:
https://react.dev/reference/react/useEffect
https://react.dev/learn/conditional-rendering