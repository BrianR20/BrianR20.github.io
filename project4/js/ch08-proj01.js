
const tax_rate = prompt('Enter tax rate (0.10)');
const shipping_threshold = prompt('Enter shipping threshold (1000)');

/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

   for(c of cart){
      outputCartRow(c)
   }

   function outputCartRow(item){
      document.write('<tr>');
      document.write('<td>' + '<img src = "images/' + item.product.filename + '"' + '</td>')
      document.write('<td>' + item.product.title + '</td>');
      document.write('<td>' + item.quantity + '</td>');
      document.write('<td>$' + item.product.price.toFixed(2) + '</td>');
      document.write('<td>$' + calculateTotal(item.quantity,item.product.price).toFixed(2) + '</td>');
      document.write('</tr>');
   }

