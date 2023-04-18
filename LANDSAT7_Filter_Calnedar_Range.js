var Collection = ee.ImageCollection('LANDSAT/LE07/C02/T1_TOA')
.filter(ee.Filter.calendarRange(1999, 2000, 'year'))
.filter(ee.Filter.lt('CLOUD_COVER_LAND', 10));