ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([11764758.792070, 1121540.979555, 12047316.603611, 1285911.165180]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_HoChiMinhCity_1 = new ol.format.GeoJSON();
var features_HoChiMinhCity_1 = format_HoChiMinhCity_1.readFeatures(json_HoChiMinhCity_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HoChiMinhCity_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HoChiMinhCity_1.addFeatures(features_HoChiMinhCity_1);
var lyr_HoChiMinhCity_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HoChiMinhCity_1, 
                style: style_HoChiMinhCity_1,
                popuplayertitle: "Ho Chi Minh City",
                interactive: true,
                title: '<img src="styles/legend/HoChiMinhCity_1.png" /> Ho Chi Minh City'
            });
var format_hcmcclipgis_osm_natural_free_1_2 = new ol.format.GeoJSON();
var features_hcmcclipgis_osm_natural_free_1_2 = format_hcmcclipgis_osm_natural_free_1_2.readFeatures(json_hcmcclipgis_osm_natural_free_1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hcmcclipgis_osm_natural_free_1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hcmcclipgis_osm_natural_free_1_2.addFeatures(features_hcmcclipgis_osm_natural_free_1_2);
var lyr_hcmcclipgis_osm_natural_free_1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hcmcclipgis_osm_natural_free_1_2, 
                style: style_hcmcclipgis_osm_natural_free_1_2,
                popuplayertitle: "hcmc-clip-gis_osm_natural_free_1",
                interactive: true,
                title: '<img src="styles/legend/hcmcclipgis_osm_natural_free_1_2.png" /> hcmc-clip-gis_osm_natural_free_1'
            });
var format_hcmcclipgis_osm_places_free_1_3 = new ol.format.GeoJSON();
var features_hcmcclipgis_osm_places_free_1_3 = format_hcmcclipgis_osm_places_free_1_3.readFeatures(json_hcmcclipgis_osm_places_free_1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hcmcclipgis_osm_places_free_1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hcmcclipgis_osm_places_free_1_3.addFeatures(features_hcmcclipgis_osm_places_free_1_3);
var lyr_hcmcclipgis_osm_places_free_1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hcmcclipgis_osm_places_free_1_3, 
                style: style_hcmcclipgis_osm_places_free_1_3,
                popuplayertitle: "hcmc-clip-gis_osm_places_free_1",
                interactive: true,
                title: '<img src="styles/legend/hcmcclipgis_osm_places_free_1_3.png" /> hcmc-clip-gis_osm_places_free_1'
            });
var format_hcmcclipgis_osm_pofw_free_1_4 = new ol.format.GeoJSON();
var features_hcmcclipgis_osm_pofw_free_1_4 = format_hcmcclipgis_osm_pofw_free_1_4.readFeatures(json_hcmcclipgis_osm_pofw_free_1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hcmcclipgis_osm_pofw_free_1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hcmcclipgis_osm_pofw_free_1_4.addFeatures(features_hcmcclipgis_osm_pofw_free_1_4);
var lyr_hcmcclipgis_osm_pofw_free_1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hcmcclipgis_osm_pofw_free_1_4, 
                style: style_hcmcclipgis_osm_pofw_free_1_4,
                popuplayertitle: "hcmc-clip-gis_osm_pofw_free_1",
                interactive: true,
                title: '<img src="styles/legend/hcmcclipgis_osm_pofw_free_1_4.png" /> hcmc-clip-gis_osm_pofw_free_1'
            });
var format_hcmcclipgis_osm_pois_free_1_5 = new ol.format.GeoJSON();
var features_hcmcclipgis_osm_pois_free_1_5 = format_hcmcclipgis_osm_pois_free_1_5.readFeatures(json_hcmcclipgis_osm_pois_free_1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hcmcclipgis_osm_pois_free_1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hcmcclipgis_osm_pois_free_1_5.addFeatures(features_hcmcclipgis_osm_pois_free_1_5);
var lyr_hcmcclipgis_osm_pois_free_1_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hcmcclipgis_osm_pois_free_1_5, 
                style: style_hcmcclipgis_osm_pois_free_1_5,
                popuplayertitle: "hcmc-clip-gis_osm_pois_free_1",
                interactive: true,
                title: '<img src="styles/legend/hcmcclipgis_osm_pois_free_1_5.png" /> hcmc-clip-gis_osm_pois_free_1'
            });
