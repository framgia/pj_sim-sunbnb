## Description

SunBnb is a intern project 

## Technologies used:

- Vue 3 (Compostion api)
- Laravel 10 
- Mysql
- Vuetify


## Prerequites:

- Node V20.4.0
- Npm V9.7.2
- Composer V2.5.8

## Manual Setup

### For FE
1. clone repo from git `git clone git@github.com:framgia/pj_sim-sunbnb.git`
2. change directory to the project name`cd pj_sim-sunbnb`
3. go to frontend folder`cd fe`
4. install packages `npm install`
5. copy .env from .end.example `cp .env.example .env`
6. run development `npm run serve`

### For BE
1. go to backend folder `cd be`
2. install composer `composer install` 
3. copy .env from .end.example `cp .env.example .env`
4. change database details in .env 
5. generate a key that updates .env `php artisan key:generate`
6. run development `php artisan serve`

# CORS setup

1. install sanctum `composer require laravel/sanctum`
2. publish the sanctum configs `php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"`
3. migrate databases `php artisan migrate`
4. go to kernel.php and configure api to:
    ```
    'api' => [
        \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
        'throttle:api',
        \Illuminate\Routing\Middleware\SubstituteBindings::class,
    ],
    ```

## Database Setup

- update your ubuntu `sudo apt update`
- install mysql `sudo apt install mysql-server`
- start mysql `sudo service mysql start`
- change your password of root `sudo mysql_secure_installation`
- change your password withat least 8 character that contains at least 1 special character 1 Capital letter and 1 number
- login to your mysql `mysql -u [username(default: root)] -p`
- then enter your password