sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/varsha/satinfotech/invoice/test/integration/FirstJourney',
		'com/varsha/satinfotech/invoice/test/integration/pages/BillingList',
		'com/varsha/satinfotech/invoice/test/integration/pages/BillingObjectPage',
		'com/varsha/satinfotech/invoice/test/integration/pages/BillingItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, BillingList, BillingObjectPage, BillingItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/varsha/satinfotech/invoice') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBillingList: BillingList,
					onTheBillingObjectPage: BillingObjectPage,
					onTheBillingItemsObjectPage: BillingItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);