var format_hcmcclipgis_osm_railways_free_1_6 = new ol.format.GeoJSON();
var features_hcmcclipgis_osm_railways_free_1_6 = format_hcmcclipgis_osm_railways_free_1_6.readFeatures(json_hcmcclipgis_osm_railways_free_1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hcmcclipgis_osm_railways_free_1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hcmcclipgis_osm_railways_free_1_6.addFeatures(features_hcmcclipgis_osm_railways_free_1_6);
var lyr_hcmcclipgis_osm_railways_free_1_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hcmcclipgis_osm_railways_free_1_6, 
                style: style_hcmcclipgis_osm_railways_free_1_6,
                popuplayertitle: "hcmc-clip-gis_osm_railways_free_1",
                interactive: true,
                title: '<img src="styles/legend/hcmcclipgis_osm_railways_free_1_6.png" /> hcmc-clip-gis_osm_railways_free_1'
            });
var format_hcmcclipgis_osm_roads_free_1_7 = new ol.format.GeoJSON();
var features_hcmcclipgis_osm_roads_free_1_7 = format_hcmcclipgis_osm_roads_free_1_7.readFeatures(json_hcmcclipgis_osm_roads_free_1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hcmcclipgis_osm_roads_free_1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hcmcclipgis_osm_roads_free_1_7.addFeatures(features_hcmcclipgis_osm_roads_free_1_7);
var lyr_hcmcclipgis_osm_roads_free_1_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hcmcclipgis_osm_roads_free_1_7, 
                style: style_hcmcclipgis_osm_roads_free_1_7,
                popuplayertitle: "hcmc-clip-gis_osm_roads_free_1",
                interactive: true,
                title: '<img src="styles/legend/hcmcclipgis_osm_roads_free_1_7.png" /> hcmc-clip-gis_osm_roads_free_1'
            });
var format_hcmcclipgis_osm_traffic_free_1_8 = new ol.format.GeoJSON();
var features_hcmcclipgis_osm_traffic_free_1_8 = format_hcmcclipgis_osm_traffic_free_1_8.readFeatures(json_hcmcclipgis_osm_traffic_free_1_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hcmcclipgis_osm_traffic_free_1_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hcmcclipgis_osm_traffic_free_1_8.addFeatures(features_hcmcclipgis_osm_traffic_free_1_8);
var lyr_hcmcclipgis_osm_traffic_free_1_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hcmcclipgis_osm_traffic_free_1_8, 
                style: style_hcmcclipgis_osm_traffic_free_1_8,
                popuplayertitle: "hcmc-clip-gis_osm_traffic_free_1",
                interactive: true,
                title: '<img src="styles/legend/hcmcclipgis_osm_traffic_free_1_8.png" /> hcmc-clip-gis_osm_traffic_free_1'
            });
var format_hcmcclipgis_osm_transport_free_1_9 = new ol.format.GeoJSON();
var features_hcmcclipgis_osm_transport_free_1_9 = format_hcmcclipgis_osm_transport_free_1_9.readFeatures(json_hcmcclipgis_osm_transport_free_1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hcmcclipgis_osm_transport_free_1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hcmcclipgis_osm_transport_free_1_9.addFeatures(features_hcmcclipgis_osm_transport_free_1_9);
var lyr_hcmcclipgis_osm_transport_free_1_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hcmcclipgis_osm_transport_free_1_9, 
                style: style_hcmcclipgis_osm_transport_free_1_9,
                popuplayertitle: "hcmc-clip-gis_osm_transport_free_1",
                interactive: true,
                title: '<img src="styles/legend/hcmcclipgis_osm_transport_free_1_9.png" /> hcmc-clip-gis_osm_transport_free_1'
            });
var format_hcmcclipgis_osm_waterways_free_1_10 = new ol.format.GeoJSON();
var features_hcmcclipgis_osm_waterways_free_1_10 = format_hcmcclipgis_osm_waterways_free_1_10.readFeatures(json_hcmcclipgis_osm_waterways_free_1_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hcmcclipgis_osm_waterways_free_1_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hcmcclipgis_osm_waterways_free_1_10.addFeatures(features_hcmcclipgis_osm_waterways_free_1_10);
var lyr_hcmcclipgis_osm_waterways_free_1_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hcmcclipgis_osm_waterways_free_1_10, 
                style: style_hcmcclipgis_osm_waterways_free_1_10,
                popuplayertitle: "hcmc-clip-gis_osm_waterways_free_1",
                interactive: true,
                title: '<img src="styles/legend/hcmcclipgis_osm_waterways_free_1_10.png" /> hcmc-clip-gis_osm_waterways_free_1'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_HoChiMinhCity_1.setVisible(true);lyr_hcmcclipgis_osm_natural_free_1_2.setVisible(true);lyr_hcmcclipgis_osm_places_free_1_3.setVisible(true);lyr_hcmcclipgis_osm_pofw_free_1_4.setVisible(true);lyr_hcmcclipgis_osm_pois_free_1_5.setVisible(true);lyr_hcmcclipgis_osm_railways_free_1_6.setVisible(true);lyr_hcmcclipgis_osm_roads_free_1_7.setVisible(true);lyr_hcmcclipgis_osm_traffic_free_1_8.setVisible(true);lyr_hcmcclipgis_osm_transport_free_1_9.setVisible(true);lyr_hcmcclipgis_osm_waterways_free_1_10.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_HoChiMinhCity_1,lyr_hcmcclipgis_osm_natural_free_1_2,lyr_hcmcclipgis_osm_places_free_1_3,lyr_hcmcclipgis_osm_pofw_free_1_4,lyr_hcmcclipgis_osm_pois_free_1_5,lyr_hcmcclipgis_osm_railways_free_1_6,lyr_hcmcclipgis_osm_roads_free_1_7,lyr_hcmcclipgis_osm_traffic_free_1_8,lyr_hcmcclipgis_osm_transport_free_1_9,lyr_hcmcclipgis_osm_waterways_free_1_10];
