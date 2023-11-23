const { main: Main, panelMenu: PanelMenu, popupMenu: PopupMenu } = imports.ui;
const { GLib, GObject, Gio, St } = imports.gi;

const Me = imports.misc.extensionUtils.getCurrentExtension();

const MUTE_MICROPHONE_CMD = 'amixer set Capture nocap';

let goDarkMenu;

const GoDark = GObject.registerClass(
  class GoDark extends PanelMenu.Button {
    _init() {
      super._init(0);

      const icon = new St.Icon({
        icon_name: 'security-low-symbolic',
        gicon: Gio.icon_new_for_string(`${Me.dir.get_path()}/icon.svg`),
        style_class: 'system-status-icon',
      });

      this.add_child(icon);

      let goDarkOption = new PopupMenu.PopupImageMenuItem(
        'Go Dark',
        'microphone-sensitivity-muted'
      );

      this.menu.addMenuItem(goDarkOption);

      goDarkOption.connect('activate', () => {
        GLib.spawn_command_line_sync(MUTE_MICROPHONE_CMD);
      });
    }
  }
);

function init() {}

function enable() {
  goDarkMenu = new GoDark();
  Main.panel.addToStatusArea('goDarkMenu', goDarkMenu, 1);
}

function disable() {
  goDarkMenu.destroy();
}
