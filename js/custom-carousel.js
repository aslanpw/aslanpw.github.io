// instancia jquery e evita conflitos
//jQuery (function($) {

jQuery(function ($) {

  $('.owl-carousel').owlCarousel();
  $('.owl-carousel-cabecalho').owlCarouseltitulo();

  let titulos = $('h4') // tag

  let itens = $('.featured-item') // class

  let destaques = $('#featured') // id

  console.log(titulos.first());

  $('.featured-item a').addClass('btn btn-secondary stretch-link');

  //conteudo sensível
  $('#show').click(function () {
    $('#sensivel').toggleClass('hidden');
    $('#bt-esconde').toggleClass('hidden');
    $('#mensagem-alerta').toggleClass('hidden');
    $('#show').toggleClass('hidden');
  })

  $('#bt-esconde').click(function () {
    $('#sensivel').toggleClass('hidden');
    $('#show').toggleClass('hidden');
    $('#mensagem-alerta').toggleClass('hidden');
    $('#bt-esconde').toggleClass('hidden');
  })

  //dropdown menus laterais

  //Pelagens
  $('.init-hide').hide();

  $('#bt_dropdown_cor_marcacoes').click(function () {
    $('#drop_lateral_cor_marcacoes').slideToggle();
  });

  $('#bt_dropdown_cor_base').click(function () {
    $('#drop_lateral_cor_base').slideToggle();
  });

  $('#bt_dropdown_diluicoes').click(function () {
    $('#drop_lateral_diluicoes').slideToggle();
  });

  $('#bt_dropdown_padroes').click(function () {
    $('#drop_lateral_padroes').slideToggle();
  });
  $('#bt_dropdown_kit').click(function () {
    $('#drop_lateral_kit').slideToggle();
  });

  $('.hccc-collapsible').click(function () {
    $('.show-image-button').toggleClass('hidden');
  });

})