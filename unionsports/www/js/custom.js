document.addEventListener("deviceready", onDeviceReady, false);

var pushNotification;

    // PhoneGap is loaded and it is now safe to make calls PhoneGap methods
    //
    function onDeviceReady() {
      /*jQuery(document).ready(function($) {*/

        //console.log('document ready');

       /* PUsh Notification code here */

       try
        {
          pushNotification = window.plugins.pushNotification;

          //alert(device.platform);

         if (device.platform == 'android' || device.platform == 'Android' || device.platform == 'amazon-fireos' ) {
                  pushNotification.register(successHandler, errorHandler, {"senderID":"447946943373","ecb":"onNotification"});    // required!
          } else {
                      pushNotification.register(tokenHandler, errorHandler, {"badge":"true","sound":"true","alert":"true","ecb":"onNotificationAPN"});  // required!
                  }
        }
        catch(err)
        {
          txt="There was an error on this page.\n\n";
          txt+="Error description: " + err.message + "\n\n";
          alert(txt);
        }












        var loader = '<img src="images/ajax-loader.gif" class="loader" width="50" height="50">';
        $('.loader').remove(); // remove before adding
        $('#main-tabs').append(loader);

          jQuery.ajax({

                          url: 'http://www.unionsportsmag.co.za/api/?q=latest&callback=?', // The callback=? part is very importatnt to use in you get URL
                          crossDomain:true,
                          timeout:120000,
                          type: 'GET',
                          dataType: 'jsonp',
                          jsonp: 'jsonp',
                          complete: function(xhr, textStatus) {
                            //called when complete
                          },
                          success: function(data, textStatus, xhr) {
                            //first clear the current data
                            $('#main-tabs').empty();
                            $('.pages').remove();

                            $.each(data, function(i,item){
                                //alert(item.title);
                                 //console.log(item);
                                if(item.category == "In Motion") {
                                  var catstyle = '<div class="category red">'+ item.category +'</div>';
                                }else if(item.category == "Guest Column") {
                                  var catstyle = '<div class="category blue guest">'+ item.category +'</div>';
                                }else if(item.category == "The 3rd Degree") {
                                  var catstyle = '<div class="category blue degree">'+ item.category +'</div>';
                                }else {
                                  var catstyle = '<div class="category blue guest">'+ item.category +'</div>';
                                }

                                var news =  '<li><div class="image-cat-container"><a href="#page'+ i +'"><img src="'+ item.thumnail +'" class="image-index" ><div class="link-container"> '+ catstyle +'</div></a></div><div class="arrow-go-jump"><a href="#page'+ i +'"><img src="images/jump-to-page-arrow.png" class="arrow-jump"></a></div><div class="title-container"><a href="#page'+ i +'">'+ item.title +'</a></div><p class="date">'+ item.date +'</p><div class="excerpt">'+ item.excerpt +'</div></li>';
                                //alert(news);
                              var content = '<div data-role="page" id="page'+ i +'" class="pages"><div data-role="header"><h1>'+ item.title +'</h1></div><div data-role="content" class="single-content"><h1 class="single-heading">'+ item.title +'</h1>'+ item.content +'</div><div data-role="footer"><img src="images/small-logo.png" class="footer-logo" style="width:50px; float:left;position: relative;left: 20px;top: 4px;"><h3>Union Sports Magazine</h3></div></div>';
                            $('#main-tabs').append(news);
                            $('#page').after(content);

                            });
                            /*$('.subcontent').html('news loaded');*/
                          },
                          error: function(xhr, textStatus, errorThrown) {
                            alert(errorThrown);
                          }
                });

  $('.headlines').on('tap', function(e){

    e.preventDefault();



  if (!$('.headli').hasClass('current')) {

    $('.homeli').removeClass('current');
    $('.degreeli').removeClass('current');
    $('.headli').addClass('current');
    $('.headli').css({height:58});

  }

    //first clear the current data
    $('#main-tabs').empty();
    $('.pages').remove();

        var loader = '<img src="images/ajax-loader.gif" class="loader" width="50" height="50">';
        $('#main-tabs').append(loader);



    jQuery.ajax({

                          url: 'http://www.unionsportsmag.co.za/api/?q=headline&callback=?', // The callback=? part is very importatnt to use in you get URL
                          crossDomain:true,
                          timeout:120000,
                          type: 'GET',
                          dataType: 'jsonp',
                          jsonp: 'jsonp',
                          complete: function(xhr, textStatus) {
                            //called when complete
                          },
                          success: function(data, textStatus, xhr) {

                            //first clear the current data
                            $('#main-tabs').empty();
                            $('.pages').remove();

                            $.each(data, function(i,item){
                                //alert(item.title);

                                if(item.category == "In Motion") {
                                  var catstyle = '<div class="category red">'+ item.category +'</div>';
                                }else if(item.category == "Guest Column") {
                                  var catstyle = '<div class="category blue guest">'+ item.category +'</div>';
                                }else if(item.category == "The 3rd Degree") {
                                  var catstyle = '<div class="category blue degree">'+ item.category +'</div>';
                                }else {
                                  var catstyle = '<div class="category blue guest">'+ item.category +'</div>';
                                }

                                 var news =  '<li><div class="image-cat-container"><a href="#page'+ i +'"><img src="'+ item.thumnail +'" class="image-index" ><div class="link-container"> '+ catstyle +'</div></a></div><div class="arrow-go-jump"><a href="#page'+ i +'"><img src="images/jump-to-page-arrow.png" class="arrow-jump"></a></div><div class="title-container"><a href="#page'+ i +'">'+ item.title +'</a></div><p class="date">'+ item.date +'</p><div class="excerpt">'+ item.excerpt +'</div></li>';
                                //alert(news);
                              var content = '<div data-role="page" id="page'+ i +'" class="pages"><div data-role="header"><h1>'+ item.title +'</h1></div><div data-role="content" class="single-content"><h1 class="single-heading">'+ item.title +'</h1>'+ item.content +'</div><div data-role="footer"><img src="images/small-logo.png" class="footer-logo" style="width:50px; float:left;position: relative;left: 20px;top: 4px;"><h3>Union Sports Magazine</h3></div></div>';
                            $('#main-tabs').append(news);
                            $('#page').after(content);

                            });
                            /*$('.subcontent').html('news loaded');*/
                          },
                          error: function(xhr, textStatus, errorThrown) {
                            alert(errorThrown);
                          }
                });

  });

/* 3rd Degree*/
$('.3rddgree').on('tap', function(e){

    e.preventDefault();

    if (!$('.degreeli').hasClass('current')) {

    $('.homeli').removeClass('current');
    $('.headli').removeClass('current');
    $('.degreeli').addClass('current');
    $('.degreeli').css({height:58});


  }

    //first clear the current data
    $('#main-tabs').empty();
    $('.pages').remove();

        var loader = '<img src="images/ajax-loader.gif" class="loader" width="50" height="50">';
        $('#main-tabs').append(loader);

    jQuery.ajax({

                          url: 'http://www.unionsportsmag.co.za/api/?q=degree&callback=?', // The callback=? part is very importatnt to use in you get URL
                          crossDomain:true,
                          timeout:120000,
                          type: 'GET',
                          dataType: 'jsonp',
                          jsonp: 'jsonp',
                          complete: function(xhr, textStatus) {
                            //called when complete
                          },
                          success: function(data, textStatus, xhr) {
                            //first clear the current data
                            $('#main-tabs').empty();
                            $('.pages').remove();

                            $.each(data, function(i,item){
                                //alert(item.title);

                                if(item.category == "In Motion") {
                                  var catstyle = '<div class="category red">'+ item.category +'</div>';
                                }else if(item.category == "Guest Column") {
                                  var catstyle = '<div class="category blue guest">'+ item.category +'</div>';
                                }else if(item.category == "The 3rd Degree") {
                                  var catstyle = '<div class="category blue degree">'+ item.category +'</div>';
                                }else {
                                  var catstyle = '<div class="category blue guest">'+ item.category +'</div>';
                                }

                                 var news =  '<li><div class="image-cat-container"><a href="#page'+ i +'"><img src="'+ item.thumnail +'" class="image-index" ><div class="link-container"> '+ catstyle +'</div></a></div><div class="arrow-go-jump"><a href="#page'+ i +'"><img src="images/jump-to-page-arrow.png" class="arrow-jump"></a></div><div class="title-container"><a href="#page'+ i +'">'+ item.title +'</a></div><p class="date">'+ item.date +'</p><div class="excerpt">'+ item.excerpt +'</div></li>';
                                //alert(news);
                              var content = '<div data-role="page" id="page'+ i +'" class="pages"><div data-role="header"><h1>'+ item.title +'</h1></div><div data-role="content" class="single-content"><h1 class="single-heading">'+ item.title +'</h1>'+ item.content +'</div><div data-role="footer"><img src="images/small-logo.png" class="footer-logo" style="width:50px; float:left;position: relative;left: 20px;top: 4px;"><h3>Union Sports Magazine</h3></div></div>';
                            $('#main-tabs').append(news);
                            $('#page').after(content);

                            });
                            /*$('.subcontent').html('news loaded');*/
                          },
                          error: function(xhr, textStatus, errorThrown) {
                            alert(errorThrown);
                          }
                });

  });


        $('.latest').on('tap', function(e){

            e.preventDefault();

          if (!$('.homeli').hasClass('current')) {


            $('.headli').removeClass('current');
            $('.degreeli').removeClass('current');
            $('.homeli').addClass('current');

          }

            //first clear the current data
            $('#main-tabs').empty();
            $('.pages').remove();

            var loader = '<img src="images/ajax-loader.gif" class="loader" width="50" height="50">';
            $('#main-tabs').append(loader);

        jQuery.ajax({

                          url: 'http://www.unionsportsmag.co.za/api/?q=latest&callback=?', // The callback=? part is very importatnt to use in you get URL
                          crossDomain:true,
                          timeout:120000,
                          type: 'GET',
                          dataType: 'jsonp',
                          jsonp: 'jsonp',
                          complete: function(xhr, textStatus) {
                            //called when complete
                          },
                          success: function(data, textStatus, xhr) {
                            //first clear the current data
                            $('#main-tabs').empty();
                            $('.pages').remove();

                            $.each(data, function(i,item){
                                //alert(item.title);
                                 //console.log(item);
                                if(item.category == "In Motion") {
                                  var catstyle = '<div class="category red">'+ item.category +'</div>';
                                }else if(item.category == "Guest Column") {
                                  var catstyle = '<div class="category blue guest">'+ item.category +'</div>';
                                }else if(item.category == "The 3rd Degree") {
                                  var catstyle = '<div class="category blue degree">'+ item.category +'</div>';
                                }else {
                                  var catstyle = '<div class="category blue guest">'+ item.category +'</div>';
                                }

                                 var news =  '<li><div class="image-cat-container"><a href="#page'+ i +'"><img src="'+ item.thumnail +'" class="image-index" ><div class="link-container"> '+ catstyle +'</div></a></div><div class="arrow-go-jump"><a href="#page'+ i +'"><img src="images/jump-to-page-arrow.png" class="arrow-jump"></a></div><div class="title-container"><a href="#page'+ i +'">'+ item.title +'</a></div><p class="date">'+ item.date +'</p><div class="excerpt">'+ item.excerpt +'</div></li>';
                                //alert(news);
                              var content = '<div data-role="page" id="page'+ i +'" class="pages"><div data-role="header"><h1>'+ item.title +'</h1></div><div data-role="content" class="single-content"><h1 class="single-heading">'+ item.title +'</h1>'+ item.content +'</div><div data-role="footer"><img src="images/small-logo.png" class="footer-logo" style="width:50px; float:left;position: relative;left: 20px;top: 4px;"><h3>Union Sports Magazine</h3></div></div>';
                            $('#main-tabs').append(news);
                            $('#page').after(content);

                            });
                            /*$('.subcontent').html('news loaded');*/
                          },
                          error: function(xhr, textStatus, errorThrown) {
                            alert(errorThrown);
                          }
                });
        });


   };

   /* MOre Push plugin stuff */
   // handle GCM notifications for Android
   function onNotification(e) {
                //alert('RECEIVED:' + e.event);

                switch( e.event )
                {
                    case 'registered':
                          if ( e.regid.length > 0 )
                          {
                            //alert('REGISTERED -> REGID:' + e.regid );
                            // Your GCM push server needs to know the regID before it can push to this device
                            // here is where you might want to send it the regID for later use.
                            //alert("regID = " + e.regid);

                            /*
                              This sends the regId to the server to save in DB for later push notifications
                            */
                                jQuery.ajax({
                                          url: 'http://www.unionsportsmag.co.za/api/?regid='+ e.regid +'&callback=?',
                                          crossDomain:true,
                                          timeout:120000,
                                          type: 'GET',
                                          dataType: 'jsonp',
                                          jsonp: 'jsonp',
                                          complete: function(xhr, textStatus) {
                                            //called when complete
                                          },
                                          success: function(data, textStatus, xhr) {

                                          },
                                          error: function(xhr, textStatus, errorThrown) {
                                            console.log(errorThrown);
                                          }
                                });
                          } // end of
                    break;

                    case 'message':
                      // if this flag is set, this notification happened while we were in the foreground.
                      // you might want to play a sound to get the user's attention, throw up a dialog, etc.
                      if (e.foreground)
                      {
                        //alert('--INLINE NOTIFICATION--');

                          // on Android soundname is outside the payload.
                          // On Amazon FireOS all custom attributes are contained within payload
                          var soundfile = e.soundname || e.payload.sound;
                          // if the notification contains a soundname, play it.
                          // playing a sound also requires the org.apache.cordova.media plugin
                          var my_media = new Media("/android_asset/www/"+ soundfile);

                        my_media.play();
                      }
                      else
                      { // otherwise we were launched because the user touched a notification in the notification tray.
                        if (e.coldstart){
                          //alert('<li>--COLDSTART NOTIFICATION--' + '</li>');
                        }
                        else{
                        //alert('<li>--BACKGROUND NOTIFICATION--' + '</li>');
                        }
                      }

                        //alert('<li>MESSAGE -> MSG: ' + e.payload.message + '</li>');
                        //android only
                        //alert('<li>MESSAGE -> MSGCNT: ' + e.payload.msgcnt + '</li>');
                        //amazon-fireos only
                        //alert('<li>MESSAGE -> TIMESTAMP: ' + e.payload.timeStamp + '</li>');
                    break;

                    case 'error':
                          //alert('<li>ERROR -> MSG:' + e.msg + '</li>');
                    break;

                    default:
                          //alert('<li>EVENT -> Unknown, an event was received and we do not know what it is</li>');
                    break;
                }
            }


            function tokenHandler (result) {
                //alert('<li>token: '+ result +'</li>');
                // Your iOS push server needs to know the token before it can push to this device
                // here is where you might want to send it the token for later use.
            }

            function successHandler (result) {
                //alert('<li>success:'+ result +'</li>');
            }

            function errorHandler (error) {
               //alert('<li>error:'+ error +'</li>');
            }

      document.addEventListener('deviceready', onDeviceReady, true);

/*});*/