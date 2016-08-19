(function () {
    'use strict';
		if('serviceWorker' in navigator) {  
			navigator.serviceWorker  
							 .register('/service-worker.js')  
							 .then(function() { console.log('Service Worker Registered'); });  
		}
		console.log('my first js app!');
		idbKeyval.set('hello', 'world');
		idbKeyval.get('hello').then(val => console.log(val));
		idbKeyval.set('second', 'interesting');
		idbKeyval.keys()
			.then(keys => console.log(keys))
			.catch(err => console.log('error', err));
    var pwa_app = {
        isLoading: true,
        spinner: document.querySelector('.loader'),
        myData: []
    }
		
		document.getElementById('butClear').addEventListener('click', function() {
			idbKeyval.clear();
		});
		document.getElementById('butMyData').addEventListener('click', function() {
			// Add the data
			var select = document.getElementById('myDataToAdd');
			var selected = select.options[select.selectedIndex];
			var key = selected.value;
			var label = selected.textContent;
			pwa_app.myData.push({key: key, label: label});
			pwa_app.saveMyData();
			//pwa_app.toggleAddDialog(false);
		});

    //save mydata to idb
    pwa_app.saveMyData = function () {
        var myData = JSON.stringify(pwa_app.myData);
        idbKeyval.set(myData);
    };
})();
