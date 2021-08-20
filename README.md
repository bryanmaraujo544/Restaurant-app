# Live Application

![RestaurantGif(1)](https://user-images.githubusercontent.com/62571814/130250041-179acac9-e8ad-4a8a-9e70-2fbfc39f82ba.gif)


This is an application developed by Bryan Martins(me) for a company wich has a restaurant chain. 

## How it is works

The basis idea of the application is show for users the menus of each restaurant unity that the company has. And for that, I created the home page with the main informartions about the company, like: 

- About section
- Services section
- Download our app section
- How we work section

And the all the unities the company has. I-ve made cards with link to each unity page. And for create the unities pages, I've used one Next feature called Dynamic Routes wich allow me to create pages with one single file and structure.  
With **getStaticPaths** I created the paths of the pages depending of the title of the unities. For that I created a file with datas about unities, and using **getStaticProps** I said for all unities pages to before render the page, get all the informations need for that.

## Technologies and dependencies

- React
- React Dom
- Next
- Styled Components
- Framer Motion
- React-scroll

## View application

[Restaurant App]https://restaurant-app-pi.vercel.app/#/
