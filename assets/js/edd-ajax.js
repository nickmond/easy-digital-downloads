!function(e){var d={};function t(a){if(d[a])return d[a].exports;var n=d[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=d,t.d=function(e,d,a){t.o(e,d)||Object.defineProperty(e,d,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,d){if(1&d&&(e=t(e)),8&d)return e;if(4&d&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&d&&"string"!=typeof e)for(var n in e)t.d(a,n,function(d){return e[d]}.bind(null,n));return a},t.n=function(e){var d=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(d,"a",d),d},t.o=function(e,d){return Object.prototype.hasOwnProperty.call(e,d)},t.p="",t(t.s=50)}({0:function(e,d){e.exports=jQuery},3:function(e,d,t){"use strict";(function(e){t.d(d,"a",(function(){return a})),t.d(d,"b",(function(){return r}));var a=function(e){var d,t=e;switch(e){case"amex":t="americanexpress",d=32;break;default:d=50}return"\n    <svg\n      width=".concat(d,"\n      height=",32,'\n      class="payment-icon icon-').concat(t,'"\n      role="img"\n    >\n      <use\n        href="#icon-').concat(t,'"\n        xlink:href="#icon-').concat(t,'">\n      </use>\n    </svg>')},n=0;function r(d){if("1"==edd_global_vars.taxes_enabled){var t=e("#edd_cc_address"),a=t.find("#billing_country").val(),r=t.find("#card_address").val(),o=t.find("#card_address_2").val(),i=t.find("#card_city").val(),c=t.find("#card_state").val();d||(d=c);var s={action:"edd_recalculate_taxes",card_address:r,card_address_2:o,card_city:i,card_zip:t.find("#card_zip").val(),state:d,billing_country:a,nonce:e("#edd-checkout-address-fields-nonce").val()};e("#edd_purchase_submit [type=submit]").after('<span class="edd-loading-ajax edd-recalculate-taxes-loading edd-loading"></span>');var _=++n;return e.ajax({type:"POST",data:s,dataType:"json",url:edd_global_vars.ajaxurl,xhrFields:{withCredentials:!0},success:function(d){if(_===n){e("#edd_checkout_cart_form").replaceWith(d.html),e(".edd_cart_amount").html(d.total);var t=new Object;t.postdata=s,t.response=d,e("body").trigger("edd_taxes_recalculated",[t])}e(".edd-recalculate-taxes-loading").remove()}}).fail((function(d){window.console&&window.console.log&&(console.log(d),_===n&&e("body").trigger("edd_taxes_recalculated",[tax_data]))}))}}}).call(this,t(0))},50:function(e,d,t){"use strict";t.r(d),function(e){var d=t(3);function a(d){e(".edd-cart-ajax").show(),e("#edd_purchase_form_wrap").html('<span class="edd-loading-ajax edd-loading"></span>');var t=e("#edd-gateway-"+d).data(d+"-nonce"),a=edd_scripts.ajaxurl;a.indexOf("?")>0?a+="&":a+="?",a=a+"payment-mode="+d,e.post(a,{action:"edd_load_gateway",edd_payment_mode:d,nonce:t},(function(t){e("#edd_purchase_form_wrap").html(t),e(".edd-no-js").hide(),e("body").trigger("edd_gateway_loaded",[d])}))}e(document).ready((function(e){if(e(".edd-no-js").hide(),e("a.edd-add-to-cart").addClass("edd-has-js"),e(document.body).on("click.eddRemoveFromCart",".edd-remove-from-cart",(function(d){var t=e(this),a=t.data("cart-item"),n=t.data("action"),r=t.data("download-id"),o=t.data("nonce"),i={action:n,cart_item:a,nonce:o};return e.ajax({type:"POST",data:i,dataType:"json",url:edd_scripts.ajaxurl,xhrFields:{withCredentials:!0},success:function(d){if(d.removed){if(parseInt(edd_scripts.position_in_cart,10)===parseInt(a,10)||edd_scripts.has_purchase_links)return window.location=window.location,!1;e(".edd-cart").each((function(){e(this).find("[data-cart-item='"+a+"']").parent().remove()})),e(".edd-cart").each((function(){var d=0;e(this).find("[data-cart-item]").each((function(){e(this).attr("data-cart-item",d),d+=1}))})),e("[id^=edd_purchase_"+r+"]").length&&(e("[id^=edd_purchase_"+r+"] .edd_go_to_checkout").hide(),e("[id^=edd_purchase_"+r+"] a.edd-add-to-cart").show().removeAttr("data-edd-loading"),"1"===edd_scripts.quantities_enabled&&e("[id^=edd_purchase_"+r+"] .edd_download_quantity_wrapper").show()),e("span.edd-cart-quantity").text(d.cart_quantity),e(document.body).trigger("edd_quantity_updated",[d.cart_quantity]),edd_scripts.taxes_enabled&&(e(".cart_item.edd_subtotal span").html(d.subtotal),e(".cart_item.edd_cart_tax span").html(d.tax)),e(".cart_item.edd_total span").html(d.total),0===d.cart_quantity&&(e(".cart_item.edd_subtotal,.edd-cart-number-of-items,.cart_item.edd_checkout,.cart_item.edd_cart_tax,.cart_item.edd_total").hide(),e(".edd-cart").each((function(){var d=e(this).parent();d&&(d.addClass("cart-empty"),d.removeClass("cart-not-empty")),e(this).append('<li class="cart_item empty">'+edd_scripts.empty_cart_message+"</li>")}))),e(document.body).trigger("edd_cart_item_removed",[d])}}}).fail((function(e){window.console&&window.console.log&&console.log(e)})).done((function(e){})),!1})),e(document.body).on("click.eddAddToCart",".edd-add-to-cart",(function(d){d.preventDefault();var t=e(this),a=t.closest("form");t.prop("disabled",!0);t.find(".edd-loading");var n=t.closest("div");t.attr("data-edd-loading","");a=t.parents("form").last();var r=t.data("download-id"),o=t.data("variable-price"),i=t.data("price-mode"),c=t.data("nonce"),s=[],_=!0;if("yes"===o)if(a.find(".edd_price_option_"+r+'[type="hidden"]').length>0)s[0]=e(".edd_price_option_"+r,a).val(),a.find(".edd-submit").data("price")&&a.find(".edd-submit").data("price")>0&&(_=!1);else{if(!a.find(".edd_price_option_"+r+":checked",a).length)return t.removeAttr("data-edd-loading"),alert(edd_scripts.select_option),d.stopPropagation(),t.prop("disabled",!1),!1;a.find(".edd_price_option_"+r+":checked",a).each((function(d){if(s[d]=e(this).val(),!0===_){var t=e(this).data("price");t&&t>0&&(_=!1)}}))}else s[0]=r,t.data("price")&&t.data("price")>0&&(_=!1);if(_&&a.find(".edd_action_input").val("add_to_cart"),"straight_to_gateway"===a.find(".edd_action_input").val())return a.submit(),!0;var l={action:t.data("action"),download_id:r,price_ids:s,post_data:e(a).serialize(),nonce:c};return e.ajax({type:"POST",data:l,dataType:"json",url:edd_scripts.ajaxurl,xhrFields:{withCredentials:!0},success:function(d){var c="1"===edd_scripts.redirect_to_checkout,s="1"===a.find("#edd_redirect_to_checkout").val();if(c&&s||!c&&s)window.location=edd_scripts.checkout_page;else{"1"===edd_scripts.taxes_enabled&&(e(".cart_item.edd_subtotal").show(),e(".cart_item.edd_cart_tax").show()),e(".cart_item.edd_total").show(),e(".cart_item.edd_checkout").show(),e(".cart_item.empty").length&&e(".cart_item.empty").hide(),e(".widget_edd_cart_widget .edd-cart").each((function(t){var a=e(this).find(".edd-cart-meta:first");e(d.cart_item).insertBefore(a);var n=e(this).parent();n&&(n.addClass("cart-not-empty"),n.removeClass("cart-empty"))})),"1"===edd_scripts.taxes_enabled&&(e(".edd-cart-meta.edd_subtotal span").html(d.subtotal),e(".edd-cart-meta.edd_cart_tax span").html(d.tax)),e(".edd-cart-meta.edd_total span").html(d.total);e(".edd-cart-item-title",d.cart_item).length;if(e("span.edd-cart-quantity").each((function(){e(this).text(d.cart_quantity),e(document.body).trigger("edd_quantity_updated",[d.cart_quantity])})),"none"===e(".edd-cart-number-of-items").css("display")&&e(".edd-cart-number-of-items").show("slow"),"no"!==o&&"multi"===i||(e("a.edd-add-to-cart",n).toggle(),e(".edd_go_to_checkout",n).css("display","inline-block")),"multi"===i&&t.removeAttr("data-edd-loading"),e(".edd_download_purchase_form").length&&("no"===o||!a.find(".edd_price_option_"+r).is("input:hidden"))){var _=e('.edd_download_purchase_form *[data-download-id="'+r+'"]').parents("form");e("a.edd-add-to-cart",_).hide(),"multi"!==i&&_.find(".edd_download_quantity_wrapper").slideUp(),e(".edd_go_to_checkout",_).show().removeAttr("data-edd-loading")}"incart"!==d&&(e(".edd-cart-added-alert",n).fadeIn(),setTimeout((function(){e(".edd-cart-added-alert",n).fadeOut()}),3e3)),t.prop("disabled",!1),e(document.body).trigger("edd_cart_item_added",[d])}}}).fail((function(e){window.console&&window.console.log&&console.log(e)})).done((function(e){})),!1})),e("#edd_checkout_form_wrap").on("click",".edd_checkout_register_login",(function(){var d=e(this),t={action:d.data("action"),nonce:d.data("nonce")};return e(".edd-cart-ajax").show(),e.post(edd_scripts.ajaxurl,t,(function(d){e("#edd_checkout_login_register").html(edd_scripts.loading),e("#edd_checkout_login_register").html(d),e(".edd-cart-ajax").hide()})),!1})),e(document).on("click","#edd_purchase_form #edd_login_fields input[type=submit]",(function(d){d.preventDefault();var t=e(this).val();e(this).val(edd_global_vars.purchase_loading),e(this).after('<span class="edd-loading-ajax edd-loading"></span>');var a={action:"edd_process_checkout_login",edd_ajax:1,edd_user_login:e("#edd_login_fields #edd_user_login").val(),edd_user_pass:e("#edd_login_fields #edd_user_pass").val(),edd_login_nonce:e("#edd_login_nonce").val()};e.post(edd_global_vars.ajaxurl,a,(function(d){"success"===e.trim(d)?(e(".edd_errors").remove(),window.location=edd_scripts.checkout_page):(e("#edd_login_fields input[type=submit]").val(t),e(".edd-loading-ajax").remove(),e(".edd_errors").remove(),e("#edd-user-login-submit").before(d))}))})),e("select#edd-gateway, input.edd-gateway").change((function(d){var t=e("#edd-gateway option:selected, input.edd-gateway:checked").val();return"0"!==t&&(a(t),!1)})),"1"===edd_scripts.is_checkout){var t=!1,n=!1;e("select#edd-gateway, input.edd-gateway").length&&(t=e("meta[name='edd-chosen-gateway']").attr("content"),n=!0),t||(t=edd_scripts.default_gateway),n?setTimeout((function(){a(t)}),200):e("body").trigger("edd_gateway_loaded",[t])}function r(){var t,a=e(this),n="undefined"!=typeof edd_global_vars,r="card_state";"edd_address_country"===e(this).attr("id")&&(r="edd_address_state");var o=document.getElementById(r);if("card_state"!==a.attr("id")&&null!=o){var i=e(this).data("nonce"),c={action:"edd_get_shop_states",country:a.val(),field_name:r,nonce:i};e.ajax({type:"POST",data:c,url:edd_scripts.ajaxurl,xhrFields:{withCredentials:!0},success:function(d){t=n?e("#edd_purchase_form"):a.closest("form");var o='input[name="card_state"], select[name="card_state"], input[name="edd_address_state"], select[name="edd_address_state"]';if("nostates"===e.trim(d)){var i='<input type="text" id="'+r+'" name="card_state" class="card-state edd-input required" value=""/>';t.find(o).replaceWith(i)}else t.find(o).replaceWith(d);n&&e(document.body).trigger("edd_cart_billing_address_updated",[d])}}).fail((function(e){window.console&&window.console.log&&console.log(e)})).done((function(e){n&&Object(d.b)()}))}else n&&Object(d.b)();return!1}e(document).on("click","#edd_purchase_form #edd_purchase_submit [type=submit]",(function(d){var t=document.getElementById("edd_purchase_form");if("function"!=typeof t.checkValidity||!1!==t.checkValidity()){d.preventDefault();var a=e(this).val();e(this).val(edd_global_vars.purchase_loading),e(this).prop("disabled",!0),e(this).after('<span class="edd-loading-ajax edd-loading"></span>'),e.post(edd_global_vars.ajaxurl,e("#edd_purchase_form").serialize()+"&action=edd_process_checkout&edd_ajax=true",(function(d){"success"===e.trim(d)?(e(".edd_errors").remove(),e(".edd-error").hide(),e(t).submit()):(e("#edd-purchase-button").val(a),e(".edd-loading-ajax").remove(),e(".edd_errors").remove(),e(".edd-error").hide(),e(edd_global_vars.checkout_error_anchor).before(d),e("#edd-purchase-button").prop("disabled",!1),e(document.body).trigger("edd_checkout_error",[d]))}))}})),e(document.body).on("change","#edd_cc_address input.card_state, #edd_cc_address select, #edd_address_country",r),window.update_state_field=r,e(document.body).on("change","#edd_cc_address input[name=card_zip]",(function(){"undefined"!=typeof edd_global_vars&&Object(d.b)()}))})),window.edd_load_gateway=a}.call(this,t(0))}});
//# sourceMappingURL=edd-ajax.js.map