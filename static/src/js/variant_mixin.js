odoo.define('website_decimal_quantity.VariantMixin', function (require) {
'use strict';

var VariantMixin = require('sale.VariantMixin');
var core = require('web.core');
var utils = require('web.utils');
var ajax = require('web.ajax');
var _t = core._t;
VariantMixin.onClickAddCartJSON = function (ev) {
        ev.preventDefault();
        var $link = $(ev.currentTarget);
        var $input = $link.closest('.input-group').find("input");
        var min = parseFloat($input.data("min") || 0);
        var max = parseFloat($input.data("max") || Infinity);
        var previousQty = parseFloat($input.val() || 0, 10);
        var quantity = ($link.has(".fa-minus").length ? -0.1 : 0.1) + previousQty;
        var newQt = quantity > min ? (quantity < max ? quantity : max) : min;
        if (newQt !== previousQty) {
            var newQty = newQt.toFixed(1);
            $input.val(newQty).trigger('change');
        }
        newQty = newQt.toFixed(1);
        return false;
    }
});