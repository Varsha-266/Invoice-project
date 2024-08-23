sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.varsha.satinfotech.invoice',
            componentId: 'BillingObjectPage',
            contextPath: '/Billing'
        },
        CustomPageDefinitions
    );
});