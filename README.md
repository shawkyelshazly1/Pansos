<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/shawkyelshazly1/Pansos">
    <img src="https://i.ibb.co/MBZd4MX/social-media.png" alt="Logo" width="90" >
  </a>

<h3 align="center" style="color:#ff4400;font-size:40px;font-weight:700">Pansos<span style="color:black;font-weight:1000"">.</span></h3>

  <p align="center">
    A Social Media Platform For Cool Dudes To Connect And Share Ideas
    <br />
    <a href="https://github.com/shawkyelshazly1/Pansos"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://pansos.onrender.com/" >View Demo</a>
    ·
    <a href="https://github.com/shawkyelshazly1/Pansos/issues">Report Bug</a>
    ·
    <a href="https://github.com/shawkyelshazly1/Pansos/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

<!-- - [![Next][next.js]][next-url] -->

- [![React][react.js]][react-url]
- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
- ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Follow the below guide to launch project on local machine.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```
- node
- mongod

### Installation

1. Get MongoDB URI
2. Clone the repo
   ```sh
   git clone https://github.com/shawkyelshazly1/Pansos.git
   ```
3. Install server NPM packages
   ```sh
   cd server && npm install
   ```
4. Install client NPM packages
   ```sh
   cd client && npm install
   ```
5. Enter your API in `./server/.env`

   ```js
   PORT = "ENTER PORT NUMBER";
   MONGODB_URI_DEV = "ENTER MONGO DATABASE DEVELOPMENT URI";
   MONGODB_URI = "ENTER MONGO DATABASE PRODUCTION URI";
   ACCESS_TOKEN_SECRET = "ENTER TOKEN SECRET";
   REDIS_URI = "Enter Redis Client URI";
   ```

6. Start two terminals for each process

7. Start your server
   ```sh
    cd server && npm run dev
   ```
8. Start your server
   ```sh
    cd client && npm run start
   ```
9. Start Redis Clinet service based on your OS, install & setup guide: <a href="https://redis.io/docs/getting-started/">Redis Guide</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://github.com/shawkyelshazly1/Pansos)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Stories section functionality and design.

See the [open issues](https://github.com/shawkyelshazly1/Pansos/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Your Name - [@shawkycap0](https://twitter.com/shawkycap0) - shawkyelshazly2@gmail.com

Project Link: [https://github.com/shawkyelshazly1/Pansos](https://github.com/shawkyelshazly1/Pansos)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/shawkyelshazly1/google-forms-clone.svg?style=for-the-badge
[contributors-url]: https://github.com/shawkyelshazly1/Pansos/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/shawkyelshazly1/google-forms-clone.svg?style=for-the-badge
[forks-url]: https://github.com/shawkyelshazly1/Pansos/network/members
[stars-shield]: https://img.shields.io/github/stars/shawkyelshazly1/google-forms-clone.svg?style=for-the-badge
[stars-url]: https://github.com/shawkyelshazly1/Pansos/stargazers
[issues-shield]: https://img.shields.io/github/issues/shawkyelshazly1/google-forms-clone.svg?style=for-the-badge
[issues-url]: https://github.com/shawkyelshazly1/Pansos/issues
[license-shield]: https://img.shields.io/github/license/shawkyelshazly1/google-forms-clone.svg?style=for-the-badge
[license-url]: https://github.com/shawkyelshazly1/Pansos/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/shawky-elshazly-4a7533110
[product-screenshot]: https://i.postimg.cc/ht76wr6q/Be-Funky-collage.jpg
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[vue-url]: https://vuejs.org/
[angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[svelte-url]: https://svelte.dev/
[laravel.com]: https://img.shields.io/badge/Express-20232A?
[laravel-url]: https://laravel.com
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[jquery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[jquery-url]: https://jquery.com
