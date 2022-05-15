# ![enter image description here](https://img.icons8.com/color/32/react-native.png) React- shop 

<p align="center">
	<a href="https://reactjs.org/" target="_blank">	
		<img src="https://img.shields.io/badge/Library-React%20JS-blue?style=for-the-badge" />
	</a>
	<a href="https://www.npmjs.com/" target="_blank">	
		<img src="https://img.shields.io/badge/npm-8.6.0-d32d1d?style=for-the-badge" />
	</a>
	<a href="https://api.escuelajs.co/docs/" target="_blank">	
		<img src="https://img.shields.io/badge/API-Escuela%20JS-98ca3f?style=for-the-badge" />
	</a>
</p>

## Dependencies

<p align="center">
	<a href="https://webpack.js.org/" target="_blank">	
		<img height="80px" src="https://webpack.js.org/site-logo.1fcab817090e78435061.svg" />
	</a>
	<a href="https://babeljs.io/" target="_blank">	
		<img height="80px" src="https://d33wubrfki0l68.cloudfront.net/7a197cfe44548cc1a3f581152af70a3051e11671/78df8/img/babel.svg" />
	</a>
	<a href="https://axios-http.com/" target="_blank">	
		<img width="220px" src="https://axios-http.com/assets/logo.svg" />
	</a>
</p>

## Project View
You can see the project [here](https://monoald.github.io/react-shop/). Project deploy takes branch `newDeploy` as **source**.
![Shop main page](https://github.com/monoald/react-shop/blob/main/src/assets/images/shop-main.png?raw=true)
![Shop cart](https://github.com/monoald/react-shop/blob/main/src/assets/images/shop-cart.png?raw=true)
![Shop checkout](https://github.com/monoald/react-shop/blob/main/src/assets/images/shop-checkout.png?raw=true)
## Run 

 1. Clone the Project.
 `git clone https://github.com/monoald/react-shop.git`
 2. Install dependencies
 `npm install`
 3. To see the project in localhost, change.
	 ```
	    //In webpack.config.js
	    ...
	 11|  publicPath: '/',
		//In App.jsx
		...
	21|  <BrowserRouter  basename='/react-shop'  >
	 ```
 4. Run localhost.
 `npm run dev`

## Deploy
Deployed on GitHub Pages with [gh-pages](https://www.npmjs.com/package/gh-pages). To install it, run:

    npm install gh-pages -D
In `package.json`:
	
	"scripts": {
		...
	    "predeploy": "npm run build", 
	    "deploy": "gh-pages -b <branch-to-deploy> -d dist"
	}
Finally, to deploy run:

    npm run deploy

