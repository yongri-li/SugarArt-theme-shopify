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