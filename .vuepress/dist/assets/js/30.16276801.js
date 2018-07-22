(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{155:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),a("p",[a("a",{attrs:{href:"https://styleci.io/repos/113445673",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://styleci.io/repos/113445673/shield?branch=master",alt:"StyleCI"}}),a("OutboundLink")],1),a("a",{attrs:{href:"https://www.codacy.com/app/mihai-ocneanu/AddressesManager?utm_source=github.com&utm_medium=referral&utm_content=laravel-enso/AddressesManager&utm_campaign=Badge_Grade",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://api.codacy.com/project/badge/Grade/1bd97370791b452f977c70e9ae39c72c",alt:"Codacy Badge"}}),a("OutboundLink")],1),a("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/addressesmanager",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/addressesmanager/license",alt:"License"}}),a("OutboundLink")],1),a("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/addressesmanager",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/addressesmanager/downloads",alt:"Total Downloads"}}),a("OutboundLink")],1),a("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/addressesmanager",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/addressesmanager/version",alt:"Latest Stable Version"}}),a("OutboundLink")],1)]),a("p",[e._v("Free-form addresses manager for "),a("a",{attrs:{href:"https://github.com/laravel-enso/Enso",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Enso"),a("OutboundLink")],1)]),a("p",[a("a",{attrs:{href:"https://laravel-enso.github.io/addressesmanager/screenshots/bulma_041.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://laravel-enso.github.io/addressesmanager/screenshots/bulma_041_thumb.png",alt:"Screenshot"}}),a("OutboundLink")],1)]),a("p",[a("a",{attrs:{href:"https://laravel-enso.github.io/addressesmanager/screenshots/bulma_042.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://laravel-enso.github.io/addressesmanager/screenshots/bulma_042_thumb.png",alt:"Screenshot"}}),a("OutboundLink")],1)]),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),e._m(7),e._m(8),a("p",[e._v("If you need to customize the form, you may publish it. Also, you may mark any form fields as custom\nand customize them in you page, using slots (like for the VueForm).")]),a("p",[e._v("If you need to customize the address card, you may also pass a different template using the 'address' slot,\nprovided for this purpose.")]),a("p",[e._v("As an example of such customization, you may take a look at the\n"),a("a",{attrs:{href:"https://github.com/laravel-enso/RoAddresses",target:"_blank",rel:"noopener noreferrer"}},[e._v("RoAddresses"),a("OutboundLink")],1),e._v(" package")]),e._m(9),e._m(10),e._m(11),e._m(12),a("p",[e._v("The package comes with the following artisan commands, to help you migrate from previous versions to 2.1.28+,")]),e._m(13),a("p",[e._v("Both these changes are run automatically after the package install.")]),e._m(14),e._m(15),e._m(16),a("p",[e._v("The "),a("a",{attrs:{href:"https://github.com/laravel-enso/Core",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Enso Core"),a("OutboundLink")],1),e._v(" package comes with this package included.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"addresses-manager"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#addresses-manager","aria-hidden":"true"}},[this._v("#")]),this._v(" Addresses Manager")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[this._v("#")]),this._v(" Features")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("can be used to attach addresses to any entity, via using a polymorphic relationship")]),a("li",[e._v("allows saving of multiple addresses for an addresable entity")]),a("li",[e._v("features and easy flow for setting the default address")]),a("li",[e._v("comes with an additional table for Countries, with all the countries pre-populated")]),a("li",[e._v("brings its own free-form form for the edit and creation of addresses")]),a("li",[e._v("has a publishable configuration file, where you can define the addresable models,\nset custom validations via the Laravel syntax, as well as other options")]),a("li",[e._v("comes with its own VueJS component "),a("code",[e._v("addresses")])]),a("li",[e._v("includes an "),a("code",[e._v("Addressable")]),e._v(" trait, for defining relationships and attributes")]),a("li",[e._v("the VueJS component as well, as the whole package is designed to be extendable,\nso you could create a custom versions for specific countries")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ol",[a("li",[e._v("the configuration should be published, and inside you need to define the addresable types")]),a("li",[e._v("use the package's "),a("code",[e._v("Addresable")]),e._v(" trait for the models you want to make addressable")]),a("li",[e._v("insert the "),a("code",[e._v("Addreses")]),e._v(" vue component where required in your pages/components. The "),a("code",[e._v("id")]),e._v(" and "),a("code",[e._v("type")]),e._v(" parameters are\nthe essential ones.")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[e._v("<")]),e._v("addresses")]),e._v(" "),a("span",{attrs:{class:"token attr-name"}},[e._v(":id")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{attrs:{class:"token punctuation"}},[e._v('"')]),e._v("modelId"),a("span",{attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),a("span",{attrs:{class:"token attr-name"}},[e._v("type")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{attrs:{class:"token punctuation"}},[e._v('"')]),e._v("modelAlias"),a("span",{attrs:{class:"token punctuation"}},[e._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[e._v("</")]),e._v("addresses")]),a("span",{attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[this._v("#")]),this._v(" Options")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("code",[e._v("id")]),e._v(" - number, the id of the addressable model | required")]),a("li",[a("code",[e._v("type")]),e._v(" - string, the addressable model alias you set in the config | required")]),a("li",[a("code",[e._v("open")]),e._v(" - boolean, flag for the starting style (open/closed) of the box | default"),a("code",[e._v("true")]),e._v(" | (optional)")]),a("li",[a("code",[e._v("title")]),e._v(" - string, the text for the box title | default "),a("code",[e._v("null")]),e._v(" | (optional)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"customization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#customization","aria-hidden":"true"}},[this._v("#")]),this._v(" Customization")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Inside the "),t("code",[this._v("config/enso/addresses.php")]),this._v(" file, you'll find several customization options:")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("code",[e._v("addressables")]),e._v(", the mapping of the addressable entities")]),a("li",[a("code",[e._v("streetTypes")]),e._v(", the list of street types shown in the form's street type select")]),a("li",[a("code",[e._v("buildingTypes")]),e._v(", same as above, for buildings")]),a("li",[a("code",[e._v("validations")]),e._v(", in Laravel Request Validation format, they are used for the store/update operations")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commands","aria-hidden":"true"}},[this._v("#")]),this._v(" Commands")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("code",[this._v("php artisan enso:migrate --buildingType")]),this._v(", introduces a new column, "),t("code",[this._v("addresses.building_type")])]),t("li",[t("code",[this._v("php artisan enso:migrate --countries")]),this._v(", introduces new columns to the "),t("code",[this._v("countries")]),this._v(" table and re-populates data.\nNote this is a breaking change!")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"publishes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#publishes","aria-hidden":"true"}},[this._v("#")]),this._v(" Publishes")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("code",[e._v("php artisan vendor:publish --tag=addresses-config")]),e._v(" - configuration file")]),a("li",[a("code",[e._v("php artisan vendor:publish --tag=addresses-form")]),e._v(" - form used for creating/editing addresses")]),a("li",[a("code",[e._v("php artisan vendor:publish --tag=enso-config")]),e._v(" - a common alias for when wanting to update the config,\nonce a newer version is released, usually used with "),a("code",[e._v("--force")])]),a("li",[a("code",[e._v("php artisan vendor:publish --tag=addresses-assets")]),e._v(" - the VueJS components")]),a("li",[a("code",[e._v("php artisan vendor:publish --tag=enso-assets")]),e._v(" - a common alias for when wanting to update the VueJS components,\nonce a newer version is released, usually used with "),a("code",[e._v("--force")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notes","aria-hidden":"true"}},[this._v("#")]),this._v(" Notes")])}],!1,null,null,null);t.default=r.exports}}]);