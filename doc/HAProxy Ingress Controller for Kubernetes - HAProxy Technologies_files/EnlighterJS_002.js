EnlighterJS_Config = {"selector":{"block":"pre.EnlighterJSRAW","inline":"code.EnlighterJSRAW"},"language":"generic","theme":"eclipse","indent":-1,"hover":"hoverEnabled","showLinenumbers":true,"rawButton":true,"infoButton":false,"windowButton":true,"rawcodeDoubleclick":false,"grouping":true,"cryptex":{"enabled":false,"email":"mail@example.tld"}};!function(){var a=function(a){var b="Enlighter Error: ";console.error?console.error(b+a):console.log&&console.log(b+a)};return window.addEvent?"undefined"==typeof EnlighterJS?void a("Javascript Resources not loaded yet!"):"undefined"==typeof EnlighterJS_Config?void a("Configuration not loaded yet!"):void window.addEvent("domready",function(){EnlighterJS.Util.Init(EnlighterJS_Config.selector.block,EnlighterJS_Config.selector.inline,EnlighterJS_Config)}):void a("MooTools Framework not loaded yet!")}();