(function() {

  (function($, window, document, undefined_) {
    var Plugin, defaults, pluginName;
    pluginName = "hamburgerMenu";
    defaults = {
      speed: 'fast',
      easing: 'swing',
      type: 'slide'
    };
    Plugin = function(element, options) {
      this.container = $(element);
      this.options = $.extend({}, defaults, options);
      this.menu = $(element).children();
      return this.init();
    };
    Plugin.prototype = {
      init: function() {
        return this.bindClick();
      },
      bindClick: function() {
        var $dropDownMenu, $hamburger,
          _this = this;
        $hamburger = _this.container;
        $dropDownMenu = _this.menu;
        $hamburger.on('click', function(){
           event.stopPropagation();
          _this.showMenu($dropDownMenu);
        });
      },
      showMenu: function($dropDownMenu) {
        var dropdown_speed, easing_type, dropdownType,
          _this = this;
        $dropDownMenu = _this.menu; 
        dropdownSpeed = _this.options.speed;
        dropdownType = _this.options.type.toLowerCase();
        easing_type = _this.options.easing;
        if(dropdownType === 'fade'){
          $dropDownMenu.fadeToggle(dropdownSpeed, easing_type, function(){
            _this.fade($dropDownMenu, dropdownSpeed, easing_type);
          });
        } else {
          $dropDownMenu.slideToggle(dropdownSpeed, easing_type, function(){
            _this.slide($dropDownMenu, dropdownSpeed, easing_type);
          });
        }
      },
      slide: function($dropDownMenu, dropdownSpeed, easing_type) {
        $('html').on('click', function(){
          event.stopPropagation();
          $dropDownMenu.slideUp(dropdownSpeed, easing_type);
        });
      },
      fade: function($dropDownMenu, dropdownSpeed, easing_type) {
        $('html').on('click', function(){
          event.stopPropagation();
          $dropDownMenu.fadeOut(dropdownSpeed, easing_type);
        });
      }
    };
    return $.fn[pluginName] = function(options) {
      return this.each(function() {
        if (!$.data(this, "plugin_" + pluginName)) {
          return $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    };
  })(jQuery, window, document);

}).call(this);
