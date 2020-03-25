/****************************************************************************
	fcoo-global-events.js,

	(c) 2016, FCOO

	https://github.com/FCOO/fcoo-global-events
	https://github.com/FCOO

****************************************************************************/

(function (window/*, document, undefined*/) {
	"use strict";

	//Create fcoo-namespace
	var ns = window.fcoo = window.fcoo || {};

    ns.events = new window.GlobalEvents();
    ns.events.eventNames = ['LANGUAGECHANGED', 'TIMEZONECHANGED', 'DATETIMEFORMATCHANGED', 'NUMBERFORMATCHANGED', 'LATLNGFORMATCHANGED', 'UNITCHANGED'];

    $.each( ns.events.eventNames, function( index, eventName ){
        ns.events[ eventName ] = eventName;
    });

}(this, document));