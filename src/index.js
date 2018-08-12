import DsAccordion from './ds-accordion';

let dsAccordion = new DsAccordion(".accordion");

dsAccordion.OpenEnd = function(){
    console.log("OpenEnd");
};
dsAccordion.CloseEnd = function(){
    console.log("CloseEnd");
};

////

let dsAccordion2 = new DsAccordion(
	".accordion2",
	{
		toggleSpeed: 200,
		btnElm: "dt",
		detailElm: "dd"
	}
);

setTimeout(function() {
    dsAccordion2.Open( ".open" );
},1000);
setTimeout(function() {
    dsAccordion2.Close(".close");
},2000);
