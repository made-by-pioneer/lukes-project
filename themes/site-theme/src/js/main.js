import styles from './../css/main.css';
import $ from 'jquery';
import AOS from 'aos';
import './scriptTools/bootstrapDropdown.js';

AOS.init({
    disable: 'mobile',
    once: true
});

$(function() {
  $(".mobile-menu-button").click(function() {
    $('.mobile-menu').addClass("mobile-menu-toggle");
  });
});

$(function() {
  $(".mobile-menu-button").click(function() {
    $('body').addClass("overflow-hidden");
  });
});

$(function() {
  $(".close-menu").click(function() {
    $('.mobile-menu').removeClass("mobile-menu-toggle");
    $('body').removeClass("overflow-hidden");
  });
});

$(function() {
  $(".mobile-menu-item").click(function() {
    $('.mobile-menu').removeClass("mobile-menu-toggle");
    $('body').removeClass("overflow-hidden");
  });
});

$(function() {
  $(".read-more").click(function() {
    $('.readMore-content-expanded').addClass("read-more-toggle");
  });
});

$(function() {
  $(".read-more").click(function() {
    $('.read-more').addClass("hide-read-more");
  });
});

$(function() {
  $(".close-read-more-link").click(function() {
    $('.readMore-content-expanded').removeClass("read-more-toggle");
  });
});

$(function() {
  $(".close-read-more-link").click(function() {
    $('.read-more').removeClass("hide-read-more");
  });
});