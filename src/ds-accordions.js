/*

ds-accordions

GitHub: https://github.com/dsflon/
License: dsflon All Rights Reserved.

*/

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.DsAccordions = factory();
    }
}(this, function() {

    function DsAccordions(selector, option) {

        this.selector = selector;
        this.accordion = document.querySelectorAll( this.selector );

        //option
        if(option == null) option = {};
        this.toggleSpeed = option.toggleSpeed ? option.toggleSpeed : 1;
        this.btnElm = option.btnElm ? option.btnElm : this.selector + "_btn";
        this.detailElm = option.detailElm ? option.detailElm : this.selector + "_detail";

        this.OpenEnd = function(){};
        this.CloseEnd = function(){};

        this.clickFlag = false;

        if(this.accordion.length != 0) {
            this.Init();
        };

    }

    DsAccordions.prototype.AddTransition = function(target) {
        target.style.transition = "max-height " + this.toggleSpeed/1000 +"s";
        target.style.setProperty('-webkit-transition', "max-height " + this.toggleSpeed/1000 +"s");
    }
    DsAccordions.prototype.RemoveTransition = function(target) {
        target.style.transition = "none";
        target.style.setProperty('-webkit-transition', "none");
    }

    /**
    **
    ** Init
    **
    **/
    DsAccordions.prototype.Init = function() {
        var this_ = this;

        var initCss = "overflow: hidden;";
            initCss += "transition: max-height " + this.toggleSpeed/1000 +"s ;";
            initCss += "-webkit-transition: max-height " + this.toggleSpeed/1000 +"s ;";

        for (var i = 0; i < this.accordion.length; i++) {

            var DETAIL = this.accordion[i].querySelectorAll(this.detailElm);
            var BTN = this.accordion[i].querySelectorAll(this.btnElm);

            for (var j = 0; j < BTN.length; j++) {

                if( DETAIL[j] ) {
                    DETAIL[j].style.cssText = initCss;
                    if( !this.HasClass( DETAIL[j], "ds-active" ) ) {
                        DETAIL[j].style.maxHeight = "0px";
                    }
                }

                BTN[j].addEventListener( "click", function(e) {

                    e.preventDefault();

                    this_.Toggle( e );

                });

            }

        }

    }


    /**
    **
    ** Toggle
    **
    **/
    DsAccordions.prototype.Toggle = function( element ) {

        if(!this.accordion[0]) {
            console.error( this.selector + ": Not Found" );
            return false;
        }

        var TARGET = element.currentTarget ? element.currentTarget : document.querySelectorAll( element )[0];

        if( this.HasClass( TARGET, "ds-active" ) ){

            if( !this.clickFlag ) this.Close( element );

        } else {

            if( !this.clickFlag ) this.Open( element );

        }

    }


    /**
    **
    ** Open, Close
    **
    **/
    DsAccordions.prototype.Open = function(element) {

        var this_ = this;

        if(!this.accordion[0]) {
            console.error( this.selector + ": Not Found" );
            return false;
        }

        this.clickFlag = true;

        var TARGET = element.currentTarget ? element.currentTarget : document.querySelectorAll( element )[0];
        var PARENT = this.GetParent( TARGET, this.selector );

        var INDEX = Array.prototype.indexOf.call( PARENT.querySelectorAll( this.btnElm ), TARGET );

        var TARGET_DETAIL = PARENT.querySelectorAll( this.detailElm )[ INDEX ];

        // TARGET_DETAIL.style.display = "block";
        TARGET_DETAIL.style.maxHeight = TARGET_DETAIL.scrollHeight + "px";

        var EndFunc = function() {
            this_.clickFlag = false;
            this_.OpenEnd( INDEX );
            this_.RemoveTransition(TARGET_DETAIL);
            TARGET_DETAIL.style.maxHeight = null;
            TARGET_DETAIL.removeEventListener("transitionend", EndFunc);
        };

        this.AddClass(TARGET,"ds-active");
        this.AddClass(TARGET_DETAIL,"ds-active");

        if( !this.accordion[0].classList ) {
            this.clickFlag = false;
        } else {
            TARGET_DETAIL.addEventListener("transitionend", EndFunc, false);
        }

    }

    DsAccordions.prototype.Close = function( element ) {

        var this_ = this;

        if(!this.accordion[0]) {
            console.error( this.selector + ": Not Found" );
            return false;
        }

        this.clickFlag = true;

        var TARGET = element.currentTarget ? element.currentTarget : document.querySelectorAll( element )[0];
        var PARENT = this.GetParent( TARGET, this.selector );

        var INDEX = Array.prototype.indexOf.call( PARENT.querySelectorAll( this.btnElm ), TARGET );

        var TARGET_DETAIL = PARENT.querySelectorAll( this.detailElm )[ INDEX ];
        var EndFunc = function() {
            this_.clickFlag = false;
            this_.CloseEnd( INDEX );
            TARGET.style.pointerEvents = "inherit";
            // TARGET_DETAIL.style.display = "none";
            TARGET_DETAIL.removeEventListener("transitionend", EndFunc);
        };

        //

        this.RemoveClass(TARGET,"ds-active");
        this.RemoveClass(TARGET_DETAIL,"ds-active");

        TARGET_DETAIL.style.maxHeight = TARGET_DETAIL.scrollHeight + "px";
        setTimeout( function() {
            this_.AddTransition(TARGET_DETAIL);
            TARGET_DETAIL.style.maxHeight = "0px";
        }, 10);

        if( !this.accordion[0].classList ) { //IE9

            // TARGET_DETAIL.style.display = "none";
            this.clickFlag = false;

        } else {

            TARGET_DETAIL.addEventListener("transitionend", EndFunc, false);

        }

    }

    DsAccordions.prototype.CloseIgnoreThis = function( element ) {

        if(!this.accordion[0]) {
            console.error( this.selector + ": Not Found" );
            return false;
        }

        var TARGET = element;
        var PARENT = this.GetParent( TARGET, this.selector );

        var INDEX = Array.prototype.indexOf.call( PARENT.querySelectorAll( this.btnElm ), TARGET );

        var TARGET_BTN = PARENT.querySelectorAll( this.btnElm );
        var TARGET_DETAIL = PARENT.querySelectorAll( this.detailElm );

        for (var i = 0; i < TARGET_BTN.length; i++) {

            if( i != INDEX ) {
                TARGET_BTN[i].classList.remove("ds-active");
                Close_( i );
            }

        }

        //

        function Close_( i ) {

            TARGET_DETAIL[i].classList.remove("ds-active");

            setTimeout( function() { TARGET_DETAIL[i].style.maxHeight = "0px"; }, 100);

        }

    }


    /**
    **
    ** GetParent
    **
    **/
    DsAccordions.prototype.GetParent = function( element, target ) {

        var parent = element,
            i = 0,
            t;

        if ( target.split(".")[1] ) {

            t = target.split(".")[1];

        } else if ( target.split("#")[1] ) {

            t = target.split("#")[1];

        } else {

            t = target;

        }

        while ( i < 100 ){

            parent = parent.parentNode;

            if( parent.tagName.toLowerCase() == t ) break;

            if( parent.className ) {
                if( parent.className.match( t ) ) break;
            } else if( parent.id ) {
                if( parent.id.match( t ) ) break;
            }

            i++;

        }

        return parent;

    }

    DsAccordions.prototype.AddClass = function( element, _className ) {

        if (element.classList) {
            element.classList.add(_className);
        } else {
            element.className += ' ' + _className;
        }

    }
    DsAccordions.prototype.RemoveClass = function( element, _className ) {

        if (element.classList) {
            element.classList.remove(_className);
        } else {
            element.className = element.className.replace(new RegExp('(^|\\b)' + _className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }

    }
    DsAccordions.prototype.HasClass = function( element, _className ) {

        var ignore = false;

        if (element.classList) {
            if( element.classList.contains(_className) ) ignore = true;
        } else {
            if( new RegExp('(^| )' + _className + '( |$)', 'gi').test( element.className ) ) ignore = true;
        }

        return ignore;

    }

    return DsAccordions;

}));
