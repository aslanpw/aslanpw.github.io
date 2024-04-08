// instancia jquery e evita conflitos
//jQuery (function($) {

jQuery(function($){

    $('.owl-carousel').owlCarousel();

    let titulos  = $('h4') // tag

    let itens = $('.featured-item') // class

    let destaques = $('#featured') // id

    console.log(titulos.first());

    $('.featured-item a').addClass('btn btn-secondary stretch-link');

    //dropdown menus laterais

    //Pelagens
    $('.init-hide').hide();

    $('#bt_dropdown_cor_base').click(function() {
        $('#drop_lateral_cor_base').slideToggle();
      });
    
    $('#bt_dropdown_diluicoes').click(function() {
      $('#drop_lateral_diluicoes').slideToggle();
    });

    $('.hccc-collapsible').click(function() {
      $('.show-image-button').toggleClass('hidden');
    });

})