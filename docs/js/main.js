window.onload = function () {

  var ln = window.navigator.language || navigator.browserLanguage;
  
  var banner
  var banner_mobile
  var phone_text
  var phone_number = [];
  var phone_id = [];
  var title_max
  var title_min
  var items = [];
  var btn_book
  var btn_Hv
  var purley_title
  var purleyitems = [];
  var purleyIconsMax
  var purleyIconsMin;

  if (ln.indexOf("en") == 0) {
    banner = 'Banner';
    banner_mobile = 'Banner_Mobile';
    phone_text = 'CALL NOW AND BOOK';
    phone_number = ['1-800-986-5632','52-(998)193-0285','800-404-9882'];
    phone_id=['US','EU','UK'];
    title_max = ' All-inclusive luxury in';
    title_min = 'Mexico and Jamaica';
    items = ['Kids & Teens Stay Free', '250+ Preventive Health Measures', 'Free Airport Transfer', '* Terms & Conditions apply'];
    btn_book = 'BOOK NOW';
    btn_Hv = 'HOTEL + FLIGHT';
    purley_title = 'INCREDIBLE BENEFITS';
    purleyitems = ['Bottle of Wine on Arrival', 'Luxurious Accommodations', 'World Class Dining', 'Top Shelf Drinks', 'Delicious Aappetizers', '24 Hour Room Service', 'Free Wi-Fi'];
    purleyIconsMax = 'ENJOY A VACATION';
    purleyIconsMin = 'AS SAFE AS IT IS AMAZING';
  } else if (ln.indexOf("es") == 0) {    
    banner = 'Banner_Es';
    banner_mobile = 'Banner_Es_Mobile';
    phone_text = 'LLAMA AHORA Y RESERVA';
    phone_number = ['01-800-518-5301','800-262-9008'];
    phone_id=['LATAM', 'MX'];
    title_max = 'Lujo Todo Incluido en';
    title_min = 'México y Jamaica';
    items = ['Niños y adolescentes se hospedan gratis', 'Más de 250 medidas de bioseguridad', 'Transporte gratuito desde y hacia el aeropuerto', '*Aplican Términos y condiciones'];
    btn_book = 'RESERVE AHORA';
    btn_Hv = 'HOTEL + AVIÓN';
    purley_title = 'BENEFICIOS EXTRAORDINARIOS';
    purleyitems = ['Botella de vino de bienvenida', 'Habitaciones de lujo', 'Alta Gastronomía', 'Bebidas Premium', 'Aperitivos deliciosos', 'Servicio a la habitación 24 horas', 'Wi-Fi gratis de alta velocidad'];
    purleyIconsMax = 'DISFRUTE UNAS VACACIONES';
    purleyIconsMin = 'SEGURAS E INCREÍBLES';
  } else {
    banner = 'Banner';
    banner_mobile = 'Banner_Mobile';
    phone_text = 'CALL NOW AND BOOK';
    phone_number = ['1-800-986-5632','52-(998)193-0285','800-404-9882'];
    phone_id=['US','EU','UK'];
    title_max = ' All-inclusive luxury in';
    title_min = 'Mexico and Jamaica';
    items = ['Kids & Teens Stay Free', '250+ Preventive Health Measures', 'Free Airport Transfer', '* Terms & Conditions apply'];
    btn_book = 'BOOK NOW';
    btn_Hv = 'HOTEL + FLIGHT';
    purley_title = 'INCREDIBLE BENEFITS';
    purleyitems = ['Bottle of Wine on Arrival', 'Luxurious Accommodations', 'World Class Dining', 'Top Shelf Drinks', 'Delicious Aappetizers', '24 Hour Room Service', 'Free Wi-Fi'];
    purleyIconsMax = 'ENJOY A VACATION';
    purleyIconsMin = 'AS SAFE AS IT IS AMAZING';
  }
  jQuery('section.landing-buckup .banner picture img').attr("src","./assets/" +banner+".jpg");
  jQuery('section.landing-buckup .banner picture source').attr("srcset","./assets/" +banner_mobile+".jpg");

  jQuery('section.landing-buckup header .phone .color').text(phone_text);
  var enlace = phone_number[0];
    mostrar(enlace); 
    jQuery('section.landing-buckup header .phone .selector p').text(phone_id[0]);


  for (var index = 0; index < phone_number.length; index++) {
    jQuery('section.landing-buckup header .phone .selector .container').append('<p value="'+phone_number[index]+'">'+phone_id[index]+'</p>');       
  } 

    jQuery('section.landing-buckup header .phone .selector .container p').click(function() {
      jQuery('section.landing-buckup header .phone .selector .first').text(jQuery(this).text());
      mostrar(jQuery(this).attr('value'));
    });

  function mostrar(enlace) {
  jQuery('section.landing-buckup header .phone a').text(enlace);
  jQuery('section.landing-buckup header .phone a').attr("href","tel:+" + enlace);
  };
  
/*   var enlace='<a class="color" href="tel:+'+phone_number[index]+'" target="_blank" rel="noopener">'+phone_number[index]+'</a>';
 */  
  var intro = '<h1>' + title_max + '<span>' + title_min + '</span></h1>';
  jQuery('section.landing-buckup .promo_resorts .Introduction .title').append(intro);
  for (var i = 0; i < items.length; i++) {
    jQuery('section.landing-buckup .promo_resorts .Introduction .items ul').append('<li>' + items[i] + '</li>');
  }

  jQuery('section.landing-buckup .promo_resorts article .box_btns .book a').text(btn_book);
  jQuery('section.landing-buckup .promo_resorts article .box_btns .H_V a').text(btn_Hv);

  jQuery('section.landing-buckup .purley h2').text(purley_title);
  for (var j = 0; j < purleyitems.length; j++) {
    var child = j + 1
    var child2 = j + 4
    jQuery('section.landing-buckup .purley .contenedor .benefits .int_box_icons .four_box:nth-child(1) .item:nth-child(' + child + ') .box_item p').text(purleyitems[j]);
    jQuery('section.landing-buckup .purley .contenedor .benefits .int_box_icons .four_box:nth-child(2) .item:nth-child(' + child + ') .box_item p').text(purleyitems[child2]);
  }
  jQuery('section.landing-buckup .purley .purley_icons .text h1').text(purleyIconsMax);
  jQuery('section.landing-buckup .purley .purley_icons .text p').text(purleyIconsMin);


}
function open_content_select() {
  jQuery("section.landing-buckup header .phone .selector").attr("onclick", "close_content_select()")
  jQuery("section.landing-buckup header .phone .selector").addClass("activo")    
  jQuery('section.landing-buckup header .phone .selector .container').slideDown(500)
}

function close_content_select() {
  jQuery("section.landing-buckup header .phone .selector").attr("onclick", "open_content_select()")
  jQuery("section.landing-buckup header .phone .selector").removeClass("activo")
  jQuery('section.landing-buckup header .phone .selector .container').slideUp(500)
}

function open_menu_mobile() {
  jQuery("section.landing-buckup header .navbar-collapsed").slideDown(500);
  jQuery("section.landing-buckup header .navbar_menu_mobile_btn").attr("onclick", "close_menu_mobile()");
  jQuery("section.landing-buckup header .navbar_menu_mobile_btn").addClass("activo");
}

function close_menu_mobile() {
  jQuery("section.landing-buckup header .navbar-collapsed").fadeOut(500);
  jQuery("section.landing-buckup header .navbar_menu_mobile_btn").attr("onclick", "open_menu_mobile()");
  jQuery("section.landing-buckup header .navbar_menu_mobile_btn").removeClass("activo");
}
jQuery(window).scroll(function () {
  if (jQuery(document).scrollTop() >= 30) {
    $('header').addClass('transform');
  } else {
    $('header').removeClass('transform');
  }

});
