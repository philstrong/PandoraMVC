/*
 * File: app/store/base/SearchResults.js
 *
 * This file was generated by Sencha Designer version 2.0.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you save.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Pandora.store.base.SearchResults', {
    extend: 'Ext.data.Store',
    requires: [
        'Pandora.model.Station'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            storeId: 'SearchResults',
            model: 'Pandora.model.Station',
            proxy: {
                type: 'ajax',
                url: 'data/searchresults.json',
                reader: {
                    type: 'json',
                    root: 'results'
                }
            }
        }, cfg)]);
    }
});