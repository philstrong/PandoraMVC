/*
 * File: app/model/Song.js
 *
 * This file was generated by Sencha Designer version 2.0.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you save.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Pandora.model.Song', {
    extend: 'Ext.data.Model',

    remoteFilter: true,

    proxy: {
        type: 'ajax',
        url: 'data/recentsongs.json',
        reader: {
            type: 'json',
            root: 'results'
        }
    },

    fields: [
        {
            name: 'id'
        },
        {
            name: 'name'
        },
        {
            name: 'artist'
        },
        {
            name: 'album'
        },
        {
            name: 'played_date'
        },
        {
            name: 'station'
        }
    ]
});