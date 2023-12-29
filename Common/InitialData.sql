update Globalization.Locales
set IsActive = false;

update Globalization.Locales
set IsDefault = NULL;

update Globalization.Locales
set IsActive = true
where `Key` = 'fa';

update Globalization.Locales
set IsDefault = true
where `Key` = 'fa';