lyr_HoChiMinhCity_1.set('fieldAliases', {'ISO3166-2': 'ISO3166-2', 'admin_level': 'admin_level', 'alt_name': 'alt_name', 'alt_name:cs': 'alt_name:cs', 'alt_name:de': 'alt_name:de', 'alt_name:en': 'alt_name:en', 'alt_name:fr': 'alt_name:fr', 'alt_name:hr': 'alt_name:hr', 'alt_name:ja': 'alt_name:ja', 'alt_name:ko': 'alt_name:ko', 'alt_name:la': 'alt_name:la', 'alt_name:ru': 'alt_name:ru', 'alt_name:th': 'alt_name:th', 'alt_name:vi': 'alt_name:vi', 'alt_name:vi-Hani': 'alt_name:vi-Hani', 'alt_name:zh': 'alt_name:zh', 'alt_name:zh-Hans': 'alt_name:zh-Hans', 'alt_name:zh-Hant': 'alt_name:zh-Hant', 'boundary': 'boundary', 'is_in:country_code': 'is_in:country_code', 'name': 'name', 'name:cs': 'name:cs', 'name:en': 'name:en', 'name:eo': 'name:eo', 'name:fr': 'name:fr', 'name:hr': 'name:hr', 'name:ja': 'name:ja', 'name:ko': 'name:ko', 'name:ms': 'name:ms', 'name:nl': 'name:nl', 'name:ru': 'name:ru', 'name:sk': 'name:sk', 'name:sr': 'name:sr', 'name:th': 'name:th', 'name:vi': 'name:vi', 'name:vi-Hani': 'name:vi-Hani', 'name:vi-US': 'name:vi-US', 'name:zh': 'name:zh', 'name:zh-Hans': 'name:zh-Hans', 'name:zh-Hant': 'name:zh-Hant', 'official_name': 'official_name', 'population': 'population', 'ref': 'ref', 'short_name': 'short_name', 'short_name:en': 'short_name:en', 'short_name:vi': 'short_name:vi', 'type': 'type', 'wikidata': 'wikidata', 'wikipedia': 'wikipedia', 'wikivoyage': 'wikivoyage', });
lyr_hcmcclipgis_osm_natural_free_1_2.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_hcmcclipgis_osm_places_free_1_3.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'population': 'population', 'name': 'name', });
lyr_hcmcclipgis_osm_pofw_free_1_4.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_hcmcclipgis_osm_pois_free_1_5.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_hcmcclipgis_osm_railways_free_1_6.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_hcmcclipgis_osm_roads_free_1_7.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_hcmcclipgis_osm_traffic_free_1_8.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_hcmcclipgis_osm_transport_free_1_9.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_hcmcclipgis_osm_waterways_free_1_10.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'width': 'width', 'name': 'name', });
lyr_HoChiMinhCity_1.set('fieldImages', {'ISO3166-2': 'TextEdit', 'admin_level': 'TextEdit', 'alt_name': 'TextEdit', 'alt_name:cs': 'TextEdit', 'alt_name:de': 'TextEdit', 'alt_name:en': 'TextEdit', 'alt_name:fr': 'TextEdit', 'alt_name:hr': 'TextEdit', 'alt_name:ja': 'TextEdit', 'alt_name:ko': 'TextEdit', 'alt_name:la': 'TextEdit', 'alt_name:ru': 'TextEdit', 'alt_name:th': 'TextEdit', 'alt_name:vi': 'TextEdit', 'alt_name:vi-Hani': 'TextEdit', 'alt_name:zh': 'TextEdit', 'alt_name:zh-Hans': 'TextEdit', 'alt_name:zh-Hant': 'TextEdit', 'boundary': 'TextEdit', 'is_in:country_code': 'TextEdit', 'name': 'TextEdit', 'name:cs': 'TextEdit', 'name:en': 'TextEdit', 'name:eo': 'TextEdit', 'name:fr': 'TextEdit', 'name:hr': 'TextEdit', 'name:ja': 'TextEdit', 'name:ko': 'TextEdit', 'name:ms': 'TextEdit', 'name:nl': 'TextEdit', 'name:ru': 'TextEdit', 'name:sk': 'TextEdit', 'name:sr': 'TextEdit', 'name:th': 'TextEdit', 'name:vi': 'TextEdit', 'name:vi-Hani': 'TextEdit', 'name:vi-US': 'TextEdit', 'name:zh': 'TextEdit', 'name:zh-Hans': 'TextEdit', 'name:zh-Hant': 'TextEdit', 'official_name': 'TextEdit', 'population': 'TextEdit', 'ref': 'TextEdit', 'short_name': 'TextEdit', 'short_name:en': 'TextEdit', 'short_name:vi': 'TextEdit', 'type': 'TextEdit', 'wikidata': 'TextEdit', 'wikipedia': 'TextEdit', 'wikivoyage': 'TextEdit', });
lyr_hcmcclipgis_osm_natural_free_1_2.set('fieldImages', {'fid': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_hcmcclipgis_osm_places_free_1_3.set('fieldImages', {'fid': '', 'osm_id': '', 'code': '', 'fclass': '', 'population': '', 'name': '', });
lyr_hcmcclipgis_osm_pofw_free_1_4.set('fieldImages', {'fid': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_hcmcclipgis_osm_pois_free_1_5.set('fieldImages', {'fid': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_hcmcclipgis_osm_railways_free_1_6.set('fieldImages', {'fid': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'layer': '', 'bridge': '', 'tunnel': '', });
lyr_hcmcclipgis_osm_roads_free_1_7.set('fieldImages', {'fid': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'ref': '', 'oneway': '', 'maxspeed': '', 'layer': '', 'bridge': '', 'tunnel': '', });
lyr_hcmcclipgis_osm_traffic_free_1_8.set('fieldImages', {'fid': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_hcmcclipgis_osm_transport_free_1_9.set('fieldImages', {'fid': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_hcmcclipgis_osm_waterways_free_1_10.set('fieldImages', {'fid': '', 'osm_id': '', 'code': '', 'fclass': '', 'width': '', 'name': '', });
lyr_HoChiMinhCity_1.set('fieldLabels', {'ISO3166-2': 'no label', 'admin_level': 'no label', 'alt_name': 'no label', 'alt_name:cs': 'no label', 'alt_name:de': 'no label', 'alt_name:en': 'no label', 'alt_name:fr': 'no label', 'alt_name:hr': 'no label', 'alt_name:ja': 'no label', 'alt_name:ko': 'no label', 'alt_name:la': 'no label', 'alt_name:ru': 'no label', 'alt_name:th': 'no label', 'alt_name:vi': 'no label', 'alt_name:vi-Hani': 'no label', 'alt_name:zh': 'no label', 'alt_name:zh-Hans': 'no label', 'alt_name:zh-Hant': 'no label', 'boundary': 'no label', 'is_in:country_code': 'no label', 'name': 'no label', 'name:cs': 'no label', 'name:en': 'no label', 'name:eo': 'no label', 'name:fr': 'no label', 'name:hr': 'no label', 'name:ja': 'no label', 'name:ko': 'no label', 'name:ms': 'no label', 'name:nl': 'no label', 'name:ru': 'no label', 'name:sk': 'no label', 'name:sr': 'no label', 'name:th': 'no label', 'name:vi': 'no label', 'name:vi-Hani': 'no label', 'name:vi-US': 'no label', 'name:zh': 'no label', 'name:zh-Hans': 'no label', 'name:zh-Hant': 'no label', 'official_name': 'no label', 'population': 'no label', 'ref': 'no label', 'short_name': 'no label', 'short_name:en': 'no label', 'short_name:vi': 'no label', 'type': 'no label', 'wikidata': 'no label', 'wikipedia': 'no label', 'wikivoyage': 'no label', });
lyr_hcmcclipgis_osm_natural_free_1_2.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_hcmcclipgis_osm_places_free_1_3.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'population': 'no label', 'name': 'no label', });
lyr_hcmcclipgis_osm_pofw_free_1_4.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_hcmcclipgis_osm_pois_free_1_5.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_hcmcclipgis_osm_railways_free_1_6.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_hcmcclipgis_osm_roads_free_1_7.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_hcmcclipgis_osm_traffic_free_1_8.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_hcmcclipgis_osm_transport_free_1_9.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_hcmcclipgis_osm_waterways_free_1_10.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'width': 'no label', 'name': 'no label', });
lyr_hcmcclipgis_osm_waterways_free_1_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});