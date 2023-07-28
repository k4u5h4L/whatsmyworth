<h1 align="center">What's my worth</h1></br>

<p align="center">
:money_mouth_face: A web app which recommends recipes based on the ingredients provided. :dollar:
</p>
<br>

<p align="center">
  <a href="#"><img alt="built with love" src="https://forthebadge.com/images/badges/built-with-love.svg"/></a>
  <a href="#"><img alt="js Badge" src="https://forthebadge.com/images/badges/made-with-typescript.svg"/></a>
  <a href="https://github.com/k4u5h4L"><img alt="k4u5h4L GitHub badge" height="37" src="https://badgen.net/badge/GitHub/k4u5h4L?icon=github&color=24292e"/></a>
  <a href="#"><img alt="machine Badge" height="37" src="https://forthebadge.com/images/badges/works-on-my-machine.svg"/></a>
  <a href="#"><img alt="not bug but feature" height="37" src="https://forthebadge.com/images/badges/not-a-bug-a-feature.svg"/></a>
  <a href="#"><img alt="spaghetti Badge" src="https://forthebadge.com/images/badges/contains-tasty-spaghetti-code.svg"/></a>
</p>

<br>
<p align="center">
<img width="320px" src="public/money.svg" alt="money icon"></img>
</p><br>

## Features:

- Enter specific fields lke Age, Gender, Education Level, Job Title, Years of Experience, Country and Race. Given this, the AI model will determine your approximate salary expectations in USD.

- Very light and performant, thanks to the model being loaded directly in the browser by Tensorflow.js.

## Tech stack:

- The T3 stack:
  - Next.js
  - React
  - Typescript
  - Tailwind CSS
  - PostCSS config
- Tensorflow & Tensorflow.js
- Python, with numpy, pandas and sklearn to train and export the keras model.

## Development/instllation

How to run the project locally on your own hardware:

- Clone and cd into the repo.

```
git clone https://github.com/k4u5h4L/whatsmyworth.git && cd whatsmyworth
```

- Install the required dependencies

```
yarn install
```

- Cope the contents of the `.env.example` file to `.env` and fill in the needed API keys and data if required. Ignore this stpe if the file is empty.

- Start the development server by running

```
yarn dev
```

This should spin up the site on [localhost:3000](http://localhost:3000).

If you want a production server, build and start the server.

```
yarn run build && yarn start
```

## Note:

- This project is made as a hobby and is <b>NOT</b> a commercial application.
- Please do not consider the output of the AI model as anything concrete, as this is only for educational purposes.
- Any contribution is welcome. You can fork and submit a pull request.

## Citations:

- Salary dataset from [Kaggle](https://www.kaggle.com/datasets/sudheerp2147234/salary-dataset-based-on-country-and-race).
