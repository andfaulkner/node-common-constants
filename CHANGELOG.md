v3.1.0 (2018-05-03)
===================
*   Add prettier & prettier config
*   Add tslint, tslint config, & tslint plugins
*   Node -> 8.10.0
    *   Including upgrading Node typings to matching version
*   Move all dependencies to devDependencies
    *   They aren't used by the core module code
*   lodash -> 4.17.10
*   Upgraded Mocha, Chai, Sinon to latest
*   Typings for Sinon & Lodash

----

# 2017-04-19 -- Version 3.0.0
### BREAKING CHANGE: removed date and time constants with 'In' inside
  *  instead only 'Per' constant names are used.
  *  example: dateTime.minInHr no longer exists. dateTime.minPerHr is the equivalent.
  *  reason: they took up a lot of space and were frequently confusing. This being a Typescript library, the extra aliases aren't needed (intellisense takes care of issues remembering method names) 

### More date and time constants added
* Notably:
  * unix/epoch start date & time
  * more 'distant time unit' constants (e.g. ms per year, seconds per year, minutes per week, etc.)

### Namespaces now also receive top-level exports
* e.g. import { dateTime } from 'common-constants';
  *  previously, you would have to do:
	 ```
	 import { commonConstants } from 'common-constants';
	 const { dateTime } = commonConstants;
	 ```
* Note that the top-level commonConstants namespace still works (and always will).

