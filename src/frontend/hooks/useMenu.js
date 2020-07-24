import { useEffect } from 'react';

function useMenu() {

  useEffect(() => {
    const e = jQuery;
    e.fn.menumaker = function (n) {

      const s = e(this);

      const t = e.extend({ title: 'Menu',
        format: 'dropdown',
        breakpoint: 768,
        sticky: !1 }, n);

      const multiTg = function () {
        s.find('.has-sub').prepend('<span class="submenu-button"></span>');
        s.find('.submenu-button').on('click', function () {
          e(this).toggleClass('submenu-opened');
          e(this).siblings('ul').hasClass('open') ? e(this).siblings('ul').removeClass('open').hide() : e(this).siblings('ul').addClass('open').show();
        });
      };

      const resizeFix = function () {
        e(window).width() > t.breakpoint && (s.find('ul').show(), s.removeClass('small-screen'), t.format === 'select' && s.find('select').hide()), e(window).width() <= t.breakpoint && (s.find('ul').hide().removeClass('open'), s.addClass('small-screen'), t.format === 'select' && s.find('select').show());
      };

      return this.each(function () {
        if (s.find('li ul').parent().addClass('has-sub'), t.format !== 'select')s.prepend(`<div id="menu-button">${t.title}</div>`), e(this).find('#menu-button').on('click', function () { console.log('paso');e(this).toggleClass('menu-opened');const n = e(this).next('ul');n.hasClass('open') ? n.hide().removeClass('open') : (n.show().addClass('open'), t.format === 'dropdown' && n.find('ul').show()); }), t.format === 'multitoggle' ? multiTg() : s.addClass('dropdown');else if (t.format === 'select') {
          s.append('<select style="width: 100%"/>').addClass('select-list');const n = s.find('select');n.append(`<option>${t.title}</option>`, { selected: 'selected', value: '' }), s.find('a').each(function () {
            console.log(e(this).parents('ul').length);let s = e(this),
              t = '';for (i = 1;i < s.parents('ul').length;i++)t += '-';n.append(`<option value="${e(this).attr('href')}">${t}${s.text()}</option`);
          }), n.on('change', function () { window.location = e(this).find('option:selected').val(); });
        } return t.sticky === !0 && s.css('position', 'fixed'), resizeFix(), e(window).on('resize', resizeFix);
      });
    };
  });

  useEffect(() => {
    $(document).ready(() => {
      $('#cssmenu').menumaker({
        title: 'Menu',
        breakpoint: 768,
        format: 'multitoggle',
      });

      $('#cssmenu').prepend("<div id='menu-line'></div>");

      let foundActive = false,
        activeElement,
        linePosition = 0,
        lineWidth;

      const menuLine = $('#cssmenu #menu-line');

      $('#cssmenu > ul > li').each(function () {
        if ($(this).hasClass('active')) {
          activeElement = $(this);
          foundActive = true;
        }
      });

      if (foundActive === false) {
        activeElement = $('#cssmenu > ul > li').first();
      }

      lineWidth = activeElement.width();
      const defaultWidth = lineWidth;

      linePosition = activeElement.position().left;
      const defaultPosition = linePosition;

      menuLine.css('width', lineWidth);
      menuLine.css('left', linePosition);

      $('#cssmenu > ul > li').hover(function () {
        activeElement = $(this);
        lineWidth = activeElement.width();
        linePosition = activeElement.position().left;
        menuLine.css('width', lineWidth);
        menuLine.css('left', linePosition);
      }, () => {
        menuLine.css('left', defaultPosition);
        menuLine.css('width', defaultWidth);
      });
    });
  }, []);

}

export default useMenu;
