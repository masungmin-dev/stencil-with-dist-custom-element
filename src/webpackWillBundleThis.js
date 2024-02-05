import { defineCustomElements } from '../dist/components'

(function (){
    defineCustomElements();
    // here or other resouces, What I need real world

    // wrapping defineCustomElements like this, this issue will removed
    //document.addEventListener('DOMContentLoaded', ()=>defineCustomElements())
})()