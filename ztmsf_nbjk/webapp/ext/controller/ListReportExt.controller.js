sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onSqidPress: function(oEvent) {
            var oClickedRowData = oEvent.getSource().getBindingContext().getObject();
            let url = window.location.origin + "/home/index.html?saml2=disabled#ZTMSF_LXJT_NB-manage&//ZTMS_C_LXJT(db_key=guid'" + oClickedRowData.parent_key + "',IsActiveEntity=true)";
            window.open(url);
        },
        onHtdjPress: function(oEvent) {
            var oClickedRowData = oEvent.getSource().getBindingContext().getObject();
            let url = window.location.origin + "/home/index.html?saml2=disabled#ZTMSF_NBJK_HTDJ-manage&//ZTMS_C_JHTDJ(db_key=guid'" + oClickedRowData.ht_key + "',IsActiveEntity=true)";
            window.open(url);
        }
    };
});