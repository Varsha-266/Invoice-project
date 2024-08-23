sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.varsha.satinfotech.invoice',
            componentId: 'BillingList',
            contextPath: '/Billing'
        },
        CustomPageDefinitions
    );
});