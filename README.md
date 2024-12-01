# Cecomp's site


## *Warning*
Development of this project has migrated!
<https://github.com/cecomp-rp/site>

## Try it yourself
<https://cecomp.com.br/>


---

## Setup


#### | Requirements


##### **External:**
>- NodeJS: https://nodejs.org/en/ (LTS version)
>- Git:    https://git-scm.com/downloads *(of course...)*

>*Note: Don't forget to add to PATH during installation. Also, install NPM.*

*Test it:*
~~~
npm -v
node -v
git --version
~~~


##### **Global NPM modules:**
~~~
npm i nodemon -g
npm i env-cmd -g
~~~
>*Note: Use SUDO in linux.*



#### | Installation

##### **Copy repository:**
~~~
git clone https://github.com/miiranta/cecomp-site
~~~

>*Note: Run all commands from the created folder 'cecomp-site' where package.json is located, not 'src'.*

##### **Install dependencies:**
~~~
npm i
~~~



#### | Configuration

##### **SSL config:**

In order to run in **localhost**:
>1. Create a folder called 'ssl'.
>2. Add 'cert.pem' and 'privkey.pem'.

>*Note: The certificates don't need to be valid, just readable.*

In order to run in **production**:
>1. The folder with 'cert.pem' and 'privkey.pem' need to be set as an environment variable SSLDIR.



##### **Environment variables:**

For **localhost**:
>1. Create a folder called 'config'.
>2. Create a file called 'dev.env' inside 'config'.
>3. Add the following variables:

>- PORT_HTTPS=443
>- PORT_HTTP=80

>*Note: Default values included.*


For **production**:
>1. Create a folder called 'config'.
>2. Create a file called 'prod.env' inside 'config'.
>3. Add the following variables:

>- PORT_HTTPS=443
>- PORT_HTTP=80
>- SSLDIR=/etc/letsencrypt/live/your_certbot_url

>*Note: Default values included.*

For **production (alternative)**:
>1. Set your variables in the environment :).



#### | Run

For **localhost**:
~~~
npm run dev
~~~

For **production**:
~~~
npm run prod
~~~

For **production (alternative)**:
~~~
npm start
~~~

>*Note: Use SUDO in linux.*