
![](https://github.com/jstnfrncis/agkat-ph/blob/ddf831f690cfa2ae52698788831977fc5e295ee8/public/agkat-mock-up.jpg)



## Installation (Make sure Php Version is 8.2 to test go to cmd and type php -v)
```
composer require laravel/breeze --dev
```
```
php artisan breeze:install
```
```
npm install @tailwindcss/forms
```
## Saving Cover Photos storage\app\public
```
php artisan storage:link
```

## One-time Installation for (React)

```sh
-- npm install react react-dom prop-types @radix-ui/react-dropdown-menu @remixicon/react qrcode.react @heroicons/react nprogress && npm install --save-dev @vitejs/plugin-react
```
## Dependencies (React)
- npm i react react-dom
- npm install prop-types
- npm install @radix-ui/react-dropdown-menu @remixicon/react
- npm install qrcode.react
- npm install @heroicons/react
- npm install nprogress
- npm install --save-dev @vitejs/plugin-react
- npm install chart.js react-chartjs-2
- npm install date-fns

## Inertia dependencies (Server-side PHP)

```sh
composer global require laravel/installer
```
```sh
composer require inertiajs/inertia-laravel
```

## (Not Required)
```sh
php artisan inertia:middleware
```
## For Route (Not Required)
```sh
php artisan make:controller PageController
```


## Inertia dependencies (Client-side javascript)
```sh
npm install @inertiajs/inertia @inertiajs/inertia-react
```


## Tailwind Installation
```sh
npm install -D tailwindcss postcss autoprefixer
```


## Create .env file
## Inside .env.example file, copy the contents and paste to .env

Then
```sh
php artisan key:generate
```
```sh
php artisan cache:clear
```
```sh
php artisan config:clear
```

## Modify .env to
- DB_CONNECTION=null
- SESSION_DRIVER=file


## Run the app
```sh
php artisan serve
```
```sh
npm run dev
```
## Update Route for Ziggy
```
php artisan route:list
php artisan route:clear
```

## Cleaner
```
php artisan route:cache
php artisan config:cache
php artisan view:clear
php artisan cache:clear

```


## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[WebReinvent](https://webreinvent.com/)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Jump24](https://jump24.co.uk)**
- **[Redberry](https://redberry.international/laravel/)**
- **[Active Logic](https://activelogic.com)**
- **[byte5](https://byte5.de)**
- **[OP.GG](https://op.gg)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
