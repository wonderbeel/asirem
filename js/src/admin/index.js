import { extend, override } from 'flarum/extend';
import icon from 'flarum/common/helpers/icon';
import Dropdown from 'flarum/common/components/Dropdown';
import Button from 'flarum/common/components/Button';
import PermissionsPage from 'flarum/admin/components/PermissionsPage';
import PermissionGrid from 'flarum/admin/components/PermissionGrid';

app.initializers.add(
  'afrux-asirem',
  (app) => {
    extend(PermissionsPage.prototype, 'content', function (vnode) {
      vnode[0].children[1].attrs.className += ' Button--dashed';
    });

    override(PermissionGrid.prototype, 'view', function (original, vnode) {
      return [
        <div className="PermissionsPage-permissions-overflow">{original(vnode)}</div>,
      ];
    });

    extend(PermissionGrid.prototype, ['oncreate', 'onupdate'], function (vnode) {
      $('.PermissionGrid-child .Button--text').removeClass('Button--text');
    });
  },
  -999999
);
