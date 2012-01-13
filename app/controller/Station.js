/*
 * File: app/controller/Station.js
 *
 * This file was generated by Sencha Designer version 2.0.0.
 * http://www.sencha.com/products/designer/
 *
 * You should implement event handling and custom methods in this
 * class.
 */

Ext.define('Pandora.controller.Station', {
    extend: 'Ext.app.Controller',

    stores: [
        'Stations',
        'SearchResults'
    ],
    refs: [
        {
            ref: 'stationsList',
            selector: 'stationslist'
        }
    ],

    init: function() {
        this.control({
            "stationslist": {
                selectionchange: this.onStationSelect
            },
                "newstation": {
                    select: this.onNewStationSelect
                }
            });
    },

    onNewStationSelect: function(field, value, options) {
        var selected = value[0],
            store = this.getStationsStore(),
            list = this.getStationsList();

        if (selected && !store.getById(selected.get('id'))) {
            store.add(selected);
        }
        list.getSelectionModel().select(selected);
    },

    onStationSelect: function(tablepanel, selections, options) {
        // Fire an application wide event
        this.application.fireEvent('stationstart', selections[0]);
    },

    onLaunch: function() {
        var stationsStore = this.getStationsStore();
        stationsStore.load({
            callback: this.onStationsLoad,
            scope: this
        });
    },

    onStationsLoad: function() {
        var stationsList = this.getStationsList();
        stationsList.getSelectionModel().select(0);
    }

});