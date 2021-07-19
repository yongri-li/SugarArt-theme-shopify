$(document).on('click', '[data-cart-upsell-btn]', function(e){
  e.preventDefault();
  let formData = {
    'items': [{
     'id': $(this).data('variant-id'),
     'quantity': 1
     }]
   };
   
   fetch('/cart/add.js', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(formData)
   })
   .then(response => {
     console.log("success");
     $('[data-js-class="Cart"]').trigger('updateHtml');
   })
   .catch((error) => {
   });
});

$(document).on('inview', '.product-page--cart-form', function (event, isInView) {
  console.log('1');
  if($(window).width() > 768) {
    return;
  }

  console.log('2');

  if($('.quanity-cart-row').is(":hidden")) {
    return;
  }

  console.log('3');

  if (isInView) {
    $('.product-sticky-form').hide();
    console.log('sticky header hide');
  } else {
    $('.product-sticky-form').show();
    console.log('sticky header show');
  }
});

$(document).on('click', '[data-sticky-qty-plus]', function(e){
  e.preventDefault();
  const $qtyInput = $('input[name="quantity"]');
  const qty = $qtyInput.val();
  $qtyInput.val(parseInt(qty) + 1);
  $qtyInput.trigger('change');
});

$(document).on('click', '[data-sticky-qty-minus]', function(e){
  e.preventDefault();
  const $qtyInput = $('input[name="quantity"]');
  const qty = $qtyInput.val();
  if(qty == 1) {
    return;
  }
  $qtyInput.val(parseInt(qty) - 1);
  $qtyInput.trigger('change');
});

$(document).on('change', '[data-sticky-qty-input]', function(e){
  e.preventDefault();
  const $qtyInput = $('input[name="quantity"]');
  const qty = $(this).val();
  $qtyInput.val(parseInt(qty));
  $qtyInput.trigger('change');
});

$(document).on('click', '[data-sticky-atc]', function(e){
  e.preventDefault();
  $('.add[type="submit"]').trigger('click');
});


