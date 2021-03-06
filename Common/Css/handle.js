// Generated by CoffeeScript 1.4.0
var detail_tmpl, icon_tmpl, map_img, mark, render, show, tag_img;

show = function() {};

tag_img = function(src) {
  return "<img src='" + src + "'/>";
};

map_img = function(list) {
  return $.map(list, tag_img).join();
};

detail_tmpl = function(obj) {
  show('obj', obj);
  return "<div class='intro'>\n  <img src='../../data/feel/" + (encodeURI(obj.name)) + "/life/1.jpg'/>\n  <div class='about'>\n    <span class='name'>" + obj.nickname + "</span><br>\n    <span class='starsign'>" + obj.starsign + "</span><br>\n    <span class='hobby'>" + obj.hobby + "</span><br>\n  </div>\n</div>\n<!--<div class='photos'>\n  <img src='../../data/feel/" + (encodeURI(obj.name)) + "/life/1.jpg'/>\n  <img src='../../data/feel/" + (encodeURI(obj.name)) + "/life/2.jpg'/>\n  <img src='../../data/feel/" + (encodeURI(obj.name)) + "/life/3.jpg'/>\n  <img src='../../data/feel/" + (encodeURI(obj.name)) + "/life/4.jpg'/>\n</div>-->\n<div class='more'>\n  " + obj.intro + "\n</div>";
};

icon_tmpl = function(json) {
  return "<div class='dj' id='" + json.name + "'>\n  <img src='../../data/feel/" + json.name + "/face.jpg'/>\n  <span>" + json.nickname + "</span>\n</div>";
};

mark = void 0;

render = function(json) {
  var img_src;
  img_src = "../../data/feel/" + json.name + "/life/1.jpg";
  $('#border img').attr('src', encodeURI(img_src));
  $('#name').text(json.nickname);
  $('#starsign').text(json.starsign);
  $('#hobby').text(json.hobby);
  return $('#more').text(json.intro);
};

$(function() {
  show('get');
  return $.getJSON('../../data/dj-list.json', function(list) {
    var hash;
    $.each(list, function(i) {
      var json;
      json = list[i];
      show('json', json);
      $('#wall').append(icon_tmpl(json));
      return $('#wall div:last').click(function() {
        var res;
        $('.curr').removeClass('curr');
        $(this).addClass('curr');
        if (mark !== ('#' + json.name)) {
          mark = '#' + json.name;
          show('mark', mark);
          render(json);
          show('ok', location.hash, json.name);
          return res = 'http://' + location.host + location.pathname + '#' + json.name;
        }
      });
    });
    hash = location.hash;
    show('hash->', hash);
    if ($.trim(hash).length === 0) {
      $('#wall div:nth-child(1)').click();
    } else {
      show(hash);
      $(hash).click();
    }
    return $(".nano").nanoScroller();
  });
});
