{
    'name': 'Website Decimal quantity',
    'description': 'Website Decimal quantity',
    "author": "Cybrosys",
    "version": "16.0.1.0.0",
    'license': 'LGPL-3',
    'category': 'Website',
    "depends": [
        "base",
        'sale',
        'website',
        'website_sale',
    ],
    "data": [
        'views/website_decimal_quantity_view.xml',
    ],
    'assets': {
        'web.assets_frontend':
       ['website_decimal_quantity/static/src/js/variant_mixin.js',
        'website_decimal_quantity/static/src/js/website_sale.js']

    },
    "application": True,
    'installable': True,

}
