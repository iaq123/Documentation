# Core

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ba5e8fe6e1dc427590d9bad7721ca037)](https://www.codacy.com/app/laravel-enso/Core?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/Core&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://styleci.io/repos/85807594/shield?branch=master)](https://styleci.io/repos/85807594)
[![License](https://poser.pugx.org/laravel-enso/core/license)](https://packagist.org/packages/laravel-enso/core)
[![Total Downloads](https://poser.pugx.org/laravel-enso/core/downloads)](https://packagist.org/packages/laravel-enso/core)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/core/version)](https://packagist.org/packages/laravel-enso/core)

Main requirement & dependency aggregator for [Laravel Enso](https://github.com/laravel-enso/Enso).

## Features
- core users, roles, permissions structure
- project wide, middleware based, automatic logging of all user actions
- configurable, selective, model event based logging of CRUD (& custom) actions
- integrated avatar functionality with custom & automatic avatar generation
- chart generation support
- extensible, reusable file management core functionality
- powerful, template based, customizable form builder with out of the box support for most use cases
- model event based history tracking
- middleware based user impersonation support for testing & troubleshooting
- localisation & i18n support
- Laravel log management functionality & interface
- application menus management
- user email & push notifications
- extensible, core people functionality
- integrated permissions management
- easy to use caching support
- user roles functionality with friendly interface for role configuration
- customizable, project wide search support
- template based CLI interface for the painless creation of the most needed file structures
- trait based, event driven user tracking for any model state change
- easy to use tutorial functionality for quick human user training
- model event driven, out of the box versioning support
- aspect consistent ecosystem of front-end VueJS reusable components
- highly powerful, full search, customizable, template based, huge data-set capable, 
front-end back-end integrated data table functionality with a great many other features
 
## Optional Features
- customizable, extensible, generic addresses manager plugin
- polymorphic, notification integrated comments functionality
- customizable, extensible, companies structure
- template based, validation capable, xlsx data import functionality
- intuitive discussions module
- polymorphic, document upload and management functionality
- easy to use, searchable, taggable videos support
- core teams structure  

## Included packages

[Action Logger](https://github.com/laravel-enso/ActionLogger), 
[Activity Log](https://github.com/laravel-enso/ActivityLog), 
[Avatar Manager](https://github.com/laravel-enso/AvatarManager) <sup>1</sup>, 
[Charts](https://github.com/laravel-enso/Charts), 
[Data Export](https://github.com/laravel-enso/DataExport), 
[File Manager](https://github.com/laravel-enso/FileManager), 
[Form Builder](https://github.com/laravel-enso/FormBuilder), 
[Helpers](https://github.com/laravel-enso/Helpers), 
[History Tracker](https://github.com/laravel-enso/HistoryTracker),
[Image Transformer](https://github.com/laravel-enso/ImageTransformer), 
[Impersonate](https://github.com/laravel-enso/Impersonate), 
[Localisation](https://github.com/laravel-enso/Localisation), 
[Log Manager](https://github.com/laravel-enso/LogManager), 
[Menu Manager](https://github.com/laravel-enso/MenuManager),
[Notifications](https://github.com/laravel-enso/Notifications), 
[People](https://github.com/laravel-enso/People), 
[Permission Manager](https://github.com/laravel-enso/PermissionManager), 
[Rememberable](https://github.com/laravel-enso/Rememberable), 
[Role Manager](https://github.com/laravel-enso/RoleManager), 
[Searchable](https://github.com/laravel-enso/Searchable), 
[Select](https://github.com/laravel-enso/Select), 
[Structure Manager](https://github.com/laravel-enso/StructureManager), 
[TrackWho](https://github.com/laravel-enso/TrackWho), 
[Tutorial Manager](https://github.com/laravel-enso/TutorialManager), 
[Versioning](https://github.com/laravel-enso/Versioning), 
[Vue Components](https://github.com/laravel-enso/VueComponents), 
[VueDataTable](https://github.com/laravel-enso/VueDataTable), 

## Optional packages

[Addresses Manager](https://github.com/laravel-enso/AddressesManager), 
[Comments Manager](https://github.com/laravel-enso/CommentsManager), 
[Companies](https://github.com/laravel-enso/Companies), 
[Data Import](https://github.com/laravel-enso/DataImport), 
[Discussions](https://github.com/laravel-enso/Discussions), 
[Documents Manager](https://github.com/laravel-enso/DocumentsManager) <sup>1</sup>, 
[HowTo Videos](https://github.com/laravel-enso/HowToVideos)
[Teams](https://github.com/laravel-enso/Teams)


## Notes

<sup>1</sup> In order to more efficiently handle images (optimize, resize, crop), these libraries require a few extra PHP plugins and libraries:
- pngquant
- gifsicle
- jpegoptim
- php7.1-gd or php-imagick

On Linux, you may install them with: 
```bash
sudo apt-get install pngquant gifsicle jpegoptim php7.1-gd
```

## Publishes

- `php artisan vendor:publish --tag=core-storage` - the storage folder structure
- `php artisan vendor:publish --tag=core-assets` - the assets folders, scss & js
- `php artisan vendor:publish --tag=core-config` - the configuration files
- `php artisan vendor:publish --tag=core-preferences` - the json preferences file
- `php artisan vendor:publish --tag=core-factories` - the factories for the User and the UserGroup
- `php artisan vendor:publish --tag=core-seeders` - the seeders for the User and the UserGroup
- `php artisan vendor:publish --tag=enso-config` - a common alias for when wanting to update the config,
once a newer version is released
- `php artisan vendor:publish --tag=enso-preferences` - a common alias for when wanting to update the preferences,
once a newer version is released
- `php artisan vendor:publish --tag=enso-factories` - a common alias for when wanting to update the factories,
once a newer version is released
- `php artisan vendor:publish --tag=enso-seeders` - a common alias for when wanting to update the seeders,
once a newer version is released
- `php artisan vendor:publish --tag=enso-assets` - a common alias for when wanting to update the scss & js assets,
once a newer version is released (ran automatically with --force after every composer install)
- `php artisan vendor:publish --tag=enso-mail` - a common alias for when wanting to update the templates 
used for email

## Commands
- `php artisan enso:clear-preferences` - clears the preferences stored in the DB, 
useful when the preferences structure changes  
- `php artisan enso:update-global` - adds new global preferences keys for users

## Notes

The [Laravel Enso](https://github.com/laravel-enso/Enso) package comes with this package included.

Since v2, while not mandatory, Laravel Enso also includes 
[Notifications](https://github.com/laravel-enso/Notifications), 
[Documents Manager](https://github.com/laravel-enso/DocumentsManager), 
[Comments Manager](https://github.com/laravel-enso/CommentsManager) 
and [Data Import](https://github.com/laravel-enso/DataImport).
