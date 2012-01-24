/*
 * File: app/view/ui/RecentlyPlayedScroller.js
 *
 * This file was generated by Sencha Designer version 2.0.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you save.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Pandora.view.ui.RecentlyPlayedScroller', {
    extend: 'Ext.view.View',

    itemSelector: 'div',
    store: 'RecentSongs',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            tpl: [
                '<tpl for=".">',
                '<div id="{id}">{name}</div>',
                '</tpl>'
            ]
        });

        me.callParent(arguments);
    }

});