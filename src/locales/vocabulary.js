// identifier should be in the form: foldername.messageid.

export default {
  loading: 'Loading',
  error: 'Error',
  close_panel: 'Close panel',
  webgl_error: `Oops. This map needs WebGL technology.<br /><br />
     If you have a compatible device, try using the latest version of your browser or simply enable WebGL:
     <ul><li>in <a href="https://otechworld.com/webgl-in-firefox/">Firefox, Librewolf</a>
     <li>in <a href="https://www.geeksforgeeks.org/how-to-enable-webgl-on-chrome/">Chrome, Chromium, Brave, Edge</a></ul>`,
  darkmode_auto: 'Dark mode: auto',
  darkmode_on: 'Dark mode: on',
  darkmode_off: 'Dark mode: off',

  'install.button': 'Install app',
  'install.tabs_aria_label': 'Choose your platform',
  'install.ios_intro': 'Open osmapp.org in the <strong>Safari browser</strong>',
  'install.ios_share': 'Tap <strong>Share icon</strong>',
  'install.ios_add': 'Tap <strong>Add to Home Screen</strong>',
  'install.android_intro': 'Open osmapp.org in the <strong>Chrome or Firefox browser</strong>',
  'install.android_share': 'Tap the <strong>three dots menu</strong>',
  'install.android_add': 'Tap <strong>Install app</strong>',
  'install.desktop_intro': 'Open osmapp.org in <strong>Chrome</strong>, <strong>FirefoxOS</strong> or <strong>Opera</strong>',
  'install.desktop_install': 'Click the <strong>install button</strong>',
  'install.outro': 'Thats all! Look for OsmAPP at your home screen.',
  'install.note': 'Note: This app uses PWA technology – featuring quick installation and no need for Google Play or App Store.',

  'homepage.subtitle': 'A universal OpenStreetMap app',
  'homepage.how_to_start': 'Start by typing your query into the searchbox.\nOr click any item on the map.',
  'homepage.examples.eg': 'eg.',
  'homepage.examples.charles_bridge_statues': 'Statues of Charles bridge',
  'homepage.screenshot_alt': 'Screenshot of OsmAPP',
  'homepage.about_osm': `All map data is from
      <a href="https://osm.org">OpenStreetMap</a>, a map created by
      milions of contributors — similar to Wikipedia. You can find
      <em>Edit</em> button on each map feature.`,
  'homepage.heading_about_osmapp': 'About OsmAPP',
  'homepage.about_osmapp': `This application should offer a convenient interface for everyday use of <i>OpenStreetMap</i>
     including editing options. <br/>Currently it includes various map layers, POI editing and a basic search engine.
     Features such as navigation or favorite places are planned.`,
  'homepage.github_link': `You may suggest new features on <a href="https://github.com/zbycz/osmapp" rel='noopener' target='_blank'>Github</a>.`,
  'homepage.special_thanks_heading': `Special thanks to`,
  'homepage.special_thanks': `<ul>
        <li><a href="https://www.mapillary.com/" rel='noopener' target='_blank'>Mapillary</a>,
              <a href="https://openstreetmap.cz/fody" rel='noopener' target='_blank'>Fody</a>,
              <a href="https://www.wikipedia.org/" rel='noopener' target='_blank'>Wikipedia</a> – for images 🖼
        <li><a href="https://www.openstreetmap.org/" rel='noopener' target='_blank'>OpenStreetMap</a> – for the best world map 🌎
      </ul>
  `,
  'homepage.maptiler': '<strong>MapTiler</strong> – for awesome vector maps <br>and for supporting this project  ❤️ ',

  'searchbox.placeholder': 'Search OpenStreetMap',

  'featurepanel.no_name': 'No name',
  'featurepanel.share_button': 'Share',
  'featurepanel.save_button': 'Save to favorites',
  'featurepanel.directions_button': 'Directions',
  'featurepanel.error': 'Error __code__ while fetching feature from OpenStreetMap',
  'featurepanel.error_unknown': 'Unknown error while fetching feature from OpenStreetMap.',
  'featurepanel.error_network': "Can't get the feature, check your network cable.",
  'featurepanel.error_deleted': 'This object is marked as deleted in OpenStreetMap.',
  'featurepanel.history_button': 'History »',
  'featurepanel.other_info_heading': 'Details',
  'featurepanel.edit_button_title': 'Edit in OpenStreetMap database',
  'featurepanel.note_button': 'Suggest an edit',
  'featurepanel.edit_button': 'Edit details',
  'featurepanel.add_place_button': 'Add a place',
  'featurepanel.undelete_button': 'Un-delete',
  'featurepanel.feature_description_nonosm': 'Map feature __type__',
  'featurepanel.feature_description_osm': '__type__ in OpenStreetMap database',
  'featurepanel.feature_description_point': 'Map coordinates',
  'featurepanel.show_objects_around': 'Show nearby objects',
  'featurepanel.uncertain_image': 'This is the closest street view image from Mapillary. It may be inaccurate.',
  'featurepanel.inline_edit_title': 'Edit',
  'featurepanel.objects_around': 'Nearby objects',

  'opening_hours.open': 'Open: __todayTime__',
  'opening_hours.now_closed_but_today': 'Closed now - Open __todayTime__',
  'opening_hours.today_closed': 'Closed today',
  'opening_hours.days_su_mo_tu_we_th_fr_sa': 'Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday',

  'map.github_title': 'GitHub',
  'map.language_title': 'Change language',
  'map.osm_copyright_tooltip': '(c) OpenStreetMap.org contributors<br> – free map data of the Earth 👌',
  'map.maptiler_copyright_tooltip': '(c) MapTiler.com ❤️ <br> – vector tiles, hosting, outdoor map<br>Big thanks for supporting this project! 🙂 ',
  'map.more_button': 'more',
  'map.more_button_title': 'More options…',
  'map.edit_link': 'Edit this area in iD editor',
  'map.about_link': 'About this app',

  'editdialog.add_heading': 'Add to OpenStreetMap',
  'editdialog.undelete_heading': 'Add again to OpenStreetMap',
  'editdialog.edit_heading': 'Edit:',
  'editdialog.suggest_heading': 'Suggest an edit:',
  'editdialog.feature_type_select': 'Choose type',
  'editdialog.options_heading': 'Options',
  'editdialog.cancel_button': 'Cancel',
  'editdialog.save_button_edit': 'Save to OSM',
  'editdialog.save_button_delete': 'Delete',
  'editdialog.save_button_note': 'Submit',
  'editdialog.changes_needed': 'Please, make some changes.',
  'editdialog.osm_session_expired': 'Your OpenStreetMap session has expired. Please, log in again.',
  'editdialog.loggedInMessage': 'You are logged in as <b>__osmUser__</b>, changes will be saved immediately.',
  'editdialog.logout': 'logout',
  'editdialog.anonymousMessage1': 'An <b>anonymous</b> note will be added to the map.<br />If you',
  'editdialog.anonymousMessage2_login': 'log in to OpenStreetMap',
  'editdialog.anonymousMessage3': ', your changes will be immediate.',
  'editdialog.add_major_tag': 'Add',
  'editdialog.location_checkbox': 'New location',
  'editdialog.location_placeholder': 'eg. across the street',
  'editdialog.location_editor_to_be_added': 'The position cannot be edited here yet, you can do so in the <a href="__link__">iD editor</a>.',
  'editdialog.place_cancelled': 'Permanently closed (delete)',
  'editdialog.comment': 'Comment (optional)',
  'editdialog.comment_placeholder': 'Note, link to source, etc.',
  'editdialog.info_edit': `Your edit will be immediately saved to the OpenStreetMap. Please,
         enter only information from your own or verified sources. It is prohibited
         to copy copyrighted data (e.g. Google Maps). <a href="https://wiki.openstreetmap.org/wiki/How_We_Map">More info</a>`,
  'editdialog.info_note':
    'Your suggestion will be reviewed by OpenStreetMap volunteers. You can add additional information such as a link to a photo or a link to source material for them below!',
  'editdialog.other_tags_heading': 'Other tags',
  'editdialog.other_tags': 'Edit Tags',
  'editdialog.other_tags.new_key': 'new key',
  'editdialog.other_tags.will_be_deleted': 'will be deleted',
  'editdialog.other_tags.info': `Tags contain the data used to display objects on the map!<br>You can find <a href="https://wiki.openstreetmap.org/wiki/Map_Features">a reference for all tags on the OpenStreetMap Wiki</a>!`,

  'editsuccess.close_button': 'Done',
  'editsuccess.note.heading': 'Thank you for your suggestion!',
  'editsuccess.note.subheading': 'OpenStreetMap volunteers will review it.',
  'editsuccess.note.body':
    'It usually takes a few days for a change to be reviewed. If there are no volunteers working on the area it could take a while!',
  'editsuccess.note.urlLabel': 'You can add information or follow updates here:',
  'editsuccess.note.textLabel': 'Note text',
  'editsuccess.edit.heading': 'Thank you for your edit!',
  'editsuccess.edit.subheading': 'Your change is starting to appear on maps around the world.',
  'editsuccess.edit.body': `Your change will appear in the OSM database immediately, it will be visible in the "OSM Mapnik" layer in a few minutes!
         OsmAPP map and other applications are refreshed about once a month.
          <br/><br/>If this is a mistake, you can manually revert the values and save it again.`,
  'editsuccess.edit.urlLabel': `Your changes:`,
  'editsuccess.edit.textLabel': 'Comment',

  'tags.name': 'Name',
  'tags.website': 'Website',
  'tags.phone': 'Phone',
  'tags.opening_hours': 'Hours',

  'layerswitcher.button': 'Layers',
  'layerswitcher.heading': 'Map layers',
  'layerswitcher.intro': 'Thanks to the fact that OpenStreetMap offers source data, anyone can produce different variants of the map.',
  'layerswitcher.add_layer_button': 'Add custom layer',
  'layerswitcher.add_layer_prompt': 'Add custom TMS layer – needs correct CORS:\n(beta feature)',

  'layers.basic': 'Basic',
  'layers.outdoor': 'Outdoor',
  'layers.mtb': 'MTB',
  'layers.snow': 'Snow',
  'layers.mapnik': 'OSM Mapnik',
  'layers.sat': 'Satellite (z<14)',
  'layers.bike': 'Bike',
};
