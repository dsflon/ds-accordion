import DsAccordions from './ds-accordions';

let dsAccordions = new DsAccordions(".accordion");

dsAccordions.OpenEnd = function(){
    console.log("OpenEnd");
};
dsAccordions.CloseEnd = function(){
    console.log("CloseEnd");
};

////

let dsAccordions2 = new DsAccordions(
	".accordion2",
	{
		toggleSpeed: 200,
		btnElm: "dt",
		detailElm: "dd"
	}
);

setTimeout(function() {
    dsAccordions2.Open( ".open" );
},1000);
setTimeout(function() {
    dsAccordions2.Close(".close");
},2000);
