/****************************************************************************
	fcoo-global-events.js,

	(c) 2016, FCOO

	https://github.com/FCOO/fcoo-global-events
	https://github.com/FCOO

****************************************************************************/

(function (window/*, document, undefined*/) {
	"use strict";

	//Create fcoo-namespace
	window.fcoo = window.fcoo || {};

    window.fcoo.events = new window.GlobalEvents();

    var globalEventsNames = ['languagechanged', 'timezonechanged', 'datetimeformatchanged', 'numberformatchanged', 'latlngformatchanged', 'unitchanged']

    $.each( globalEventsNames, function( index, eventName ){
        window.fcoo.events[ eventName.toUpperCase() ] = eventName;
    });

}(this, document));