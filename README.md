# fcoo-global-events
[global-events]: https://github.com/FCOO/global-events


## Description
Create `window.fcoo.events` as `GlobalEvents`

Description of common events used by FCOOs web applications. 


## Installation
### bower
`bower install https://github.com/FCOO/fcoo-global-events.git --save`

## Usage
Creates `window.fcoo.events` as a `GlobalEvents`-object
See [global-events] for description of the methods 

### Example
#### Adding events
	window.fcoo.events.on('myEvent myOtherEvent', function( arg1 ){ alert('Hello from '+arg1); } );
	window.fcoo.events.onLast('myEvent myOtherEvent', function( arg1 ){ alert('Last hello from '+arg1); } );

#### Fire the event
	window.fcoo.events.fire('myEvent', 'MY-EVENT');
	window.fcoo.events.fire('myOtherEvent', 'MY-OTHER-EVENT');


## Name and description of global events
The following global events are used in FCOOs web applications. 
The events are automatic added the first time a packages add or fire the event.
All the names of the events are in lower-case and in the form `SOMETHINGchanged`, `SOMETHINGadded`, `SOMETHINGremoved` (`SOMETHING` = `dateformat`, etc.)
All the names of the events are defined as upper-case const in `window.fcoo.events` as `window.fcoo.event.    SOMETHINGCHANGED`

| Event | Const | Description: Fired when...are changed |
| :--: |  :--: | :--- |
| `languagechanged` | `fcoo.events.LANGUAGECHANGED` | the language   |
| `datetimeformatchanged` | `fcoo.events.DATETIMEFORMATCHANGED` | the format of dates, time (13:00 or 01:00pm), show/hide utc  |
| `timezonechanged` | `fcoo.events.TIMEZONECHANGED` | the timezone |
| `numberformatchanged` | `fcoo.events.NUMBERFORMATCHANGED` | the format of numbers (1.000,123 or 1,000.123) |
| `latlngformatchanged` | `fcoo.events.LATLNGFORMATCHANGED` | the format of positions/lat-lng |
| `unitchanged` | `fcoo.events.UNITCHANGED` | the unit use to display variables. Eq. length changed from `km` to `nm` |





## Copyright and License
This plugin is licensed under the [MIT license](https://github.com/FCOO/fcoo-global-events/LICENSE).

Copyright (c) 2016 [FCOO](https://github.com/FCOO)

## Contact information

NielsHolt nho@fcoo.dk

